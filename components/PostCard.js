import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <article className="p-6 border rounded-md">
      <h2 className="text-2xl font-semibold"><Link href={`/posts/${post.slug}`}>{post.meta.title}</Link></h2>
      <p className="text-slate-500 mt-1">{post.meta.date} • {post.meta.tags?.join(', ') || ''}</p>
      <p className="mt-3 text-slate-700">{post.meta.excerpt || ''}</p>
      <p className="mt-4"><Link href={`/posts/${post.slug}`} className="text-indigo-600">Read more →</Link></p>
    </article>
  )
}
