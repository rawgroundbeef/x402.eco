import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
        className={`${bebasNeue.variable} ${instrumentSans.variable} ${dmMono.variable} antialiased`}
      >
        {/* Plausible Analytics */}
        <Script
          src="https://plausible.io/js/pa-N-u9uJA9hS6z91k2IBLkd.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
