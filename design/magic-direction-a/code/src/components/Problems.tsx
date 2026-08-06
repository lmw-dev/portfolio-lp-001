import React from 'react';
import { AlertCircleIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { problems } from '../data/content';

export function Problems() {
  return (
    <section className="w-full border-b border-line bg-white" aria-labelledby="problems-title">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 lg:py-20">
        <div id="problems-title">
          <SectionHeading
            eyebrow="The gap"
            title="The page is rarely the problem. The handoff is."
            description="Most teams already have somewhere for leads to land. What breaks is everything that happens in the minutes after a form is submitted." />
          
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {problems.map((problem) =>
          <article
            key={problem.title}
            className="rounded-[12px] border border-line bg-surface p-6">
            
              <AlertCircleIcon className="h-5 w-5 text-brand-600" />
              <h3 className="mt-4 text-[17px] font-semibold leading-6 tracking-[-0.01em] text-ink">
                {problem.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">{problem.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}