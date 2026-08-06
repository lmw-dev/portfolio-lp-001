export const brand = {
  name: 'Loopline Studio',
  email: 'hello@loopline-studio.example',
  summary:
  'A small, expert-led studio combining landing page development with practical workflow automation and lead management systems.'
};

export const navLinks = [
{ label: 'Services', href: '#services' },
{ label: 'How It Works', href: '#how-it-works' },
{ label: 'Portfolio', href: '#portfolio' },
{ label: 'FAQ', href: '#faq' },
{ label: 'Contact', href: '#contact' }];


export const trustPoints = [
'Built for fast-moving service teams',
'Practical automation, not AI hype',
'Clear handoff from design to implementation',
'Human-reviewed workflows'];


export const problems = [
{
  title: 'Leads arrive, follow-up drifts',
  body: 'The page converts, but submissions sit in an inbox until someone remembers to check. Response time slips from minutes to days.'
},
{
  title: 'Routing depends on people',
  body: 'Notifications, assignment and reminders are manual, so enquiries get missed whenever the team is busy or out of office.'
},
{
  title: 'Design and operations are disconnected',
  body: 'The page, the CRM and the internal process are built separately, leaving gaps that only show up once real leads come through.'
}];


export const services = [
{
  icon: 'layout',
  title: 'Landing Page Design & Build',
  body: 'Conversion-focused landing page development: clear structure, strong hierarchy, responsive layout and accessible forms.',
  outcome: 'A page you can send paid or outbound traffic to with confidence.'
},
{
  icon: 'workflow',
  title: 'Workflow Automation Setup',
  body: 'We map your current steps, then automate the repeatable ones — validation, storage, notifications and follow-up triggers.',
  outcome: 'Fewer manual handoffs and a process that runs the same way every time.'
},
{
  icon: 'inbox',
  title: 'Lead Management System',
  body: 'Lead management automation with structured fields, duplicate checks, ownership rules and a single source of truth for enquiries.',
  outcome: 'Every enquiry is captured, qualified and assigned within minutes.'
},
{
  icon: 'plug',
  title: 'API & Tool Integration',
  body: 'Airtable integration, Gmail integration, Slack integration and API integration with the tools your team already uses.',
  outcome: 'Your stack stays intact — the connections between tools do the work.'
}];


export const workflowSteps = [
{
  title: 'Visitor submits form',
  body: 'A structured intake form captures the fields your team actually needs to qualify an enquiry.',
  tag: 'Landing page'
},
{
  title: 'Data is validated',
  body: 'Required fields, email format and duplicate checks run before anything reaches your systems.',
  tag: 'Validation'
},
{
  title: 'Record is stored in Airtable',
  body: 'A clean record is created with source, project type, budget and timeline mapped to your schema.',
  tag: 'Airtable'
},
{
  title: 'Confirmation email is sent',
  body: 'The lead receives an immediate, on-brand confirmation so the conversation starts right away.',
  tag: 'Gmail'
},
{
  title: 'Slack notification is triggered',
  body: 'The right channel or owner is notified with the key details and a direct link to the record.',
  tag: 'Slack'
},
{
  title: 'Follow-up task is created',
  body: 'Business rules create a dated task or reminder so nothing depends on someone remembering.',
  tag: 'Business rules'
}];


export const demoChecklist = [
'Form validation with required-field and email format rules',
'Duplicate checks against existing records before insert',
'Airtable storage with a normalised lead schema',
'Gmail confirmation sent to the submitter',
'Slack alert routed to an internal channel',
'Scheduled follow-up logic with reminder tasks'];


export const processSteps = [
{
  title: 'Discovery',
  body: 'A short call to review your current intake process, tools and the decisions a lead should trigger.',
  outcome: 'Scope, success measures and integration list agreed.'
},
{
  title: 'Wireframe / Direction',
  body: 'Page structure, messaging hierarchy and the workflow diagram, reviewed before any build starts.',
  outcome: 'One approved direction, no guesswork later.'
},
{
  title: 'Build & Automation',
  body: 'Landing page implementation plus the connected workflow: validation, storage, notifications, follow-up.',
  outcome: 'A working page and a working process, built together.'
},
{
  title: 'Test & Launch',
  body: 'End-to-end test submissions, edge cases, and a short handover covering how to adjust rules.',
  outcome: 'Live page, documented workflow, your team in control.'
}];


export const faqs = [
{
  q: 'What kinds of businesses is this for?',
  a: 'Small businesses, SaaS teams, operations teams and B2B service businesses that already get enquiries and want the handling of those enquiries to be consistent. It works best when there is a clear offer and at least a rough follow-up process to build on.'
},
{
  q: 'Can you work with our existing tools?',
  a: 'Usually, yes. Common setups involve Airtable, Google Workspace and Slack, and most other tools can be connected through their API or webhooks. If something cannot be integrated cleanly, we will say so during discovery rather than after the build.'
},
{
  q: 'Do you only design the page, or also build the automation?',
  a: 'Both. The page and the workflow behind it are treated as one deliverable — form fields, validation rules, storage schema, notifications and follow-up logic are designed alongside the layout.'
},
{
  q: 'What if our process is still unclear?',
  a: 'That is common. We start by writing down what happens today, then agree on a simple version worth automating. Starting with a small, reliable workflow is better than automating a process nobody has defined.'
},
{
  q: 'How fast can a first version be delivered?',
  a: 'A focused single-page build with a connected intake workflow typically takes two to three weeks, depending on integration access and review turnaround. Larger scopes are split into stages so something useful ships early.'
}];


export const projectTypes = [
'Landing page design & build',
'Workflow automation setup',
'Lead management system',
'API & tool integration',
'Not sure yet'];


export const budgetRanges = [
'Under $2,500',
'$2,500 – $5,000',
'$5,000 – $10,000',
'$10,000+',
'Need guidance'];


export const timelines = ['As soon as possible', 'Within 1 month', '1 – 3 months', 'Just planning ahead'];

export const footerLinkGroups = [
{
  title: 'Services',
  links: [
  { label: 'Landing page development', href: '#services' },
  { label: 'Workflow automation', href: '#services' },
  { label: 'Lead management automation', href: '#services' },
  { label: 'API integration', href: '#services' }]

},
{
  title: 'Company',
  links: [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }]

}];