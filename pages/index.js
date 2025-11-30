import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import PostCard from '../components/PostCard'

export default function Home({ posts }) {
  return (
    <main className="container py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-slate-600 mt-2">A simple Next.js + Tailwind + MDX blog</p>
      </header>

      <section className="grid gap-6">
        {posts.map(post => <PostCard key={post.slug} post={post} />)}
      </section>
      <footer className="mt-12 text-sm text-slate-500">
        Built with ❤️ — ready to deploy to Railway/Vercel.
      </footer>
    </main>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return { props: { posts } }
}
