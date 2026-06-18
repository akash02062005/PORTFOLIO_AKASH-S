import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BadgeCheck, GraduationCap, Code2, ArrowUpRight, X, Award, School, Heart } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { certGroups, certCount, issuerCount } from '../../data/certificates'
import { education, profile, schooling, hobbies } from '../../data/profile'

export default function Research() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  // flatten with issuer + accent attached
  const allCerts = useMemo(
    () =>
      certGroups.flatMap((g) =>
        g.items.map((it) => ({ ...it, issuer: g.issuer, accent: g.accent }))
      ),
    []
  )
  const issuers = ['All', ...certGroups.map((g) => g.issuer)]
  const shown = filter === 'All' ? allCerts : allCerts.filter((c) => c.issuer === filter)

  return (
    <section id="research" className="relative">
      <div className="section-pad">
        <SectionTitle
          eyebrow="05 · Research Portal"
          title="Credentials & proof of work"
          subtitle={`${certCount}+ certifications across ${issuerCount} platforms — plus academics and competitive-programming footprints.`}
        />

        {/* issuer filter chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {issuers.map((iss) => {
            const active = filter === iss
            return (
              <button
                key={iss}
                onClick={() => setFilter(iss)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  active ? 'text-ink' : 'text-slate-300 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="certPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{iss}</span>
              </button>
            )
          })}
        </div>

        {/* certificate gallery */}
        <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((c, i) => (
              <motion.button
                key={`${c.issuer}-${c.title}`}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: (i % 9) * 0.04 }}
                onClick={() => c.image && setLightbox(c)}
                className={`glass group overflow-hidden rounded-2xl text-left transition ${
                  c.image ? 'glass-hover cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full flex-col items-center justify-center gap-2"
                      style={{ background: `radial-gradient(circle at 40% 30%, ${c.accent}33, transparent 65%)` }}
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-lg font-bold text-ink"
                        style={{ background: c.accent }}
                      >
                        {c.issuer.charAt(0)}
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">image coming soon</span>
                    </div>
                  )}
                  <span
                    className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={{ background: `${c.accent}26`, color: c.accent }}
                  >
                    {c.issuer}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-2 p-3.5">
                  <div>
                    <p className="text-sm font-medium leading-snug text-white">{c.title}</p>
                    {c.date && <p className="mt-1 font-mono text-[11px] text-slate-500">{c.date}</p>}
                  </div>
                  <BadgeCheck size={16} className="mt-0.5 shrink-0" style={{ color: c.accent }} />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Education + coding profiles */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <GraduationCap size={18} className="text-neon-violet" /> Education
            </h3>
            <p className="font-display text-base font-semibold text-white">{education.degree}</p>
            <p className="text-sm text-neon-cyan">{education.school}</p>
            <p className="mt-1 text-xs text-slate-400">
              {education.place} · {education.date}
            </p>
            <div className="mt-3 inline-flex rounded-lg bg-white/5 px-3 py-1 font-mono text-xs text-slate-200">
              CGPA {education.cgpa}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {education.coursework.map((c) => (
                <span key={c} className="chip text-[10px]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Schooling */}
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <School size={18} className="text-neon-cyan" /> Schooling
            </h3>
            <p className="font-display text-base font-semibold text-white">{schooling.name}</p>
            <p className="mt-1 text-xs text-slate-400">{schooling.place}</p>
            <div className="mt-4 space-y-2">
              {schooling.records.map((r) => (
                <div
                  key={r.level}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {r.level}
                      <span
                        className="ml-2 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-neon-cyan"
                        title={r.boardFull}
                      >
                        {r.board}
                      </span>
                    </p>
                    <p className="font-mono text-[11px] text-slate-500">{r.score}</p>
                  </div>
                  <span className="gradient-text font-display text-lg font-bold">{r.percent}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Code2 size={18} className="text-neon-green" /> Coding profiles
            </h3>
            <div className="space-y-2.5">
              {profile.codingProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: p.color, boxShadow: `0 0 12px ${p.color}` }}
                    />
                    <span className="text-sm font-medium text-white">{p.name}</span>
                    <span className="font-mono text-xs text-slate-500">@{p.handle}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-slate-500 transition group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Heart size={18} className="text-neon-pink" /> Hobbies & interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span
                  key={h.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: h.color, boxShadow: `0 0 10px ${h.color}` }}
                  />
                  {h.name}
                </span>
              ))}
            </div>
          </div>
        </div>
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
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 rounded-lg border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:text-white"
              >
                <X size={18} />
              </button>
              <div className="glass overflow-hidden rounded-2xl">
                <img src={lightbox.image} alt={lightbox.title} className="w-full object-contain" />
                <div className="flex items-center justify-between gap-3 border-t border-white/10 p-4">
                  <div className="flex items-center gap-2">
                    <Award size={16} style={{ color: lightbox.accent }} />
                    <span className="text-sm font-medium text-white">{lightbox.title}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    {lightbox.issuer}{lightbox.date ? ` · ${lightbox.date}` : ''}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
