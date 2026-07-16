import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoStrip from "./components/LogoStrip";
import CapabilitiesGrid from "./components/CapabilitiesGrid";
import TechSection from "./components/TechSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { Metadata } from "next";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Erlang Labs",
      url: "https://www.erlanglabs.com",
      logo: "https://www.erlanglabs.com/opengraph-image",
    },
    {
      "@type": "WebSite",
      name: "Erlang Labs",
      url: "https://www.erlanglabs.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.erlanglabs.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Erlang Labs | Enterprise AI Voice Agents",
  description: "Erlang Labs builds enterprise AI voice agents that automate outbound dialing, handle inbound calls, and extract structured data seamlessly.",
  alternates: {
    canonical: "https://www.erlanglabs.com",
  }
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
