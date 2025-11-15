import "./globals.css";
import React from "react";

export const metadata = {
  title: "AcreetionOS",
  description: "The Future of Arch-Based Computing"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}