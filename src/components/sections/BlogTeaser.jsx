import { ArrowRight } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import { posts } from '../../data/blog'

export default function BlogTeaser() {
  const latest = posts.slice(0, 2)
  return (
    <Section id="writing">
      <SectionTitle
        kicker="10 — Writing"
        title="From the blog"
        subtitle="Notes on building AI products, hackathons and research."
      />
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {latest.map((p) => (
          <a key={p.slug} href={`#/blog/${p.slug}`} className="card card-hover flex flex-col p-5 sm:p-6">
            <p className="font-mono text-xs text-faint">
              {p.date} · {p.tag} · {p.minutes} min read
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 grow text-sm leading-relaxed text-muted">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
              Read <ArrowRight size={14} />
            </span>
          </a>
        ))}
      </div>
      <a href="#/blog" className="btn btn-ghost mt-8 w-full sm:w-auto">
        All posts <ArrowRight size={15} />
      </a>
    </Section>
  )
}
