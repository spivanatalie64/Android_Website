import React from "react";
import { NeonButton } from "./NeonButton";

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-32 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
        AcreetionOS — The Future of Arch-Based Computing
      </h1>
      <p className="text-gray-300 max-w-2xl mb-8">
        A cinematic, neon-aurora powered Arch-based desktop that is stable,
        polished, and approachable for everyday users, power users, and creators.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <NeonButton>Download AcreetionOS</NeonButton>
        <NeonButton>Join the Community</NeonButton>
      </div>
    </section>
  );
}