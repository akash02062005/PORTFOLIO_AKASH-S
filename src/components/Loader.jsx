import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const lines = [
  'Initializing neural core…',
  'Loading project galaxies…',
  'Calibrating synapses…',
  'Booting AI guide “Aria”…',
  'Welcome to the Neural Universe.',
]

export default function Loader({ onDone }) {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (step >= lines.length - 1) {
      const t = setTimeout(() => {
        setDone(true)
        onDone?.()
      }, 700)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStep((s) => s + 1), 520)
    return () => clearTimeout(t)
  }, [step, onDone])

  const progress = Math.round(((step + 1) / lines.length) * 100)

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative mb-8 h-24 w-24"
          >
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-violet" />
            <div className="absolute inset-2 animate-pulse rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30 blur-md" />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-neon-cyan">
              {progress}%
            </div>
          </motion.div>

          <div className="h-6 font-mono text-sm text-slate-300">
            <AnimatePresence mode="wait">
              <motion.span
                key={step}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                {lines[step]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
              animate={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
