import React from 'react';
import { outcomes } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Outcomes() {
  return (
    <section className="border-y border-white/10 bg-ink-900 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Outcome highlights"
          title="What changes once the workflow is connected"
          description="Practical operational improvements, described plainly. No performance figures are claimed." />
        

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, i) =>
          <li key={outcome.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="group h-full rounded-2xl border border-white/10 bg-ink-850 p-6 transition-colors hover:border-sky-400/30">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-400/10 text-sky-300">
                    <outcome.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{outcome.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{outcome.description}</p>
                </div>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}