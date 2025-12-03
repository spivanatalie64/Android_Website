import React from "react";
import Link from "next/link";
import { isExternalUrl } from "@/utils/links";

interface IconTileProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

export function IconTile({ icon, label, href }: IconTileProps) {
  const className = `
    flex flex-col items-center justify-center p-6
    bg-white/5 backdrop-blur-xl
    border border-white/10 rounded-xl
    hover:bg-white/10 hover:shadow-neon
    transition-all cursor-pointer
  `;

  const content = (
    <>
      <div className="text-neonBlue text-4xl mb-2">{icon}</div>
      <div className="text-white text-lg font-semibold">{label}</div>
    </>
  );

  if (href) {
    const isExternal = isExternalUrl(href);
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={className}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
}