import React from "react";

export function GlowHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="
        text-4xl font-extrabold text-white 
        drop-shadow-[0_0_20px_rgba(0,200,255,0.45)]
        mt-16 mb-6 text-center
      "
    >
      {children}
    </h2>
  );
}