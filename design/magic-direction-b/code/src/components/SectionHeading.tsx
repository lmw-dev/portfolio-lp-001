import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'dark',
  align = 'left'
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <Reveal
      className={[
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : ''].
      join(' ')}>
      
      <p
        className={[
        'mb-4 font-mono text-xs uppercase tracking-[0.18em]',
        isDark ? 'text-sky-400' : 'text-sky-500'].
        join(' ')}>
        
        {eyebrow}
      </p>
      <h2
        className={[
        'font-display text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]',
        isDark ? 'text-white' : 'text-ink-950'].
        join(' ')}>
        
        {title}
      </h2>
      {description ?
      <p
        className={[
        'mt-5 text-base leading-relaxed sm:text-lg',
        isDark ? 'text-slate-400' : 'text-slate-600'].
        join(' ')}>
        
          {description}
        </p> :
      null}
    </Reveal>);

}