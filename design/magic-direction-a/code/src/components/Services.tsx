import React from 'react';
import { ArrowRightIcon, InboxIcon, LayoutTemplateIcon, PlugIcon, WorkflowIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { services } from '../data/content';

const icons = {
  layout: LayoutTemplateIcon,
  workflow: WorkflowIcon,
  inbox: InboxIcon,
  plug: PlugIcon
} as const;

export function Services() {
  return (
    <section id="services" className="w-full border-b border-line bg-surface" aria-labelledby="services-title">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 lg:py-20">
        <div id="services-title">
          <SectionHeading
            eyebrow="Services"
            title="Four services, delivered as one connected system"
            description="Engage us for a single piece or the whole path from page to process. Each one ships with a defined outcome you can check against." />
          
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-[12px] border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-lift">
                
                <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.01em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-ink-muted">{service.body}</p>
                <p className="mt-4 flex items-start gap-2 border-t border-line pt-4 text-[14px] font-medium leading-6 text-ink-soft">
                  <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  {service.outcome}
                </p>
              </article>);

          })}
        </div>
      </div>
    </section>);

}