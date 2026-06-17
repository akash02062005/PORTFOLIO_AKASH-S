import { motion, useScroll, useSpring } from 'framer-motion'

/** A neon progress bar pinned to the top, tracking page scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[95] h-[3px] w-full origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink shadow-[0_0_12px_rgba(34,211,238,0.7)]"
    />
  )
}
