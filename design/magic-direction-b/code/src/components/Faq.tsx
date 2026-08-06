import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { faqs } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="FAQ"
          title="Scope questions, answered directly"
          description="If something is not covered here, it is worth raising in the workflow review." />
        

        <div>
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.question}>
                  <Reveal delay={i * 0.04}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                        
                        <span className="font-display text-base font-bold text-ink-950 sm:text-lg">
                          {faq.question}
                        </span>
                        <span
                          className={[
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors',
                          isOpen ?
                          'border-ink-950 bg-ink-950 text-sky-400' :
                          'border-slate-200 text-slate-500'].
                          join(' ')}>
                          
                          {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen ?
                      <motion.div
                        id={`faq-panel-${i}`}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden">
                        
                          <p className="max-w-2xl pb-6 pr-12 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {faq.answer}
                          </p>
                        </motion.div> :
                      null}
                    </AnimatePresence>
                  </Reveal>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}