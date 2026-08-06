import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto w-full max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Start With a Clear Landing Page and a Working Lead Process
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            We will look at your current enquiry flow, agree the scope, and build the page and the
            workflow together.
          </p>
          <a
            href="#contact"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-7 py-4 text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 sm:text-base">
            
            Request a Workflow Review
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>);

}