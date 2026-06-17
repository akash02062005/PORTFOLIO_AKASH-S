import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Download, Presentation, Mic, Award, FileBadge, X } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { conferences, seminars } from '../../data/talks'

export default function Talks() {
  const [cert, setCert] = useState(null)

  return (
    <section id="talks" className="relative">
      <div className="aurora right-[-10%] top-24 h-72 w-72 bg-neon-cyan/25" />
      <div className="section-pad relative">
        <SectionTitle
          eyebrow="05 · Research & Talks"
          title="Papers presented & seminars delivered"
          subtitle="Peer-reviewed conference presentations and technical seminars — slides included."
        />

        {/* Conference presentations */}
        <div className="mt-12">
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-white">
            <FileText size={18} className="text-neon-cyan" /> Conference presentations
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {conferences.map((c, i) => (
              <motion.div
                key={c.event}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover relative overflow-hidden rounded-2xl p-6"
              >
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-30 blur-2xl"
                  style={{ background: c.accent }}
                />
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  style={{ background: `${c.accent}22`, color: c.accent }}
                >
                  <Award size={11} /> {c.badge}
                </span>
                <h4 className="mt-3 font-display text-xl font-bold text-white">{c.title}</h4>
                <p className="mt-1 text-sm text-slate-300">{c.subtitle}</p>
                <div className="mt-4 space-y-1 border-l-2 pl-3" style={{ borderColor: `${c.accent}66` }}>
                  <p className="text-sm font-medium text-white">{c.event}</p>
                  <p className="text-xs text-slate-400">{c.host}</p>
                  <p className="font-mono text-xs text-neon-cyan">{c.date}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={c.ppt}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-neon-cyan/50"
                  >
                    <Download size={15} /> Download presentation (PPTX)
                  </a>
                  {c.cert && (
                    <button
                      onClick={() => setCert({ image: c.cert, title: c.title, event: c.event })}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-neon-cyan/50"
                    >
                      <FileBadge size={15} className="text-neon-cyan" /> View certificate
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seminars */}
        <div className="mt-14">
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Mic size={18} className="text-neon-violet" /> Seminars delivered
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {seminars.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08 }}
                className="glass glass-hover flex flex-col rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${s.accent}22`, color: s.accent }}
                  >
                    <Presentation size={18} />
                  </span>
                  <span className="chip text-[10px]">{s.tag}</span>
                </div>
                <h4 className="mt-4 font-display text-base font-semibold text-white">{s.title}</h4>
                <ul className="mt-3 flex-1 space-y-2">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-400">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: s.accent }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={s.ppt}
                  download
                  className="mt-4 inline-flex items-center gap-2 self-start rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white transition hover:border-neon-cyan/50"
                >
                  <Download size={13} /> Slides (PPTX)
                </a>
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
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setCert(null)}
                className="absolute -top-12 right-0 rounded-lg border border-white/15 bg-white/5 p-2 text-slate-200 transition hover:text-white"
              >
                <X size={18} />
              </button>
              <div className="glass overflow-hidden rounded-2xl">
                <img src={cert.image} alt={cert.title} className="w-full bg-black/40 object-contain" />
                <div className="flex items-center gap-2 border-t border-white/10 p-4">
                  <Award size={16} className="text-neon-cyan" />
                  <span className="text-sm font-medium text-white">{cert.title}</span>
                  <span className="font-mono text-xs text-slate-400">· {cert.event}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
