import React from "react";

export function AuroraPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-10 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}