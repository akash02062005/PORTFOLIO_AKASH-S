import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { events, eventCount, certTotal, winCount } from '../../data/events'
import { navigate } from '../../hooks/useHashRoute'

/** Compact home preview that links out to the full /events page. */
export default function EventsTeaser() {
  const wins = events.filter((e) => e.award === 'winner')
  const picks = (wins.length >= 3 ? wins : [...wins, ...events]).slice(0, 3)

  const stats = [
    { label: 'Events', value: eventCount },
    { label: 'Wins & finals', value: winCount },
    { label: 'Certificates', value: certTotal },
  ]

  return (
    <section id="events" className="relative">
      <div className="section-pad">
        <SectionTitle
          eyebrow="04 · Arena"
          title="Where I compete"
          subtitle="Hackathons, coding battles, quizzes and paper presentations — grouped into School, College and Residential on a page of their own."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {picks.map((e, i) => (
            <motion.div
              key={`${e.title}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08 }}
              className="glass glass-hover overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <img
                  src={e.certs[0].image}
                  alt={e.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {e.award === 'winner' && (
                  <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-amber-300/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                    <Trophy size={11} /> {e.result}
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-white">{e.title}</p>
                <p className="mt-1 truncate text-[11px] text-slate-400">{e.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <div className="flex flex-wrap gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="gradient-text font-display text-2xl font-bold">{s.value}</span>{' '}
                <span className="text-xs text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/events')}
            className="group ml-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-neon-cyan/50"
          >
            View all events
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
