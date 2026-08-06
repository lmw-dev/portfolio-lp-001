---
project_id: PORTFOLIO-LP-001
document: 05
title: Magic Patterns Direction B — Modern Tech-Forward
status: draft
version: 0.2
creation_date: 2026-08-06
last_modified_date: 2026-08-06
---

# Magic Patterns Direction B — Modern Tech-Forward

> 状态：draft  
> 用途：Magic Patterns 生成输入 + UI 设计师参考  
> 版本：v0.2 — 修正内容漂移，删除不可靠内容，去除过度炫技

## 1. 方向定义

**Direction B** 采用 Modern Tech-Forward 风格，适合需要展示技术能力但保持 B2B 可信度的场景。

**视觉关键词：**
- Modern
- Tech-forward (not flashy)
- Dark sections with clean contrast
- Subtle gradients
- Professional animations
- Credibility-focused

## 2. Magic Patterns Prompt

```
Build a modern, tech-forward B2B service landing page for an AI automation consulting service.

Style: Clean dark sections (#1E293B) with white sections, subtle blue-to-purple gradient accents.
Typography: Modern sans-serif (Inter or similar), bold headlines, clean hierarchy.
Layout: Split layouts where appropriate, asymmetric compositions, clear section breaks.

Hero Section:
- Split layout: Left side headline, Right side clean workflow visualization
- Headline: "Turn Website Enquiries Into a Reliable Lead Workflow"
- Subheadline: "We design and build responsive landing pages that capture, validate, organise, and follow up with leads—without relying on manual handoffs."
- Two CTAs: Primary "Request a Workflow Review" (gradient button), Secondary "See How It Works" (ghost button)
- Right side: Clean diagram showing the connected workflow steps

Connected Workflow Section:
- Headline: "How It Works"
- 6-step visual flow with icons:
  1. Landing Page
  2. Form Validation
  3. Airtable / CRM
  4. Email Confirmation
  5. Slack Notification
  6. Scheduled Follow-up
- Each step connected with clean lines or arrows
- Subtle hover effects on each step

Problem Statement Section:
- Headline: "Your Landing Page Isn't Your Problem"
- 3 pain points with icons:
  1. "Leads fall through the cracks without follow-up"
  2. "Manual lead management is inconsistent"
  3. "No visibility into lead status"

Service Cards Section:
- Headline: "What We Deliver"
- 3 cards with subtle hover effects:
  1. "Landing Page Design" — Responsive, conversion-focused pages
  2. "Workflow Automation" — n8n + Airtable + Gmail + Slack
  3. "Integration Setup" — CRM, forms, and follow-up systems

Feature Grid:
- 6 items with clean icons:
  1. Responsive Design
  2. Form Validation
  3. Airtable Integration
  4. Gmail Automation
  5. Slack Notifications
  6. Scheduled Follow-up
- Subtle entrance animations on scroll (fade-in only)

Tech Stack Section:
- Pill badges with gradient borders: n8n, Airtable, Gmail, Slack, Next.js
- Headline: "Built with Proven Tools"

Concept Case Section:
- Card with "Independent Demo" badge
- Headline: "Lead Management Automation Demo"
- Description: "Workflow automation showcasing form capture, Airtable storage, email confirmation, and Slack notifications."
- CTA: "View Case Study" (gradient button)

Process Timeline:
- 6 steps horizontal timeline
- Steps: Discovery → Design → Development → Automation → Testing → Launch

FAQ Section:
- 5 expandable cards with controlled scope:
  1. "Is this a real client project?" — "Independent concept project showcasing technical capabilities"
  2. "What's the typical delivery timeline?" — "Depends on project complexity, typically 2-6 weeks"
  3. "What tech stack do you use?" — "Next.js + n8n + Airtable"
  4. "Can workflows be customized?" — "Workflows are designed based on specific requirements"
  5. "Do you offer ongoing support?" — "Support options can be discussed"

Lead Form:
- Fields: Name, Business Email, Company, Website, Project Type, Current Tools, Main Problem, Target Timeline, Estimated Budget
- Dark form design with clean focus states
- Real-time validation with subtle feedback
- Submit button: "Request a Workflow Review"

Footer:
- Contact info
- Copyright
- Disclaimer: "Independent Concept Project — not a real client engagement"

Mobile Responsive: Yes (stacked layout)
Dark Mode: Default for dark sections, light for content sections
```

## 3. 设计规范

### 颜色

```
Background Light: #FFFFFF (White)
Background Dark: #1E293B (Slate)
Gradient Start: #3B82F6 (Blue)
Gradient End: #8B5CF6 (Purple)
Accent: #06B6D4 (Cyan)
Text Primary: #111827 (Near Black)
Text Secondary: #6B7280 (Gray)
Text on Dark: #F8FAFC (White)
Border: #E5E7EB (Light Border)
Border on Dark: #334155 (Dark Border)
```

### 字体

```
Headline: Inter, 800, 48px/1.05
Subheadline: Inter, 400, 20px/1.5
Body: Inter, 400, 16px/1.6
Caption: Inter, 500, 14px/1.4
```

### 间距

```
Section padding: 80px 0
Container max-width: 1200px
Grid gap: 24px
Card padding: 32px
```

### 圆角

```
Button: 8px
Card: 12px
Badge: 16px (pill)
```

### 动画（受控）

```
Entrance: fade-in, 0.4s ease (scroll-triggered)
Hover: subtle scale(1.01), 0.2s ease
No bouncing, no pulsing, no excessive motion
```

## 4. 适用场景

- 需要展示技术能力但保持专业
- 目标客户为技术决策者
- 强调自动化和集成能力
- 现代但可信的设计语言

## 5. 风险

- 深色区域可能不适合所有用户
- 需要平衡现代感与可信度
- 动画需要精心控制
