import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Volume2, VolumeX, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import NeuralNet from '../three/NeuralBackground'
import DeveloperAvatar from '../three/DeveloperAvatar'
import MagneticButton from '../ui/MagneticButton'
import { profile } from '../../data/profile'

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [speaking, setSpeaking] = useState(false)
  const utterRef = useRef(null)

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % profile.roles.length),
      2200
    )
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    }
  }, [])

  const speak = () => {
    if (!('speechSynthesis' in window)) return
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }
    const text = `Hi, I'm Akash. Welcome to my neural universe. I build intelligent products — from large language model applications and deep learning models to full stack platforms. Recently, my team and I won first place at Hackwise 2.0, among over a thousand teams. Take a look around, and feel free to ask my AI assistant anything.`
    const u = new SpeechSynthesisUtterance(text)
    u.rate = 1.02
    u.pitch = 1
    u.onend = () => setSpeaking(false)
    utterRef.current = u
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(u)
    setSpeaking(true)
  }

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* 3D canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 12], fov: 55 }} dpr={[1, 2]}>
          <color attach="background" args={['#05060f']} />
          <fog attach="fog" args={['#05060f', 14, 26]} />
          <ambientLight intensity={0.4} />
          <Suspense fallback={null}>
            <Stars radius={60} depth={40} count={2600} factor={4} saturation={0} fade speed={1} />
            <NeuralNet />
            <pointLight position={[3, 3, 5]} intensity={0.6} color="#22d3ee" />
            <group position={[3.8, 0.1, 3]} scale={1.0}>
              <DeveloperAvatar scale={1} />
            </group>
          </Suspense>
        </Canvas>
      </div>

      {/* gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      {/* avatar hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 text-right lg:block"
      >
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[11px] text-neon-cyan backdrop-blur">
          ◆ move your mouse to rotate me
        </span>
      </motion.div>

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
            </span>
            {profile.availability}
          </div>

          <p className="mb-2 font-mono text-sm text-neon-cyan">{profile.location}</p>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            {profile.name}
          </h1>

          <div className="mt-3 flex h-8 items-center font-mono text-lg text-slate-300 md:text-xl">
            <span className="mr-2 text-neon-violet">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="gradient-text font-semibold"
              >
                {profile.roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-neon-cyan" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            {profile.headline}{' '}
            <span className="text-slate-400">{profile.tagline}</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-violet px-5 py-3 text-sm font-semibold text-ink transition hover:shadow-glow"
            >
              <Sparkles size={16} /> Explore the universe
            </MagneticButton>
            <MagneticButton
              onClick={speak}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-neon-cyan/50"
            >
              {speaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {speaking ? 'Stop intro' : 'Hear my intro'}
            </MagneticButton>

            <div className="ml-1 flex items-center gap-1">
              {[
                { icon: Github, href: profile.socials.github },
                { icon: Linkedin, href: profile.socials.linkedin },
                { icon: Mail, href: profile.socials.email },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:border-neon-cyan/50 hover:text-neon-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-400 transition hover:text-white"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </button>
    </section>
  )
}
