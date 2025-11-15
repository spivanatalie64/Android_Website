import React from "react";

export function IconTile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center p-6
        bg-white/5 backdrop-blur-xl
        border border-white/10 rounded-xl
        hover:bg-white/10 hover:shadow-neon
        transition-all cursor-pointer
      "
    >
      <div className="text-neonBlue text-4xl mb-2">{icon}</div>
      <div className="text-white text-lg font-semibold">{label}</div>
    </div>
  );
}