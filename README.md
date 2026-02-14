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

## Push to GitHub

```bash
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/active-digital-solution.git
git branch -M main
git push -u origin main
```

## Deploy on Coolify

1. **Coolify Setup**
   - In Coolify, add a new Application
   - Connect your GitHub repository (the one you pushed to above)
   - Build Pack: Select **Dockerfile** (Coolify will detect the Dockerfile in the repo)
   - Set environment variables:
     - `RESEND_API_KEY` - Your Resend API key
     - `CONTACT_EMAIL` - adam@activedigitalsolution.com
   - Configure your domain (e.g. activedigitalsolution.com)
   - Deploy

2. **Resend Configuration**
   - Sign up at [resend.com](https://resend.com) and get an API key
   - For production, verify your domain in Resend and update the `from` address in `app/api/*/route.ts` to use your verified domain (e.g. `noreply@activedigitalsolution.com`)

## Logo

Replace `public/logo.svg` with your own logo. The header will display it automatically.
