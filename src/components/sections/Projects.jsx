import { Suspense, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Trophy, Github, Rocket } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import ProjectPlanet from '../three/ProjectPlanet'
import ProjectPreview from '../ui/ProjectPreview'
import TiltCard from '../ui/TiltCard'
import { projects, projectCategories, profile } from '../../data/profile'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('all')

  const filtered = useMemo(
    () => (tab === 'all' ? projects : projects.filter((p) => p.category === tab)),
    [tab]
  )

  // only show category tabs that actually have projects (plus All)
  const visibleTabs = projectCategories.filter(
    (c) => c.id === 'all' || projects.some((p) => p.category === c.id)
  )

  return (
    <section id="projects" className="relative">
      <div className="section-pad">
        <SectionTitle
          eyebrow="02 · Project Galaxies"
          title="Worlds I’ve built"
          subtitle="Each planet is a production-grade project. Orbit the galaxy, hover a world, and click to dive in."
        />

        {/* 3D galaxy */}
        <div className="relative mt-10 h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-panel/40 to-ink md:h-[520px]">
          <Canvas camera={{ position: [0, 3.5, 9], fov: 55 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 0, 0]} intensity={2} color="#8b5cf6" />
            <Suspense fallback={null}>
              <Stars radius={50} depth={30} count={1500} factor={3} fade speed={0.6} />
              <mesh>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial
                  color="#8b5cf6"
                  emissive="#22d3ee"
                  emissiveIntensity={0.8}
                  roughness={0.2}
                />
              </mesh>
              {projects.map((p, i) => (
                <ProjectPlanet
                  key={p.id}
                  project={p}
                  index={i}
                  total={projects.length}
                  onSelect={setSelected}
                  active={selected?.id === p.id}
                />
              ))}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.4}
                minPolarAngle={Math.PI / 3.2}
                maxPolarAngle={Math.PI / 1.8}
              />
            </Suspense>
          </Canvas>
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[11px] text-slate-400">
            drag to orbit · click a planet to open
          </div>
        </div>

        {/* category tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {visibleTabs.map((c) => {
            const count =
              c.id === 'all'
                ? projects.length
                : projects.filter((p) => p.category === c.id).length
            const active = tab === c.id
            return (
              <button
                key={c.id}
                onClick={() => setTab(c.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  active ? 'text-ink' : 'text-slate-300 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="tabPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">
                  {c.label}
                  <span className={`ml-1.5 ${active ? 'text-ink/70' : 'text-slate-500'}`}>
                    {count}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* card grid */}
        <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <TiltCard glareColor={p.color} className="h-full">
                  <button
                    onClick={() => setSelected(p)}
                    className="glass glass-hover flex h-full w-full flex-col rounded-2xl p-4 text-left"
                  >
                    <ProjectPreview src={p.image} name={p.name} color={p.color} tags={p.tags} />
                    <div className="mt-4 flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {p.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-neon-cyan">{p.type}</p>
                      </div>
                      {p.award && <Trophy size={16} className="shrink-0 text-amber-300" />}
                    </div>
                    <p className="mt-3 line-clamp-2 flex-1 text-sm text-slate-400">{p.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 4).map((s) => (
                        <span key={s} className="chip text-[10px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </button>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* empty state for categories awaiting GitHub import */}
        {filtered.length === 0 && (
          <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border border-dashed border-white/15 p-10 text-center">
            <Github size={22} className="text-slate-500" />
            <p className="text-sm text-slate-400">
              More projects in this category are being imported from GitHub.
            </p>
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 md:p-8"
            >
              <div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
                style={{ background: selected.color }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white"
              >
                <X size={18} />
              </button>

              <ProjectPreview
                src={selected.image}
                name={selected.name}
                color={selected.color}
                tags={selected.tags}
              />

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{ background: `${selected.color}22`, color: selected.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                {selected.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-neon-cyan">{selected.type}</p>
              <p className="mt-4 text-slate-300">{selected.blurb}</p>

              <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-slate-400">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {selected.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: selected.color }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-slate-400">
                Stack
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {selected.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={selected.repo || profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-violet px-5 py-2.5 text-sm font-semibold text-ink transition hover:shadow-glow"
                >
                  <Github size={15} /> View code
                </a>
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-neon-cyan/50"
                  >
                    <Rocket size={15} /> Live demo <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
