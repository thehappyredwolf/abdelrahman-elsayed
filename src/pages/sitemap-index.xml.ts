export async function get() {
  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>https://abdelrahmanelsayed.tech/sitemap.xml</loc>\n  </sitemap>\n</sitemapindex>`,
    headers: { 'Content-Type': 'application/xml' },
  };
}
