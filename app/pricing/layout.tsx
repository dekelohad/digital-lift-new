import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing - Digital Lift | Simple, Affordable Marketing for Contractors",
  description: "No hidden fees, no long-term contracts. Honest pricing for website design, local SEO, review funnels, and marketing automation. Plans starting at $297/month. Cancel anytime.",
};

export default function PricingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
