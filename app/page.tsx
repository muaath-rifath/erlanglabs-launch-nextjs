import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoStrip from "./components/LogoStrip";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import TechSection from "./components/TechSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AI Voice Agents for Business Conversations | ErlangLabs",
  description:
    "ErlangLabs is a global AI calling platform for contextual inbound and outbound voice agents, structured outcomes, and business phone workflows.",
  alternates: { canonical: "https://www.erlanglabs.com" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ErlangLabs",
      url: "https://www.erlanglabs.com",
      logo: "https://www.erlanglabs.com/opengraph-image",
    },
    {
      "@type": "SoftwareApplication",
      name: "ErlangLabs",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      description:
        "AI voice agents for inbound and outbound business phone conversations.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LogoStrip />
        <CapabilitiesGrid />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
