import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';

const root = process.cwd();
const source = (path) => readFileSync(join(root, path), 'utf8');
const output = join(root, 'dist');
const pages = {
  home: '',
  services: 'services',
  work: 'work',
  solutions: 'solutions',
  insights: 'insights',
  academy: 'academy',
  about: 'about',
  contact: 'contact',
};
const route = (name) => name === 'home' ? '/' : '/' + (pages[name] ?? name) + '/';
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

function replaceSharedBlade(html) {
  html = html.replace(/\{\{\s*asset\(['"]([^'"]+)['"]\)\s*\}\}/g, '/$1');
  html = html.replace(/\{\{\s*route\(['"]([^'"]+)['"]\)\s*\}\}/g, (_, name) => route(name));
  html = html.replace(/\{\{\s*date\(['"]Y['"]\)\s*\}\}/g, String(new Date().getFullYear()));
  html = html.replace(/@if\(request\(\)->routeIs\(['"]([^'"]+)['"]\)\)([\s\S]*?)@endif/g, (_, name, content) => name === currentPage ? content : '');
  return html;
}
let currentPage = '';
const layout = source('resources/views/components/site-layout.blade.php');

mkdirSync(output, { recursive: true });
cpSync(join(root, 'public/css'), join(output, 'css'), { recursive: true });
cpSync(join(root, 'public/js'), join(output, 'js'), { recursive: true });
cpSync(join(root, 'public/brand'), join(output, 'brand'), { recursive: true });
cpSync(join(root, 'public/favicon.svg'), join(output, 'favicon.svg'));


for (const [name, segment] of Object.entries(pages)) {
  currentPage = name;
  let html = source('resources/views/pages/' + name + '.blade.php');
  if (name !== 'home') {
    const meta = html.match(/^<x-site-layout\s+title="([^"]+)"\s+description="([^"]+)"\s*>/);
    if (!meta) throw new Error('Unsupported site layout in page: ' + name);
    html = html.replace(meta[0], '').replace(/<\/x-site-layout>\s*$/, '');
    let base = layout.replace(/\{\{\s*\$description\s*\?\?\s*'[^']*'\s*\}\}/g, escapeHtml(meta[2]));
    base = base.replace(/\{\{\s*\$title\s*\?\?\s*'[^']*'\s*\}\}/g, escapeHtml(meta[1]));
    html = base.replace('{{ $slot }}', html);
  }
  html = replaceSharedBlade(html);
  if (/\{\{|<x-|@if\(|@endif/.test(html)) throw new Error('Unresolved Blade directive in page: ' + name);
  const destination = join(output, segment, 'index.html');
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, html, 'utf8');
  console.log('Static preview:', segment ? '/' + segment + '/' : '/');
}
console.log('Generated static design preview in dist/. Laravel backend is NOT part of this build.');
