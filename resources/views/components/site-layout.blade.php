<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#080c15">
<link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
<meta name="description" content="{{ $description ?? 'KTYRA Technologies builds software, AI integrations and secure digital experiences.' }}">
<title>{{ $title ?? 'KTYRA Technologies' }} — KTYRA Technologies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/ktyra.css') }}">
<link rel="stylesheet" href="{{ asset('css/pages.css') }}">
<script defer src="{{ asset('js/site.js') }}"></script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
<a href="{{ route('home') }}" class="wordmark" aria-label="KTYRA Technologies home"><img class="brand-logo" src="{{ asset('brand/ktyra-mark-light.svg') }}" alt="" width="46" height="46" decoding="async"><span>KTYRA <small>TECHNOLOGIES</small></span></a>
<nav class="nav-desktop" aria-label="Main navigation">
<a href="{{ route('services') }}" @if(request()->routeIs('services')) aria-current="page" @endif>Services</a>
<a href="{{ route('solutions') }}" @if(request()->routeIs('solutions')) aria-current="page" @endif>Solutions</a>
<a href="{{ route('work') }}" @if(request()->routeIs('work')) aria-current="page" @endif>Work</a>
<a href="{{ route('insights') }}" @if(request()->routeIs('insights')) aria-current="page" @endif>Insights</a>
<a href="{{ route('academy') }}" @if(request()->routeIs('academy')) aria-current="page" @endif>Academy</a>
<a href="{{ route('about') }}" @if(request()->routeIs('about')) aria-current="page" @endif>About</a>
<a href="{{ route('contact') }}" class="nav-cta">Let's talk ↗</a>
</nav>
<button class="menu-button" aria-label="Toggle navigation" aria-controls="mobile-nav" aria-expanded="false" type="button">☰</button>
</header>
<nav id="mobile-nav" class="nav-mobile" aria-label="Mobile navigation" hidden>
<a href="{{ route('services') }}">Services</a><a href="{{ route('solutions') }}">Solutions</a><a href="{{ route('work') }}">Work</a><a href="{{ route('insights') }}">Insights</a><a href="{{ route('academy') }}">Academy</a><a href="{{ route('about') }}">About</a><a href="{{ route('contact') }}">Let's talk</a>
</nav>
<main id="main">{{ $slot }}</main>
<footer><div class="footer-brand"><img class="footer-logo" src="{{ asset('brand/ktyra-mark-light.svg') }}" alt="" width="49" height="49" decoding="async"><div><strong>KTYRA TECHNOLOGIES</strong><small>INNOVATE • BUILD • SECURE</small></div></div><nav aria-label="Footer"><a href="{{ route('services') }}">Services</a><a href="{{ route('solutions') }}">Solutions</a><a href="{{ route('work') }}">Work</a><a href="{{ route('academy') }}">Academy</a><a href="{{ route('contact') }}">Contact</a></nav><span>© {{ date('Y') }} KTYRA Technologies</span></footer>
</body>
</html>