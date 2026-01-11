# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm start` - Run development server (localhost:3000)
- `npm test` - Run tests in watch mode
- `npm run build` - Production build to `build/` folder

## Architecture

This is a Create React App project for a Minecraft builds gallery website ("lemongoosteen").

**Stack:** React 19, Tailwind CSS 3, PostCSS

**Directory Structure:**
- `src/pages/` - Layout-level components (HomeHeader, Background)
- `src/components/` - Reusable UI components (Circle, GalleryHeader)
- `src/assets/fonts/` - Custom fonts (Monea_Alegante.otf)

**Styling:**
- Tailwind CSS with custom theme extensions in `tailwind.config.js`
- Custom color: `crimson: '#75312A'`
- Custom fonts: Monea (local) for headings, Quicksand (Google Fonts) for body
- Global styles in `src/index.css`

**Patterns:**
- Functional components with props-driven configuration
- Background component serves as layout wrapper with decorative Circle elements
- Circle component is reusable for gradient circles with configurable colors, size, and positioning
