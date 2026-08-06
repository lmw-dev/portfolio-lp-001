import {
  ActivityIcon,
  BellRingIcon,
  CalendarClockIcon,
  CheckCircle2Icon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  GitBranchIcon,
  LayoutTemplateIcon,
  MailCheckIcon,
  MailIcon,
  MonitorSmartphoneIcon,
  PlugZapIcon,
  RadioIcon,
  ServerIcon,
  ShieldCheckIcon,
  SlackIcon,
  Table2Icon,
  TimerResetIcon,
  UsersRoundIcon,
  WorkflowIcon,
  ZapIcon } from
'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const brand = {
  name: 'Loopcraft',
  suffix: 'Studio',
  tagline: 'Landing pages and lead workflows for small B2B teams.',
  email: 'hello@loopcraft-studio.example',
  location: 'Remote · European hours'
};

export const navLinks = [
{ label: 'Services', href: '#services' },
{ label: 'How It Works', href: '#how-it-works' },
{ label: 'Portfolio', href: '#portfolio' },
{ label: 'FAQ', href: '#faq' },
{ label: 'Contact', href: '#contact' }];


export interface Outcome {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const outcomes: Outcome[] = [
{
  icon: ZapIcon,
  title: 'Faster lead response',
  description:
  'Submissions trigger confirmation and internal alerts immediately, so nobody waits for someone to check an inbox.'
},
{
  icon: UsersRoundIcon,
  title: 'Cleaner internal handoff',
  description:
  'Every enquiry arrives as a structured record with the same fields, owner, and status from the start.'
},
{
  icon: TimerResetIcon,
  title: 'Less manual follow-up',
  description:
  'Follow-up tasks are created automatically with a date attached instead of living in someone’s memory.'
},
{
  icon: ActivityIcon,
  title: 'Better visibility across tools',
  description:
  'The same lead is visible in your form, your database or CRM, and your team channel without re-entry.'
}];


export const beforeItems = [
{ title: 'Disconnected forms', description: 'Form data lands somewhere different from where the team actually works.' },
{ title: 'Inbox-based lead handling', description: 'Enquiries live in a shared mailbox with no shared status.' },
{ title: 'Manual routing', description: 'Someone decides who owns each lead, when they get around to it.' },
{ title: 'Missed follow-up', description: 'Second touches depend on individual reminders and good timing.' }];


export const afterItems = [
{ title: 'Structured intake', description: 'A defined field set that matches how you qualify.' },
{ title: 'Validation', description: 'Required fields, email format, and duplicate checks before storage.' },
{ title: 'Airtable or CRM record', description: 'One record per lead, created in the system you already use.' },
{ title: 'Confirmation email', description: 'The lead gets an immediate, branded acknowledgement.' },
{ title: 'Slack alert', description: 'The right channel or owner is notified with the key details.' },
{ title: 'Scheduled follow-up', description: 'A dated task so the next step is already on the calendar.' }];


export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
}

export const services: Service[] = [
{
  icon: LayoutTemplateIcon,
  title: 'Landing Page Design & Build',
  description:
  'A responsive page built around one clear action, with the messaging structure, layout, and form designed together rather than bolted on.',
  outcome: 'A page you can send traffic to and a form that collects what your team needs to qualify.',
  tags: ['Responsive', 'Copy structure', 'Accessible']
},
{
  icon: WorkflowIcon,
  title: 'Workflow Automation Setup',
  description:
  'The steps between submission and follow-up defined explicitly: validation rules, routing logic, notifications, and error handling.',
  outcome: 'A documented workflow that runs the same way every time, with a visible trail when something fails.',
  tags: ['n8n', 'Webhooks', 'Business rules']
},
{
  icon: DatabaseIcon,
  title: 'Lead Management System',
  description:
  'A lead structure in Airtable or your CRM: fields, statuses, owners, and views that reflect how you actually work a pipeline.',
  outcome: 'One place to see new, contacted, and stalled leads without rebuilding a report each week.',
  tags: ['Airtable', 'CRM fields', 'Views']
},
{
  icon: PlugZapIcon,
  title: 'API & Tool Integration',
  description:
  'Connections between the tools already in use — email, chat, scheduling, or an internal service — via documented APIs and webhooks.',
  outcome: 'Data moves between systems automatically, with clear boundaries on what each integration covers.',
  tags: ['REST APIs', 'Auth', 'Retries']
}];


export interface WorkflowStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  detail: string;
  meta: string;
}

