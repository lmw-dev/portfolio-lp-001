import React from 'react';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Problems } from './components/Problems';
import { Services } from './components/Services';
import { ConnectedWorkflow } from './components/ConnectedWorkflow';
import { DemoProof } from './components/DemoProof';
import { Process } from './components/Process';
import { Faq } from './components/Faq';
import { LeadForm } from './components/LeadForm';
import { SiteFooter } from './components/SiteFooter';

export function App() {
  return (
    <div className="w-full min-h-full bg-white font-sans text-ink antialiased">
      <TopNav />
      <main>
        <Hero />
        <TrustStrip />
        <Problems />
        <Services />
        <ConnectedWorkflow />
        <DemoProof />
        <Process />
        <Faq />
        <LeadForm />
      </main>
      <SiteFooter />
    </div>);

}