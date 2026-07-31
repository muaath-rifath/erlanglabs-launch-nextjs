"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const products = [
  ["Agent Studio", "/agent-studio", "Conversational workflow builder"],
  ["Voice Agents", "/agents", "Inbound and outbound calling"],
  ["Knowledge Base", "/knowledge-base", "Business context for calls"],
] as const;

const solutions = [
  ["Lead qualification", "/agents/lead-qualification"],
  ["Customer feedback", "/agents/customer-feedback"],
  ["Recruitment screening", "/agents/recruitment-screening"],
] as const;

function Chevron() {
  return <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 10 5 5 5-5" /></svg>;
}

export function ClientNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"product" | "solutions" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const productActive = products.some(([, href]) => isActive(href));
  const solutionActive = solutions.some(([, href]) => isActive(href));
  const close = () => { setOpenMenu(null); setMobileOpen(false); };

  return <>
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
      <div className="relative" onMouseLeave={() => setOpenMenu(null)}>
        <button type="button" className={`nav-link nav-pill ${productActive ? "nav-pill--active nav-link--active" : ""}`} onClick={() => setOpenMenu(openMenu === "product" ? null : "product")} aria-expanded={openMenu === "product"}>Product <Chevron /></button>
        {openMenu === "product" && <div className="nav-menu absolute left-0 top-full w-64" role="menu">{products.map(([label, href, copy]) => <Link key={href} href={href} className="nav-menu-link" onClick={close} role="menuitem"><span className="block text-on-surface">{label}{label === "Agent Studio" && <span className="ml-2 text-[10px] text-primary">Preview</span>}</span><span className="mt-1 block text-xs text-muted">{copy}</span></Link>)}</div>}
      </div>
      <div className="relative" onMouseLeave={() => setOpenMenu(null)}>
        <button type="button" className={`nav-link nav-pill ${solutionActive ? "nav-pill--active nav-link--active" : ""}`} onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")} aria-expanded={openMenu === "solutions"}>Solutions <Chevron /></button>
        {openMenu === "solutions" && <div className="nav-menu absolute left-0 top-full w-56" role="menu">{solutions.map(([label, href]) => <Link key={href} href={href} className="nav-menu-link" onClick={close} role="menuitem">{label}</Link>)}</div>}
      </div>
      <Link href="/contact" className={`nav-link nav-pill ${isActive("/contact") ? "nav-pill--active nav-link--active" : ""}`}>Contact</Link>
    </nav>

    <button type="button" className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-surface-border text-on-surface lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" aria-expanded={mobileOpen}>
      <span className="relative block h-4 w-4"><i className={`absolute left-0 top-[3px] h-px w-4 bg-current transition-transform ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`} /><i className={`absolute left-0 top-[8px] h-px w-4 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} /><i className={`absolute bottom-[2px] left-0 h-px w-4 bg-current transition-transform ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`} /></span>
    </button>
    {mobileOpen && <div className="absolute left-0 top-full w-full border-b border-surface-border bg-surface-container-lowest/95 p-5 backdrop-blur-xl lg:hidden"><nav aria-label="Mobile navigation" className="mx-auto grid max-w-lg gap-1">{products.map(([label, href, copy]) => <Link key={href} href={href} onClick={close} className="border-b border-surface-border px-4 py-3 hover:bg-surface-container-low"><span className="block text-sm text-on-surface">{label}</span><span className="mt-1 block text-xs text-muted">{copy}</span></Link>)}<span className="mt-4 px-4 py-1 font-mono text-[10px] uppercase tracking-[.12em] text-muted">Solutions</span>{solutions.map(([label, href]) => <Link key={href} href={href} onClick={close} className="border-b border-surface-border px-4 py-3 text-sm text-secondary hover:bg-surface-container-low hover:text-on-surface">{label}</Link>)}<Link href="/contact" onClick={close} className="border-b border-surface-border px-4 py-3 text-sm text-secondary hover:bg-surface-container-low hover:text-on-surface">Contact</Link><Link href="/early-access" onClick={close} className="btn-primary mt-4">Get early access</Link></nav></div>}
  </>;
}
