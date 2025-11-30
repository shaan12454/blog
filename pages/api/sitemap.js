import { getAllPosts } from '../../lib/posts'

export default async function handler(req, res) {
  const posts = await getAllPosts()
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const urls = posts.map(p => `<url><loc>${base}/posts/${p.slug}</loc></url>`).join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(xml)
}
