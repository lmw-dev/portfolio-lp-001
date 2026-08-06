import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayCircleIcon } from 'lucide-react';
import { HeroMockup } from './HeroMockup';

export function Hero() {
  return (
    <section className="w-full border-b border-line bg-white" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-container items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}>
          
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[12px] font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Landing page development &amp; workflow automation
          </p>

          <h1
            id="hero-title"
            className="mt-5 text-[34px] font-semibold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[46px] lg:text-[52px]">
            
            High-converting landing pages, wired to an automated lead workflow.
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-8 text-ink-muted">
            We design and build conversion-focused landing pages, then connect them to the tools your
            team already runs on — Airtable, Gmail, Slack and your own APIs — so every enquiry is
            validated, stored, acknowledged and followed up without manual work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-brand-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
              
              Book a Free Discovery Call
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-line bg-white px-6 text-[15px] font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-700">
              
              <PlayCircleIcon className="h-4 w-4" />
              View Workflow Demo
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <dt className="text-[12px] font-medium text-ink-muted">First version</dt>
              <dd className="mt-1 text-[18px] font-semibold text-ink">2–3 weeks</dd>
            </div>
            <div>
              <dt className="text-[12px] font-medium text-ink-muted">Delivered as</dt>
              <dd className="mt-1 text-[18px] font-semibold text-ink">Page + workflow</dd>
            </div>
            <div>
              <dt className="text-[12px] font-medium text-ink-muted">Team size</dt>
              <dd className="mt-1 text-[18px] font-semibold text-ink">Small &amp; senior</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          aria-hidden="true">
          
          <HeroMockup />
        </motion.div>
      </div>
    </section>);

}