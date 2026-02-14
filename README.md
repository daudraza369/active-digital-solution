# Active Digital Solution - Website

A modern marketing website for Active Digital Solution, built with Next.js 14, Tailwind CSS, and Resend for email.

## Services

- Search Engine Optimisation
- Google Business Profile
- Social Media Marketing
- Web Development
- Geo-fencing
- AI Optimisation & Gemini

## Contact

- **Phone:** (980) 277-2918
- **Email:** adam@activedigitalsolution.com
- **Address:** 9540 W QUAIL AVE, PEORIA, AZ 85382

## Development

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `RESEND_API_KEY` - API key from [Resend](https://resend.com)
- `CONTACT_EMAIL` - Email to receive contact/career form submissions

## Build

```bash
npm run build
npm start
```

## Deploy on Coolify

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push this project: `git remote add origin <repo-url> && git push -u origin main`

2. **Coolify Setup**
   - Add a new Application in Coolify
   - Connect your GitHub repository
   - Select "Dockerfile" as build method
   - Set environment variables: `RESEND_API_KEY`, `CONTACT_EMAIL`
   - Configure your domain (e.g. activedigitalsolution.com)
   - Deploy

3. **Resend Configuration**
   - Verify your domain in Resend dashboard
   - Update the `from` address in API routes to use your verified domain (e.g. `noreply@activedigitalsolution.com`)

## Logo

Replace `public/logo.svg` with your own logo. The header will display it automatically.
