# Design Prompt: Aura Sea Maritime Home Page

This document describes the visual identity and structural layout of the Aura Sea Home page. Use this as a reference to maintain design consistency when generating new sections or pages.

## 1. Visual Identity & Aesthetic
The design follows a **Premium Maritime "Liquid Glass"** aesthetic. It feels immersive, professional, and modern, drawing inspiration from high-end iOS-style interfaces combined with atmospheric nautical themes.

*   **Atmosphere:** Immersive, trustworthy, and technologically advanced.
*   **Key Effect:** **Glassmorphism**. Extensive use of semi-transparent surfaces, deep backdrop blurs (20px - 28px), and specular highlights.

## 2. Color Palette
The site supports both light and dark modes, with a strong focus on high-contrast, atmospheric dark themes for the maritime sections.

*   **Primary Background:** 
    *   Dark: `hsl(215, 25%, 8%)` (Deep Navy/Charcoal)
    *   Light: `hsl(200, 30%, 96%)` (Soft Sky Blue/Grey)
*   **Accents:**
    *   **Marine Blue:** `hsl(220, 75%, 45%)` (Primary brand color)
    *   **Cyber Cyan:** `text-cyan-300` (Used for highlights and glow effects)
    *   **Brand Gradients:** Purple (`hsl(283, 78%, 52%)`) → Violet (`hsl(262, 76%, 50%)`) → Blue (`hsl(225, 82%, 48%)`)
*   **Surfaces:**
    *   **Glass Card:** `rgba(255, 255, 255, 0.45)` (Light) or `rgba(20, 30, 48, 0.50)` (Dark) with `backdrop-filter: blur(24px)`.

## 3. Typography
*   **Headline Font:** "Asterisk Sans" (primary) or "Montserrat". Characterized by bold, uppercase, tracking-tight styles for a premium look.
*   **Body Font:** "Asterisk Sans", "Inter", or "Open Sans". Clean, legible, and modern.
*   **Styling:**
    *   Large headings use `drop-shadow` for readability against complex backgrounds.
    *   Subtitles often use high font weights (Medium/Semi-bold) with generous line heights.

## 4. UI Components & Elements
### Branding & Navigation
*   **Logo:** Aura Sea uses two versions of its logo: `logoWhite` for transparent/dark backgrounds and `logoDark` for lighter backgrounds. In the header, it's typically displayed at `h-20`.
*   **Header Navigation:** 
    *   Links use `font-semibold` and an underlined style when active (`underline underline-offset-8`).
    *   Hover state: Text color shifts to `text-cyan-200`.
    *   Scrolling: The header transitions from transparent to a `glass-card` with a subtle bottom border and shadow once the user scrolls.

### Liquid Glass Buttons
*   **Style:** `background: transparent`, `backdrop-filter: blur(28px)`, `border: 1px solid white/45%`.
*   **Interaction:** Scale down to `0.97` on active click, hover increases shadow intensity and border brightness.
*   **Glow:** Primary buttons have a subtle purple/blue shadow glow (`0 4px 24px hsl(var(--btn-brand-purple) / 0.22)`).

### Glass Cards
*   **Premium Glass:** `border: 2px`, `backdrop-filter: blur(28px)`, used for high-importance CTA blocks.
*   **Standard Glass:** `border: 1px`, `backdrop-filter: blur(24px)`, used for feature grids.

### Gradients & Overlays
*   **Hero Overlay:** `bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent`.
*   **Glow Circles:** Soft, blurred background circles (`bg-blue-500/10`, `blur-3xl`) situated behind content to add depth and visual interest without clutter.

## 5. Layout Structure
1.  **Fixed Background:** A full-screen "Stormy Sea" background image with a dark overlay (`black/40`) to ensure contrast for all sections.
2.  **Hero Section:** 
    *   Min-height `90vh`.
    *   Large card-style hero with internal image/video.
    *   Centered text with high-impact h1 tagline using `font-headline` and `uppercase`.
    *   Dual CTA buttons (Primary & Secondary).
3.  **Feature Grids:** 3-column layouts using standard `glass-card` components for "Vision", "Benefits", etc.
4.  **CTA Section:** A single, centered `glass-premium` card with a strong heading and contact button.

## 6. Motion & Animations
*   **Fade In:** `fadeInUp` (0.6s) for entry animations.
*   **Floating:** `animate-float-ship` for subtle parallax-like movement.
*   **Glow:** `animate-glow-pulse` for background accents.
*   **Interactive:** Standard bounce for scroll indicators and micro-interactions on hover.

---

**Prompting Tip:** When asking the LLM to create new sections, emphasize "glassmorphism," "maritime color tokens," "specular border effects," and "Asterisk Sans typography" to maintain the premium feel.
