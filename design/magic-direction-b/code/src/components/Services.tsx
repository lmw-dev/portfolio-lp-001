import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { services } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Services"
          title="Four parts of the same delivery"
          description="Each engagement is scoped before it starts. You can take the page, the workflow, or both." />
        

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, i) =>
          <li key={service.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-200/70 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-sky-400">
                      <service.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>

                  <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-500">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{service.outcome}</p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) =>
                  <li
                    key={tag}
                    className="rounded-md border border-slate-200 px-2 py-1 font-mono text-[11px] text-slate-500">
                    
                        {tag}
                      </li>
                  )}
                  </ul>
                </article>
              </Reveal>
            </li>
          )}
        </ul>

        <Reveal delay={0.1}>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-950 underline decoration-sky-400 decoration-2 underline-offset-4 transition-colors hover:text-sky-600">
            
            Not sure which you need? Request a workflow review
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>);

}