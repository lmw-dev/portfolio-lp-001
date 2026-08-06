import React from 'react';
import { FlaskConicalIcon, InfoIcon } from 'lucide-react';
import { demoCapabilities, demoSampleLeads } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const statusTone: Record<'new' | 'ok' | 'warn', string> = {
  new: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  ok: 'border-teal-400/30 bg-teal-400/10 text-teal-300',
  warn: 'border-amber-400/30 bg-amber-400/10 text-amber-300'
};

export function ConceptDemo() {
  return (
    <section id="portfolio" className="bg-ink-900 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-amber-300">
            <FlaskConicalIcon className="h-3.5 w-3.5" />
            Independent concept · sample data
          </p>
        </Reveal>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Portfolio concept"
            title="Lead Management Automation Demo"
            description="An independently built and tested technical concept. This is not a client engagement, and it runs on sample data only." />
          
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-ink-850 p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold text-white">What the concept demonstrates</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {demoCapabilities.map((cap) =>
                <li
                  key={cap.label}
                  className="rounded-xl border border-white/10 bg-ink-900 px-4 py-3.5">
                  
                    <span className="flex items-center gap-2">
                      <cap.icon className="h-4 w-4 text-sky-400" />
                      <span className="text-sm font-semibold text-white">{cap.label}</span>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-400">{cap.note}</span>
                  </li>
                )}
              </ul>

              <div className="mt-6 flex gap-3 rounded-xl border border-white/10 bg-ink-950 p-4">
                <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <p className="text-xs leading-relaxed text-slate-400">
                  No verified commercial results are claimed for this concept. It exists to show that the
                  workflow logic — validation, deduplication, storage, notification, and follow-up — has
                  been built and tested end to end.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-950">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  sample lead table
                </p>
                <span className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-500">
                  read-only
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[34rem] text-left">
                  <caption className="sr-only">
                    Sample lead records produced by the independent automation concept
                  </caption>
                  <thead>
                    <tr className="border-b border-white/10">
                      {['Lead', 'Company', 'Project type', 'Status'].map((h) =>
                      <th
                        key={h}
                        scope="col"
                        className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                        
                          {h}
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {demoSampleLeads.map((lead) =>
                    <tr key={lead.name} className="border-b border-white/5 last:border-0">
                        <td className="px-5 py-3.5 text-sm font-medium text-white">{lead.name}</td>
                        <td className="px-5 py-3.5 text-sm text-slate-400">{lead.company}</td>
                        <td className="px-5 py-3.5 text-sm text-slate-400">{lead.type}</td>
                        <td className="px-5 py-3.5">
                          <span
                          className={[
                          'inline-block rounded-md border px-2 py-0.5 font-mono text-[10px]',
                          statusTone[lead.tone]].
                          join(' ')}>
                          
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-white/10 px-5 py-4">
                <p className="font-mono text-[11px] leading-relaxed text-slate-500">
                  02_validation ok · 03_airtable_crm ok · 04_gmail ok · 05_slack ok · 06_follow_up ok
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}