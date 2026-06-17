import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Sparkles } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'
import { about, profile, education } from '../../data/profile'

export default function About() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section id="about" className="relative">
      <div className="section-pad">
        <SectionTitle
          eyebrow="01 · Identity"
          title="The human behind the network"
          subtitle="A computer-science engineer who treats AI research and product engineering as one craft."
        />

        <div className="mt-14 grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr]">
          {/* Photo / avatar card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-neon-cyan/20 via-neon-violet/15 to-neon-pink/20 opacity-60 blur-xl" />

            <TiltCard className="group rounded-3xl" max={7} glareColor="#22d3ee">
              <div className="glass relative overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5] w-full">
                  {imgOk ? (
                    <img
                      src={about.photo}
                      alt="Akash S"
                      onError={() => setImgOk(false)}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-panel to-ink text-center">
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet font-display text-4xl font-bold text-ink">
                        AS
                      </div>
                      <p className="mt-4 max-w-[14rem] px-4 font-mono text-xs text-slate-400">
                        Drop your photo at{' '}
                        <span className="text-neon-cyan">public/akash-photo.jpg</span> to
                        replace this placeholder.
                      </p>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                  <span className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-neon-green" />
                    status: building
                  </span>
                  <span className="font-mono text-xs text-neon-cyan">CGPA {profile.cgpa}</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              {about.summary.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="chip">
                <MapPin size={13} className="text-neon-cyan" /> {profile.location}
              </span>
              <span className="chip">
                <GraduationCap size={13} className="text-neon-violet" />
                {education.degree}
              </span>
              <span className="chip">
                <Sparkles size={13} className="text-neon-pink" /> {education.school}
              </span>
            </div>

            {/* facts grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {about.facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass glass-hover rounded-2xl p-4 text-center"
                >
                  <div className="gradient-text font-display text-2xl font-bold">
                    {f.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                    {f.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
