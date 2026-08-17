import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Plans & Usage Pricing | Erlang Labs",
  description: "Erlang Labs platform plans and pay-as-you-go usage pricing for AI voice agents.",
  alternates: { canonical: "https://www.erlanglabs.com/plans" },
};

const plans = [
  { name: "Starter", monthly: "₹1,999/month", annual: "₹19,990/year", featured: false, details: [["Members", "3"], ["Running agents", "3"], ["Personas", "Unlimited"], ["Concurrency", "15"], ["Knowledge bases", "10"], ["Integrations", "3"], ["API & webhooks", "Yes"], ["Call recordings & transcripts", "Yes"], ["Analytics", "Standard"], ["RBAC", "Basic"], ["Audit logs", "No"], ["SSO / SAML", "No"], ["SLA", "No"], ["Support", "Standard"], ["Recording retention", "30 days"], ["Dedicated infrastructure", "No"], ["Multi-tenancy / custom workspace", "No"]] },
  { name: "Business", monthly: "₹24,999/month", annual: "₹249,990/year", featured: true, details: [["Members", "50"], ["Running agents", "20"], ["Personas", "Unlimited"], ["Concurrency", "100"], ["Knowledge bases", "50"], ["Integrations", "Unlimited"], ["API & webhooks", "Yes"], ["Call recordings & transcripts", "Yes"], ["Analytics", "Advanced"], ["RBAC", "Advanced"], ["Audit logs", "Yes"], ["SSO / SAML", "No"], ["SLA", "No"], ["Support", "Priority"], ["Recording retention", "1 year"], ["Multi-tenancy / workspace features", "Yes"]] },
  { name: "Enterprise", monthly: "Contact sales", annual: "Custom annual agreement", featured: false, details: [["Members", "Custom"], ["Running agents", "Custom"], ["Personas", "Unlimited"], ["Concurrency", "Custom"], ["Knowledge bases", "Custom"], ["Integrations", "Unlimited + custom"], ["API & webhooks", "Yes"], ["Call recordings & transcripts", "Yes"], ["Analytics", "Custom"], ["RBAC", "Custom"], ["Audit logs", "Yes"], ["SSO / SAML", "Yes"], ["SLA", "Yes"], ["Support", "Dedicated"], ["Recording retention", "Custom"], ["Customer-owned storage", "Available"], ["Dedicated infrastructure", "Optional"], ["Multi-tenancy / workspace features", "Custom"]] },
] as const;

const usagePricing = [["Gemini Realtime", "₹5/min"], ["Cartesia Sonic 3.5", "₹6/min"], ["ElevenLabs v3", "₹14/min"], ["Recording storage", "PAYG by GB-month"]] as const;

export default function PlansPage() {
  return (
    <><Navbar /><main className="flex-1"><section className="site-shell py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.18fr_.82fr] lg:items-center lg:gap-8">
        <div><p className="eyebrow">Plans & pricing</p><h1 className="page-title mt-5 text-[clamp(2.15rem,4.4vw,4rem)] leading-[1] tracking-[-.05em]">Simple plans. Usage priced separately.</h1><p className="body-lead mt-7">Pick the operating controls your team needs for building, routing, and managing agents. Platform plans cover the core workspace, while usage pricing handles voice, model, and recording costs as you scale. GST is 18% extra where applicable.</p></div>
        <section aria-labelledby="usage-pricing" className="w-full rounded-[1.5rem] border border-surface-border bg-surface-container-low p-6 sm:p-8 lg:max-w-2xl lg:justify-self-end"><div className="border-b border-surface-border pb-6"><p className="eyebrow">Usage pricing</p><h2 id="usage-pricing" className="mt-2 text-[clamp(1.3rem,1.7vw,1.8rem)] font-semibold leading-[1.08] tracking-[-.04em] text-on-surface">Pay as you go for every conversation.</h2><p className="mt-3 text-sm leading-6 text-secondary">GST: 18% extra where applicable</p></div><dl className="mt-2 divide-y divide-surface-border">{usagePricing.map(([label, price]) => <div key={label} className="flex items-center justify-between gap-4 py-5"><dt className="text-sm text-secondary">{label}</dt><dd className="font-mono text-sm font-medium text-on-surface">{price}</dd></div>)}</dl></section>
      </div>
      <section aria-labelledby="platform-plans" className="mt-20">
        <div className="max-w-2xl"><p className="eyebrow">Platform plans</p><h2 id="platform-plans" className="section-title mt-4">The foundation for your agent operations.</h2></div>
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`bento-card mx-auto flex h-full w-full max-w-[20rem] min-w-0 flex-col p-4 sm:max-w-none sm:p-8 ${plan.featured ? "border-primary-container/50 bg-surface-container" : ""}`}>
              <div><h3 className="text-xl font-semibold tracking-tight text-on-surface sm:text-2xl">{plan.name}</h3><p className={`mt-2 font-geist font-bold tracking-tight text-on-surface ${plan.name === "Enterprise" ? "text-[1.45rem] sm:whitespace-nowrap sm:text-3xl" : "text-[1.55rem] sm:text-3xl"}`}>{plan.monthly}</p><p className="mt-1 text-xs text-secondary sm:text-sm">{plan.annual}</p></div>
              <dl className="mt-6 divide-y divide-surface-border border-y border-surface-border sm:mt-8">{plan.details.slice(0, 5).map(([label, value]) => <div key={label} className="flex items-start justify-between gap-3 py-2.5 text-xs sm:gap-5 sm:py-3 sm:text-sm"><dt className="text-secondary">{label}</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{value}</dd></div>)}</dl>
              <details className="group mt-3 border-b border-surface-border pb-3 sm:mt-4 sm:pb-4"><summary className="cursor-pointer list-none font-mono text-[10px] uppercase tracking-[0.12em] text-secondary marker:hidden group-open:text-on-surface sm:text-xs">View full plan details <span aria-hidden="true" className="ml-1 group-open:hidden">+</span><span aria-hidden="true" className="ml-1 hidden group-open:inline">−</span></summary><dl className="mt-3 divide-y divide-surface-border sm:mt-4">{plan.details.slice(5).map(([label, value]) => <div key={label} className="flex items-start justify-between gap-3 py-2.5 text-xs sm:gap-5 sm:py-3 sm:text-sm"><dt className="text-secondary">{label}</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{value}</dd></div>)}<div className="flex items-start justify-between gap-3 py-2.5 text-xs sm:gap-5 sm:py-3 sm:text-sm"><dt className="text-secondary">Voice usage</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{plan.name === "Enterprise" ? "PAYG / negotiated" : "PAYG"}</dd></div><div className="flex items-start justify-between gap-3 py-2.5 text-xs sm:gap-5 sm:py-3 sm:text-sm"><dt className="text-secondary">Recording storage</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{plan.name === "Enterprise" ? "PAYG / negotiated" : "PAYG"}</dd></div></dl></details>
              <Link href="/early-access" className={`btn-primary mt-6 w-full ${plan.name === "Starter" ? "px-3 text-xs sm:whitespace-nowrap" : ""}`}>Get early access{plan.name === "Starter" ? " · Coming soon" : ""} <span aria-hidden="true" className="ml-1">↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <p className="mt-10 text-center text-sm text-secondary">No payment is collected online. Submit your interest and our team will help you choose the right plan.</p>
    </section></main><Footer /></>
  );
}
