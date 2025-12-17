import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Receptionist with Calendar Booking - Never Miss a Lead | Digital Lift",
  description: "AI phone assistant answers calls 24/7, qualifies leads, and books appointments directly into your calendar. Never miss a call or lose a booking opportunity.",
};

export default function AIReceptionistCalendarBookingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
