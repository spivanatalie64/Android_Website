import React from "react";

export function FeatureCard({
  title,
  description,
  image
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className="
        bg-white/5 backdrop-blur-xl rounded-2xl 
        border border-white/10 shadow-lg hover:shadow-neon 
        transition-all max-w-sm
      "
    >
      <img
        src={image}
        className="rounded-t-2xl object-cover h-48 w-full"
        alt={title}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}