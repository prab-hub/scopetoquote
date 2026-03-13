# Smart Estimate — Landing Page & Brand Content

---

## Logo Prompt (for Midjourney / DALL·E / Ideogram)

```
Minimal modern logo for a SaaS product called "Smart Estimate".
Concept: a document or invoice shape with a small AI spark or lightning bolt embedded in the corner,
suggesting intelligence applied to paperwork.
Style: flat vector, dark background (#0F1115), primary accent color electric green (#22c55e),
secondary white. Clean geometric shapes, no gradients, no shadows.
Should work as a small app icon and full wordmark.
Do NOT include dollar signs, calculators, or clipart.
Think Notion, Linear, Vercel aesthetic — sharp, confident, minimal.
```

---

## Brand Voice

- **Tone:** Confident, direct, no fluff. Like a sharp contractor who knows their trade.
- **Not:** Corporate, buzzword-heavy, or "AI-powered everything" hype.
- **Audience:** Agencies, freelancers, contractors, service businesses — people who write estimates every week and hate doing it.

---

## Hero Section

**Headline:**
> Your next estimate is probably one you've already written.

**Sub-headline:**
> Smart Estimate learns from your past work. Drop in a scope, get a fully-priced estimate in seconds — built from real jobs you've actually done.

**CTA:**
> Start Free → &nbsp;&nbsp; See how it works ↓

**Hero visual idea:** Split screen — left side: a messy email/PDF scope doc. Right side: a clean, numbered, priced estimate auto-generated. Arrow connecting them.

---

## Problem Section

**Heading:** The estimate grind is real.

**Copy:**
Every new project starts the same way. Someone sends a vague scope. You dig through old spreadsheets, copy-paste from last quarter's quote, adjust numbers from memory, and hope you didn't miss anything.

It takes an hour. You do it ten times a week. That's time you're not billing.

---

## How It Works (3 Steps)

### 1. Drop in your scope
Paste a project description or upload the client's document — PDF, Word, CSV, whatever they sent you.

### 2. Smart Estimate finds your closest past work
The AI scans your previous estimates for similar scopes, quantities, and line items. It surfaces the most relevant ones automatically.

### 3. Get a ready-to-send estimate
Review, adjust if needed, and export a polished PDF — with your logo, payment terms, and tax already applied.

---

## Feature Sections

### AI Similarity Matching ← *Core Feature, Lead With This*

**Heading:** "I have a few estimates with similar tasks. When I get a new project, I should get a similar estimate based on previous ones. As simple as that."
— Early user

**Copy:**
That's exactly how Smart Estimate works. Every estimate you save trains your personal estimating engine. Next time a similar scope comes in — same trade, same deliverables, ballpark same size — Smart Estimate pulls the closest matches and builds from them.

Not generic AI. Your prices. Your line items. Your way of structuring work.

You set the similarity threshold. Strict for exact matches. Loose when you want more options. You're always in control.

---

### Import Any Document

**Heading:** They sent a PDF. You'll have an estimate in 60 seconds.

**Copy:**
Clients don't send clean scopes. They send Word docs, forwarded emails, scanned PDFs, and spreadsheets.

Upload it. Smart Estimate extracts the scope, pulls out tasks and quantities, and maps them to line items. You review, confirm, and you're done.

Supported: PDF, DOCX, DOC, TXT, CSV, Markdown.

---

### Your Services Catalog

**Heading:** Your rates, always consistent.

**Copy:**
Build a catalog of your standard services — with base prices, units, billing types, and currency. When you create an estimate manually, your services are one click away. No more misremembering what you charged last time.

---

### Estimate Versioning

**Heading:** Send a revision without losing the original.

**Copy:**
Every time you revise an estimate, Smart Estimate saves the version history. Client wants to compare V1 and V3? You have both. No overwriting, no "final_FINAL_v2" file names.

---

### Professional PDF Export

**Heading:** Looks like you spent an hour on it. You spent three minutes.

**Copy:**
Every estimate exports as a clean PDF with your logo, company details, line items broken out, tax applied, and payment terms stated. Ready to send to a client without apology.

---

### Contacts & CRM (Light)

**Heading:** Know who you're quoting.

**Copy:**
Keep a simple contact book. Attach a client to any estimate and their billing address pre-fills automatically. No separate CRM needed for this.

---

### Tax Codes & Payment Terms

**Heading:** Compliance without the headache.

**Copy:**
Set up your tax codes once — GST, VAT, sales tax, whatever applies to your work and location. Attach standard payment terms (Net 30, Due on Receipt, etc.) at the org level or per estimate. It just works.

---

## Social Proof / Testimonials Section

**Use these real customer quotes:**

> "Generating estimates with similar work scope as something we have already estimated would be a nice feature."

> "I have a few estimates with similar tasks and quantities. When I prompt for a new one with similar items and scope, I should get a similar estimate based on previous ones. As simple as that."

**Frame as:** *We listened. Here's what we built.*

---

## Pricing Section Ideas

**Suggested tiers:**

| Tier | Price | For |
|------|-------|-----|
| Solo | $19/mo | 1 user, unlimited estimates |
| Team | $49/mo | Up to 5 users, shared catalog |
| Agency | $99/mo | Unlimited users, priority support |

*All plans: AI matching, PDF export, import, full estimate history.*

---

## FAQ Ideas

**Q: Does it use my estimates to train a shared AI?**
A: No. Your estimates are only used to generate suggestions for your own account. Nothing is shared across organizations.

**Q: What file types can I import?**
A: PDF, Word (.docx, .doc), plain text (.txt), Markdown (.md), and CSV.

**Q: Can I use my own tax rates?**
A: Yes. You can create custom tax codes for any rate, in addition to the built-in system codes.

**Q: What happens if my uploaded file is a scanned image?**
A: Smart Estimate uses OCR (via AWS Textract) when a PDF is scanned and not machine-readable. Text-based PDFs are processed instantly without OCR.

**Q: Is my data secure?**
A: All data is encrypted at rest (AES-256) and in transit (TLS). File content is processed in memory only — uploaded documents are never stored in the database. Row-level security ensures your data is only accessible to your organization.

---

## Footer CTAs

- **Primary:** Start your free trial →
- **Secondary:** Book a 15-min demo

---

## SEO / Meta

**Page title:** Smart Estimate — AI-Powered Estimating for Service Businesses

**Meta description:** Create accurate estimates in seconds using your own past work. Smart Estimate uses AI to match new scopes to previous jobs, extract line items from documents, and export professional PDFs.

**Target keywords:**
- estimate software for contractors
- AI estimate generator
- proposal software for agencies
- estimate from past projects
- PDF estimate tool
- smart estimating software

---

## Domain / Product Name Notes

- Primary: `smartestimates.revexos.com` (current)
- Standalone domain suggestion: `smartestimate.io` / `getsmartestimate.com` / `estimateai.app`

---

## Launch Checklist (for reference)

- [ ] Swap Supabase project to prod credentials in Vercel
- [ ] Enable pgvector extension in prod Supabase project
- [ ] Run `supabase/schema_prod.sql` on prod database
- [ ] Enable Vercel Analytics (already in codebase)
- [ ] Enable Vercel WAF (free tier)
- [ ] Rotate dev OpenAI API key
- [ ] Enable "Leaked Password Protection" in Supabase Auth settings
- [ ] Set up custom domain
- [ ] Add logo to org settings
- [ ] Set up first admin user on prod
