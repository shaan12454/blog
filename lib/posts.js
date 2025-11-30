import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDir = path.join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDir, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, meta: data, content }
}

export async function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map(s => getPostBySlug(s))
  // sort by date desc
  posts.sort((a,b) => new Date(b.meta.date) - new Date(a.meta.date))
  return posts
}

export async function renderMdx(content) {
  return await serialize(content, { mdxOptions: { remarkPlugins: [], rehypePlugins: [] } })
}
