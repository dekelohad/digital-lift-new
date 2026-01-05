import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Lift - Website Design & Marketing Systems For Contractors",
  description: "Marketing isn't magic and there's no miracle solution. We build proven marketing systems that generate real opportunities, but lasting growth comes from commitment and consistency. Functional websites, local SEO, review funnels, and automated lead follow-up for contractors.",
  icons: {
    icon: [
      { url: '/icon.svg?v=2', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg?v=2',
    apple: '/apple-icon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script 
          src="https://beta.leadconnectorhq.com/loader.js"  
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="695bac868f78c5477cb6577e">
        </script>
      </body>
    </html>
  );
}
