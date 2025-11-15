import React from "react";

export function FeatureRow({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-neonBlue text-3xl">{icon}</div>
      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  );
}