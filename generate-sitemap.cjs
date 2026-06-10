#!/usr/bin/env node

/**
 * Sitemap Generator for gembaindustrial.com
 * Reads blog posts from content/blog/posts.json and generates sitemap.xml
 * Run: node generate-sitemap.cjs
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://gembaindustrial.com';
const LANGS = ['en', 'bg', 'es'];

// Static pages with priorities
const staticPages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/track-record', changefreq: 'monthly', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/team', changefreq: 'monthly', priority: '0.7' },
  { path: '/careers', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];

// Read blog posts
let blogPosts = [];
const postsPath = path.join(__dirname, 'content', 'blog', 'posts.json');
if (fs.existsSync(postsPath)) {
  blogPosts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
}

function generateUrl(pagePath, changefreq, priority, isDefault = false) {
  let xml = '';
  for (const lang of LANGS) {
    const loc = `${BASE_URL}/${lang}${pagePath}`;
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    // Add hreflang alternates
    for (const altLang of LANGS) {
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${BASE_URL}/${altLang}${pagePath}"/>\n`;
    }
    if (lang === 'en') {
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${pagePath}"/>\n`;
    }
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${lang === 'en' ? priority : (parseFloat(priority) - 0.1).toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  }
  return xml;
}

// Build sitemap
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
sitemap += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n';

// Static pages
for (const page of staticPages) {
  sitemap += `  <!-- ${page.path || 'Homepage'} -->\n`;
  sitemap += generateUrl(page.path, page.changefreq, page.priority);
  sitemap += '\n';
}

// Blog posts
if (blogPosts.length > 0) {
  sitemap += '  <!-- Blog posts -->\n';
  for (const post of blogPosts) {
    sitemap += generateUrl(`/blog/${post.slug}`, 'monthly', '0.7');
  }
  sitemap += '\n';
}

sitemap += '</urlset>\n';

// Write sitemap
const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
const distOutputPath = path.join(__dirname, 'dist', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap);
console.log(`Sitemap generated: ${outputPath} (${blogPosts.length} blog posts, ${staticPages.length} static pages)`);

// Also write to dist if it exists
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.writeFileSync(distOutputPath, sitemap);
  console.log(`Sitemap copied to: ${distOutputPath}`);
}
