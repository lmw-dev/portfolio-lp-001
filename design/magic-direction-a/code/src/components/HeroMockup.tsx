import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, DatabaseIcon, MailIcon, MessageSquareIcon } from 'lucide-react';

const rows = [
{ label: 'Work email', value: 'ops@acme-demo.test' },
{ label: 'Project type', value: 'Lead management system' },
{ label: 'Timeline', value: 'Within 1 month' }];


const events = [
{ icon: DatabaseIcon, label: 'Airtable record created', meta: 'LEAD-1042' },
{ icon: MailIcon, label: 'Confirmation email sent', meta: 'Gmail' },
{ icon: MessageSquareIcon, label: 'Slack alert posted', meta: '#new-leads' }];


export function HeroMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-6 -top-6 bottom-8 rounded-[20px] bg-surface" />
      
      <div className="relative rounded-[12px] border border-line bg-white p-5 shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-line pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 text-[12px] font-medium text-ink-muted">Lead intake — form submission</span>
        </div>

        <div className="mt-4 space-y-2.5">
          {rows.map((row) =>
          <div key={row.label} className="rounded-[8px] border border-line bg-surface px-3 py-2.5">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-muted">
                {row.label}
              </p>
              <p className="mt-0.5 text-[13px] font-medium text-ink">{row.value}</p>
            </div>
          )}
          <div className="flex items-center justify-between rounded-[8px] bg-brand-600 px-3 py-2.5">
            <span className="text-[13px] font-semibold text-white">Request Project Review</span>
            <CheckIcon className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>

      <div className="relative -mt-4 ml-6 mr-[-8px] rounded-[12px] border border-line bg-white p-4 shadow-card sm:ml-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
          Workflow run · 1.8s
        </p>
        <ul className="mt-3 space-y-2.5">
          {events.map((event, i) =>
          <motion.li
            key={event.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-3">
            
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-brand-50 text-brand-600">
                <event.icon className="h-3.5 w-3.5" />
              </span>
              <span className="flex-1 text-[13px] font-medium text-ink">{event.label}</span>
              <span className="text-[11px] font-medium text-ink-muted">{event.meta}</span>
              <CheckIcon className="h-3.5 w-3.5 text-brand-600" />
            </motion.li>
          )}
        </ul>
      </div>
    </div>);

}