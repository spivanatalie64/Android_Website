const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const roadmapPath = path.join(__dirname, '../MVP-ROADMAP.md');

try {
  // Get repo info
  console.log('Fetching repository info...');
  const repoInfoJson = execSync('gh repo view --json owner,name', { encoding: 'utf8' });
  const repoInfo = JSON.parse(repoInfoJson);
  const owner = repoInfo.owner.login;
  const repo = repoInfo.name;

  console.log(`Target Repo: ${owner}/${repo}`);

  const content = fs.readFileSync(roadmapPath, 'utf8');
  
  // Matches: ## or ### Milestone <number>: <Title>
  const milestoneRegex = /#{2,3} (Milestone \d+: .+?)\r?\n([\s\S]+?)(?=\n---|(?:\n#{2,3} )|$)/g;
  
  let match;
  while ((match = milestoneRegex.exec(content)) !== null) {
    const title = match[1].trim();
    const body = match[2].trim();
    
    const goalMatch = body.match(/\*\*Goal\*\*: (.+)/);
    const goal = goalMatch ? goalMatch[1].trim() : '';
    
    const description = `${goal}\n\nSee MVP-ROADMAP.md for full details.`;
    
    console.log(`Creating milestone: "${title}"`);
    
    try {
      const payload = JSON.stringify({
        title: title,
        description: description
      });
      
      // Use gh api with input from stdin to handle special characters and newlines correctly
      execSync(`gh api repos/${owner}/${repo}/milestones --method POST --input -`, { 
        input: payload, 
        stdio: ['pipe', 'inherit', 'inherit'] 
      });
    } catch (e) {
      console.log(`Failed to create milestone "${title}". It might already exist.`);
    }
    console.log('---');
  }

} catch (err) {
  console.error('Error:', err);
}
