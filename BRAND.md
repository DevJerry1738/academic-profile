# Brand Guide — AcademicProfiles

## Overview
Tone: Professional, academic, modern, credible.
Primary font: **Manrope** (headings, body)

## Typography
- Headings (h1, h2): Manrope, weight 600–700
- Body text: Manrope, weight 400–500
- Small text: 0.875rem, weight 400

## Color roles (CSS variables)
- --brand-primary: #3fd2c7 (Primary actions)
- --brand-secondary: #99ddff (Secondary actions)
- --brand-accent: #00458b (Accent / deep blue)
- --bg: #f8fafc (Neutral background)
- --surface: #ffffff (Cards, surfaces)
- --text: #0f172a (Primary text)
- --muted: #475569 (Muted text)
- --border: rgba(15,23,42,0.06) (Subtle borders)

## Buttons
Variants:
- primary: main CTAs — solid `--brand-primary` background, dark text for contrast
- secondary: subtle emphasis — `--brand-secondary`
- outline: transparent background, subtle border
- ghost: minimal, text-only
- danger: reserved for destructive actions

Sizes: sm, md, lg

Accessibility:
- Focus indicators must be visible (outline with `color-mix` using `--brand-accent`)
- Disabled state must be visually apparent and non-interactive

## Spacing & hierarchy
- Use base spacing variables (e.g. 0.25rem, 0.5rem, 1rem, 1.5rem)
- Prefer consistent max-widths for containers (e.g., 72rem)
- Use larger vertical spacing for hero/section separation

---
Implementation notes:
- Manrope is imported in `src/styles/globals.css` via Google Fonts
- Color variables are exposed in `:root` in `globals.css`
- Buttons implemented as `src/components/ui/Button.tsx` and styled with `Button.module.css`

Design constraints: keep UI calm and professional, avoid overly bright or flashy color usage, prioritize readability and accessibility.