import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ROI Calculator - Calculate Your Marketing ROI | Digital Lift",
  description: "Calculate your potential return on investment with our free ROI calculator. See how much revenue you could generate with Digital Lift's marketing systems for contractors.",
};

export default function ROICalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
