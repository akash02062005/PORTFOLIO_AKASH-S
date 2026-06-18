import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, X, Award, MapPin, Users, Layers, Medal } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { events, venues, eventCount, certTotal, winCount } from '../../data/events'

export default function Events() {
  const [venue, setVenue] = useState('residential')
  const [lightbox, setLightbox] = useState(null) // { event, idx }

  const meta = venues.find((v) => v.id === venue)
  const accent = meta?.accent || '#22d3ee'

  const inVenue = useMemo(() => events.filter((e) => e.venue === venue), [venue])
  const wins = inVenue.filter((e) => e.award === 'winner')
  const parts = inVenue.filter((e) => e.award === 'participation')
  const openCert = lightbox ? lightbox.event.certs[lightbox.idx] : null

  const Card = (e) => {
    const multi = e.certs.length > 1
    return (
      <motion.button
        key={e.title}
        layout
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={() => setLightbox({ event: e, idx: 0 })}
        className="glass glass-hover group cursor-pointer overflow-hidden rounded-2xl text-left"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
          <img
            src={e.certs[0].image}
            alt={e.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {e.award === 'winner' && (
            <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-amber-300/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
              <Trophy size={11} /> {e.result}
            </span>
          )}
          {e.award !== 'winner' && e.result && e.result !== 'Participant' && (
            <span className="absolute right-2 top-2 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white">
              {e.result}
            </span>
          )}
          {multi && (
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
              <Layers size={11} /> {e.certs.length} certs
            </span>
          )}
        </div>
        <div className="flex items-start justify-between gap-2 p-3.5">
          <div className="min-w-0">
            <p className="text-sm font-medium leading-snug text-white">{e.title}</p>
            <p className="mt-1 truncate text-[11px] text-slate-400">{e.org}</p>
            {e.sub && <p className="mt-1 line-clamp-1 text-[11px] text-slate-500">{e.sub}</p>}
          </div>
          <Trophy size={15} className="mt-0.5 shrink-0" style={{ color: accent }} />
        </div>
      </motion.button>
    )
  }

  return (
    <section id="events" className="relative">
      <div className="aurora left-[-10%] top-24 h-72 w-72 bg-neon-pink/25" />
      <div className="aurora right-[-12%] bottom-10 h-72 w-72 bg-neon-violet/25" />

      <div className="section-pad relative">
        <SectionTitle
          eyebrow="04 · Arena Log"
          title="Competitions & events"
          subtitle={`${eventCount} events · ${winCount} wins & finals · ${certTotal} certificates — grouped by where they happened.`}
        />

        {/* venue tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {venues.map((v) => {
            const active = venue === v.id
            const count = events.filter((e) => e.venue === v.id).length
            return (
              <button
                key={v.id}
                onClick={() => setVenue(v.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  active ? 'text-ink' : 'text-slate-300 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="venuePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">
                  {v.label}
                  <span className={`ml-1.5 ${active ? 'text-ink/70' : 'text-slate-500'}`}>{count}</span>
                </span>
              </button>
            )
          })}
        </div>
        <p className="mt-2 text-xs text-slate-500">{meta?.sub}</p>

        {/* Wins */}
        {wins.length > 0 && (
          <div className="mt-10">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Medal size={18} className="text-amber-300" /> Wins & achievements
              <span className="text-sm font-normal text-slate-500">({wins.length})</span>
            </h3>
            <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">{wins.map(Card)}</AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Participation */}
        {parts.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Users size={18} style={{ color: accent }} /> Participation
              <span className="text-sm font-normal text-slate-500">({parts.length})</span>
            </h3>
            <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">{parts.map(Card)}</AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(ev) => ev.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 rounded-lg border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:text-white"
              >
                <X size={18} />
              </button>
              <div className="glass overflow-hidden rounded-2xl">
                <img src={openCert.image} alt={lightbox.event.title} className="w-full bg-black/40 object-contain" />
                <div className="border-t border-white/10 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Award size={16} style={{ color: accent }} />
                    <span className="text-sm font-medium text-white">{lightbox.event.title}</span>
                    {lightbox.event.result && lightbox.event.result !== 'Participant' && (
                      <span className="rounded-full bg-amber-300/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                        {lightbox.event.result}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {lightbox.event.org}
                    </span>
                    {lightbox.event.sub && (
                      <span className="inline-flex items-center gap-1">
                        <Users size={12} /> {lightbox.event.sub}
                      </span>
                    )}
                  </div>

                  {lightbox.event.certs.length > 1 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-slate-500">Certificate:</span>
                      {lightbox.event.certs.map((c, ci) => {
                        const on = ci === lightbox.idx
                        return (
                          <button
                            key={c.image}
                            onClick={() => setLightbox({ event: lightbox.event, idx: ci })}
                            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                              on
                                ? 'border-neon-cyan/60 bg-neon-cyan/15 text-white'
                                : 'border-white/10 bg-white/5 text-slate-300 hover:text-white'
                            }`}
                          >
                            {c.issuer}
                            {c.date ? ` · ${c.date}` : ''}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
