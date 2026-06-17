import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Medal, Star, Briefcase, FileBadge, X } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { achievements, experience } from '../../data/profile'

const iconMap = { trophy: Trophy, medal: Medal, star: Star }

export default function Hackathons() {
  const [cert, setCert] = useState(null)

  return (
    <section id="hackathons" className="relative">
      {/* aurora glows */}
      <div className="aurora left-[-10%] top-20 h-72 w-72 bg-neon-violet/40" />
      <div className="aurora right-[-10%] bottom-10 h-72 w-72 bg-neon-cyan/30" />

      <div className="section-pad relative">
        <SectionTitle
          eyebrow="03 · Hackathon Dimension"
          title="Trophies & trajectory"
          subtitle="Wins, finals and the internships that sharpened the craft."
        />

        {/* Achievement holograms */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Star
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30, rotateX: -12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group relative"
                style={{ perspective: 800 }}
              >
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-neon-cyan/40 via-neon-violet/30 to-neon-pink/40 opacity-50 blur transition group-hover:opacity-90" />
                <div className="glass relative flex flex-col items-center overflow-hidden rounded-2xl p-7 text-center">
                  <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
                  <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20">
                    <div className="absolute inset-0 animate-pulseGlow rounded-2xl bg-neon-cyan/10" />
                    <Icon size={28} className="relative text-amber-300" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{a.detail}</p>
                  <span className="mt-3 font-mono text-xs text-neon-cyan">{a.year}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Experience timeline */}
        <div className="mt-16">
          <h3 className="mb-8 flex items-center gap-2 font-display text-xl font-semibold text-white">
            <Briefcase size={18} className="text-neon-cyan" /> Experience timeline
          </h3>
          <div className="relative ml-3 border-l border-white/10 pl-8">
            {experience.map((e, i) => (
              <motion.div
                key={`${e.org}-${i}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-neon-cyan/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet" />
                </span>
                <div className="glass glass-hover rounded-2xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-semibold text-white">
                      {e.role} ·{' '}
                      <span className="text-neon-cyan">{e.org}</span>
                    </h4>
                    <span className="font-mono text-xs text-slate-400">{e.date}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon-violet" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {e.cert && (
                    <button
                      onClick={() => setCert({ image: e.cert, role: e.role, org: e.org })}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-neon-cyan/50 hover:text-white"
                    >
                      <FileBadge size={14} className="text-neon-cyan" /> View certificate
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate lightbox */}
      <AnimatePresence>
        {cert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCert(null)}
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
                onClick={() => setCert(null)}
                className="absolute -top-12 right-0 rounded-lg border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:text-white"
              >
                <X size={18} />
              </button>
              <div className="glass overflow-hidden rounded-2xl">
                <img src={cert.image} alt={`${cert.role} — ${cert.org}`} className="w-full bg-black/40 object-contain" />
                <div className="flex items-center gap-2 border-t border-white/10 p-4">
                  <FileBadge size={16} className="text-neon-cyan" />
                  <span className="text-sm font-medium text-white">{cert.role}</span>
                  <span className="font-mono text-xs text-slate-400">· {cert.org}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
