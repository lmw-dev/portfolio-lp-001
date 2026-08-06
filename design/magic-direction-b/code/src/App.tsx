import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Outcomes } from './components/Outcomes';
import { PainToSolution } from './components/PainToSolution';
import { Services } from './components/Services';
import { ConnectedWorkflow } from './components/ConnectedWorkflow';
import { ConceptDemo } from './components/ConceptDemo';
import { DeliveryProcess } from './components/DeliveryProcess';
import { TechStack } from './components/TechStack';
import { Faq } from './components/Faq';
import { LeadForm } from './components/LeadForm';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full bg-ink-950 font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950">
        
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Outcomes />
        <PainToSolution />
        <Services />
        <ConnectedWorkflow />
        <ConceptDemo />
        <DeliveryProcess />
        <TechStack />
        <Faq />
        <LeadForm />
        <FinalCta />
      </main>
      <Footer />
    </div>);

}