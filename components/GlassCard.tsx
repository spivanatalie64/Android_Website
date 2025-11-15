import React from "react";

export function GlassCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        rounded-2xl 
        p-6 
        shadow-lg 
        hover:shadow-neon 
        transition-all
      "
    >
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}