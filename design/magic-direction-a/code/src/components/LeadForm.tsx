import React, { useState } from 'react';
import { AlertCircleIcon, CheckCircle2Icon, LoaderIcon, ShieldCheckIcon } from 'lucide-react';
import { budgetRanges, projectTypes, timelines } from '../data/content';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  projectType: string;
  budget: string;
  timeline: string;
  tools: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  website: '',
  projectType: '',
  budget: '',
  timeline: '',
  tools: '',
  message: ''
};

const fieldClass =
'h-11 w-full rounded-[8px] border border-line bg-white px-3 text-[14px] text-ink placeholder:text-ink-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100';

const labelClass = 'mb-1.5 block text-[13px] font-medium text-ink-soft';

export function LeadForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  const update = (key: keyof FormState) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  setValues((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!values.name.trim() || !values.company.trim()) {
      setStatus('error');
      setError('Please add your name and company so we know who to reply to.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setStatus('error');
      setError('Please enter a valid work email address.');
      return;
    }

    setStatus('submitting');
    setError('');
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus('success');
  };

  return (
    <section id="contact" className="w-full bg-surface" aria-labelledby="contact-title">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-600">
              Contact
            </p>
            <h2
              id="contact-title"
              className="mt-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[34px]">
              
              Request a project review
            </h2>
            <p className="mt-4 text-[16px] leading-7 text-ink-muted">
              Tell us what you are trying to fix. We reply within one business day with an honest read
              on scope, sequence and whether we are the right fit — no pitch deck.
            </p>
            <ul className="mt-8 space-y-3 border-t border-line pt-6 text-[14px] leading-6 text-ink-soft">
              <li className="flex gap-3">
                <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                Your details are used only to prepare the review.
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                Discovery calls are free and run about 30 minutes.
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                Demo form — submissions are not sent anywhere.
              </li>
            </ul>
          </div>

          <div className="rounded-[12px] border border-line bg-white p-6 shadow-lift sm:p-8">
            {status === 'success' ?
            <div className="flex flex-col items-start" role="status">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50">
                  <CheckCircle2Icon className="h-5 w-5 text-brand-600" />
                </span>
                <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.01em] text-ink">
                  Request received
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-ink-muted">
                  In a live setup, this submission would be validated, stored in Airtable, confirmed
                  by email, posted to Slack and given a dated follow-up task. This page is a
                  portfolio demo, so nothing was sent.
                </p>
                <button
                type="button"
                onClick={() => {
                  setValues(initialState);
                  setStatus('idle');
                }}
                className="mt-6 inline-flex h-11 items-center rounded-[8px] border border-line px-5 text-[14px] font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-700">
                
                  Submit another request
                </button>
              </div> :

            <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Name
                    </label>
                    <input
                    id="name"
                    name="name"
                    className={fieldClass}
                    placeholder="Jordan Meyer"
                    value={values.name}
                    onChange={update('name')}
                    autoComplete="name"
                    required />
                  
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Work email
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={update('email')}
                    autoComplete="email"
                    required />
                  
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company
                    </label>
                    <input
                    id="company"
                    name="company"
                    className={fieldClass}
                    placeholder="Company name"
                    value={values.company}
                    onChange={update('company')}
                    autoComplete="organization"
                    required />
                  
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="website">
                      Website
                    </label>
                    <input
                    id="website"
                    name="website"
                    className={fieldClass}
                    placeholder="company.com"
                    value={values.website}
                    onChange={update('website')}
                    autoComplete="url" />
                  
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="projectType">
                      Project type
                    </label>
                    <select
                    id="projectType"
                    name="projectType"
                    className={`${fieldClass} appearance-none pr-8`}
                    value={values.projectType}
                    onChange={update('projectType')}>
                    
                      <option value="">Select an option</option>
                      {projectTypes.map((option) =>
                    <option key={option} value={option}>
                          {option}
                        </option>
                    )}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="budget">
                      Budget range
                    </label>
                    <select
                    id="budget"
                    name="budget"
                    className={`${fieldClass} appearance-none pr-8`}
                    value={values.budget}
                    onChange={update('budget')}>
                    
                      <option value="">Select a range</option>
                      {budgetRanges.map((option) =>
                    <option key={option} value={option}>
                          {option}
                        </option>
                    )}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="timeline">
                      Timeline
                    </label>
                    <select
                    id="timeline"
                    name="timeline"
                    className={`${fieldClass} appearance-none pr-8`}
                    value={values.timeline}
                    onChange={update('timeline')}>
                    
                      <option value="">Select a timeline</option>
                      {timelines.map((option) =>
                    <option key={option} value={option}>
                          {option}
                        </option>
                    )}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="tools">
                      Current tools
                    </label>
                    <input
                    id="tools"
                    name="tools"
                    className={fieldClass}
                    placeholder="Airtable, Gmail, Slack, HubSpot…"
                    value={values.tools}
                    onChange={update('tools')} />
                  
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="message">
                      Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-[8px] border border-line bg-white px-3 py-2.5 text-[14px] leading-6 text-ink placeholder:text-ink-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    placeholder="What happens today when a lead comes in, and where does it break?"
                    value={values.message}
                    onChange={update('message')} />
                  
                  </div>
                </div>

                {status === 'error' ?
              <p
                role="alert"
                className="mt-4 flex items-start gap-2 rounded-[8px] border border-red-200 bg-red-50 p-3 text-[13px] leading-6 text-red-700">
                
                    <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                    {error}
                  </p> :
              null}

                <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-brand-600 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70">
                  
                    {status === 'submitting' ?
                  <>
                        <LoaderIcon className="h-4 w-4 animate-spin" />
                        Sending…
                      </> :

                  'Request Project Review'
                  }
                  </button>
                  <p className="text-[13px] leading-6 text-ink-muted">
                    Typical reply time: one business day.
                  </p>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>);

}