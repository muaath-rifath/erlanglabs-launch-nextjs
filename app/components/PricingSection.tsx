import Link from "next/link";

const plans = [
  {
    name: "Starter",
    total: "₹10,000",
    platformFee: "₹2,500",
    credits: "1,500",
    equivalentHours: "~25 hours",
    seats: "5 members",
    integrations: "Basic automations (webhooks & Zapier)",
  },
  {
    name: "Basic",
    total: "₹25,000",
    platformFee: "₹5,000",
    credits: "4,000",
    equivalentHours: "~66 hours",
    seats: "15 members",
    integrations: "External CRM sync (HubSpot, Zoho, etc.)",
    featured: true,
  },
  {
    name: "Pro",
    total: "₹60,000",
    platformFee: "₹10,000",
    credits: "10,000",
    equivalentHours: "~166 hours",
    seats: "50 members",
    integrations: "Custom & secure MCP servers",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="border-y border-surface-border bg-surface-container-lowest px-4 py-24 sm:px-[var(--spacing-gutter)] md:px-10">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-primary-container">Pricing</p>
          <h2 className="mt-4 font-geist text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
            Progressive platform fees that scale with usage
          </h2>
          <p className="mt-4 font-inter text-base leading-relaxed text-secondary sm:text-lg">
            The platform fee rises with operational complexity, while credit pricing stays simple across all tiers at ₹5 per credit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`bento-card flex h-full flex-col p-8 ${plan.featured ? "border-primary-container/40 bg-surface-container" : ""}`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-geist text-2xl font-semibold text-on-surface">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full border border-primary-container/30 bg-primary-container/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary-container">
                    Popular
                  </span>
                ) : null}
              </div>

              <div className="mt-6 space-y-3">
                <p className="font-inter text-sm uppercase tracking-[0.2em] text-secondary">Total monthly price</p>
                <p className="font-geist text-4xl font-bold tracking-tight text-on-surface">{plan.total}</p>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">Platform fee</dt>
                  <dd className="mt-2 font-inter text-base font-semibold text-on-surface">{plan.platformFee}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">Included credits</dt>
                  <dd className="mt-2 font-inter text-base font-semibold text-on-surface">{plan.credits}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">Equivalent hours</dt>
                  <dd className="mt-2 font-inter text-base font-semibold text-on-surface">{plan.equivalentHours}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">Team seats</dt>
                  <dd className="mt-2 font-inter text-base font-semibold text-on-surface">{plan.seats}</dd>
                </div>
              </dl>

              <div className="mt-8 border-t border-surface-border pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">Data & integrations</p>
                <p className="mt-2 font-inter text-sm leading-7 text-secondary">{plan.integrations}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-[2rem] border border-surface-border bg-surface-container p-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h3 className="font-geist text-2xl font-semibold text-on-surface">Why the pricing scales this way</h3>
            <p className="mt-4 font-inter text-sm leading-7 text-secondary">
              Starter covers baseline infrastructure and simple automations. Basic adds CRM sync and more team usage. Pro supports high concurrency, secure MCP tunneling, and custom infrastructure overhead.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <p className="font-inter text-sm leading-7 text-secondary">
              Credits remain uniform at ₹5 each, which keeps the operating model easy to understand as teams scale up.
            </p>
            <Link href="/contact" className="btn-primary text-center">
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}