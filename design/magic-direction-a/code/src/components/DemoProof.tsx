import React from 'react';
import { CheckIcon, InfoIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { demoChecklist } from '../data/content';

export function DemoProof() {
  return (
    <section id="portfolio" className="w-full border-b border-line bg-white" aria-labelledby="portfolio-title">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 lg:py-20">
        <div id="portfolio-title">
          <SectionHeading
            eyebrow="Portfolio"
            title="Lead Management Automation Demo"
            description="An independent concept project we built to show the full path from form submission to follow-up. It is a public portfolio example — not a live client deployment." />
          
        </div>

        <div className="mt-10 grid gap-6 rounded-[12px] border border-line bg-surface p-6 shadow-card lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[12px] font-semibold text-brand-700">
              Independent concept demo
            </span>
            <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.01em] text-ink">
              A working intake system, end to end
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-ink-muted">
              The demo uses a realistic B2B intake form and runs a complete lead management
              automation behind it: validation and duplicate checks, Airtable storage, a Gmail
              confirmation to the submitter, a Slack alert to an internal channel, and scheduled
              follow-up logic. It exists to make the implementation detail inspectable before you
              commission anything.
            </p>
            <p className="mt-4 flex gap-2 rounded-[8px] border border-line bg-white p-3 text-[13px] leading-6 text-ink-muted">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
              Built with sample data only. No client names, client data or third-party branding are
              used anywhere in this example.
            </p>
          </div>

          <div className="rounded-[12px] border border-line bg-white p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
              What the demo covers
            </p>
            <ul className="mt-4 space-y-3">
              {demoChecklist.map((item) =>
              <li key={item} className="flex gap-3 text-[14px] leading-6 text-ink-soft">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50">
                    <CheckIcon className="h-3 w-3 text-brand-600" />
                  </span>
                  {item}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}