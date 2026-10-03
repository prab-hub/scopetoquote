# ScopeToQuote

> **Archived.** The standalone product was retired, and its estimating workflow now lives in the free [Quote Generator](https://revexos.com/quote-generator) on RevExOS. Listed at [revexos.com/projects](https://revexos.com/projects#scopetoquote).

ScopeToQuote turned a client scope (a PDF, Word document or email) into a priced estimate built from your past jobs, for agencies, consultants and other service businesses that write estimates every week.

## What's in this repo

This repo is the product's **marketing site**, not the estimating app:

- Landing page with a scope-to-estimate demo (`app/page.tsx`)
- Generated Open Graph image (`app/opengraph-image.tsx`)
- Privacy policy and terms of service (`app/privacy`, `app/tos`)
- Sitemap and robots (`app/sitemap.ts`, `app/robots.ts`)

## How the product worked

1. Upload a scope document or paste an email.
2. The scope is split into deliverables and mapped to line items from previous estimates.
3. Each line is priced from what similar work cost before, giving a full estimate to review and edit.

## Stack

Next.js, TypeScript, Tailwind CSS, Vercel Analytics. Deployed on Vercel.

```bash
npm install
npm run dev
```

## Author

Prabhuling M. ([revexos.com](https://revexos.com), [LinkedIn](https://www.linkedin.com/in/prabhuling-m/))
