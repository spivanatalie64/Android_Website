import React from "react";

export function StatBadge({
  label,
  value
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div
      className="
        bg-white/5 border border-white/10 rounded-xl 
        px-6 py-4 text-center backdrop-blur-md
      "
    >
      <div className="text-neonBlue text-3xl font-bold">{value}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}