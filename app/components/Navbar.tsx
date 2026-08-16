import Image from "next/image";
import Link from "next/link";
import { ClientNav } from "./ClientNav";

export default function Navbar() {
  return <header className="site-header"><div className="site-shell flex h-[73px] items-center gap-7"><Link href="/" className="shrink-0"><Image src="/erlanglabs-logo-topbar.svg" alt="Erlang Labs" width={700} height={140} className="h-auto w-36 sm:w-40" priority /></Link><ClientNav /></div></header>;
}
