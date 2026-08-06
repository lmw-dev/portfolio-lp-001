# Verification Methodology

## Ad-hoc Verification Summary

**Date:** 2026-08-06
**Scope:** Two HTML landing page prototypes (Direction A + B)
**Command:** `python3 scripts/hermes-verify-lp001.py`

### Results

| Check | Direction A | Direction B |
|-------|-------------|-------------|
| Hero headline phrases | ✅ | ✅ |
| Hero subheadline | ✅ | ✅ |
| CTAs (both) | ✅ | ✅ |
| Connected Workflow (6 steps) | ✅ | ✅ |
| Lead Form (9 fields) | ✅ | ✅ |
| FAQ (5 controlled items) | ✅ | ✅ |
| Disclaimer present | ✅ | ✅ |
| No forbidden content | ✅ | ✅ |
| **RESULT** | **PASS** | **PASS** |

### Important Caveats

1. **Verification type:** Ad-hoc, not canonical test suite
2. **Scope:** Content completeness and forbidden-content checks only
3. **Does NOT verify:**
   - Visual quality
   - Responsive behavior across breakpoints
   - Accessibility (WCAG)
   - Performance
   - Production readiness
   - Cross-browser compatibility
4. **This is not a green test suite** — it's a content sanity check

### What Would Constitute Real Testing

- Visual regression testing (screenshot comparison)
- Responsive testing at 320px, 768px, 1024px, 1440px
- Accessibility audit (axe-core)
- Lighthouse performance audit
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Form validation testing (all states)
- Link integrity checking

None of these have been performed. The HTML prototypes are functional drafts, not production artifacts.
