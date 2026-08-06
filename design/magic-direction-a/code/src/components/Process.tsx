import React from 'react';
import { SectionHeading } from './SectionHeading';
import { processSteps } from '../data/content';

export function Process() {
  return (
    <section className="w-full border-b border-line bg-surface" aria-labelledby="process-title">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 lg:py-20">
        <div id="process-title">
          <SectionHeading
            eyebrow="Process"
            title="Four steps from first call to live workflow"
            description="Short cycles with a clear deliverable at each stage, so scope and cost stay predictable." />
          
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) =>
          <li key={step.title} className="rounded-[12px] border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-semibold text-brand-600">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">{step.body}</p>
              <p className="mt-4 text-[13px] font-medium leading-6 text-ink-soft">{step.outcome}</p>
            </li>
          )}
        </ol>
      </div>
    </section>);

}