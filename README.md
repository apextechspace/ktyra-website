# KTYRA Technologies — Official Website

**INNOVATE • BUILD • SECURE**

Private source repository for the KTYRA Technologies company website.

## Stack

Laravel, Blade, Tailwind CSS (planned), Vite, GSAP and optional Three.js. The initial milestone focuses on the homepage and its accessible five-scene hero carousel.

## Repository status

This repository is being initialized with application-specific source files. It is **not yet a complete, Composer-installed Laravel application**. Do not deploy it as-is.

## Local setup (after Laravel scaffolding is added)

1. Install PHP 8.2+, Composer, Node.js 20+, and npm.
2. Generate a fresh Laravel skeleton with `composer create-project laravel/laravel ktyra-site`.
3. Move this repository's `routes/`, `resources/`, and `public/` contents into that skeleton, retaining Laravel's default configuration and entry points.
4. Run `npm install`, `npm run dev`, `php artisan key:generate`, and `php artisan serve`.
5. Never commit `.env`, secrets, or client data.

## Design direction

Dark midnight (#080C15), signature blue (#0070FF), ice cyan (#38D9FF); large editorial headlines, ambient glows, lightweight animations, and responsive layouts.

## Hero scenes

1. Global Vision — Earth
2. Software Engineering
3. Security
4. AI & Automation
5. KTYRA Academy

Earth image currently served from https://umbs.ng/wp-content/uploads/2026/10/earth.png. Before production, mirror it into `public/assets/` and optimize it to WebP/AVIF with an accessible fallback.

## Milestones

- [x] Initialize GitHub repository
- [ ] Complete Laravel application bootstrap
- [ ] Integrate polished five-slide hero into Blade components
- [ ] Build dedicated service and portfolio pages
- [ ] Filament content administration
- [ ] Contact workflow, security and SEO
- [ ] Staging deployment and QA

The previous visual prototype is preserved separately; the next step is integrating its styles and animations rather than dropping them.
