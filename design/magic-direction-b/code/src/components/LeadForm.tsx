import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircleIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  LockIcon,
  RotateCcwIcon } from
'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { workflowSteps } from '../data/content';

type FieldName =
'name' |
'email' |
'company' |
'website' |
'projectType' |
'currentTools' |
'mainProblem' |
'timeline' |
'budget';

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: '',
  email: '',
  company: '',
  website: '',
  projectType: '',
  currentTools: '',
  mainProblem: '',
  timeline: '',
  budget: ''
};

const projectTypes = [
'New landing page + workflow',
'Landing page only',
'Workflow automation only',
'Tool or API integration',
'Improve an existing page'];


const timelines = ['Within 2 weeks', '2–4 weeks', '1–2 months', 'Planning ahead'];

const budgets = ['Under 2k', '2k – 5k', '5k – 10k', '10k +', 'Not decided yet'];

const inputBase =
'w-full rounded-xl border bg-ink-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/60';

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your business email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.company.trim()) errors.company = 'Please enter your company name.';
  if (!values.projectType) errors.projectType = 'Please choose a project type.';
  if (values.mainProblem.trim().length < 20) {
    errors.mainProblem = 'Please describe the problem in at least 20 characters.';
  }
  return errors;
}

export function LeadForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const update = (field: FieldName) => (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  {
    const next = { ...values, [field]: event.target.value };
    setValues(next);
    if (submitted) setErrors(validate(next));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(true);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 700);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
    setStatus('idle');
  };

  const errorCount = Object.keys(errors).length;
  const showSummary = submitted && errorCount > 0 && status !== 'success';

  const fieldClass = (field: FieldName) =>
  [
  inputBase,
  errors[field] && submitted ?
  'border-rose-400/60 focus:ring-rose-400/50' :
  'border-white/10 hover:border-white/20'].
  join(' ');

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-ink-950 py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[130px]" />
      

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Workflow review"
            title="Request a Workflow Review"
            description="Tell us what happens to an enquiry today. We will come back with the gaps we see and a scoped proposal for the page and the workflow." />
          

          <ul className="mt-9 space-y-3">
            {workflowSteps.slice(0, 4).map((step) =>
            <li key={step.step} className="flex items-start gap-3 text-sm text-slate-400">
                <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <span>
                  <span className="font-medium text-slate-200">{step.title}</span> — {step.description}
                </span>
              </li>
            )}
          </ul>

          <p className="mt-8 flex items-center gap-2 text-xs text-slate-500">
            <LockIcon className="h-3.5 w-3.5" />
            This form is part of a portfolio concept. Submissions are handled as sample data.
          </p>
        </div>

        <Reveal delay={0.06}>
          <div className="rounded-2xl border border-white/10 bg-ink-900 p-6 sm:p-8">
            {status === 'success' ?
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="status"
              aria-live="polite"
              className="py-6 text-center">
              
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-400/10 text-teal-300">
                  <CheckCircle2Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">Request received</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                  In a live setup, this submission would now be validated, checked for duplicates,
                  written to Airtable or your CRM, confirmed by email, announced in Slack, and given a
                  dated follow-up task.
                </p>
                <ul className="mx-auto mt-6 max-w-sm space-y-2 rounded-xl border border-white/10 bg-ink-950 p-4 text-left font-mono text-[11px] text-slate-400">
                  {['validation ok', 'duplicate check ok', 'record created', 'confirmation queued', 'slack alert sent', 'follow-up scheduled'].map(
                  (line) =>
                  <li key={line} className="flex items-center justify-between gap-3">
                        <span>{line}</span>
                        <span className="text-teal-400">✓</span>
                      </li>

                )}
                </ul>
                <button
                type="button"
                onClick={reset}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">
                
                  <RotateCcwIcon className="h-4 w-4" />
                  Submit another example
                </button>
              </motion.div> :

            <form onSubmit={handleSubmit} noValidate>
                {showSummary ?
              <div
                role="alert"
                className="mb-6 flex gap-3 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4">
                
                    <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
                    <p className="text-sm text-rose-100">
                      {errorCount} field{errorCount > 1 ? 's need' : ' needs'} attention before we can
                      review your workflow.
                    </p>
                  </div> :
              null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" error={submitted ? errors.name : undefined} required>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={update('name')}
                    placeholder="Alex Moreau"
                    aria-invalid={Boolean(submitted && errors.name)}
                    aria-describedby={submitted && errors.name ? 'name-error' : undefined}
                    className={fieldClass('name')} />
                  
                  </Field>

                  <Field
                  label="Business Email"
                  name="email"
                  error={submitted ? errors.email : undefined}
                  required>
                  
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(submitted && errors.email)}
                    aria-describedby={submitted && errors.email ? 'email-error' : undefined}
                    className={fieldClass('email')} />
                  
                  </Field>

                  <Field
                  label="Company"
                  name="company"
                  error={submitted ? errors.company : undefined}
                  required>
                  
                    <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={update('company')}
                    placeholder="Company name"
                    aria-invalid={Boolean(submitted && errors.company)}
                    aria-describedby={submitted && errors.company ? 'company-error' : undefined}
                    className={fieldClass('company')} />
                  
                  </Field>

                  <Field label="Website" name="website" hint="Optional">
                    <input
                    id="website"
                    name="website"
                    type="url"
                    value={values.website}
                    onChange={update('website')}
                    placeholder="https://"
                    className={fieldClass('website')} />
                  
                  </Field>

                  <Field
                  label="Project Type"
                  name="projectType"
                  error={submitted ? errors.projectType : undefined}
                  required>
                  
                    <select
                    id="projectType"
                    name="projectType"
                    value={values.projectType}
                    onChange={update('projectType')}
                    aria-invalid={Boolean(submitted && errors.projectType)}
                    aria-describedby={submitted && errors.projectType ? 'projectType-error' : undefined}
                    className={fieldClass('projectType')}>
                    
                      <option value="">Select an option</option>
                      {projectTypes.map((option) =>
                    <option key={option} value={option}>
                          {option}
                        </option>
                    )}
                    </select>
                  </Field>

                  <Field label="Current Tools" name="currentTools" hint="Optional">
                    <input
                    id="currentTools"
                    name="currentTools"
                    type="text"
                    value={values.currentTools}
                    onChange={update('currentTools')}
                    placeholder="e.g. Gmail, Sheets, Slack"
                    className={fieldClass('currentTools')} />
                  
                  </Field>

                  <div className="sm:col-span-2">
                    <Field
                    label="Main Problem"
                    name="mainProblem"
                    error={submitted ? errors.mainProblem : undefined}
                    required>
                    
                      <textarea
                      id="mainProblem"
                      name="mainProblem"
                      rows={4}
                      value={values.mainProblem}
                      onChange={update('mainProblem')}
                      placeholder="What happens to an enquiry today, and where does it break down?"
                      aria-invalid={Boolean(submitted && errors.mainProblem)}
                      aria-describedby={
                      submitted && errors.mainProblem ? 'mainProblem-error' : undefined
                      }
                      className={[fieldClass('mainProblem'), 'resize-y'].join(' ')} />
                    
                    </Field>
                  </div>

                  <Field label="Target Timeline" name="timeline" hint="Optional">
                    <select
                    id="timeline"
                    name="timeline"
                    value={values.timeline}
                    onChange={update('timeline')}
                    className={fieldClass('timeline')}>
                    
                      <option value="">Select an option</option>
                      {timelines.map((option) =>
                    <option key={option} value={option}>
                          {option}
                        </option>
                    )}
                    </select>
                  </Field>

                  <Field label="Estimated Budget" name="budget" hint="Optional">
                    <select
                    id="budget"
                    name="budget"
                    value={values.budget}
                    onChange={update('budget')}
                    className={fieldClass('budget')}>
                    
                      <option value="">Select a range</option>
                      {budgets.map((option) =>
                    <option key={option} value={option}>
                          {option}
                        </option>
                    )}
                    </select>
                  </Field>
                </div>

                <button
                type="submit"
                disabled={status === 'submitting'}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 sm:text-base">
                
                  {status === 'submitting' ? 'Sending…' : 'Request a Workflow Review'}
                  {status === 'submitting' ? null :
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                }
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  Required fields are marked with an asterisk. We reply with scope, not a sales sequence.
                </p>
              </form>
            }
          </div>
        </Reveal>
      </div>
    </section>);

}

interface FieldProps {
  label: string;
  name: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
}

function Field({ label, name, children, error, hint, required }: FieldProps) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wide text-slate-300">
          {label}
          {required ? <span className="ml-1 text-sky-400">*</span> : null}
        </label>
        {hint ? <span className="text-[11px] text-slate-500">{hint}</span> : null}
      </div>
      {children}
      {error ?
      <p id={`${name}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-rose-300">
          <AlertCircleIcon className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p> :
      null}
    </div>);

}