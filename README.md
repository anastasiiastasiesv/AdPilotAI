# AdKov AI — Landing Page

Premium landing page for AdKov AI — a creative intelligence for marketers, creators, and agencies, available in Telegram.

## Stack

- **React 18** + **TypeScript**
- **Vite** — instant dev server, fast builds
- **lucide-react** — icons
- CSS-in-JS via inline styles + global CSS classes

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.tsx              # Root component
├── main.tsx             # Entry point
├── index.css            # Base reset
├── styles.css           # Global classes & animations
├── i18n.ts              # All translations (EN / UK / RU)
├── types.ts             # TypeScript interfaces
├── hooks/
│   ├── useInView.ts     # Intersection Observer hook
│   ├── useLang.ts       # Language persistence hook
│   └── useScrolled.ts   # Scroll position hook
├── components/
│   ├── Reveal.tsx       # Scroll-triggered fade-in wrapper
│   ├── LangSwitcher.tsx # Language dropdown
│   ├── TgIcon.tsx       # Telegram SVG icon
│   └── ExampleOutput.tsx # Renders typed example outputs
├── sections/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── Examples.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── EarlyAccess.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
└── data/
    └── examples.ts      # Static example output data
```

## Internationalisation

Language is toggled via the switcher in the navbar. Selection persists in `localStorage`.

Supported: **English** · **Українська** · **Русский**

To add a new language, add an entry to `src/i18n.ts` and `src/i18n.ts → LANGS`.
