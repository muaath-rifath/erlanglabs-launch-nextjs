import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-[var(--container-max)] grid-cols-2 gap-x-6 gap-y-10 px-4 py-16 sm:px-[var(--spacing-gutter)] md:grid-cols-4 md:px-10 lg:grid-cols-6">
        <div className="col-span-2 flex flex-col gap-3">
          <Link href="/" className="font-geist text-xl font-bold tracking-tight text-on-surface">
            Erlang<span className="text-primary-container">Labs</span>
          </Link>
          <p className="max-w-xs font-inter text-sm leading-6 text-secondary">
            Contextual AI voice agents for business conversations and structured outcomes.
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[.1em] text-muted">
            © {new Date().getFullYear()} Erlang Labs · Pre-launch
          </p>
        </div>

        <nav aria-label="Product navigation" className="flex flex-col gap-2">
          <span className="footer-label">Product</span>
          <Link href="/agent-studio" className="footer-link">Agent Studio</Link>
          <Link href="/agents" className="footer-link">Voice Agents</Link>
          <Link href="/knowledge-base" className="footer-link">Knowledge Base</Link>
        </nav>

        <nav aria-label="Solutions navigation" className="flex flex-col gap-2">
          <span className="footer-label">Solutions</span>
          <Link href="/agents/lead-qualification" className="footer-link">Lead qualification</Link>
          <Link href="/agents/customer-feedback" className="footer-link">Customer feedback</Link>
          <Link href="/agents/recruitment-screening" className="footer-link">Recruitment screening</Link>
        </nav>

        <nav aria-label="Company navigation" className="flex flex-col gap-2">
          <span className="footer-label">Company</span>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/early-access" className="footer-link">Early access</Link>
        </nav>

        <nav aria-label="Legal navigation" className="flex flex-col gap-2">
          <span className="footer-label">Legal</span>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
