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
      <div className="max-w-3xl"><p className="eyebrow">Plans & pricing</p><h1 className="page-title mt-5">Simple platform plans. Usage priced separately.</h1><p className="body-lead mt-6">Choose the operating controls your team needs, then pay only for the voice and recording capacity you use. GST is 18% extra where applicable.</p></div>
      <section aria-labelledby="usage-pricing" className="mt-14 rounded-[1.5rem] border border-surface-border bg-surface-container-low p-6 sm:p-8"><div className="flex flex-col gap-3 border-b border-surface-border pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Usage pricing</p><h2 id="usage-pricing" className="mt-2 text-2xl font-semibold tracking-tight text-on-surface">Pay as you go for every conversation.</h2></div><p className="text-sm text-secondary">GST: 18% extra where applicable</p></div><dl className="mt-2 grid divide-y divide-surface-border md:grid-cols-2 md:divide-x md:divide-y-0">{usagePricing.map(([label, price]) => <div key={label} className="flex items-center justify-between gap-4 py-5 md:px-5 md:first:pl-0 md:last:pr-0"><dt className="text-sm text-secondary">{label}</dt><dd className="font-mono text-sm font-medium text-on-surface">{price}</dd></div>)}</dl></section>
      <section aria-labelledby="platform-plans" className="mt-20">
        <div className="max-w-2xl"><p className="eyebrow">Platform plans</p><h2 id="platform-plans" className="section-title mt-4">The foundation for your agent operations.</h2></div>
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`bento-card flex h-full flex-col p-6 sm:p-8 ${plan.featured ? "border-primary-container/50 bg-surface-container" : ""}`}>
              <div><h3 className="text-2xl font-semibold tracking-tight text-on-surface">{plan.name}</h3><p className={`mt-3 font-geist font-bold tracking-tight text-on-surface ${plan.name === "Enterprise" ? "whitespace-nowrap text-[1.7rem] sm:text-3xl" : "text-3xl"}`}>{plan.monthly}</p><p className="mt-1 text-sm text-secondary">{plan.annual}</p></div>
              <dl className="mt-8 divide-y divide-surface-border border-y border-surface-border">{plan.details.slice(0, 5).map(([label, value]) => <div key={label} className="flex items-start justify-between gap-5 py-3 text-sm"><dt className="text-secondary">{label}</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{value}</dd></div>)}</dl>
              <details className="group mt-4 border-b border-surface-border pb-4"><summary className="cursor-pointer list-none font-mono text-xs uppercase tracking-[0.12em] text-secondary marker:hidden group-open:text-on-surface">View full plan details <span aria-hidden="true" className="ml-1 group-open:hidden">+</span><span aria-hidden="true" className="ml-1 hidden group-open:inline">−</span></summary><dl className="mt-4 divide-y divide-surface-border">{plan.details.slice(5).map(([label, value]) => <div key={label} className="flex items-start justify-between gap-5 py-3 text-sm"><dt className="text-secondary">{label}</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{value}</dd></div>)}<div className="flex items-start justify-between gap-5 py-3 text-sm"><dt className="text-secondary">Voice usage</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{plan.name === "Enterprise" ? "PAYG / negotiated" : "PAYG"}</dd></div><div className="flex items-start justify-between gap-5 py-3 text-sm"><dt className="text-secondary">Recording storage</dt><dd className="max-w-[58%] text-right font-medium text-on-surface">{plan.name === "Enterprise" ? "PAYG / negotiated" : "PAYG"}</dd></div></dl></details>
              <Link href="/early-access" className={`btn-primary mt-8 w-full ${plan.name === "Starter" ? "whitespace-nowrap px-3 text-xs" : ""}`}>Get early access{plan.name === "Starter" ? " · Coming soon" : ""} <span aria-hidden="true" className="ml-1">↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <p className="mt-10 text-center text-sm text-secondary">No payment is collected online. Submit your interest and our team will help you choose the right plan.</p>
    </section></main><Footer /></>
  );
}
