import Link from "next/link";

const plans = [
  { name: "Starter", price: "₹1,999", note: "Coming soon", description: "For small teams getting their first voice agents into production." },
  { name: "Business", price: "₹24,999", note: "per month", description: "For teams operating voice workflows at scale." },
  { name: "Enterprise", price: "Custom", note: "tailored to you", description: "For organizations with custom security and deployment needs." },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="border-y border-surface-border bg-surface-container-lowest px-4 py-24 sm:px-[var(--spacing-gutter)] md:px-10">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary-container">Plans</p>
            <h2 className="mt-4 font-geist text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">Built for every stage of your voice operation.</h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-secondary sm:text-lg">Platform plans give your team the controls to build and operate agents. Voice and recording storage are billed as you use them.</p>
          </div>
          <Link href="/plans" className="btn-secondary shrink-0">Compare all plans <span aria-hidden="true" className="ml-1">↗</span></Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="bento-card flex min-h-64 flex-col p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-geist text-2xl font-semibold text-on-surface">{plan.name}</h3>
                {plan.note === "Coming soon" ? <span className="rounded-full border border-primary-container/30 bg-primary-container/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-primary-container">Coming soon</span> : null}
              </div>
              <p className="mt-6 font-geist text-4xl font-bold tracking-tight text-on-surface">{plan.price}<span className="ml-2 font-inter text-sm font-normal tracking-normal text-secondary">{plan.price !== "Custom" ? "/month" : ""}</span></p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-secondary">{plan.note}</p>
              <p className="mt-6 text-sm leading-7 text-secondary">{plan.description}</p>
              <Link href="/early-access" className="btn-primary mt-auto pt-3">Get early access <span aria-hidden="true" className="ml-1">↗</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
