import React from 'react';
import { HexagonIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { brand, navLinks } from '../data/content';

const serviceSummary = [
'Landing page design & build',
'Workflow automation setup',
'Lead management system',
'API & tool integration'];


export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10">
              <HexagonIcon className="h-[18px] w-[18px] text-sky-400" strokeWidth={2.2} />
            </span>
            <span className="font-display text-[1.05rem] font-bold tracking-tight text-white">
              {brand.name}
              <span className="text-slate-500">{brand.suffix}</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{brand.tagline}</p>
        </div>

        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {serviceSummary.map((item) =>
            <li key={item} className="text-sm text-slate-400">
                {item}
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Navigate</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) =>
            <li key={link.href}>
                <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                
                  {link.label}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2 text-sm text-slate-400">
              <MailIcon className="h-4 w-4 shrink-0 text-slate-500" />
              {brand.email}
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-400">
              <MapPinIcon className="h-4 w-4 shrink-0 text-slate-500" />
              {brand.location}
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">Placeholder contact details for this concept.</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-6 text-xs leading-relaxed text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-3xl">
            The featured lead management workflow is an independent portfolio concept built and tested
            with sample data. It is not a client deployment, and no commercial results are claimed.
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {brand.name}
            {brand.suffix} · Concept work
          </p>
        </div>
      </div>
    </footer>);

}