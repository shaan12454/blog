import { getAllPosts } from '../../lib/posts'

export default async function handler(req, res) {
  const posts = await getAllPosts()
  const items = posts.map(p => {
    const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/posts/${p.slug}`
    return `<item><title>${p.meta.title}</title><link>${url}</link><pubDate>${new Date(p.meta.date).toUTCString()}</pubDate><description>${p.meta.excerpt || ''}</description></item>`
  }).join('\n')
  const xml = `<?xml version="1.0"?>
<rss version="2.0"><channel><title>My Blog</title><link>${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}</link>${items}</channel></rss>`
  res.setHeader('Content-Type', 'application/rss+xml')
  res.status(200).send(xml)
}
