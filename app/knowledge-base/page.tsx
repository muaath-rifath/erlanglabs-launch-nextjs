import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = { title: "Knowledge Base for AI Voice Agents | ErlangLabs", description: "Give ErlangLabs voice agents trusted policies, product details, and playbooks so they can answer customer questions with the right business context.", alternates: { canonical: "https://www.erlanglabs.com/knowledge-base" } };

const documents = [["Product overview.pdf", "Product positioning and use cases", "PDF"], ["Objection guide.docx", "Approved answers for common concerns", "DOC"], ["Plans and packaging.xlsx", "Current packages and terms", "XLS"], ["Sales notes.txt", "Team notes and qualification guidance", "TXT"]] as const;

export default function KnowledgeBasePage() {
  return <>
    <Navbar />
    <main>
      <section className="site-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:py-24">
        <div>
          <h1 className="page-title mt-0 max-w-xl text-2xl leading-[1.15] tracking-[-.045em] sm:text-3xl lg:text-[2.25rem]">Give every conversation the context it needs.</h1>
          <p className="body-lead mt-6 max-w-xl">When a customer asks about a refund, a plan, or a product detail, your agent needs more than a likely answer. Give it the policies and playbooks your team trusts, so it can respond with the right context instead of filling in the gaps.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/early-access" className="btn-primary">Get early access <span aria-hidden="true" className="ml-1">↗</span></Link>
            <Link href="/agent-studio" className="btn-secondary">See Agent Studio</Link>
          </div>
        </div>
        <div className="product-window scene-shell lg:translate-y-2">
          <div className="window-bar"><span className="window-dot" /><span className="window-dot" /><span className="window-dot" /><span className="ml-2 font-mono text-[10px] uppercase tracking-[.12em] text-muted">Knowledge base / enterprise sales</span></div>
          <div className="grid gap-0 sm:grid-cols-[.38fr_.62fr]">
            <aside className="border-b border-surface-border bg-surface-container-low p-4 sm:border-b-0 sm:border-r">
              <p className="data-label">Knowledge bases</p>
              {["Enterprise sales", "Support handbook", "Recruiting guide"].map((name, index) => <div key={name} className={`mt-3 rounded-lg px-3 py-2 text-sm ${index === 0 ? "bg-surface-container-high text-on-surface" : "text-secondary"}`}><span className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-primary" : "bg-outline"}`} />{name}</div>)}
              <button type="button" className="mt-5 w-full rounded-lg border border-dashed border-surface-border px-3 py-2 text-left font-mono text-[11px] text-secondary">+ New knowledge base</button>
            </aside>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3"><div><p className="data-label">Enterprise sales</p><h2 className="mt-2 text-xl font-medium tracking-[-.035em]">Sources your agent can use</h2></div><span className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">READY</span></div>
              <div className="mt-5 grid gap-2">{documents.map(([name, detail, type]) => <div key={name} className="flex items-center gap-3 rounded-xl border border-surface-border p-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-mono text-[10px] text-primary">{type}</span><span><b className="block text-sm font-medium text-on-surface">{name}</b><small className="mt-1 block text-xs text-muted">{detail}</small></span></div>)}</div>
              <div className="mt-5 flex items-center justify-between border-t border-surface-border pt-4"><span className="text-xs text-muted">4 sources ready for calls</span><span className="font-mono text-[10px] uppercase tracking-[.1em] text-primary">Grounded</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-rule">
        <div className="site-shell grid gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-28">
          <div className="lg:order-2">
            <p className="eyebrow">Trusted context, not a guess</p>
            <h2 className="section-title mt-5 max-w-lg">A helpful answer should have something to stand on.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-secondary">Language models can produce a plausible response even when the details are missing. A knowledge base gives each conversation relevant, approved material to work from, especially where being wrong can hurt trust.</p>
          </div>
          <article className="product-window bg-surface-container-low p-5 lg:order-1 sm:p-7">
            <div className="flex items-center justify-between border-b border-surface-border pb-5">
              <div><p className="data-label">A customer asks</p><h3 className="mt-2 text-2xl font-medium tracking-[-.04em] text-on-surface">“Can I get a refund after 30 days?”</h3></div>
              <span className="rounded-full bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.1em] text-primary">Policy found</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-[.9fr_1.1fr]">
              <div className="rounded-xl border border-surface-border bg-surface-container-lowest p-4"><p className="data-label">Relevant source</p><div className="mt-4 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 font-mono text-[10px] text-primary">PDF</span><span><b className="block text-sm font-medium text-on-surface">Refund policy.pdf</b><small className="mt-1 block text-xs text-muted">Updated 12 Jun 2026</small></span></div><p className="mt-5 border-l-2 border-primary pl-3 text-sm leading-6 text-secondary">“Refunds are available within 30 days of purchase, subject to the eligibility terms below.”</p></div>
              <div className="rounded-xl border border-primary/25 bg-primary/5 p-4"><p className="data-label">Agent response</p><p className="mt-4 text-sm leading-6 text-on-surface">Yes, refunds are available within 30 days of purchase, provided the eligibility terms are met. I can help you check whether your order qualifies.</p><p className="mt-5 font-mono text-[10px] uppercase tracking-[.1em] text-primary">Based on refund policy.pdf</p></div>
            </div>
          </article>
        </div>
      </section>
      <section className="section-rule">
        <div className="site-shell grid gap-12 py-20 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow">The answer policy</p>
            <h2 className="section-title mt-5 max-w-md">Know when to answer, and when not to.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-secondary">A knowledge base is not just a folder of files. It gives your agent a clear operating rule: use approved context when it exists, and create a follow-up when it does not.</p>
            <p className="mt-8 border-l-2 border-primary pl-4 text-sm leading-6 text-secondary">That keeps sensitive details like eligibility, pricing, and refunds in the hands of the material your team has approved.</p>
          </div>
          <article className="product-window overflow-hidden">
            <div className="window-bar"><span className="signal-dot" /><span className="ml-2 font-mono text-[10px] uppercase tracking-[.12em] text-muted">Answer guardrails / enterprise sales</span><span className="ml-auto font-mono text-[10px] uppercase tracking-[.1em] text-primary">Active</span></div>
            <div className="grid sm:grid-cols-[.78fr_1.22fr]">
              <aside className="border-b border-surface-border bg-surface-container-low p-5 sm:border-b-0 sm:border-r sm:p-6">
                <p className="data-label">Approved sources</p>
                <div className="mt-5 space-y-4">
                  {[["Refund policy.pdf", "Updated 12 Jun 2026", "Policy"], ["Plans and packaging.xlsx", "Current plans", "Pricing"], ["Product overview.pdf", "Core capabilities", "Product"]].map(([name, detail, type]) => <div key={name} className="border-b border-surface-border pb-4 last:border-0 last:pb-0"><div className="flex items-center justify-between gap-3"><b className="text-sm font-medium text-on-surface">{name}</b><span className="font-mono text-[9px] uppercase tracking-[.08em] text-primary">{type}</span></div><p className="mt-1 text-xs text-muted">{detail}</p></div>)}
                </div>
                <div className="mt-6 border-t border-surface-border pt-4 font-mono text-[10px] uppercase tracking-[.1em] text-secondary">3 sources available</div>
              </aside>
              <div className="p-5 sm:p-6">
                <p className="data-label">How a question is handled</p>
                <div className="mt-5 space-y-0">
                  <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-surface-border pb-5"><span className="grid h-8 w-8 place-items-center rounded-full border border-primary/35 font-mono text-xs text-primary">01</span><div><h3 className="text-base font-medium text-on-surface">Find the relevant, approved material</h3><p className="mt-2 text-sm leading-6 text-secondary">The agent looks for support in the knowledge base before it responds.</p></div></div>
                  <div className="grid grid-cols-[2rem_1fr] gap-4 border-b border-surface-border py-5"><span className="grid h-8 w-8 place-items-center rounded-full border border-primary/35 font-mono text-xs text-primary">02</span><div><h3 className="text-base font-medium text-on-surface">Answer with the source in context</h3><p className="mt-2 text-sm leading-6 text-secondary">Product and policy details are shaped by the information your team supplied.</p></div></div>
                  <div className="grid grid-cols-[2rem_1fr] gap-4 pt-5"><span className="grid h-8 w-8 place-items-center rounded-full border border-primary/35 font-mono text-xs text-primary">03</span><div><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-base font-medium text-on-surface">Escalate when the source is missing</h3><span className="font-mono text-[10px] uppercase tracking-[.1em] text-primary">Follow-up</span></div><p className="mt-2 text-sm leading-6 text-secondary">If a question cannot be supported, the agent can capture it for a person instead of inventing a detail.</p></div></div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section-rule">
        <div className="site-shell py-20 lg:py-28">
          <div className="product-window relative overflow-hidden px-6 py-16 text-center sm:px-12 lg:py-20">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--sys-primary)_14%,transparent),transparent_48%)]" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow text-primary">Ready to give your agents the right context?</p>
              <h2 className="section-title mt-5">Build answers your customers can trust.</h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-secondary">Bring your approved knowledge into every conversation, so your agents can help customers with the details that matter.</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/early-access" className="btn-primary">Get early access <span aria-hidden="true" className="ml-1">↗</span></Link>
                <Link href="/agent-studio" className="btn-secondary">See Agent Studio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
