(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const dotsContainer = document.querySelector('#dots');
  if (!slides.length || !dotsContainer) return;
  const prev = document.querySelector('#prev'), next = document.querySelector('#next');
  const counter = document.querySelector('#counter'), timer = document.querySelector('#timer');
  const hero = document.querySelector('.hero'), reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0, interval;
  const delay = 8000;
  slides.forEach((s,i) => {
    const dot = document.createElement('button');
    dot.type = 'button'; dot.setAttribute('aria-label', 'Go to slide ' + (i+1));
    dot.addEventListener('click', () => select(i));
    dotsContainer.append(dot);
  });
  const dots = [...dotsContainer.children];
  function paint(n) {
    active = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const selected = i === active;
      slide.classList.toggle('is-active', selected);
      slide.setAttribute('aria-hidden', String(!selected));
      slide.inert = !selected;
    });
    dots.forEach((dot, i) => { dot.classList.toggle('is-active', i === active); dot.setAttribute('aria-current', i === active ? 'true' : 'false'); });
    counter.textContent = String(active + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    timer.classList.remove('is-running'); void timer.offsetWidth;
    if (!reduced.matches && !document.hidden) timer.classList.add('is-running');
  }
  function stop() { clearInterval(interval); timer.classList.remove('is-running'); }
  function start() { stop(); if (!reduced.matches && !document.hidden) { timer.classList.add('is-running'); interval = setInterval(() => paint(active + 1), delay); } }
  function select(n) { paint(n); start(); }
  prev.addEventListener('click', () => select(active-1));
  next.addEventListener('click', () => select(active+1));
  hero.addEventListener('mouseenter', stop); hero.addEventListener('mouseleave', start);
  hero.addEventListener('focusin', stop);
  hero.addEventListener('focusout', event => { if (!hero.contains(event.relatedTarget)) start(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  let touchX = null;
  hero.addEventListener('touchstart', e => { touchX = e.changedTouches[0].screenX; }, {passive:true});
  hero.addEventListener('touchend', e => { if (touchX === null) return; const d = e.changedTouches[0].screenX-touchX; if (Math.abs(d)>65) select(active + (d<0?1:-1)); touchX=null; }, {passive:true});
  const menu = document.querySelector('.menu-button'), mobile = document.querySelector('#mobile-nav');
  menu.addEventListener('click', () => { const show=mobile.hidden; mobile.hidden=!show; menu.setAttribute('aria-expanded', String(show)); menu.textContent=show?'✕':'☰'; });
  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ mobile.hidden=true; menu.setAttribute('aria-expanded','false'); menu.textContent='☰'; }));
  paint(0); start();
})();
