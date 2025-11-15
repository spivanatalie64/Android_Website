import React from "react";

export function DownloadCard({
  edition,
  size,
  link
}: {
  edition: string;
  size: string;
  link: string;
}) {
  return (
    <div
      className="
        bg-white/5 backdrop-blur-xl
        rounded-xl p-6 border border-white/10
        shadow-lg hover:shadow-neon transition-all
      "
    >
      <h3 className="text-xl font-bold mb-2">{edition}</h3>
      <p className="text-sm text-gray-400 mb-4">{size}</p>
      <a
        href={link}
        className="
          inline-block px-4 py-2 rounded-lg
          bg-gradient-to-r from-neonBlue to-neonPink
          text-white font-medium shadow-neon
        "
      >
        Download
      </a>
    </div>
  );
}