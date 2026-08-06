import React from 'react';
import { motion } from 'framer-motion';
import {
  BellRingIcon,
  CalendarClockIcon,
  CheckIcon,
  MailCheckIcon,
  ShieldCheckIcon,
  Table2Icon } from
'lucide-react';

const formRows = [
{ label: 'Business email', value: 'ops@example-co.test', valid: true },
{ label: 'Company', value: 'Example Co.', valid: true },
{ label: 'Project type', value: 'Landing page + workflow', valid: true }];


const nodes = [
{ icon: ShieldCheckIcon, title: 'Validation', meta: 'Required · format · duplicate', accent: 'sky' as const },
{ icon: Table2Icon, title: 'Airtable / CRM', meta: 'Lead record created', accent: 'sky' as const },
{ icon: MailCheckIcon, title: 'Gmail', meta: 'Confirmation sent', accent: 'iris' as const },
{ icon: BellRingIcon, title: 'Slack', meta: '#leads · owner notified', accent: 'iris' as const },
{ icon: CalendarClockIcon, title: 'Follow-up', meta: 'Task + due date', accent: 'teal' as const }];


const accentClasses: Record<'sky' | 'iris' | 'teal', string> = {
  sky: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  iris: 'border-iris-400/30 bg-iris-400/10 text-iris-400',
  teal: 'border-teal-400/30 bg-teal-400/10 text-teal-300'
};

export function HeroMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-8 -top-10 bottom-0 rounded-[2.5rem] bg-sky-500/10 blur-3xl" />
      
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 p-4 shadow-2xl shadow-black/50 backdrop-blur sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            page + workflow · sample data
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          {/* Landing page + form */}
          <div className="rounded-xl border border-white/10 bg-ink-850 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-400">
              Landing page
            </p>
            <div className="mt-3 space-y-2">
              <div className="h-2.5 w-4/5 rounded-full bg-white/15" />
              <div className="h-2 w-3/5 rounded-full bg-white/[0.08]" />
            </div>
            <div className="mt-4 space-y-2.5">
              {formRows.map((row) =>
              <div
                key={row.label}
                className="rounded-lg border border-white/10 bg-ink-800 px-3 py-2">
                
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">{row.label}</p>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="truncate text-xs font-medium text-slate-200">{row.value}</p>
                    {row.valid ? <CheckIcon className="h-3.5 w-3.5 shrink-0 text-teal-400" /> : null}
                  </div>
                </div>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0.85 }}
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-4 rounded-lg bg-sky-500 px-3 py-2.5 text-center text-xs font-semibold text-ink-950">
              
              Request a Workflow Review
            </motion.div>
            <p className="mt-3 font-mono text-[10px] text-slate-500">POST /api/lead → workflow</p>
          </div>

          {/* Workflow nodes */}
          <div className="rounded-xl border border-white/10 bg-ink-850 p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-iris-400">
                Automated workflow
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/25 bg-teal-400/10 px-2 py-0.5 font-mono text-[10px] text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                active
              </span>
            </div>

            <ol className="relative mt-3 space-y-2">
              <span
                aria-hidden="true"
                className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-sky-400/40 via-iris-400/30 to-teal-400/40" />
              
              {nodes.map((node, i) =>
              <motion.li
                key={node.title}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center gap-3 rounded-lg border border-white/10 bg-ink-800/80 px-2.5 py-2">
                
                  <span
                  className={[
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
                  accentClasses[node.accent]].
                  join(' ')}>
                  
                    <node.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-semibold text-white">{node.title}</span>
                    <span className="block truncate font-mono text-[10px] text-slate-500">{node.meta}</span>
                  </span>
                </motion.li>
              )}
            </ol>

            <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-800/60 px-2.5 py-2">
              <span className="font-mono text-[10px] uppercase tracking-wide text-slate-500">
                business rules
              </span>
              <span className="font-mono text-[10px] text-slate-400">if budget &gt; tier → route to owner</span>
            </div>
          </div>
        </div>
      </div>
    </div>);

}