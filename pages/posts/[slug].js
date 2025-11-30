import { getPostSlugs, getPostBySlug, renderMdx } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

export default function PostPage({ source, meta }) {
  return (
    <main className="container py-12">
      <article>
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <p className="text-slate-500 mt-1">{meta.date} • {meta.readingTime || '—'}</p>
        <div className="prose mt-6"><MDXRemote {...source} /></div>
        <p className="mt-8"><Link href="/">← Back to home</Link></p>
      </article>
    </main>
  )
}

export async function getStaticPaths() {
  const slugs = getPostSlugs()
  return {
    paths: slugs.map(s => ({ params: { slug: s.replace(/\.mdx$/, '') } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const post = getPostBySlug(slug + '.mdx')
  const mdxSource = await renderMdx(post.content)
  return {
    props: {
      source: mdxSource,
      meta: post.meta
    }
  }
}
