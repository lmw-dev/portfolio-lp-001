import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { workflowSteps } from '../data/content';

export function ConnectedWorkflow() {
  return (
    <section
      id="how-it-works"
      className="w-full border-b border-line bg-[#0F172A]"
      aria-labelledby="workflow-title">
      
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 lg:py-24">
        <div id="workflow-title">
          <SectionHeading
            eyebrow="Connected workflow"
            title="What happens in the 60 seconds after a form is submitted"
            description="This is the part most landing page projects leave out. Every step below is configured, tested and documented as part of the build — including the business rules that decide what happens next."
            tone="light"
            align="center" />
          
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step, i) =>
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
            className="relative rounded-[12px] border border-slate-700/70 bg-slate-900/60 p-6">
            
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-brand-600 text-[13px] font-semibold text-white">
                  {i + 1}
                </span>
                <span className="rounded-full border border-slate-700 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-400">
                  {step.tag}
                </span>
              </div>
              <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.01em] text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-400">{step.body}</p>
              {i < workflowSteps.length - 1 ?
            <ArrowRightIcon
              aria-hidden="true"
              className="absolute -right-[13px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-600 lg:block" /> :

            null}
            </motion.li>
          )}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-[12px] border border-slate-700/70 bg-slate-900/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[15px] leading-7 text-slate-300">
            Rules, routing and reminders are reviewed with you before launch — automation you can
            explain to your team, not a black box.
          </p>
          <a
            href="#contact"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-[8px] bg-white px-5 text-[14px] font-semibold text-ink transition-colors hover:bg-slate-100">
            
            Map my workflow
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>);

}