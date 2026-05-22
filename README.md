# iPhone Pro — Company Profile Website

A premium Apple-inspired company profile website built with React + Vite, featuring cinematic animations, glassmorphism, and ultra-smooth UX.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser at http://localhost:5173
```

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS v4** (via @tailwindcss/vite)
- **Framer Motion** — animations & transitions
- **Lenis** — smooth scroll
- **Swiper.js** — gallery slider
- **React Icons** — icon library
- **Lucide React** — UI icons
- **React Router DOM** — routing ready
- **GSAP** — available for advanced animations

## 📁 Project Structure

```
src/
  components/
    Navbar.jsx        # Sticky blur navbar + mobile menu
    Footer.jsx        # Footer with social links
    RevealOnScroll.jsx # Reusable scroll reveal wrapper
  sections/
    Hero.jsx          # Fullscreen hero + live iPhone mockup
    StatsRow.jsx      # 48MP · A18 · 29h · Ti · 5G stats
    Products.jsx      # iPhone 16 / Pro / Pro Max cards
    Features.jsx      # 6 feature cards with glassmorphism
    Innovation.jsx    # Big quote section with glow
    Gallery.jsx       # Swiper.js horizontal gallery
    Specs.jsx         # Tech specs grid
    Testimonial.jsx   # Star review + quote
    Contact.jsx       # Dual-column contact form
  App.jsx             # Lenis smooth scroll setup
  main.jsx
  index.css           # Tailwind + global styles
```

## ✨ Features

- **Live clock** inside iPhone mockup on hero
- **Mouse parallax** effect on iPhone
- **Scroll reveal** animations on all sections
- **Glassmorphism** cards and nav
- **Swiper.js** autoplay gallery with custom pagination
- **Mobile responsive** with hamburger menu
- **AnimatePresence** mobile menu transitions
- **Working contact form** with success state

## 🎨 Design System

- **Colors:** Black, charcoal gray, clean white, Apple blue (#0071e3 / #2997ff)
- **Typography:** Inter (100–900 weights)
- **Animations:** Framer Motion with spring/ease curves
- **Effects:** Radial gradients, backdrop blur, glassmorphism
