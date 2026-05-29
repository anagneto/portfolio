# Ana Neto Portfolio

## Overview
Professional portfolio website showcasing Ana as a **freelance full-stack JavaScript developer** with 8+ years experience. Built to share with Sara Baldwin's agency for React app referrals.

**Live URL**: Not yet deployed (run locally with `npm run dev`)
**Target Audience**: Agency clients needing React apps

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Outfit (display), JetBrains Mono (code)
- **Deployment**: Vercel (planned)

## Project Structure
```
/Users/ananeto/Work/portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout, metadata, font preconnects
│       ├── page.tsx        # Main page with all sections (client component)
│       └── globals.css     # Design system, custom CSS, animations
├── public/                 # Static assets (add project screenshots here)
├── package.json
└── CLAUDE.md
```

## Design System

### Colors (CSS Variables in globals.css)
```css
--bg-primary: #0a0a0f        /* Main background */
--bg-secondary: #12121a      /* Secondary background */
--bg-card: rgba(255,255,255,0.03)  /* Glass cards */
--text-primary: #f0f0f5      /* Main text */
--text-secondary: #a0a0b0    /* Muted text */
--accent: #a855f7            /* Purple accent */
--accent-secondary: #ec4899  /* Pink accent */
```

### Layout
- **Content width**: All sections use `max-w-6xl mx-auto px-6` for consistent content width
- **Buttons**: Sharp corners (no rounded), use flat edges

### CSS Utility Classes
- `.gradient-text` - Purple-to-pink gradient text
- `.glass-card` - Glassmorphism card with hover effect
- `.border-gradient` - Animated gradient border on hover
- `.tech-badge` - Styled tech stack badges
- `.hover-lift` - Lift animation on hover
- `.animate-fade-in` - Fade in animation
- `.grid-bg` - Subtle grid background pattern
- `.glow` - Box shadow glow effect

### Fonts
- **Outfit**: Headings and body text (weights: 300-800)
- **JetBrains Mono**: Code, tech badges, monospace elements

## Page Sections

### 1. Hero
- Headline: "I build apps from idea to deployment."
- Subtitle with years of experience
- CTA buttons: "View my work" and "Get in touch"
- Primary stack badges

### 2. Projects (4 featured)
| Project | Year | Description | Key Tech |
|---------|------|-------------|----------|
| OneShot | 2025 | AI video screening platform (solo founder) | Next.js, Supabase, OpenAI, Stripe |
| beAPT | 2017-18 | Athlete management platform | React, Redux, GraphQL, RethinkDB |
| Cloudware Mobile | 2019-20 | Accounting app for 175K+ businesses | React Native, Expo, Firebase |
| Quiz Game | 2019 | Real-time game for 5K concurrent players | React, React Native, WebSockets |

### 3. About
- Bio text (product mindset, founder experience)
- Tech stack grid: Frontend, Backend, Database, Tools

### 4. Experience Timeline
- OneShot (2025-Now) - Co-Founder & CEO
- LeapLane (2019-2023) - Co-Founder
- Mosano (2018-2019) - Full-Stack Developer
- Jimmy Boys (2017-2018) - Full-Stack Developer

### 5. Contact
- Email: ana.neto.agn@gmail.com
- LinkedIn: linkedin.com/in/ananeto
- Location: Porto, Portugal

## Development

### Commands
```bash
npm run dev -- -p 3002  # Start dev server (localhost:3002)
npm run build    # Production build
npm run start    # Start production server
```

### Key Files to Edit
- **Content changes**: `src/app/page.tsx`
- **Styling/colors**: `src/app/globals.css`
- **Metadata/SEO**: `src/app/layout.tsx`
- **Add images**: `public/` folder

## Deployment
To deploy to Vercel:
```bash
npx vercel
```
Or connect the repo to Vercel dashboard for automatic deployments.

## Future Enhancements
- [ ] Add project screenshots/images
- [ ] Add favicon
- [ ] Add Open Graph image for social sharing
- [ ] Consider adding a blog section
- [ ] Add analytics (Vercel Analytics or Plausible)

## Contact Info
- **Email**: ana.neto.agn@gmail.com
- **LinkedIn**: linkedin.com/in/ananeto
- **GitHub**: (add if public)

## Session Handoffs
- Keep handoffs LEAN: produce only the requested output (e.g., first message of next session) without re-reading context files or pre-emptively editing memory/plan docs unless explicitly asked.
- Do not over-read context at session start; only load files directly relevant to the immediate task.

## Shipping Code
- Always use the existing `shipit` skill/command to commit and push — do not run manual git commit sequences.
- Run typecheck before any ship/commit step.
- When committing, scope the commit to ONLY the work discussed; never bundle unrelated uncommitted changes (e.g., don't mix SEO commits with CRO changes).

## Testing Preference
- Default to manual testing — produce a numbered test checklist for the user to run.
- Playwright/browser automation is acceptable for dedicated E2E test suites or when the user explicitly asks for it. Do NOT reach for it as the default for verifying flows.

## UI/Layout Conventions
- Default `min-h-screen` for main containers globally rather than passing per-page props.
- For vertical centering, restructure flex/grid layout — do NOT patch with margin-top hacks.
- Use neutral outline button variants by default; reserve destructive (red) variants only when explicitly destructive.
- Always prefix mock-data toasts/UI with [MOCK].