export const workflowSteps: WorkflowStep[] = [
{
  icon: MonitorSmartphoneIcon,
  step: '01',
  title: 'Landing Page',
  description: 'Visitor submits form',
  detail: 'The qualification form posts to a single endpoint with a defined payload.',
  meta: 'POST /api/lead'
},
{
  icon: ShieldCheckIcon,
  step: '02',
  title: 'Validation',
  description: 'Required fields, email format, and duplicate checks',
  detail: 'Invalid or repeat submissions are separated before anything reaches your pipeline.',
  meta: 'rules · dedupe'
},
{
  icon: Table2Icon,
  step: '03',
  title: 'Airtable / CRM',
  description: 'A structured lead record is created',
  detail: 'Fields, owner, and status are set on write so the record is usable immediately.',
  meta: 'create record'
},
{
  icon: MailCheckIcon,
  step: '04',
  title: 'Email Confirmation',
  description: 'The lead receives a confirmation email',
  detail: 'A templated acknowledgement sent from your own domain and mailbox.',
  meta: 'Gmail API'
},
{
  icon: BellRingIcon,
  step: '05',
  title: 'Slack Notification',
  description: 'The appropriate team or owner is notified',
  detail: 'Routing rules decide the channel or person based on the submitted answers.',
  meta: 'channel routing'
},
{
  icon: CalendarClockIcon,
  step: '06',
  title: 'Scheduled Follow-up',
  description: 'A dated task or reminder is created',
  detail: 'The next touch is written down with an owner and a date, not left to memory.',
  meta: 'task + due date'
}];


export const demoCapabilities = [
{ icon: ShieldCheckIcon, label: 'Form validation', note: 'Required fields and email format' },
{ icon: GitBranchIcon, label: 'Duplicate checks', note: 'Repeat email detection on intake' },
{ icon: Table2Icon, label: 'Airtable storage', note: 'Structured sample lead records' },
{ icon: MailIcon, label: 'Gmail confirmation', note: 'Templated acknowledgement send' },
{ icon: SlackIcon, label: 'Slack notification', note: 'Routed internal alert' },
{ icon: CalendarClockIcon, label: 'Follow-up logic', note: 'Dated task creation' }];


export const demoSampleLeads = [
{ name: 'Sample Lead 01', company: 'Sample Co.', type: 'Landing page + workflow', status: 'New', tone: 'new' as const },
{ name: 'Sample Lead 02', company: 'Example Group', type: 'Workflow only', status: 'Confirmed', tone: 'ok' as const },
{ name: 'Sample Lead 03', company: 'Sample Co.', type: 'Landing page + workflow', status: 'Duplicate', tone: 'warn' as const },
{ name: 'Sample Lead 04', company: 'Test Partners', type: 'Integration', status: 'Follow-up set', tone: 'ok' as const }];


export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
{ title: 'Clarify', description: 'Define the offer, the audience, and what a qualified lead looks like.' },
{ title: 'Structure', description: 'Agree the page sections, form fields, and lead record schema.' },
{ title: 'Design', description: 'Lay out the page and form states, desktop and mobile.' },
{ title: 'Build', description: 'Develop the responsive page and the form endpoint.' },
{ title: 'Connect', description: 'Wire validation, storage, email, chat alerts, and follow-up tasks.' },
{ title: 'Test', description: 'Run valid, invalid, and duplicate submissions end to end.' },
{ title: 'Deploy', description: 'Ship to your hosting, hand over the workflow documentation.' }];


export interface Technology {
  icon: LucideIcon;
  name: string;
  role: string;
}

export const technologies: Technology[] = [
{ icon: CodeIcon, name: 'Next.js', role: 'Page and form delivery' },
{ icon: WorkflowIcon, name: 'n8n', role: 'Workflow orchestration' },
{ icon: Table2Icon, name: 'Airtable', role: 'Lead records' },
{ icon: MailIcon, name: 'Gmail', role: 'Confirmation email' },
{ icon: SlackIcon, name: 'Slack', role: 'Internal alerts' },
{ icon: RadioIcon, name: 'Webhooks', role: 'Event triggers' },
{ icon: ServerIcon, name: 'REST APIs', role: 'Tool integration' },
{ icon: CloudIcon, name: 'Vercel', role: 'Hosting and previews' }];


export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
{
  question: 'Can you work with an existing design?',
  answer:
  'Yes. If you have a design file or an existing page, we can build against it and focus our work on the form, validation, and workflow layer. Larger structural changes are scoped separately before we start.'
},
{
  question: 'Can you connect the form to my CRM?',
  answer:
  'If your CRM exposes an API or accepts webhooks, we can create lead records in it. We confirm the available endpoints and field mapping during the clarify step, and we agree in writing which objects and fields are in scope.'
},
{
  question: 'Do I need to use Airtable?',
  answer:
  'No. Airtable is one option we use often because it is quick to structure and review. The same workflow can write to another database or CRM instead, as long as it has a supported API.'
},
{
  question: 'Can you improve an existing landing page?',
  answer:
  'Often yes. We start with a workflow review of the current page and form, then propose a defined set of changes — usually messaging structure, form fields, and the automation behind the submission.'
},
{
  question: 'What is included in the first delivery?',
  answer:
  'A responsive landing page, a validated form endpoint, one lead record destination, a confirmation email, one internal notification, and one scheduled follow-up rule — plus documentation of how the workflow runs. Anything beyond that scope is quoted separately.'
}];


export const trustSignals = [
{ icon: CheckCircle2Icon, label: 'Small senior team' },
{ icon: CheckCircle2Icon, label: 'Documented workflows' },
{ icon: CheckCircle2Icon, label: 'Scope agreed up front' }];