"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";

const transcript = [
  { time: 8, speaker: "Prospect", text: "We are evaluating a few options this quarter. The hard part is keeping up with every lead." },
  { time: 19, speaker: "Voice agent", text: "What is the decision timeline, and what would you need to see before moving forward?" },
  { time: 31, speaker: "Prospect", text: "This quarter. We need to understand the budget first." },
];

function formatTime(seconds: number) {
  return `00:${Math.floor(seconds).toString().padStart(2, "0")}`;
}

export default function CapabilitiesGrid() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = window.setInterval(() => {
      setCurrentTime((time) => {
        const nextTime = time + 0.25;
        if (nextTime >= 42) {
          setIsPlaying(false);
          return 42;
        }
        return nextTime;
      });
    }, 250);

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const activeTranscriptIndex = currentTime >= 31 ? 2 : currentTime >= 19 ? 1 : currentTime >= 8 ? 0 : -1;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="solutions" className="mx-auto max-w-[var(--container-max)] px-4 py-24 sm:px-[var(--spacing-gutter)] md:px-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <motion.h2 variants={itemVariants} className="mb-4 font-geist text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
          Voice automation for any workflow.
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-3xl font-inter text-lg font-medium leading-relaxed text-secondary sm:text-xl">
          Build AI personas, connect your knowledge base, upload your contacts, and press play. ErlangLabs handles outbound dialing, live conversation, and structured data extraction automatically.
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-[var(--spacing-gutter)] md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Large Card */}
        <motion.article variants={itemVariants} className="bento-card group flex flex-col justify-between p-8 transition-all hover:border-outline md:col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
          </div>
          <div className="mb-12 relative z-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary-fixed mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </div>
            <h3 className="mb-3 font-geist text-2xl font-semibold tracking-tight text-on-surface">Intelligent Lead Qualification</h3>
            <p className="max-w-md font-inter text-base leading-relaxed text-secondary">
              Deploy agents that instantly contact inbound leads, navigate complex objections naturally, and route high-intent prospects to your sales team with complete conversational context.
            </p>
          </div>
          <div className="overflow-hidden bento-inner-card relative z-10 bg-surface/50 backdrop-blur">
            <div className="flex items-center justify-between border-b border-surface-border px-5 py-4">
              <div>
                <span className="block text-xs font-mono uppercase tracking-[0.12em] text-on-surface-variant">Qualification call</span>
                <span className="mt-1 block text-xs text-secondary">Voice agent · transcript synced</span>
              </div>
              <span className="flex items-center gap-2 text-xs text-primary-fixed"><span className={`h-2 w-2 rounded-full ${isPlaying ? "animate-pulse bg-primary-container" : "bg-surface-container-highest"}`} />{formatTime(currentTime)} / 00:42</span>
            </div>
            <div className="px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="transcript-play"
                  onClick={() => {
                    if (currentTime >= 42) {
                      setCurrentTime(0);
                      setIsPlaying(true);
                      return;
                    }
                    setIsPlaying((playing) => !playing);
                  }}
                  aria-label={isPlaying ? "Pause simulated call" : "Play simulated call"}
                >
                  {isPlaying ? <span className="transcript-pause-icon" aria-hidden="true"><i /><i /></span> : <span className="transcript-play__triangle" aria-hidden="true" />}
                </button>
                <div className="transcript-wave flex-1" aria-label={`Simulated call progress ${formatTime(currentTime)} of 00:42`} role="img">{Array.from({ length: 38 }).map((_, index) => <span key={index} className={index / 38 <= currentTime / 42 ? "is-played" : ""} style={{ height: `${18 + ((index * 17) % 58)}%` }} />)}</div>
                <span className="min-w-16 text-right text-[10px] font-mono text-text-muted">{formatTime(currentTime)} / 00:42</span>
              </div>
              <div className="mt-6 space-y-4 border-l border-surface-border pl-4">
                {transcript.map((line, index) => <p className={`transcript-line ${activeTranscriptIndex === index ? "transcript-line--active" : ""}`} key={line.time}><span className="transcript-speaker">{line.speaker} · {formatTime(line.time)}</span>{line.text}</p>)}
              </div>
              <div className="mt-6 border-t border-surface-border pt-4"><span className="text-[10px] font-mono uppercase tracking-[0.12em] text-text-muted">Qualification signal</span><div className="mt-3 flex flex-wrap gap-2"><span className={`rounded bg-primary-container/10 px-2 py-1 text-xs transition-opacity ${currentTime >= 8 ? "text-primary-fixed opacity-100" : "text-secondary opacity-40"}`}>High intent</span><span className={`rounded bg-surface-container px-2 py-1 text-xs transition-opacity ${currentTime >= 19 ? "text-secondary opacity-100" : "text-secondary opacity-40"}`}>Q3 timeline</span><span className={`rounded bg-surface-container px-2 py-1 text-xs transition-opacity ${currentTime >= 31 ? "text-secondary opacity-100" : "text-secondary opacity-40"}`}>Budget needed</span></div></div>
            </div>
          </div>
        </motion.article>

        {/* Small Card 1 */}
        <motion.article variants={itemVariants} className="bento-card group relative flex flex-col justify-between overflow-hidden p-8 transition-all hover:border-outline">
          <div className="mb-8 relative z-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary-fixed mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="m9 16 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mb-3 font-geist text-xl font-semibold tracking-tight text-on-surface">Seamless Scheduling</h3>
            <p className="font-inter text-sm leading-relaxed text-secondary">
              Automate appointment setting. Our agents handle timezones, calendar conflicts, and dynamically reschedule without human intervention.
            </p>
          </div>
          <div className="bento-inner-card relative z-10 bg-surface/50 p-4 transition-colors group-hover:border-outline">
            <div className="flex items-start justify-between border-b border-surface-border pb-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-text-muted">Calendar availability</p>
                <p className="mt-1 text-xs text-secondary">Pacific Time · synced live</p>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-secondary"><span className="signal-dot" />Ready</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-text-muted">
              <span>MON<b className="mt-1 block text-sm font-medium text-on-surface">14</b></span>
              <span className="rounded bg-primary-container/10 py-1 text-primary-fixed">TUE<b className="mt-1 block text-sm font-medium">15</b></span>
              <span>WED<b className="mt-1 block text-sm font-medium text-on-surface">16</b></span>
            </div>
            <div className="mt-4 space-y-2 border-t border-surface-border pt-3">
              <div className="flex items-center justify-between rounded bg-primary-container/10 px-3 py-2 text-xs text-on-surface"><span>Tomorrow · 2:00 PM</span><span className="text-primary-fixed">Confirmed</span></div>
              <div className="flex items-center justify-between px-3 py-1 text-xs text-secondary"><span>Wednesday · 11:30 AM</span><span>Open</span></div>
              <div className="flex items-center justify-between px-3 py-1 text-xs text-secondary"><span>Wednesday · 3:30 PM</span><span>Open</span></div>
            </div>
            <div className="mt-3 flex items-center gap-2 border-t border-surface-border pt-3 text-[10px] font-mono uppercase tracking-[0.1em] text-text-muted"><span className="h-1.5 w-1.5 rounded-full bg-primary-container" />No conflicts detected · auto-reschedule enabled</div>
            <div className="mt-4 border-t border-surface-border pt-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-text-muted">Agent workflow</p>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 text-xs"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-container/15 font-mono text-[10px] text-primary-fixed">01</span><span className="text-secondary">Timezone matched</span><span className="ml-auto font-mono text-[10px] text-primary-fixed">PST</span></div>
                <div className="flex items-center gap-3 text-xs"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-container/15 font-mono text-[10px] text-primary-fixed">02</span><span className="text-secondary">Calendar conflict checked</span><span className="ml-auto font-mono text-[10px] text-primary-fixed">CLEAR</span></div>
                <div className="flex items-center gap-3 text-xs"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-container/15 font-mono text-[10px] text-primary-fixed">03</span><span className="text-secondary">Invite sent to both parties</span><span className="ml-auto font-mono text-[10px] text-primary-fixed">DONE</span></div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Small Card 2 */}
        <motion.article variants={itemVariants} className="bento-card group flex flex-col justify-between p-8 transition-all hover:border-outline relative overflow-hidden">
          <div className="mb-8 relative z-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary-fixed mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="mb-3 font-geist text-xl font-semibold tracking-tight text-on-surface">Automated Screening</h3>
            <p className="font-inter text-sm leading-relaxed text-secondary">
              Conduct first-round interviews at scale. Assess requirements, experience, and communication skills systematically before human review.
            </p>
          </div>
          <div className="bento-inner-card relative z-10 overflow-hidden bg-surface/50">
            <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-text-muted">Screening results</span>
              <span className="text-[10px] font-mono text-primary-fixed">3 reviewed</span>
            </div>
            <div className="overflow-x-auto px-4 py-2">
              <table className="w-full min-w-[280px] text-left text-xs">
                <thead className="border-b border-surface-border text-[10px] font-mono uppercase tracking-[0.1em] text-text-muted">
                  <tr><th className="py-2 pr-3 font-normal">Candidate</th><th className="py-2 pr-3 font-normal">Fit</th><th className="py-2 text-right font-normal">Signal</th></tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  <tr><td className="py-3 pr-3 font-medium text-on-surface">Maya Chen</td><td className="py-3 pr-3 text-primary-fixed">Strong</td><td className="py-3 text-right font-mono text-primary-fixed">92%</td></tr>
                  <tr><td className="py-3 pr-3 font-medium text-on-surface">Omar Diaz</td><td className="py-3 pr-3 text-secondary">Review</td><td className="py-3 text-right font-mono text-secondary">78%</td></tr>
                  <tr><td className="py-3 pr-3 font-medium text-on-surface">Priya Shah</td><td className="py-3 pr-3 text-primary-fixed">Strong</td><td className="py-3 text-right font-mono text-primary-fixed">89%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.article>

        {/* Medium Card */}
        <motion.article variants={itemVariants} className="bento-card group flex flex-col items-center gap-[var(--spacing-gutter)] p-8 transition-all hover:border-outline md:col-span-2 md:flex-row relative overflow-hidden">
          <div className="w-full md:flex-1 relative z-10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary-fixed mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>
            <h3 className="mb-3 font-geist text-2xl font-semibold tracking-tight text-on-surface">Structured Data Extraction</h3>
            <p className="font-inter text-base leading-relaxed text-secondary pr-4">
              Stop listening to call recordings. ErlangLabs automatically extracts precise, structured insights from every conversation and syncs them directly into your database, CRM, or custom endpoints.
            </p>
          </div>
          <div className="flex h-48 w-full md:flex-1 items-center justify-center bento-inner-card relative z-10 bg-surface/50">
            <div className="w-full flex justify-between items-end h-full px-2 pt-4 gap-2 opacity-80">
              <motion.div initial={{ height: '20%' }} whileInView={{ height: '60%' }} transition={{ duration: 1, delay: 0.2 }} className="w-1/6 bg-surface-bright rounded-t-md"></motion.div>
              <motion.div initial={{ height: '30%' }} whileInView={{ height: '45%' }} transition={{ duration: 1, delay: 0.3 }} className="w-1/6 bg-surface-bright rounded-t-md"></motion.div>
              <motion.div initial={{ height: '40%' }} whileInView={{ height: '90%' }} transition={{ duration: 1, delay: 0.4 }} className="w-1/6 bg-primary-container rounded-t-md relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold text-primary-fixed">+125%</div>
              </motion.div>
              <motion.div initial={{ height: '25%' }} whileInView={{ height: '70%' }} transition={{ duration: 1, delay: 0.5 }} className="w-1/6 bg-surface-bright rounded-t-md"></motion.div>
              <motion.div initial={{ height: '50%' }} whileInView={{ height: '80%' }} transition={{ duration: 1, delay: 0.6 }} className="w-1/6 bg-surface-bright rounded-t-md"></motion.div>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
