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
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {featured.map((e) => (
          <article key={e.title} className="card card-hover flex flex-col p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-faint sm:text-xs">
                {(e.certs && e.certs[0] && e.certs[0].date) || ''}
              </p>
              <Award size={14} className="shrink-0 text-muted" />
            </div>
            <h3 className="mt-2 font-display text-sm font-semibold leading-snug sm:text-base">{e.title}</h3>
            <p className="mt-1 grow text-xs leading-relaxed text-muted">{e.org}</p>
            <span className="chip mt-3 self-start !border-ink !bg-ink !px-2.5 !text-[10px] !text-paper sm:!text-xs">
              {e.result}
            </span>
          </article>
        ))}
      </div>
      <a href="#/events" className="btn btn-ghost mt-6 w-full sm:w-auto">
        All {college.length} competitions <ArrowRight size={15} />
      </a>
    </Section>
  )
}
