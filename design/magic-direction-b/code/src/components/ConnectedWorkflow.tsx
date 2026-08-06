import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { workflowSteps } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ConnectedWorkflow() {
  const [active, setActive] = useState(0);
  const activeStep = workflowSteps[active];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-20 lg:py-28">
      
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-iris-500/10 blur-[120px]" />
      

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Connected workflow"
          title="One submission, six defined steps"
          description="Every step is explicit, owned by the workflow rather than a person, and observable when something fails." />
        

        {/* Step rail */}
        <div className="mt-12 lg:mt-14">
          <ol className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-sky-400/40 via-iris-400/40 to-teal-400/40 lg:block" />
            
            {workflowSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.step} className="relative">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={[
                    'group flex w-full flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                    isActive ?
                    'border-sky-400/40 bg-ink-850' :
                    'border-white/10 bg-ink-900/70 hover:border-white/20 hover:bg-ink-850'].
                    join(' ')}>
                    
                    <span
                      className={[
                      'relative z-10 flex h-9 w-9 items-center justify-center rounded-lg border transition-colors',
                      isActive ?
                      'border-sky-400/50 bg-sky-400/15 text-sky-300' :
                      'border-white/10 bg-ink-800 text-slate-400 group-hover:text-slate-200'].
                      join(' ')}>
                      
                      <step.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] tracking-[0.16em] text-slate-500">
                        {step.step}
                      </span>
                      <span
                        className={[
                        'mt-1 block font-display text-sm font-bold',
                        isActive ? 'text-white' : 'text-slate-200'].
                        join(' ')}>
                        
                        {step.title}
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-slate-400">
                        {step.description}
                      </span>
                    </span>
                  </button>
                  {isActive ?
                  <motion.span
                    layoutId="workflow-active"
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-sky-400/40"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} /> :

                  null}
                </li>);

            })}
          </ol>
        </div>

        {/* Detail panel */}
        <Reveal delay={0.05}>
          <div className="mt-6 grid gap-6 rounded-2xl border border-white/10 bg-ink-900 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-sky-400">
                Step {activeStep.step} · {activeStep.meta}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">
                {activeStep.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                {activeStep.detail}
              </p>
              <p className="mt-6 text-xs text-slate-500">
                Select any step above to see what it handles.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-ink-950 p-4 font-mono text-xs">
              <p className="mb-3 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                run trace · sample data
              </p>
              <ul className="space-y-1.5">
                {workflowSteps.map((step, i) =>
                <li
                  key={step.step}
                  className={[
                  'flex items-center justify-between gap-3 rounded-md px-2.5 py-1.5',
                  i === active ? 'bg-sky-400/10 text-sky-200' : 'text-slate-500'].
                  join(' ')}>
                  
                    <span className="truncate">
                      {step.step} {step.title.toLowerCase().replace(/ \/ /g, '_')}
                    </span>
                    <span className={i <= active ? 'text-teal-400' : 'text-slate-600'}>
                      {i <= active ? 'ok' : 'queued'}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}