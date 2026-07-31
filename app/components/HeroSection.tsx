import Link from "next/link";
import Globe from "./Globe";

export default function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex h-[85vh] min-h-[85vh] max-w-[var(--container-max)] flex-col items-center justify-center gap-12 px-4 sm:px-[var(--spacing-gutter)] md:px-10 lg:h-auto lg:min-h-[calc(100vh-73px)] lg:flex-row lg:justify-start lg:gap-8">
      <div className="relative z-10 flex w-full flex-col items-center gap-6 text-center lg:w-7/12 lg:items-start lg:text-left">
        <h1 className="font-geist text-4xl font-semibold leading-[.98] tracking-[-.055em] text-on-surface sm:text-5xl lg:text-6xl">
          AI voice agents for<br className="hidden lg:block" /> business calls.
        </h1>
        <p className="max-w-2xl font-inter text-base leading-relaxed text-secondary sm:text-lg">
          Erlang Labs turns business context into natural phone conversations and clear, structured outcomes—for teams working across markets, time zones, and workflows.
        </p>
        <div className="mt-2 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:items-center lg:justify-start">
          <Link href="/early-access" className="btn-primary w-full text-center sm:w-auto">
            Get early access <span aria-hidden="true" className="ml-1">↗</span>
          </Link>
          <Link href="/agent-studio" className="btn-secondary w-full sm:w-auto">
            Explore Agent Studio <span aria-hidden="true" className="ml-1">→</span>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none relative mt-12 hidden aspect-square w-full max-w-[400px] items-center justify-center lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:my-auto lg:mt-0 lg:flex lg:h-[500px] lg:w-[500px] lg:max-w-none lg:translate-y-8 xl:-right-10 xl:h-[600px] xl:w-[600px]">
        <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-tr from-primary-container/20 to-primary/0 blur-3xl" />
        <div className="relative h-full w-full"><Globe /></div>
      </div>
    </section>
  );
}

