# Kerne AI: notes for Claude

Marketing site for Kerne AI, Filip Tomczak's AI consulting business (AI assistants, automation and
accounting/CRM integrations for small and mid-sized companies). Sister project of the portfolio
(repo `arraysstartatzero/test-portfolio`).

## Stack
Next.js 15 (app router), React 19, TypeScript, plain CSS (`app/globals.css`). Fonts from fontsource:
Fraunces (display), Instrument Sans (text), JetBrains Mono (labels). No 3D / no animation libraries.

## Structure
- `components/Site.tsx`: the whole one-page site (hero, services, example, integrations, process,
  principles, about, FAQ, contact). `CoreDiagram.tsx` = hero SVG, `ChatDemo.tsx` = animated chat demo
  with FICTIONAL data, `ContactForm.tsx`.
- Copy: `lib/dict.ts` (DA / EN / PL). Danish is the server-rendered default. Language pick:
  saved choice → `kerne-country` cookie from `middleware.ts` (Vercel geo) → time zone → English.
- Contact: `app/api/contact` → Supabase RPC `portfolio_submit_contact` (shared with the portfolio),
  company field prefixed `[Kerne AI]`, so leads show up in the portfolio's /admin inbox.
- `lib/site.ts`: contact email and portfolio link.

## Env vars (Vercel; names only)
SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY. Template in `.env.example`.

## Design
Warm paper (#f1ece2), ink, moss green (#2f4a3a), pollen-yellow highlight (#dfe86c). Must not look
like generic AI templates. Reference business model: triage.dk (structure only; never copy its copy).

## Privacy rules (same as the portfolio)
Never mention the owner's employer or any private work data. No phone number or birthday.
Demo data must stay fictional. Never print or commit secrets.

## Build
`npm install && npm run build`
