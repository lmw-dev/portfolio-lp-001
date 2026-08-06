import React from 'react';
import { ArrowRightIcon, CheckIcon, XIcon } from 'lucide-react';
import { afterItems, beforeItems } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function PainToSolution() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines-light opacity-70" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Before / after"
          title="From scattered enquiries to a defined intake process"
          description="Most teams do not have a lead problem. They have a handoff problem: the form, the inbox, and the pipeline are not the same system." />
        

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.15fr)] lg:gap-8">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-rose-200 bg-rose-50 text-rose-500">
                  <XIcon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-slate-500">
                  Before
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {beforeItems.map((item) =>
                <li
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5">
                  
                    <p className="text-sm font-semibold text-slate-700 line-through decoration-slate-300">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  </li>
                )}
              </ul>
            </div>
          </Reveal>

          <div className="flex items-center justify-center lg:h-full">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sky-500 shadow-sm">
              <ArrowRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
            </span>
          </div>

          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-2xl border border-ink-800 bg-ink-950 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-teal-400/30 bg-teal-400/10 text-teal-300">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-slate-400">
                  After
                </h3>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {afterItems.map((item, i) =>
                <li
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-ink-850 px-4 py-3.5">
                  
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-sky-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}