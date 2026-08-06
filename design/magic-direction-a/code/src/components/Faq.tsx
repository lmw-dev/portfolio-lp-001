import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { faqs } from '../data/content';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full border-b border-line bg-white" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-container gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
        <div id="faq-title">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we get before a first call"
            description="If something here is not covered, add it to the message field in the form below." />
          
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left">
                    
                    <span className="text-[16px] font-semibold leading-6 tracking-[-0.01em] text-ink">
                      {faq.q}
                    </span>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] border border-line text-ink-muted">
                      {isOpen ? <MinusIcon className="h-3.5 w-3.5" /> : <PlusIcon className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ?
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden">
                    
                      <p className="pb-5 pr-10 text-[15px] leading-7 text-ink-muted">{faq.a}</p>
                    </motion.div> :
                  null}
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}