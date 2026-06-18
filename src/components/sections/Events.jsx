import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, X, Award, MapPin, Users, Layers, Medal, Cpu, Sparkles, Camera, FileBadge } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { events, venues, eventCount, certTotal, winCount } from '../../data/events'

export default function Events() {
  const [venue, setVenue] = useState('college')
  const [lightbox, setLightbox] = useState(null) // { event, idx }

  const meta = venues.find((v) => v.id === venue)
  const accent = meta?.accent || '#22d3ee'
  const isCollege = venue === 'college'

  const inVenue = useMemo(() => events.filter((e) => e.venue === venue), [venue])
  const groups = isCollege
    ? [
        { key: 't', label: 'Technical', icon: Cpu, items: inVenue.filter((e) => e.category === 'technical') },
        { key: 'n', label: 'Non-technical', icon: Sparkles, items: inVenue.filter((e) => e.category === 'non-technical') },
      ]
    : [
        { key: 'w', label: 'Wins & achievements', icon: Medal, items: inVenue.filter((e) => e.award === 'winner') },
        { key: 'p', label: 'Participation', icon: Users, items: inVenue.filter((e) => e.award === 'participation') },
      ]

  // lightbox "views" = certificate(s) + winning photo(s)
  const views = lightbox
    ? [
        ...lightbox.event.certs.map((c) => ({ image: c.image, label: c.issuer || 'Certificate', date: c.date, kind: 'cert' })),
        ...(lightbox.event.photos || []).map((p, i) => ({ image: p, label: `Winning moment ${i + 1}`, date: '', kind: 'photo' })),
      ]
    : []
  const openView = lightbox ? views[lightbox.idx] : null

  const Card = (e) => {
    const multi = e.certs.length > 1
    const hasPoints = e.points && e.points.length > 0
    return (
      <motion.button
        key={e.title}
        layout
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={() => setLightbox({ event: e, idx: 0 })}
        className="glass glass-hover group flex cursor-pointer flex-col overflow-hidden rounded-2xl text-left"
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
          {e.photos && e.photos.length > 0 && (
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
              <Camera size={11} /> {e.photos.length}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <p className="text-sm font-semibold leading-snug text-white">{e.title}</p>
          {e.location ? (
            <p className="mt-1 flex items-start gap-1 text-[11px] text-neon-cyan">
              <MapPin size={11} className="mt-0.5 shrink-0" /> {e.location}
            </p>
          ) : (
            <p className="mt-1 truncate text-[11px] text-slate-400">{e.org}</p>
          )}

          {hasPoints ? (
            <ul className="mt-2.5 space-y-1.5">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-1.5 text-[11px] leading-snug text-slate-400">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
                  {p}
                </li>
              ))}
            </ul>
          ) : (
            e.sub && <p className="mt-1 line-clamp-1 text-[11px] text-slate-500">{e.sub}</p>
          )}
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

        {groups.map(
          (g) =>
            g.items.length > 0 && (
              <div key={g.key} className="mt-10">
                <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
                  <g.icon size={18} style={{ color: g.key === 'w' ? '#fcd34d' : accent }} />
                  {g.label}
                  <span className="text-sm font-normal text-slate-500">({g.items.length})</span>
                </h3>
                <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">{g.items.map(Card)}</AnimatePresence>
                </motion.div>
              </div>
            )
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && openView && (
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
              <div className="glass max-h-[85vh] overflow-y-auto rounded-2xl">
                <img src={openView.image} alt={lightbox.event.title} className="w-full bg-black/40 object-contain" />
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
                      <MapPin size={12} /> {lightbox.event.location || lightbox.event.org}
                    </span>
                  </div>
                  {lightbox.event.points && (
                    <ul className="mt-3 space-y-1.5">
                      {lightbox.event.points.map((p, i) => (
                        <li key={i} className="flex gap-2 text-xs text-slate-300">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: accent }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {views.length > 1 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-slate-500">View:</span>
                      {views.map((v, vi) => {
                        const on = vi === lightbox.idx
                        const Icon = v.kind === 'photo' ? Camera : FileBadge
                        return (
                          <button
                            key={v.image}
                            onClick={() => setLightbox({ event: lightbox.event, idx: vi })}
                            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                              on
                                ? 'border-neon-cyan/60 bg-neon-cyan/15 text-white'
                                : 'border-white/10 bg-white/5 text-slate-300 hover:text-white'
                            }`}
                          >
                            <Icon size={12} />
                            {v.label}
                            {v.date ? ` · ${v.date}` : ''}
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
