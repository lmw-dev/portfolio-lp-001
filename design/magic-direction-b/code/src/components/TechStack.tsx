import React from 'react';
import { technologies } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function TechStack() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Technology & integrations"
          title="Capabilities we work with"
          description="These are tools we are comfortable building on — not a required stack. Every project uses the smallest set that fits." />
        

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, i) =>
          <li key={tech.name}>
              <Reveal delay={i * 0.04} className="h-full">
                <div className="flex h-full items-center gap-3.5 rounded-xl border border-slate-200 bg-white px-4 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-sky-400">
                    <tech.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold text-ink-950">
                      {tech.name}
                    </span>
                    <span className="block truncate text-xs text-slate-500">{tech.role}</span>
                  </span>
                </div>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}