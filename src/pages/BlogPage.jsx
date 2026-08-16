import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionTitle, { Section } from '../components/ui/SectionTitle'
import { posts } from '../data/blog'

function PostView({ post }) {
  return (
    <Section id="blog-post" className="!max-w-3xl">
      <a href="#/blog" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
        <ArrowLeft size={15} /> All posts
      </a>
      <p className="font-mono text-xs text-faint">
        {post.date} · {post.tag} · {post.minutes} min read
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
      <article className="mt-8 space-y-5 leading-relaxed text-muted">
        {post.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
      <p className="mt-10 border-t border-line pt-6 font-mono text-xs text-faint">— Akash S</p>
    </Section>
  )
}

export default function BlogPage({ route }) {
  const slug = route.split('/')[2]
  const post = posts.find((p) => p.slug === slug)

  if (post) {
    return (
      <main className="pt-16">
        <PostView post={post} />
      </main>
    )
  }

  return (
    <main className="pt-16">
      <Section id="blog-list">
        <a href="#/" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
          <ArrowLeft size={15} /> Back to home
        </a>
        <SectionTitle
          kicker="Writing"
          title="Blog"
          subtitle="Notes on building AI products, hackathons, research and everything in between."
        />
        <div className="space-y-4">
          {posts.map((p) => (
            <a key={p.slug} href={`#/blog/${p.slug}`} className="card card-hover block p-5 sm:p-6">
              <p className="font-mono text-xs text-faint">
                {p.date} · {p.tag} · {p.minutes} min read
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                Read post <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </Section>
    </main>
  )
}
