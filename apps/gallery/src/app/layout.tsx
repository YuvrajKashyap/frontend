import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend — Yuvraj Kashyap",
  description: "An open-source archive of interfaces, interactions, and frontend experiments.",
  metadataBase: new URL("https://gallery-yuvraj-kashyaps-projects.vercel.app"),
  openGraph: {
    title: "Frontend — Yuvraj Kashyap",
    description: "A growing open-source frontend archive. Browse it, fork it, use it.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
