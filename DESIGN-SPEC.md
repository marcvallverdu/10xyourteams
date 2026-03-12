# 10xyourteams.co — Design Specification (PIXEL-PERFECT)

Build a Next.js 15 app (App Router, TypeScript, Tailwind CSS v4) with a single homepage matching this spec EXACTLY.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4 (use @theme in CSS, NOT tailwind.config.ts)
- Google Fonts: Playfair Display (serif headlines) + DM Sans (body/sans-serif)
- Static export ready (output: 'export' in next.config)

## Color Palette (EXACT)

| Token | Hex | Usage |
|-------|-----|-------|
| text-primary | #2B2520 | Headlines, titles, brand name |
| text-body | #6B635B | Body text, descriptions |
| terracotta | #C0704A | CTA buttons, accent highlights, bullet keywords, Card 1 top bar |
| sage | #8B9A6B | Nav button, card borders, Card 2 top bar, sparklines |
| forest | #5C6B4F | Card 3 top bar, Card 3 link |
| footer-bg | #B5BFA1 | Footer background |
| page-bg | #F7F4EF | Page background (warm cream) |
| card-bg | #FFFFFF | Cards |

## Typography

| Role | Font | Weight | Size | Color |
|------|------|--------|------|-------|
| Hero headline | Playfair Display | 900 | 56px (3.5rem) | text-primary |
| Section/card titles | Playfair Display | 700 | 24px (1.5rem) | text-primary |
| Body text | DM Sans | 400 | 16px | text-body |
| Nav brand | Playfair Display | 700 | 18px | text-primary |
| Button text | DM Sans | 500 | 15px | white |
| CTA links | DM Sans | 500 | 14px | varies per card |
| Footer headings | DM Sans | 600 | 15px | text-primary |
| Footer links | DM Sans | 400 | 14px | text-body |

## Page Structure (top to bottom)

### 1. NAVIGATION BAR
- Full width, horizontal, content max-width ~1100px centered
- Left: "10xyourteams.co" in Playfair Display bold
- Right: "Login" plain text link + "Customize" button (sage bg, white text, rounded-lg ~8px, px-4 py-2)
- Padding: py-5, generous horizontal padding

### 2. HERO SECTION
- Two columns: text left (~55%), honeycomb illustration right (~45%)
- Padding top: ~80px from nav

**Left side:**
- Headline: "Stop Cutting.\nStart Multiplying." — Playfair Display 900, 56px, leading-[1.08], text-primary
- Subtitle: "The companies winning with AI aren't just getting leaner — they're building engines where every person does the work of ten. We help ops leaders make that shift." — DM Sans 400, 16px, text-body, max-w-[420px], mt-5
- CTA button: "Get started →" — pill shape (rounded-full), bg terracotta, white text, DM Sans 500, px-6 py-3, mt-7

**Right side — Honeycomb SVG illustration:**
- Build as an inline SVG component
- ~20-25 hexagons in a honeycomb tessellation, isometric/3D perspective (top face + side faces visible)
- Most hexagons: thin gray stroke (#AAA), no fill (wireframe)
- 5-7 hexagons in the lower-center cluster: filled terracotta (#C0704A) with slightly darker side faces for 3D effect
- Some hexagons with lighter terracotta opacity for transition effect
- Thin connecting lines/stem at bottom-left in light gray
- The whole cluster roughly diamond-shaped, wider in middle

### 3. COMPARISON CARD SECTION
- ~100px below hero
- Single container with 1px sage border, rounded-2xl (~16px), white bg, p-8
- Two columns inside, divided by a thin 1px vertical line (#DDD) in the center

**Left column — "The Shrink Trap":**
- Title: Playfair Display 700, 24px, text-primary
- 4 bullet points with terracotta dot markers:
  - "**Declining** growth analytics" (Declining in terracotta)
  - "**Improving** processes without changing roles" (Improving in terracotta)
  - "**Cutting** to reinvest in margins" (Cutting in terracotta)
  - "**Identifying** losses instead of growth" (Identifying in terracotta)
- Bottom: small SVG sparkline (~120x40px), sage green line trending downward

**Right column — "The 10x Engine":**
- Title: "The " in text-primary + "10x Engine" in terracotta, same font/size
- 4 bullet points with terracotta dot markers:
  - "**The 10x engine** for compounding growth" (bold part in terracotta)
  - "**Hiring** environments built for multiplication" (Hiring in terracotta)
  - "**Multiplying** output through AI-augmented people" (Multiplying in terracotta)
  - "**Ascending** revenue per employee, not just margins" (Ascending in terracotta)
- Bottom: small SVG sparkline (~120x40px), starts sage green, transitions to terracotta, trending UP

### 4. THREE PILLAR CARDS
- ~100px below comparison section
- Three cards in a row, equal width, gap-6
- Each card: 1px sage border, rounded-2xl, white bg, p-6
- Each has a colored top accent bar (4px tall, full width, inside border radius):
  - Card 1: terracotta bar
  - Card 2: sage bar
  - Card 3: forest bar

**Card 1 — Directive:**
- Title: "Directive" Playfair Display 700, 20px
- Body: "Your CEO says 'lean into AI.' Your team hears 'do nothing.' That's not a directive — that's a vibe. We help you build the real mandate." DM Sans 400, 14px, text-body
- CTA: "Explore →" in terracotta, DM Sans 500

**Card 2 — Measurement:**
- Title: "Measurement"
- Body: "Before you can transform anything, you need to know what your people actually do. Hour by hour. Task by task. Which work should exist at all?" 
- CTA: "Explore →" in sage

**Card 3 — Enablement:**
- Title: "Enablement"
- Body: "The tools, the permissions, the people infrastructure. Champions who scout. Superstars who multiply. And explicit permission to redesign how work gets done."
- CTA: "Explore →" in forest

### 5. FOOTER
- Full-width footer-bg background
- Content max-width ~1100px, py-12, three columns:
  - Left (~40%): "10xyourteams.co" Playfair Display bold 20px + tagline "Exponential growth through AI-augmented teams" DM Sans 14px text-body
  - Middle (~30%): "Product" heading (DM Sans 600, 15px) + links: Home, About, Workshop (DM Sans 400, 14px, text-body, stacked)
  - Right (~30%): "Contact" heading + links: Get in touch, Privacy, Terms

**Sub-footer:** thin top border line (1px, #8B9A6B50), py-4
- Left: "10xyourteams.co" small text
- Right: "© 2026 Marc Vallverdú" small text

## IMPORTANT RULES
1. Use Tailwind v4 with @theme directive in globals.css (NOT tailwind.config.ts)
2. Honeycomb MUST be an inline SVG — no images, no external files
3. Sparklines MUST be inline SVGs — simple path elements
4. Mobile responsive: stack to single column on mobile
5. All text must use the REAL copy above, not placeholder/lorem
6. Port: use port 3860 in dev script
7. PostCSS config needs .mjs extension if needed
8. Commit all work when done
