import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "x402.eco | The Payment Layer for AI Agents",
  description: "Explore the x402 ecosystem - the native payment protocol enabling AI agents to autonomously pay for resources and services.",
  openGraph: {
    title: "x402.eco | The Payment Layer for AI Agents",
    description: "Explore the x402 ecosystem - the native payment protocol enabling AI agents to autonomously pay for resources and services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSerifDisplay.variable} ${sourceSans.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
