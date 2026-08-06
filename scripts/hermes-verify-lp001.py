#!/usr/bin/env python3
"""Ad-hoc verification for LP-001-01 HTML prototypes.

Verification type: ad-hoc (not canonical test suite)
Scope: content completeness and forbidden-content checks only
Does NOT verify: visual quality, responsive behavior, production readiness
"""
import re, sys, os

REQUIRED_PHRASES = [
    "Turn Website Enquiries",
    "Reliable Lead Workflow",
    "capture, validate, organise, and follow up with leads",
    "Request a Workflow Review",
    "See How It Works",
    "Landing Page",
    "Form Validation",
    "Airtable",
    "Email Confirmation",
    "Slack Notification",
    "Scheduled Follow-up",
    "Name",
    "Business Email",
    "Company",
    "Website",
    "Project Type",
    "Current Tools",
    "Main Problem",
    "Target Timeline",
    "Estimated Budget",
    "Independent concept project",
    "typically 2-6 weeks",
    "Next.js + n8n + Airtable",
    "designed based on specific requirements",
    "Support options can be discussed",
    "Independent Concept Project",
]

FORBIDDEN_PHRASES = [
    "67% of leads", "4+ hours/week", "bouncing", "pulse glow",
    "social links", "Get Started", "Automate Your Lead Pipeline",
    "First Click to Follow-Up"
]

def check_file(path):
    errors = []
    warnings = []
    with open(path) as f:
        html = f.read()

    for phrase in REQUIRED_PHRASES:
        if phrase not in html:
            errors.append(f"MISSING: '{phrase}'")

    for phrase in FORBIDDEN_PHRASES:
        if phrase in html:
            errors.append(f"FORBIDDEN: '{phrase}' found")

    inputs = re.findall(r'<input|<select|<textarea', html)
    if len(inputs) < 9:
        warnings.append(f"Form fields: {len(inputs)} found, expected 9+")

    return errors, warnings

def main():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    files = [
        ("Direction A", os.path.join(base, "prototypes/direction-a/index.html")),
        ("Direction B", os.path.join(base, "prototypes/direction-b/index.html")),
    ]

    all_pass = True
    for name, path in files:
        print(f"\n=== {name} ===")
        if not os.path.exists(path):
            print(f"  BLOCKER: File not found")
            all_pass = False
            continue
        errors, warnings = check_file(path)
        if errors:
            all_pass = False
            for e in errors:
                print(f"  ERROR: {e}")
        if warnings:
            for w in warnings:
                print(f"  WARN: {w}")
        if not errors and not warnings:
            print("  PASS: All checks passed")
        print(f"  INFO: {os.path.getsize(path):,} bytes")

    print(f"\n{'='*40}")
    print(f"RESULT: {'PASS' if all_pass else 'FAIL'}")
    return 0 if all_pass else 1

if __name__ == "__main__":
    sys.exit(main())
