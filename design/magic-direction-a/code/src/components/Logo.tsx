import React from 'react';
import { brand } from '../data/content';

export function Logo({ tone = 'dark' }: {tone?: 'dark' | 'light';}) {
  return (
    <a
      href="#top"
      className="group flex items-center gap-2.5"
      aria-label={`${brand.name} home`}>
      
      <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-brand-600">
        <span className="h-3 w-3 rounded-[3px] border-2 border-white" />
      </span>
      <span
        className={`text-[15px] font-semibold tracking-[-0.01em] ${
        tone === 'light' ? 'text-white' : 'text-ink'}`
        }>
        
        {brand.name}
      </span>
    </a>);

}