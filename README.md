# Reviva Nutrition

A modern, responsive marketing website for **Reviva Nutrition** — a personalized nutrition and wellness practice by Heena. Built with Next.js 16, Tailwind CSS 4, and Framer Motion for smooth animations.

> **Note:** This project is currently in its structural/scaffolding phase. Text content, images, and client-specific details will be updated once received from the client.

---

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router)  |
| Language   | TypeScript 5                                   |
| Styling    | Tailwind CSS 4                                 |
| Animations | Framer Motion 12                               |
| Icons      | Lucide React · React Icons                     |
| Charts     | Recharts                                       |
| Fonts      | Geist Sans · Cormorant Garamond (Google Fonts) |
| Linting    | ESLint 9 + eslint-config-next                  |
| Formatting | Prettier 3                                     |
| Deployment | Vercel                                         |

---

## Project Structure

```
reviva-nutrition/
├── app/                    # Next.js App Router pages
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Resend email API endpoint
│   ├── layout.tsx          # Root layout (fonts, metadata, scroll-to-top)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page (scaffold)
│   ├── consult/page.tsx    # Consultation page (scaffold)
│   ├── testimonials/page.tsx  # Testimonials page (scaffold)
│   └── globals.css         # Global CSS, CSS variables, animations
├── components/
│   ├── ScrollToTop.tsx     # Client component — resets scroll on page load
│   └── home/               # All homepage section components
│       ├── Navbar.tsx          # Sticky, shrinking navbar with mobile menu
│       ├── HeroSlider.tsx      # Auto-advancing hero slider (3 slides)
│       ├── TrustTicker.tsx     # Scrolling specialty ticker banner
│       ├── ProcessCards.tsx    # "Your Healing Journey" 4-step cards
│       ├── AboutPreview.tsx    # About section with animated counters
│       ├── TestimonialsPreview.tsx  # Testimonial cards grid
│       ├── ConsultationCTA.tsx # CTA section with contact form
│       ├── Footer.tsx          # Site footer with social links
│       ├── WhatsAppFloat.tsx   # Fixed WhatsApp floating button
│       └── hero-slides/
│           ├── Slide1.tsx      # Typewriter hero slide
│           ├── Slide2.tsx      # Lifestyle hero slide
│           └── Slide3.tsx      # Online consultation slide
├── data/                   # Static data / content
│   ├── hero.ts             # Hero metrics and chart data
│   ├── process-cards.ts    # 4-step process content
│   ├── site.ts             # Brand, contact, social config
│   └── testimonials.ts     # Client testimonials
└── public/
    └── images/
        ├── about/          # About section images
        ├── hero/           # Hero slide images
        └── logo/           # Brand logo
```

---

## Key Features

- **Auto-advancing hero slider** — Slide 1 waits ~12 s for the typewriter to cycle all 4 roles before auto-advancing; slides 2 & 3 auto-advance every 5.5 s. Pauses on hover; manual arrow/dot navigation resets the timer.
- **Typewriter animation** — Slide 1 cycles through "Nutritionist → Dietician → Coach → Guide" with smooth type/delete/pause rhythm.
- **Smooth scroll-triggered sections** — Every section below the hero fades in _and_ out as you scroll through (Framer Motion `whileInView`, `once: false`).
- **Shrinking sticky navbar** — Expands to 96 px on top, smoothly shrinks to 64 px on scroll with hysteresis (triggers at 50 px down, releases at 30 px up) to eliminate flicker. Always uses backdrop blur.
- **Scroll-to-top on reload** — Sets `history.scrollRestoration = 'manual'` and calls `scrollTo(0,0)` on every page load.
- **Trust ticker** — Infinite scrolling specialty banner with seamless loop.
- **Animated stat counters** — Count up once when the About section enters the viewport.
- **WhatsApp float button** — Fixed bottom-right, links directly to business WhatsApp.
- **Global 95% scale** — `html { font-size: 95% }` reduces all rem-based sizes slightly for a tighter feel.
- **Consultation Form Integration** — Contact form submissions are processed through a Next.js API route and delivered directly to the business email using Resend.

---

## Getting Started

> **Requires Node.js ≥ 20.9.0**

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Commands

```bash
npm run dev           # Start development server (hot reload)
npm run build         # Production build
npm run start         # Start production server
npm run lint          # Check for lint errors
npm run lint:fix      # Auto-fix lint errors
npm run format        # Format all files with Prettier
npm run format:check  # Check formatting without writing
```

---

## Deployment (Vercel)

This project is configured for zero-config Vercel deployment.

### Environment Variables

The following environment variable must be configured:

```env
RESEND_API_KEY=your_resend_api_key
```

### Deployment Steps

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add the `RESEND_API_KEY` environment variable in the Vercel dashboard.
4. Deploy the project.
5. Vercel will automatically build and host the application.

### Contact Form

The consultation form uses:

- Next.js API Routes
- Resend Email API

All consultation requests are delivered directly to the configured business email address.

---

## Brand Colours (CSS Variables)

| Variable              | Value                   | Usage                   |
| --------------------- | ----------------------- | ----------------------- |
| `--reviva-green`      | `#2f6b2d`               | Primary brand green     |
| `--reviva-green-dark` | `#1e4a1c`               | Footer, dark accents    |
| `--reviva-gold`       | `#f4b21b`               | CTA buttons, highlights |
| `--reviva-gold-light` | `rgba(244,178,27,0.15)` | Chip backgrounds        |
| `--reviva-cream`      | `#faf8f2`               | Page background         |

---

## Status

- [x] Homepage complete
- [x] Consultation form integration (Resend)
- [x] Vercel deployment configuration
- [ ] About page — content pending
- [ ] Consult page — content pending
- [ ] Testimonials page — content pending

_Content, images, and copy will be updated once received from the client._
