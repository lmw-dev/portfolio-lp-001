import React from 'react';
import { CheckIcon } from 'lucide-react';
import { trustPoints } from '../data/content';

export function TrustStrip() {
  return (
    <section aria-label="Why teams work with us" className="w-full border-b border-line bg-surface">
      <div className="mx-auto max-w-container px-5 py-6 sm:px-8">
        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) =>
          <li key={point} className="flex items-center gap-2.5">
              <CheckIcon className="h-4 w-4 shrink-0 text-brand-600" />
              <span className="text-[14px] font-medium text-ink-soft">{point}</span>
            </li>
          )}
        </ul>
      </div>
    </section>);

}