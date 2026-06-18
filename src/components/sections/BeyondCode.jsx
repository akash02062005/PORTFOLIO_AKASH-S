import { motion } from 'framer-motion'
import { Trophy, GraduationCap, Heart, School } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { sports } from '../../data/events'
import { schooling, hobbies } from '../../data/profile'

export default function BeyondCode() {
  return (
    <section id="beyond" className="relative">
      <div className="aurora right-[-10%] top-24 h-72 w-72 bg-neon-green/20" />
      <div className="section-pad relative">
        <SectionTitle
          eyebrow="06 · Beyond Code"
          title="Sports, schooling & interests"
          subtitle="The off-screen side — athletics & locality wins, where I studied, and what I do for fun."
        />

        {/* Sports & extra-curricular */}
        <h3 className="mt-10 mb-4 flex items-center gap-2 font-display text-lg font-semibold text-white">
          <Trophy size={18} className="text-amber-300" /> Sports & extra-curricular
        </h3>
        <div className="grid gap-5 sm:grid-cols-3">
          {sports.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08 }}
              className="glass glass-hover overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                <span
                  className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                  style={{ background: `${s.accent}26`, color: s.accent }}
                >
                  {s.level}
                </span>
                <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-amber-300/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                  <Trophy size={11} /> {s.result}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-white">{s.title}</p>
                <p className="mt-1 truncate text-[11px] text-slate-400">{s.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schooling + hobbies */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
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
              <Heart size={18} className="text-neon-pink" /> Hobbies & interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((h) => (
                <span
                  key={h.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: h.color, boxShadow: `0 0 10px ${h.color}` }} />
                  {h.name}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <GraduationCap size={14} className="text-neon-violet" /> B.E. CSE · PSNA CET · CGPA 8.32
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
