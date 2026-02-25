// Sitemap Generator for Safari Stays & Homes

import { properties, destinations, experiences, blogPosts } from '../lib/mockData';

const BASE_URL = 'https://safaristays.com';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemap(): string {
  const urls: SitemapUrl[] = [];

  // Static pages
  const staticPages = [
    { loc: '/', priority: 1.0, changefreq: 'daily' as const },
    { loc: '/stays', priority: 0.9, changefreq: 'daily' as const },
    { loc: '/destinations', priority: 0.9, changefreq: 'weekly' as const },
    { loc: '/experiences', priority: 0.9, changefreq: 'weekly' as const },
    { loc: '/guides', priority: 0.8, changefreq: 'weekly' as const },
    { loc: '/about', priority: 0.7, changefreq: 'monthly' as const },
    { loc: '/faq', priority: 0.7, changefreq: 'monthly' as const },
    { loc: '/contact', priority: 0.7, changefreq: 'monthly' as const },
    { loc: '/terms', priority: 0.5, changefreq: 'yearly' as const },
    { loc: '/privacy', priority: 0.5, changefreq: 'yearly' as const },
    { loc: '/cancellation-policy', priority: 0.6, changefreq: 'yearly' as const },
  ];

  urls.push(...staticPages);

  // Property pages
  properties.forEach((property) => {
    urls.push({
      loc: `/stays/${property.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      priority: property.featured ? 0.9 : 0.8,
      changefreq: 'weekly',
    });
  });

  // Destination pages
  destinations.forEach((destination) => {
    urls.push({
      loc: `/destinations/${destination.slug}`,
      priority: destination.featured ? 0.9 : 0.8,
      changefreq: 'weekly',
    });
  });

  // Experience pages
  experiences.forEach((experience) => {
    urls.push({
      loc: `/experiences/${experience.slug}`,
      priority: experience.featured ? 0.8 : 0.7,
      changefreq: 'weekly',
    });
  });

  // Blog posts
  blogPosts.forEach((post) => {
    urls.push({
      loc: `/guides/${post.slug}`,
      lastmod: post.publishedAt,
      priority: post.featured ? 0.8 : 0.7,
      changefreq: 'monthly',
    });
  });

  // Blog categories
  const categories = Array.from(new Set(blogPosts.map((p) => p.category.slug)));
  categories.forEach((categorySlug) => {
    urls.push({
      loc: `/guides/category/${categorySlug}`,
      priority: 0.7,
      changefreq: 'weekly',
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>${
      url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''
    }${url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ''}${
      url.priority !== undefined ? `\n    <priority>${url.priority.toFixed(1)}</priority>` : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
}

// Usage: Create app/sitemap.xml/route.ts
export function GET() {
  const sitemap = generateSitemap();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}