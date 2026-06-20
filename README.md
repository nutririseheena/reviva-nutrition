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
│       ├── AboutPreview.tsx    # About section — "It began with a myth" + story + stats box
│       ├── TestimonialsPreview.tsx  # 3 Pillars section + testimonial cards (gradient)
│       ├── ConsultationCTA.tsx # Health Issues: Myths & Facts section
│       ├── HealingCTA.tsx      # "Ready to Discover the Root Cause?" redirect CTA → /consult
│       ├── Footer.tsx          # Site footer with social links
│       ├── WhatsAppFloat.tsx   # Fixed WhatsApp floating button
│       └── hero-slides/
│           ├── Slide1.tsx      # Typewriter hero slide — "Hi, Myself Heena"
│           ├── Slide2.tsx      # Sunset of Lifestyle Diseases / Sunrise in Health dual-card
│           └── Slide3.tsx      # Online consultation slide — larger laptop, 2025 outcomes bar chart
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
- **Slide 1 — "Hi, Myself Heena"** — Updated greeting, tagline "At Reviva Nutrition, Believe in the Power of Nutrition 🌱", and bullet-style description.
- **Slide 2 — Sunset of Lifestyle Diseases / Sunrise in Health** — Left card shows 6 lifestyle disease conditions; right card shows the 4 Reviva pillars (Identify Root Cause, Science-Backed, Personalized Nutrition, Lasting Wellness). Image prompts included in `Slide2.tsx` comments.
- **Slide 3 — 2025 Outcomes Dashboard** — Laptop mockup enlarged; area chart replaced with horizontal bar chart showing 2025 health outcome case data (7 conditions).
- **ProcessCards — "Believe in Nutrition Power for Better health"** — Heading fixed; cards renamed (Detailed Assessment, Root Cause Identification, Personalized Diet Plan, Transformation) with updated icons and image prompts in `data/process-cards.ts`.
- **AboutPreview — "It began with a myth"** — Full redesign: quote above image on left, story text + dark green stats box (500+ Lives Transformed, 95% Satisfaction) on right. Content updated with client's 20-year journey story.
- **TestimonialsPreview — 3 Pillars + Testimonials** — New "3 Pillars Behind Every Success Story" grid (Root Cause Healing, Personalized Nutrition, Lasting Transformation) merged into the same section above testimonial cards. Cards updated with warm on-brand gradients.
- **ConsultationCTA — Health Issues: Myths & Facts** — Consultation form replaced with a clean Myth vs Fact comparison table (5 entries: Thyroid, Diabetes, PCOS, Constipation, Fatigue).
- **HealingCTA — Root Cause CTA** — New section: "Ready to Discover the Root Cause and Transform Your Health?" with a gold "Begin Your Healing Journey" button linking to `/consult`.
- **Smooth scroll-triggered sections** — Every section fades in _and_ out as you scroll (Framer Motion `whileInView`, `once: false`).
- **Shrinking sticky navbar** — Expands to 96 px on top, smoothly shrinks to 64 px on scroll.
- **Process Cards with blended backgrounds** — 4-step cards use CSS `background-image` with gradient fallback. Drop real images at `public/images/process/` (prompts in `data/process-cards.ts`).
- **Recharts statistics** — About page includes a horizontal bar chart and donut chart. Slide 3 now shows a horizontal bar chart of 2025 health outcomes.
- **Easy content management** — `data/about-stats.ts` (charts + YouTube), `data/faqs.ts` (FAQs), `data/process-cards.ts` (step titles + image prompts) are clearly commented.
- **Scroll-to-top on reload**, **Trust ticker**, **WhatsApp float button**, **Global 95% scale** — all unchanged.

---

## Image Assets Needed

The following images need to be provided by the client and placed in the correct paths:

| Image                     | Path                                          | Notes                             |
| ------------------------- | --------------------------------------------- | --------------------------------- |
| Sunset — disease burden   | `public/images/hero/sunset-disease.png`       | Prompt in `Slide2.tsx`            |
| Sunrise — health restored | `public/images/hero/sunrise-heal.png`         | Prompt in `Slide2.tsx`            |
| Detailed Assessment bg    | `public/images/process/assessment-bg.png`     | Prompt in `data/process-cards.ts` |
| Root Cause Identification | `public/images/process/plan-bg.png`           | Prompt in `data/process-cards.ts` |
| Personalized Diet Plan bg | `public/images/process/support-bg.png`        | Prompt in `data/process-cards.ts` |
| Transformation card bg    | `public/images/process/transformation-bg.png` | Prompt in `data/process-cards.ts` |

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
