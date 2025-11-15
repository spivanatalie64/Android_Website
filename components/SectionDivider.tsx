import React from "react";

export function SectionDivider() {
  return (
    <div className="relative w-full py-6">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-neonBlue to-transparent opacity-50 blur-sm" />
      <div className="absolute inset-0 h-[1px] w-full bg-gradient-to-r from-transparent via-neonPink to-transparent opacity-40" />
    </div>
  );
}