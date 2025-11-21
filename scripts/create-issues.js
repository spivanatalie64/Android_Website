const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const roadmapPath = path.join(__dirname, '../MVP-ROADMAP.md');

function getMilestones() {
  try {
    const output = execSync('gh api repos/:owner/:repo/milestones --paginate', { encoding: 'utf8' });
    return JSON.parse(output);
  } catch (e) {
    console.error('Failed to fetch milestones:', e);
    return [];
  }
}

function determineLabels(text) {
  const labels = ['agent:claude', 'status:ready', 'difficulty:medium'];
  const lower = text.toLowerCase();

  if (lower.includes('test')) labels.push('scope:tests');
  else if (lower.includes('deploy') || lower.includes('ci') || lower.includes('cd') || lower.includes('action')) labels.push('scope:infra');
  else if (lower.includes('api') || lower.includes('endpoint')) labels.push('scope:api');
  else if (lower.includes('database') || lower.includes('model') || lower.includes('schema')) labels.push('scope:data');
  else if (lower.includes('doc') || lower.includes('guide') || lower.includes('readme')) labels.push('scope:docs');
  else labels.push('scope:frontend'); // Default to frontend for this project

  return labels;
}

async function main() {
  const milestones = getMilestones();
  if (milestones.length === 0) {
    console.log('No milestones found. Exiting.');
    return;
  }

  const milestoneMap = {};
  milestones.forEach(m => {
    milestoneMap[m.title] = m.number;
  });

  const content = fs.readFileSync(roadmapPath, 'utf8');
  
  // Regex to find milestones sections
  const milestoneRegex = /#{2,3} (Milestone \d+: .+?)\r?\n([\s\S]+?)(?=\n---|(?:\n#{2,3} )|$)/g;
  
  let match;
  while ((match = milestoneRegex.exec(content)) !== null) {
    const milestoneTitle = match[1].trim();
    const body = match[2].trim();
    
    const milestoneNumber = milestoneMap[milestoneTitle];
    if (!milestoneNumber) {
      console.log(`Milestone "${milestoneTitle}" not found in GitHub. Skipping.`);
      continue;
    }

    console.log(`Processing Milestone: ${milestoneTitle} (#${milestoneNumber})`);

    // Find deliverables
    // Deliverables are lines starting with - [ ] 
    const deliverableRegex = /^- \[ \] (.+)/gm;
    let deliverableMatch;
    
    while ((deliverableMatch = deliverableRegex.exec(body)) !== null) {
      const issueTitle = deliverableMatch[1].trim();
      const labels = determineLabels(issueTitle);
      
      console.log(`  Creating issue: "${issueTitle}"`);
      console.log(`    Labels: ${labels.join(', ')}`);

      try {
        // Check if issue exists (simple check, might be slow for many issues but safer)
        // optimization: skip check for now, or maybe just fire and forget?
        // Let's just create it. Duplicates are possible if run multiple times.
        // To avoid duplicates, we could search first.
        
        // Construct command
        const labelFlags = labels.map(l => `--label "${l}"`).join(' ');
        const cmd = `gh issue create --title "${issueTitle}" --body "Derived from ${milestoneTitle} in MVP-ROADMAP.md" --milestone "${milestoneTitle}" ${labelFlags}`;
        
        execSync(cmd, { stdio: 'inherit' });
        
        // Rate limit protection?
        // execSync('sleep 1'); // windows doesn't have sleep, use node
        await new Promise(r => setTimeout(r, 1000));

      } catch (e) {
        console.error(`    Failed to create issue "${issueTitle}"`);
      }
    }
  }
}

main();
