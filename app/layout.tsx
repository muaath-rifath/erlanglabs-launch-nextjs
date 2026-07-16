import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono, Figtree } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "./components/InteractiveBackground";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.erlanglabs.com"),
  title: {
    default: "Erlang Labs | AI Voice Engagement Platform",
    template: "%s | Erlang Labs",
  },
  description: "Erlang Labs builds enterprise AI voice infrastructure for outbound and inbound calling, automated conversations, and structured data extraction at scale.",
  keywords: ["Erlang Labs", "ErlangLabs", "AI Voice", "Enterprise AI", "Voice Agents", "Voice AI", "AI Infrastructure", "Conversational AI", "Outbound Automation", "Inbound Automation", "AI Caller"],
  authors: [{ name: "Erlang Labs", url: "https://www.erlanglabs.com" }],
  creator: "Erlang Labs",
  publisher: "Erlang Labs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Erlang Labs | AI Voice Engagement Platform",
    description: "Erlang Labs builds enterprise AI voice infrastructure for outbound and inbound calling, automated conversations, and structured data extraction at scale.",
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
        alt: "ErlangLabs - Enterprise AI Voice Agents",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@erlanglabs",
    creator: "@erlanglabs",
    title: "Erlang Labs | AI Voice Engagement Platform",
    description: "Erlang Labs builds enterprise AI voice infrastructure for outbound and inbound calling, automated conversations, and structured data extraction at scale.",
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
      className={cn("h-full", "antialiased", geistSans.variable, inter.variable, jetbrainsMono.variable, "font-sans", figtree.variable)}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
