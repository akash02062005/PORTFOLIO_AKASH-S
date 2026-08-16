import { useState } from 'react'
import { ArrowLeft, Award, X } from 'lucide-react'
import SectionTitle, { Section } from '../components/ui/SectionTitle'
import { events } from '../data/events'

const college = events.filter((e) => e.venue === 'college')
const filters = [
  { id: 'all', label: 'All' },
  { id: 'winner', label: 'Winners' },
  { id: 'participation', label: 'Participation' },
]

export default function EventsPage() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const shown = filter === 'all' ? college : college.filter((e) => e.award === filter)
  const wins = college.filter((e) => e.award === 'winner').length

  return (
    <main className="pt-16">
      <Section id="events-page">
        <a href="#/" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
          <ArrowLeft size={15} /> Back to home
        </a>
        <SectionTitle
          kicker="Competitions"
          title="Hackathons, symposiums & events"
          subtitle={`${college.length} college and national-level events — ${wins} as winner or finalist.`}
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f.id
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-muted hover:border-faint hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {shown.map((e) => (
            <article key={e.title + e.org} className="card card-hover flex flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                {e.result && (
                  <span className="chip inline-flex gap-1.5 !border-ink !bg-ink !text-paper">
                    <Award size={12} /> {e.result}
                  </span>
                )}
                {e.type && <span className="chip capitalize">{e.type}</span>}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{e.title}</h3>
              <p className="mt-0.5 text-xs text-faint">{e.location || e.org}</p>
              {e.points && (
                <ul className="mt-3 space-y-1.5">
                  {e.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              {e.certs && e.certs.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.certs.map((c) => (
                    <button
                      key={c.image}
                      onClick={() => setLightbox({ ...c, title: e.title })}
                      className="chip transition-colors hover:border-faint hover:text-ink"
                    >
                      {c.issuer}
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button aria-label="Close" className="absolute right-5 top-5 text-white/80 hover:text-white">
            <X size={22} />
          </button>
          <figure className="max-h-[88vh] max-w-3xl" onClick={(ev) => ev.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="max-h-[80vh] w-full rounded-lg object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/90">
              {lightbox.title} · <span className="text-white/60">{lightbox.issuer}{lightbox.date ? ` · ${lightbox.date}` : ''}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
