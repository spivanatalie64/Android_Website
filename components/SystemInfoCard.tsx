import React from "react";

export function SystemInfoCard({ info }: { info: Record<string, string> }) {
  return (
    <div
      className="
        bg-black/40 border border-white/10 p-6 
        rounded-xl font-mono text-sm text-gray-300
      "
    >
      {Object.entries(info).map(([key, value]) => (
        <div key={key} className="flex justify-between mb-2">
          <span className="text-gray-500">{key}</span>
          <span className="text-white">{value}</span>
        </div>
      ))}
    </div>
  );
}