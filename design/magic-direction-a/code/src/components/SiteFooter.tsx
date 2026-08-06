import React from 'react';
import { MailIcon } from 'lucide-react';
import { Logo } from './Logo';
import { brand, footerLinkGroups } from '../data/content';

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-line bg-white">
      <div className="mx-auto max-w-container px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-[14px] leading-6 text-ink-muted">{brand.summary}</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-brand-600 hover:text-brand-700">
              
              <MailIcon className="h-4 w-4" />
              {brand.email}
            </a>
          </div>

          {footerLinkGroups.map((group) =>
          <nav key={group.title} aria-label={group.title}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) =>
              <li key={link.label}>
                    <a
                  href={link.href}
                  className="text-[14px] text-ink-muted transition-colors hover:text-brand-600">
                  
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-[13px] leading-6 text-ink-muted">
            Portfolio disclaimer: {brand.name} is a demo concept created for portfolio purposes. The
            featured workflow example is an independent concept demo rather than a live client
            deployment, and some visuals, metrics and content on this page are illustrative. No real
            client names, client data or third-party brands are represented.
          </p>
          <p className="mt-4 text-[13px] text-ink-muted">
            © {new Date().getFullYear()} {brand.name}. Concept demo.
          </p>
        </div>
      </div>
    </footer>);

}