#!/usr/bin/env node

/**
 * Static per-route HTML prerenderer for gembaindustrial.com
 * Fixes Google Search Console "Duplicate — user has not selected canonical page"
 * by writing one HTML per (lang, page) with its own canonical/title/description/og/hreflang.
 *
 * Reads dist/index.html as the base, content/blog/posts.json for blog slugs.
 * Writes dist/<lang>/<page>/index.html (and root redirect at dist/index.html).
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://gembaindustrial.com';
const LANGS = ['en', 'bg', 'es'];
const DEFAULT_LANG = 'en';

const pages = {
  home: {
    pathSuffix: '',
    title: {
      en: 'GEMBA Industrial Services — Reactor & Catalyst Changeout Specialists',
      bg: 'ГЕМБА Индустриални услуги — Специалисти по реактори и катализатори',
      es: 'GEMBA Industrial — Especialistas en reactores y cambio de catalizadores',
    },
    description: {
      en: 'Specialist reactor technician and catalyst changeout crews across Europe. 10+ years at Shell, ExxonMobil, BP, Neste, ORLEN. SCC/VCA certified. Varna, Bulgaria.',
      bg: 'Специализирани реакторни техници и екипи за подмяна на катализатори в цяла Европа. 10+ години опит в Shell, ExxonMobil, BP, Neste, ORLEN.',
      es: 'Técnicos de reactor y equipos de cambio de catalizadores en toda Europa. Más de 10 años en Shell, ExxonMobil, BP, Neste, ORLEN.',
    },
    priority: 1.0,
  },
  services: {
    pathSuffix: '/services',
    title: {
      en: 'Services — Reactor Technicians & Catalyst Changeout | GEMBA Industrial',
      bg: 'Услуги — Реакторни техници и подмяна на катализатори | ГЕМБА Индустриални',
      es: 'Servicios — Técnicos de reactor y cambio de catalizadores | GEMBA Industrial',
    },
    description: {
      en: 'Reactor technician services, catalyst changeout, safety & HSE compliance, specialist personnel supply, refinery turnaround supervision.',
      bg: 'Реакторни техници, подмяна на катализатори, безопасност и HSE съответствие, специализиран персонал, надзор на рафинерийни престои.',
      es: 'Servicios de técnicos de reactor, cambio de catalizadores, seguridad y HSE, suministro de personal especializado.',
    },
  },
  'track-record': {
    pathSuffix: '/track-record',
    title: {
      en: 'Track Record — Projects at Shell, ExxonMobil, BP, Neste, ORLEN | GEMBA Industrial',
      bg: 'Опит — Проекти в Shell, ExxonMobil, BP, Neste, ORLEN | ГЕМБА Индустриални',
      es: 'Experiencia — Proyectos en Shell, ExxonMobil, BP, Neste, ORLEN | GEMBA Industrial',
    },
    description: {
      en: 'Where we have worked: reactor and catalyst changeout projects at Europe\'s largest refineries over the past 10+ years.',
      bg: 'Къде сме работили: проекти за реактори и подмяна на катализатори в най-големите рафинерии в Европа през последните 10+ години.',
      es: 'Dónde hemos trabajado: proyectos de reactor y cambio de catalizadores en las mayores refinerías de Europa.',
    },
  },
  about: {
    pathSuffix: '/about',
    title: {
      en: 'About GEMBA Industrial — 10+ Years of Refinery Expertise',
      bg: 'За ГЕМБА Индустриални — 10+ години рафинериен опит',
      es: 'Sobre GEMBA Industrial — Más de 10 años de experiencia en refinerías',
    },
    description: {
      en: 'GEMBA Industrial Services is a specialist reactor and catalyst changeout contractor based in Varna, Bulgaria, operating across Europe.',
      bg: 'ГЕМБА Индустриални услуги е специализиран изпълнител за реактори и подмяна на катализатори със седалище във Варна, България.',
      es: 'GEMBA Industrial Services es un contratista especializado en reactores y cambio de catalizadores con sede en Varna, Bulgaria.',
    },
  },
  blog: {
    pathSuffix: '/blog',
    title: {
      en: 'Blog — Insights on Refinery Operations & Safety | GEMBA Industrial',
      bg: 'Блог — Анализи за рафинерийни операции и безопасност | ГЕМБА Индустриални',
      es: 'Blog — Análisis sobre operaciones de refinería y seguridad | GEMBA Industrial',
    },
    description: {
      en: 'Insights on industrial services, refinery turnarounds, catalyst changeout operations and HSE best practice.',
      bg: 'Анализи за индустриални услуги, рафинерийни престои, подмяна на катализатори и HSE добри практики.',
      es: 'Análisis sobre servicios industriales, paradas de refinería, cambio de catalizadores y mejores prácticas de HSE.',
    },
  },
  team: {
    pathSuffix: '/team',
    title: {
      en: 'Team — Meet the Leadership & Crew | GEMBA Industrial',
      bg: 'Екип — Запознайте се с ръководството и екипа | ГЕМБА Индустриални',
      es: 'Equipo — Conoce al liderazgo y la tripulación | GEMBA Industrial',
    },
    description: {
      en: 'Meet the leadership and crew behind GEMBA Industrial Services.',
      bg: 'Запознайте се с ръководството и екипа на ГЕМБА Индустриални услуги.',
      es: 'Conoce al liderazgo y la tripulación de GEMBA Industrial Services.',
    },
  },
  careers: {
    pathSuffix: '/careers',
    title: {
      en: 'Careers — Reactor Technician Positions Across Europe | GEMBA Industrial',
      bg: 'Кариери — Позиции за реакторни техници в Европа | ГЕМБА Индустриални',
      es: 'Carreras — Puestos de técnico de reactor en Europa | GEMBA Industrial',
    },
    description: {
      en: 'Join our crew. We are hiring reactor technicians and BA specialists for catalyst changeout projects across Europe.',
      bg: 'Присъединете се към нашия екип. Наемаме реакторни техници и BA специалисти за проекти в цяла Европа.',
      es: 'Únete a nuestro equipo. Buscamos técnicos de reactor y especialistas en BA para proyectos en toda Europa.',
    },
  },
  contact: {
    pathSuffix: '/contact',
    title: {
      en: 'Contact — Reactor & Catalyst Changeout Services | GEMBA Industrial',
      bg: 'Контакти — Услуги за реактори и подмяна на катализатори | ГЕМБА Индустриални',
      es: 'Contacto — Servicios de reactor y cambio de catalizadores | GEMBA Industrial',
    },
    description: {
      en: 'Get in touch for reactor technician and catalyst changeout services. Varna, Bulgaria. +359 897 598 378.',
      bg: 'Свържете се с нас за услуги за реакторни техници и подмяна на катализатори. Варна, България.',
      es: 'Contáctenos para servicios de técnico de reactor y cambio de catalizadores. Varna, Bulgaria.',
    },
  },
};

// Read blog posts for per-post pages
let blogPosts = [];
const postsPath = path.join(__dirname, 'content', 'blog', 'posts.json');
if (fs.existsSync(postsPath)) {
  blogPosts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
}

const distDir = path.join(__dirname, 'dist');
// Preserve the build output index.html so re-runs keep reading the real SPA HTML,
// not the root-redirect shim we write at the end.
const baseBackupPath = path.join(distDir, 'index.spa.html');
const distIndexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(baseBackupPath)) {
  fs.copyFileSync(distIndexPath, baseBackupPath);
}
const baseHtml = fs.readFileSync(baseBackupPath, 'utf-8');

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function renderHead({ lang, canonicalPath, title, description, hreflangBase, article }) {
  const canonical = `${BASE_URL}${canonicalPath}`;
  const altLinks = LANGS.map(
    (l) =>
      `    <link rel="alternate" hreflang="${l}" href="${BASE_URL}/${l}${hreflangBase}" />`
  ).join('\n');
  const xDefault = `    <link rel="alternate" hreflang="x-default" href="${BASE_URL}/${DEFAULT_LANG}${hreflangBase}" />`;

  const ogType = article ? 'article' : 'website';
  const ogImage = article && article.hero
    ? `${BASE_URL}${article.hero}`
    : `${BASE_URL}/og/default.png`;
  const twitterCard = article && article.hero ? 'summary_large_image' : 'summary';

  const articleMeta = article
    ? `
    <meta property="article:published_time" content="${escapeAttr(article.publishedAt)}" />
    <meta property="article:modified_time" content="${escapeAttr(article.modifiedAt || article.publishedAt)}" />
    <meta property="article:author" content="${escapeAttr(article.author || 'GEMBA Industrial Services')}" />${(article.tags || [])
        .map((t) => `\n    <meta property="article:tag" content="${escapeAttr(t)}" />`)
        .join('')}`
    : '';

  const imageDims = article && article.hero
    ? `
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeAttr(title)}" />`
    : '';

  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#4F46E5" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <meta name="author" content="GEMBA Industrial Services" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
${altLinks}
${xDefault}

    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:image" content="${ogImage}" />${imageDims}
    <meta property="og:site_name" content="GEMBA Industrial Services" />
    <meta property="og:locale" content="${lang === 'bg' ? 'bg_BG' : lang === 'es' ? 'es_ES' : 'en_US'}" />${articleMeta}

    <meta name="twitter:card" content="${twitterCard}" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <meta name="twitter:image" content="${ogImage}" />`;
}

// Extract scripts/styles block from original index.html (everything after </script> tags we want to keep at the bottom of head)
function extractAssetsBlock(html) {
  // Keep Turnstile script + the built JS/CSS
  const matches = html.match(/<script src="https:\/\/challenges\.cloudflare\.com[^"]+"[^>]*><\/script>\s*<script type="module"[^<]*<\/script>\s*<link rel="stylesheet"[^>]*>/);
  return matches ? matches[0] : '';
}

function extractJsonLdBlocks(html) {
  // Keep Organization + WebSite JSON-LD on all pages; keep JobPosting only for careers
  const re = /<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  return html.match(re) || [];
}

const jsonLdBlocks = extractJsonLdBlocks(baseHtml);
// Split JSON-LD: first two (ProfessionalService + WebSite) go on every page, JobPosting only on careers
const commonJsonLd = jsonLdBlocks.filter((b) => !/"JobPosting"/.test(b));
const jobPostingJsonLd = jsonLdBlocks.filter((b) => /"JobPosting"/.test(b));

const assetsBlock = extractAssetsBlock(baseHtml);

function buildHtml({ lang, canonicalPath, title, description, hreflangBase, includeJobPosting, article }) {
  const head = renderHead({ lang, canonicalPath, title, description, hreflangBase, article });
  const ld = [...commonJsonLd, ...(includeJobPosting ? jobPostingJsonLd : [])].join('\n    ');
  return `<!doctype html>
<html lang="${lang}">
  <head>
${head}

    ${ld}

    ${assetsBlock}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;
}

function writePage(relativePath, html) {
  const outPath = path.join(distDir, relativePath, 'index.html');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`  wrote ${path.relative(distDir, outPath)}`);
}

console.log('Prerendering per-route HTML...');

// Static pages
for (const [pageKey, pageCfg] of Object.entries(pages)) {
  for (const lang of LANGS) {
    const canonicalPath = `/${lang}${pageCfg.pathSuffix}`;
    const hreflangBase = pageCfg.pathSuffix;
    const html = buildHtml({
      lang,
      canonicalPath,
      title: pageCfg.title[lang],
      description: pageCfg.description[lang],
      hreflangBase,
      includeJobPosting: pageKey === 'careers',
    });
    writePage(canonicalPath, html);
  }
}

// Blog posts
for (const post of blogPosts) {
  for (const lang of LANGS) {
    const canonicalPath = `/${lang}/blog/${post.slug}`;
    const hreflangBase = `/blog/${post.slug}`;
    const title = post.title?.[lang] || post.title?.en || post.slug;
    const excerpt = post.excerpt?.[lang] || post.excerpt?.en || '';
    const html = buildHtml({
      lang,
      canonicalPath,
      title: `${title} | GEMBA Industrial`,
      description: excerpt,
      hreflangBase,
      includeJobPosting: false,
      article: {
        hero: post.hero || null,
        publishedAt: post.date,
        modifiedAt: post.lastUpdated || post.date,
        author: post.author,
        tags: post.tags || [],
      },
    });
    writePage(canonicalPath, html);
  }
}

// Root redirect HTML — serves only if Apache rewrite doesn't handle it.
// Uses meta refresh + canonical to /en so Google treats /en as canonical for the root.
const rootHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/en" />
    <link rel="canonical" href="${BASE_URL}/en" />
    <meta name="robots" content="noindex, follow" />
    <title>GEMBA Industrial Services</title>
    <script>window.location.replace('/en');</script>
  </head>
  <body>
    <p>Redirecting to <a href="/en">/en</a>…</p>
  </body>
</html>
`;
fs.writeFileSync(path.join(distDir, 'index.html'), rootHtml);
console.log('  wrote index.html (root redirect shim)');

console.log('Done.');
