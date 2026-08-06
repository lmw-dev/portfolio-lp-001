import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '../data/content';

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur transition-colors ${
      scrolled ? 'border-line' : 'border-transparent'}`
      }>
      
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
          <a
            key={link.label}
            href={link.href}
            className="text-[14px] font-medium text-ink-soft transition-colors hover:text-brand-600">
            
              {link.label}
            </a>
          )}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-[8px] bg-brand-600 px-4 text-[14px] font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600">
            
            Book a Free Discovery Call
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-line text-ink-soft lg:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ?
        <motion.div
          id="mobile-nav"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-line bg-white lg:hidden">
          
            <nav aria-label="Mobile" className="mx-auto max-w-container px-5 py-4 sm:px-8">
              <ul className="flex flex-col">
                {navLinks.map((link) =>
              <li key={link.label}>
                    <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-ink-soft">
                  
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
              <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-[8px] bg-brand-600 px-4 text-[15px] font-semibold text-white">
              
                Book a Free Discovery Call
              </a>
            </nav>
          </motion.div> :
        null}
      </AnimatePresence>
    </header>);

}