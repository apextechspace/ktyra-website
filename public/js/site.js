(() => {
  const button = document.querySelector('.menu-button');
  const menu = document.querySelector('#mobile-nav');
  if (!button || !menu) return;
  const close = () => { menu.hidden = true; button.setAttribute('aria-expanded','false'); button.textContent = '☰'; };
  button.addEventListener('click', () => { const opening = menu.hidden; menu.hidden = !opening; button.setAttribute('aria-expanded',String(opening)); button.textContent = opening ? '✕' : '☰'; });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
})();