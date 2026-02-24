## Cursor Cloud specific instructions

This is a **Next.js 14** marketing website for Active Digital Solution. No database is required; all data is static JSON in `data/`.

### Services

| Service | Command | Port |
|---|---|---|
| Next.js dev server | `npm run dev` | 3000 |

### Standard commands

See `package.json` scripts:
- **Dev**: `npm run dev` (uses Turbopack)
- **Lint**: `npm run lint`
- **Build**: `npm run build`
- **Start (prod)**: `npm run start`

### Notes

- The project targets **Node.js 20** (see `Dockerfile`). Use `nvm use 20` if multiple versions are available.
- `.env` must exist (copy from `.env.example`). The only env vars are `RESEND_API_KEY` and `CONTACT_EMAIL`, both optional for local UI testing. Without `RESEND_API_KEY`, the `/api/contact`, `/api/career`, and `/api/proposal` endpoints return 500 on form submission — this is expected.
- The `"16 errors"` badge visible in the browser console on dev comes from external image domains being unreachable or slow; it does not indicate a code problem.
- `next.config.mjs` sets `output: "standalone"` for Docker deployment; this does not affect `npm run dev`.
