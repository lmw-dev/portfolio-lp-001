import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, HexagonIcon, ArrowRightIcon } from 'lucide-react';
import { brand, navLinks } from '../data/content';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
      'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
      scrolled || open ?
      'border-b border-white/10 bg-ink-950/90 backdrop-blur-xl' :
      'border-b border-transparent'].
      join(' ')}>
      
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] lg:px-8">
        
        <a href="#top" className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10">
            <HexagonIcon className="h-[18px] w-[18px] text-sky-400" strokeWidth={2.2} />
          </span>
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-white">
            {brand.name}
            <span className="text-slate-500">{brand.suffix}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950">
            
            Request a Workflow Review
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 lg:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open ?
      <div id="mobile-menu" className="border-t border-white/10 bg-ink-950 lg:hidden">
          <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) =>
          <li key={link.href}>
                <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5">
              
                  {link.label}
                </a>
              </li>
          )}
            <li className="mt-2">
              <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-3.5 text-base font-semibold text-ink-950">
              
                Request a Workflow Review
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div> :
      null}
    </header>);

}