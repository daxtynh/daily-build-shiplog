import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipLog - Beautiful Changelogs for Indie Hackers",
  description: "The simplest way to share product updates with your users. Beautiful, embeddable changelogs that take 5 minutes to set up.",
  keywords: ["changelog", "release notes", "indie hackers", "saas", "product updates"],
  openGraph: {
    title: "ShipLog - Beautiful Changelogs for Indie Hackers",
    description: "The simplest way to share product updates with your users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
