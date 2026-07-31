import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "./components/InteractiveBackground";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.erlanglabs.com"),
  title: { default: "Erlang Labs | AI Voice Agents for Business", template: "%s | Erlang Labs" },
  description: "Erlang Labs is a global AI calling platform for contextual inbound and outbound voice agents, structured outcomes, and business phone workflows.",
  keywords: ["Erlang Labs", "AI voice agents", "AI calling platform", "voice automation", "AI phone calls", "structured call outcomes"],
  authors: [{ name: "Erlang Labs", url: "https://www.erlanglabs.com" }],
  creator: "Erlang Labs",
  publisher: "Erlang Labs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Erlang Labs | AI Voice Agents for Business",
    description: "Deploy contextual voice agents for inbound and outbound business calls.",
    url: "https://www.erlanglabs.com",
    siteName: "Erlang Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.erlanglabs.com/opengraph-image",
        secureUrl: "https://www.erlanglabs.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Erlang Labs - Enterprise AI Voice Agents",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@erlanglabs",
    creator: "@erlanglabs",
    title: "Erlang Labs | AI Voice Agents for Business",
    description: "Deploy contextual voice agents for inbound and outbound business calls.",
    images: ["https://www.erlanglabs.com/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, jetbrainsMono.variable, "font-sans")}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col overflow-x-clip bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
