import React from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark'
}: SectionHeadingProps) {
  const isLight = tone === 'light';
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${
        isLight ? 'text-brand-200' : 'text-brand-600'}`
        }>
        
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[34px] ${
        isLight ? 'text-white' : 'text-ink'}`
        }>
        
        {title}
      </h2>
      {description ?
      <p className={`mt-4 text-[16px] leading-7 ${isLight ? 'text-slate-300' : 'text-ink-muted'}`}>
          {description}
        </p> :
      null}
    </div>);

}