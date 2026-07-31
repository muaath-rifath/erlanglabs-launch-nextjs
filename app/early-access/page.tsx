import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EarlyAccessForm from "../components/EarlyAccessForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Early Access | Erlang Labs",
  description: "Join the Erlang Labs early access list for a global AI voice-agent platform that turns business phone conversations into structured outcomes.",
  alternates: {
    canonical: "https://www.erlanglabs.com/early-access",
  },
  openGraph: {
    title: "Get Early Access | Erlang Labs",
    description: "Join the early access list for Erlang Labs AI voice agents.",
    url: "https://www.erlanglabs.com/early-access",
    siteName: "Erlang Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@erlanglabs",
    title: "Get Early Access | Erlang Labs",
    description: "Join the Erlang Labs early access waitlist to deploy enterprise AI voice agents.",
  },
};

export default function EarlyAccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="site-shell grid gap-12 py-20 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:py-28">
          <div className="max-w-lg lg:sticky lg:top-28">
            <h1 className="page-title mt-5">Help shape the future of AI calling.</h1>
            <p className="mt-6 text-base leading-7 text-secondary">Tell us what you are trying to automate. We are working with early teams building practical voice workflows for sales, feedback, recruiting, and more.</p>
            <div className="mt-9 grid gap-3 border-t border-surface-border pt-6"><span className="data-label">What to share</span><p className="text-sm leading-6 text-secondary">The people you need to call, what the agent should understand, and the outcome your team needs after every conversation.</p></div>
          </div>

          <div className="form-shell p-6 sm:p-9">
            <EarlyAccessForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
