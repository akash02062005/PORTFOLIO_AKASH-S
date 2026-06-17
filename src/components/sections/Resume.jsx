import { motion } from 'framer-motion'
import { Brain, Cpu, Layers, Terminal, Palette, FileText, Eye, Download } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'
import { resumes } from '../../data/profile'

const icons = { brain: Brain, cpu: Cpu, layers: Layers, terminal: Terminal, palette: Palette, file: FileText }

export default function Resume() {
  return (
    <section id="resume" className="relative">
      <div className="aurora left-[-10%] top-24 h-72 w-72 bg-neon-violet/20" />
      <div className="section-pad relative">
        <SectionTitle
          eyebrow="08 · Résumé"
          title="One résumé per role"
          subtitle="Pick the résumé tailored to the role you're hiring for — preview it in the browser or download the PDF."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resumes.map((r, i) => {
            const Icon = icons[r.icon] || FileText
            return (
              <motion.div
                key={r.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06 }}
              >
                <TiltCard className="group h-full rounded-2xl" max={7} glareColor={r.accent}>
                  <div className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `${r.accent}1f`, color: r.accent }}
                      >
                        <Icon size={20} />
                      </span>
                      <h3 className="font-display text-base font-semibold leading-tight text-white">
                        {r.role}
                      </h3>
                    </div>

                    <p className="flex-1 text-sm text-slate-400">{r.desc}</p>

                    <div className="mt-5 flex gap-2">
                      <a
                        href={r.file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-white transition hover:border-neon-cyan/50"
                      >
                        <Eye size={14} /> View
                      </a>
                      <a
                        href={r.file}
                        download
                        className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-ink transition hover:shadow-glow"
                        style={{ background: r.accent }}
                      >
                        <Download size={14} /> Download
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
