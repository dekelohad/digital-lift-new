import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stone Systems - Website Design & Marketing Systems For Contractors",
  description: "Cut the bullsh*t, Marketing isn't rocket science. We'll give you the tools to win but you need to commit to using them!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

