# KTYRA Technologies — Official Website

**INNOVATE • BUILD • SECURE**

Private source repository for the KTYRA Technologies company website.

## Stack

Laravel 12 · Blade · PHP · Vite · CSS · vanilla JavaScript.

## Local setup

Requires PHP 8.2+, Composer 2, Node.js 20+ and the PHP extensions required by Laravel.

```bash
composer install
cp .env.example .env
php artisan key:generate
# SQLite on local development:
touch database/database.sqlite
php artisan migrate
npm install
npm run build
php artisan serve
```

Open http://127.0.0.1:8000. To develop compiled frontend assets, use `npm run dev` alongside the application.

## Website files

- Homepage: `resources/views/pages/home.blade.php`
- Homepage route: `routes/web.php`
- Website design system: `public/css/ktyra.css`
- Carousel & mobile interactions: `public/js/ktyra.js`

The five-scene homepage introduces KTYRA, engineering, cybersecurity, AI & automation, and KTYRA Academy. Selected Work previews are illustrative placeholders, not claims about published client engagements.

**Assets:** Earth is currently loaded from https://umbs.ng/wp-content/uploads/2026/10/earth.png. Before production, host an optimized approved copy under `public/` and use a relative URL.

**Status:** Application scaffold committed. Dependencies are not installed in this repository, and the running website has not yet been validated or deployed. Do not treat this as production-ready. The contact CTA is disabled until a verified KTYRA inquiry destination is configured.

## Next milestones

- Verify the install, review browser performance and accessibility
- Split Blade into reusable layout and components
- Add dedicated About, Services, Solutions, Selected Work, Academy, Insights and Contact pages
- Add editable CMS content and secure contact delivery
- Configure analytics, SEO, images and deployment pipeline
- Deploy staging with HTTPS and run mobile/browser QA

Never commit `.env`, credentials, or client information.
