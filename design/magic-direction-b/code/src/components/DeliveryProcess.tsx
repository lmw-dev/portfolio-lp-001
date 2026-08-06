import React from 'react';
import { processSteps } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function DeliveryProcess() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Delivery process"
          title="Seven steps from brief to deployment"
          description="Short, implementation-focused stages. Each one has a defined output you can review before the next begins." />
        

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) =>
          <li key={step.title} className={i === 0 ? 'lg:col-span-1' : ''}>
              <Reveal delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-950 font-mono text-xs font-medium text-sky-400">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-base font-bold text-ink-950">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </Reveal>
            </li>
          )}
        </ol>
      </div>
    </section>);

}