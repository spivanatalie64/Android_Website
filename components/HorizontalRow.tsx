import React from "react";

export function HorizontalRow({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-10">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
        {children}
      </div>
    </section>
  );
}