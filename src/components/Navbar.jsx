import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useHashRoute, navigate } from '../hooks/useHashRoute'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'events', label: 'Events' },
  { id: 'skills', label: 'Skills' },
  { id: 'talks', label: 'Research' },
  { id: 'research', label: 'Credentials' },
  { id: 'resume', label: 'Résumé' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const route = useHashRoute()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    if (route !== '/') {
      // navigate home first, then scroll once the section has mounted
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 90)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink"
        style={{ scaleX: progress, width: '100%' }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all md:px-6 ${
            scrolled ? 'glass mx-3 md:mx-auto' : 'bg-transparent'
          }`}
        >
          <button onClick={() => go('hero')} className="group flex items-center gap-2">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet font-display text-sm font-bold text-ink">
              AS
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-white">
              Akash<span className="text-neon-cyan">.</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="ml-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet px-4 py-2 text-sm font-semibold text-ink transition hover:shadow-glow"
            >
              Let’s talk
            </button>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-3 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-lg px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </header>
    </>
  )
}
