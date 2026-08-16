import { ArrowRight, Award } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import { events } from '../../data/events'

const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 }
function sortKey(e) {
  const d = (e.certs && e.certs[0] && e.certs[0].date) || ''
  const year = (d.match(/\d{4}/) || ['2099'])[0]
  const mon = (d.match(/[A-Z][a-z]{2}/) || [''])[0]
  return Number(year) * 100 + (MONTHS[mon] || 0)
}

const college = events.filter((e) => e.venue === 'college')
const wins = college
  .filter((e) => e.award === 'winner')
  .slice()
  .sort((a, b) => sortKey(a) - sortKey(b))

export default function EventsTeaser() {
  const featured = wins.slice(0, 4)
  return (
    <Section id="competitions">
      <SectionTitle
        kicker="07 — Competitions"
        title="Wins, in order"
        subtitle={`${college.length} college & national-level events — ${wins.length} finishing as winner or finalist.`}
      />
      <ol className="relative ml-2 border-l border-line">
        {featured.map((e) => (
          <li key={e.title} className="relative mb-8 ml-5 last:mb-0 sm:ml-8">
            <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-ink sm:-left-[39px]" />
            <p className="font-mono text-xs uppercase tracking-wider text-faint">
              {(e.certs && e.certs[0] && e.certs[0].date) || ''}
            </p>
            <p className="mt-1 inline-flex items-center gap-2 font-display font-semibold">
              <Award size={15} className="shrink-0 text-muted" /> {e.title}
              <span className="chip !border-ink !bg-ink !text-paper">{e.result}</span>
            </p>
            <p className="mt-0.5 text-sm text-muted">{e.org}</p>
            {e.points && e.points[1] && (
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{e.points[1]}</p>
            )}
          </li>
        ))}
      </ol>
      <a href="#/events" className="btn btn-ghost mt-8">
        All {college.length} competitions <ArrowRight size={15} />
      </a>
    </Section>
  )
}
