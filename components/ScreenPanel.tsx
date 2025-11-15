import React from "react";

export function ScreenPanel({ src }: { src: string }) {
  return (
    <div
      className="
        rounded-2xl overflow-hidden border border-white/10 
        shadow-[0_0_40px_rgba(0,200,255,0.25)]
      "
    >
      <img src={src} className="w-full h-full object-cover" alt="screen" />
    </div>
  );
}