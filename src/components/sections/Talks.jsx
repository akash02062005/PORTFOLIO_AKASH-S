import { FileDown } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import { conferences, seminars } from '../../data/talks'

export default function Talks() {
  return (
    <Section id="talks">
      <SectionTitle
        kicker="08 — Research & Talks"
        title="Papers & presentations"
        subtitle="Conference papers presented and technical seminars delivered."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {conferences.map((c) => (
          <article key={c.event} className="card card-hover flex flex-col p-5 sm:p-6">
            <span className="chip self-start">{c.badge}</span>
            <h3 className="mt-3 font-display text-lg font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-muted">{c.subtitle}</p>
            <p className="mt-3 text-sm font-medium">{c.event}</p>
            <p className="mt-1 text-xs text-faint">
              {c.host} · {c.date}
            </p>
            {c.ppt && (
              <a href={c.ppt} download className="btn btn-ghost mt-4 self-start !px-4 !py-1.5">
                <FileDown size={14} /> Slides
              </a>
            )}
          </article>
        ))}
      </div>
      <h3 className="mb-4 mt-10 font-display font-semibold text-muted">Seminars delivered</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {seminars.map((s) => (
          <article key={s.title} className="card card-hover flex flex-col p-5">
            <span className="chip self-start">{s.tag}</span>
            <h4 className="mt-3 font-display font-semibold">{s.title}</h4>
            <p className="mt-2 grow text-sm leading-relaxed text-muted">{s.points[0]}</p>
            {s.ppt && (
              <a href={s.ppt} download className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink">
                <FileDown size={13} /> Download slides
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
