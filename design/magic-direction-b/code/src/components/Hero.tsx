import React from 'react';
import { ArrowRightIcon, PlayCircleIcon } from 'lucide-react';
import { HeroMockup } from './HeroMockup';
import { Reveal } from './Reveal';
import { trustSignals } from '../data/content';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:px-8">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Landing page development + workflow automation
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Turn Website Enquiries Into a{' '}
              <span className="text-sky-400">Reliable Lead Workflow</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              We design and build responsive landing pages that capture, validate, organise, and
              follow up with leads—without relying on manual handoffs.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 sm:text-base">
                
                Request a Workflow Review
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:text-base">
                
                <PlayCircleIcon className="h-4 w-4" />
                See How It Works
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5">
              {trustSignals.map((signal) =>
              <li key={signal.label} className="flex items-center gap-2 text-sm text-slate-400">
                  <signal.icon className="h-4 w-4 text-teal-400" />
                  {signal.label}
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <HeroMockup />
        </Reveal>
      </div>
    </section>);

}