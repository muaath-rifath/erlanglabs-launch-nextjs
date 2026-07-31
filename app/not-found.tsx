import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return <><Navbar /><main className="flex flex-1 items-center justify-center px-5 py-24 text-center sm:px-8"><div><p className="eyebrow">404 · Not found</p><h1 className="mt-5 font-geist text-5xl font-semibold tracking-[-0.05em] text-on-surface sm:text-6xl">This page is not part of the workflow.</h1><p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-secondary">The page may have moved. Start with the platform or join the early access list.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="btn-primary">Back to home</Link><Link href="/early-access" className="btn-secondary">Get early access</Link></div></div></main><Footer /></>;
}
