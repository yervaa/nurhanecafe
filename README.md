# NurHane

Premium bakery storefront built with Next.js App Router, TypeScript, Tailwind CSS, and Sanity CMS.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add your Sanity project values if you want live CMS content.
4. Run `npm run dev`.

## Sanity

- Studio route: `/studio`
- Content types:
  - `siteSettings`
  - `homepageHero`
  - `aboutSection`
  - `product`
  - `socialLinks`

If Sanity environment variables are missing, the app falls back to local placeholder content so design work can continue without backend setup.

## Deployment

### Deploy to Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Leave the framework preset as `Next.js`.
4. Add environment variables only if you want live Sanity content in preview or production.
5. Deploy. If no Sanity env vars are set, the preview still renders with fallback content.

### Required environment variables

For a basic preview deploy:

- None required

For live Sanity content:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

### Test preview locally

1. Install dependencies with `npm install`.
2. Run `npm run dev` for a local preview-like environment.
3. Run `npm run build` to verify the production build before sharing a Vercel preview link.
