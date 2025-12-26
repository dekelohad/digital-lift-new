import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Digital Lift - Get in Touch | Austin, TX",
  description: "Have questions about our marketing systems? Contact Digital Lift today. Email us at info@digitalLift.io or call +1 (737) 937-6612. Located in Austin, Texas.",
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

