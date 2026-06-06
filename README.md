# Reviva Nutrition

A modern, responsive marketing website for **Reviva Nutrition** — a personalized nutrition and wellness practice by Heena. Built with Next.js 16, Tailwind CSS 4, and Framer Motion for smooth animations.

> **Note:** This project is live at **[https://reviva-nutrition.vercel.app](https://reviva-nutrition.vercel.app)**. Content, images, and client-specific details will be finalised and updated by the client.

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
│   ├── about/page.tsx      # About page (full — story, stats, charts, YouTube)
│   ├── consult/page.tsx    # Consultation page (process, programs, FAQs)
│   ├── testimonials/page.tsx  # Testimonials page (full grid)
│   └── globals.css         # Global CSS, CSS variables, animations
├── components/
│   ├── ScrollToTop.tsx     # Client component — resets scroll on page load
│   ├── about/
│   │   ├── AboutHero.tsx       # Hero banner with CTA
│   │   ├── AboutStory.tsx      # Story section with credentials & specialties
│   │   ├── AboutStatsCharts.tsx # Animated counters + Recharts (bar + donut)
│   │   └── AboutYoutube.tsx    # YouTube topics section
│   ├── consult/
│   │   ├── ConsultHero.tsx     # Consult hero section
│   │   ├── HowItWorks.tsx      # 3-stage process (pre / consult / post)
│   │   ├── ProgramOptions.tsx  # Duration cards + who to consult with
│   │   └── FaqAccordion.tsx    # Animated FAQ accordion
│   ├── testimonials/
│   │   ├── TestimonialsHero.tsx # Hero with stats strip
│   │   └── TestimonialsGrid.tsx # Full testimonials grid (8 cards)
│   └── home/               # Homepage section components
│       ├── Navbar.tsx          # Sticky, shrinking navbar with mobile menu
│       ├── HeroSlider.tsx      # Auto-advancing hero slider (touch-swipe enabled)
│       ├── TrustTicker.tsx     # Scrolling specialty ticker banner
│       ├── ProcessCards.tsx    # "Your Healing Journey" 4-step cards (with blended bg images)
│       ├── AboutPreview.tsx    # About section with animated counters
│       ├── TestimonialsPreview.tsx  # Testimonial cards grid
│       ├── ConsultationCTA.tsx # CTA section with validated contact form
│       ├── Footer.tsx          # Site footer with social links
│       ├── WhatsAppFloat.tsx   # Fixed WhatsApp floating button
│       └── hero-slides/
│           ├── Slide1.tsx      # Typewriter hero slide (portrait-first on mobile)
│           ├── Slide2.tsx      # Sunset/Sunrise opportunity-to-heal slide
│           └── Slide3.tsx      # Online consultation slide (larger laptop on desktop)
├── data/                   # Static data / content
│   ├── about-stats.ts      # Chart data + YouTube topics (easy to update)
│   ├── faqs.ts             # FAQ questions and answers (easy to update)
│   ├── hero.ts             # Hero metrics
│   ├── process-cards.ts    # 4-step process content (includes image paths + prompts)
│   ├── site.ts             # Brand, contact, social config
│   └── testimonials.ts     # Home page testimonials preview
└── public/
    └── images/
        ├── about/          # About section images
        ├── hero/           # Hero slide images (sunset-disease.jpg + sunrise-heal.jpg to be added)
        ├── process/        # Process card background images (to be added — prompts in data/process-cards.ts)
        └── logo/           # Brand logo
```

---

## Key Features

- **Three full pages built** — About (story, credentials, charts, YouTube), Consult (3-stage process, program options, FAQs), and Testimonials (full grid of 8 client stories + Google Form feedback CTA).
- **Auto-advancing hero slider with touch/swipe** — Slide 1 waits ~12 s for the typewriter; slides 2 & 3 auto-advance every 5.5 s. Pauses on hover; swipe left/right on mobile to manually navigate.
- **Typewriter animation** — Slide 1 cycles through "Nutritionist → Dietician → Coach → Guide" at a comfortable pace with smooth type/delete/pause rhythm.
- **Slide 2 — Sunset/Sunrise redesign** — Dual-image concept: sunset card showing disease burden vs. sunrise card showing Reviva-guided recovery. Headline "Opportunity To Heal." + "Begin Your Journey" CTA. Gradient fallback while real images are placed.
- **Smooth scroll-triggered sections** — Every section fades in _and_ out as you scroll (Framer Motion `whileInView`, `once: false`).
- **Shrinking sticky navbar** — Expands to 96 px on top, smoothly shrinks to 64 px on scroll. Works on all pages. `overflow-x: clip` used globally to avoid breaking `position: sticky`.
- **Mobile portrait-first Slide 1** — Heena's portrait appears above the text on mobile; reversed on desktop.
- **Validated consultation form** — Per-field inline errors (name, phone, email), placeholder updated to "Ex. Undergoing Diabetes 10yrs.", spinner during submission, success card on completion.
- **Process Cards with blended backgrounds** — 4-step cards use CSS `background-image` with gradient fallback. Drop real images at `public/images/process/` (prompts provided in `data/process-cards.ts`).
- **Testimonials feedback section** — Google Form CTA block after the testimonials grid linking to the client's feedback form.
- **Consult page — Work With Heena** — "Team Nutritionist" option removed; redesigned as a single prominent card showcasing Heena's expertise with stats.
- **Recharts statistics** — About page includes a horizontal bar chart and donut chart. All chart data lives in `data/about-stats.ts` for easy non-technical updates.
- **YouTube section** — About page lists YouTube topics with links. Add/remove topics by editing `youtubeTopics` in `data/about-stats.ts`.
- **Easy content management** — `data/about-stats.ts` (charts + YouTube), `data/faqs.ts` (FAQs) are clearly commented and simple to edit without coding knowledge.
- **Scroll-to-top on reload** — Sets `history.scrollRestoration = 'manual'` and calls `scrollTo(0,0)` on every page load.
- **Trust ticker** — Infinite scrolling specialty banner with seamless loop.
- **WhatsApp float button** — Fixed bottom-right, links directly to business WhatsApp.
- **Global 95% scale** — `html { font-size: 95% }` reduces all rem-based sizes slightly for a tighter feel.
- **Consultation Form Integration** — Contact form submissions processed through a Next.js API route and delivered via Resend.

---

## Image Assets Needed

The following images need to be provided by the client and placed in the correct paths:

| Image                     | Path                                          | Notes                             |
| ------------------------- | --------------------------------------------- | --------------------------------- |
| Sunset — disease burden   | `public/images/hero/sunset-disease.jpg`       | Prompt in `Slide2.tsx`            |
| Sunrise — health restored | `public/images/hero/sunrise-heal.jpg`         | Prompt in `Slide2.tsx`            |
| Assessment card bg        | `public/images/process/assessment-bg.jpg`     | Prompt in `data/process-cards.ts` |
| Personalized Plan card bg | `public/images/process/plan-bg.jpg`           | Prompt in `data/process-cards.ts` |
| Guided Support card bg    | `public/images/process/support-bg.jpg`        | Prompt in `data/process-cards.ts` |
| Transformation card bg    | `public/images/process/transformation-bg.jpg` | Prompt in `data/process-cards.ts` |

All sections display beautifully with gradient fallbacks until real images are placed.

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
- [x] About page — full (story, credentials, charts, YouTube)
- [x] Consult page — full (3-stage process, program options, FAQs)
- [x] Testimonials page — full (8 client stories grid)
- [x] Consultation form integration (Resend) with inline validation
- [x] Touch/swipe hero slider for mobile
- [x] No horizontal overflow on mobile
- [x] Vercel deployment — live at [reviva-nutrition.vercel.app](https://reviva-nutrition.vercel.app)

_Images and copy placeholders will be replaced with final client assets._
