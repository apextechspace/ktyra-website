# KTYRA Vercel Preview

The main application is Laravel and requires PHP for its production deployment. Vercel's normal static output setting cannot serve Blade or Laravel routes directly.

## Preview setup

- Framework Preset: Other
- Root Directory: repository root
- Build Command: `npm run build:preview` (also set in `vercel.json`)
- Output Directory: `dist` (also set in `vercel.json`)
- Install Command: `npm install` (default)
- Redeploy the latest `main` commit.

`scripts/build-preview.mjs` compiles the **six current public views** into plain HTML and copies `public/css` and `public/js` to `dist`. It does **not** run PHP, Vite, Composer, database migrations, form submissions, or Laravel APIs.

This preview is for visual and interaction review only. Use a PHP-capable server for actual Laravel features. The Earth hero image currently loads from the owner-provided WordPress URL. Unsplash placeholders are externally hosted and should be replaced with approved, optimized local assets before launch.

If a new Blade page introduces dynamic expressions, update the preview builder or use a proper Laravel-rendered staging site instead. This is intentionally a temporary bridge, not an alternative Laravel runtime.
