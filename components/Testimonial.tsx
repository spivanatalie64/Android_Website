import React from "react";

export function Testimonial({
  quote,
  author
}: {
  quote: string;
  author: string;
}) {
  return (
    <div
      className="
        bg-white/5 border border-white/10 
        rounded-2xl p-6 backdrop-blur-xl
        shadow-lg 
      "
    >
      <p className="text-gray-200 italic">“{quote}”</p>
      <p className="text-sm text-gray-400 mt-4">— {author}</p>
    </div>
  );
}