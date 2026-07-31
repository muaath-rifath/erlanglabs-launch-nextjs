import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ErlangLabs",
  description: "Contact the ErlangLabs team about AI voice agents, Agent Studio, and early business calling workflows.",
  alternates: {
    canonical: "https://www.erlanglabs.com/contact",
  },
  openGraph: {
    title: "Contact Us | ErlangLabs",
    description: "Contact ErlangLabs about AI voice agents and business calling workflows.",
    url: "https://www.erlanglabs.com/contact",
    siteName: "ErlangLabs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@erlanglabs",
    title: "Contact Us | ErlangLabs",
    description: "Get in touch with the ErlangLabs team to discuss your enterprise AI voice needs.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="site-shell grid gap-12 py-20 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:py-28">
          <div className="max-w-lg lg:sticky lg:top-28">
            <h1 className="page-title mt-5">Let&apos;s talk about the workflow.</h1>
            <p className="mt-6 text-base leading-7 text-secondary">Tell us what you want to automate over the phone, or email us directly at <a href="mailto:contact@erlanglabs.com" className="text-on-surface underline decoration-primary/50 underline-offset-4 hover:decoration-primary">contact@erlanglabs.com</a>.</p>
            <div className="mt-9 border-t border-surface-border pt-6"><p className="data-label">Pre-launch conversations</p><p className="mt-3 text-sm leading-6 text-secondary">We are especially interested in teams with a specific calling workflow they want to make more useful.</p></div>
          </div>

          <div className="form-shell p-6 sm:p-9">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


