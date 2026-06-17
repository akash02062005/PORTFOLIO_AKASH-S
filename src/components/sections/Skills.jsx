import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'
import { skills } from '../../data/profile'

export default function Skills() {
  // flatten every skill once for the scrolling ribbon (duplicated for a seamless loop)
  const ribbon = skills.flatMap((g) => g.items.map((item) => ({ item, color: g.color })))
  const ribbonLoop = [...ribbon, ...ribbon]

  return (
    <section id="skills" className="relative">
      <div className="section-pad">
        <SectionTitle
          eyebrow="04 · The AI Lab"
          title="Tools of the trade"
          subtitle="The stack I reach for to take an idea from notebook to deployed product."
        />

        {/* infinite scrolling skill ribbon */}
        <div className="marquee mt-10 py-2">
          <div className="marquee-track gap-3">
            {ribbonLoop.map(({ item, color }, i) => (
              <span
                key={`${item}-${i}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: color, boxShadow: `0 0 10px ${color}` }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skills.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: gi * 0.08 }}
            >
              <TiltCard className="group h-full rounded-2xl" max={7} glareColor={group.color}>
                <div className="glass glass-hover h-full rounded-2xl p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ background: group.color, boxShadow: `0 0 14px ${group.color}` }}
                    />
                    <h3 className="font-display text-lg font-semibold text-white">
                      {group.group}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02 }}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition hover:border-white/25 hover:bg-white/10"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
