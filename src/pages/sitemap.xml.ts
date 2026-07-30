import { getCollection } from 'astro:content';

const staticRoutes = [
  '/',
  '/about/',
  '/research/',
  '/members/',
  '/honors/',
  '/articles/',
  '/join/',
];

export async function GET({ site }: { site?: URL }) {
  const base = site ?? new URL('https://zypc.example.com');
  const articles = (await getCollection('articles')).filter((entry) => !entry.data.draft);
  const routes = [
    ...staticRoutes,
    ...articles.map((article) => `/articles/${article.id}/`),
  ];
  const body = routes
    .map((route) => `<url><loc>${new URL(route, base).href}</loc></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
