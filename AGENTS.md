# AGENTS.md

## Cursor Cloud specific instructions

**Product**: Active Digital Solution — a Next.js 14 marketing website (TypeScript, Tailwind CSS, App Router). Single service, no database, no monorepo.

### Running the app

- `npm run dev` starts the dev server on port 3000 (uses `--turbo` flag).
- `npm run build` produces a production build (standalone output mode).
- `npm run lint` runs ESLint via `next lint`.

### Environment variables

- Copy `.env.example` to `.env.local` for local development.
- `RESEND_API_KEY` is required only for the email-sending API routes (`/api/contact`, `/api/career`, `/api/proposal`). The site runs fine without it; forms will show a graceful error on submission.

### Gotchas

- `next.config.mjs` uses `output: "standalone"` — this is the Docker production mode. It does not affect `npm run dev`.
- There are no automated tests in this project (no test framework configured).
- External images are loaded from `therankinggeeks.ai`, `picsum.photos`, and `images.unsplash.com` — these require network access.
