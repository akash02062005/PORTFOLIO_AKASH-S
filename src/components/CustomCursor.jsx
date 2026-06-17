import { useEffect, useRef } from 'react'

/** A glowing dual-ring cursor that grows over interactive elements. */
export default function CustomCursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    // only enable on devices with a fine pointer
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    document.body.classList.add('custom-cursor-active')

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`
      }
      const t = e.target
      const interactive =
        t.closest('a, button, [role="button"], input, textarea, .cursor-pointer')
      if (ring.current) {
        ring.current.style.width = interactive ? '52px' : '32px'
        ring.current.style.height = interactive ? '52px' : '32px'
        ring.current.style.borderColor = interactive
          ? 'rgba(236,72,153,0.9)'
          : 'rgba(34,211,238,0.7)'
      }
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-neon-cyan"
        style={{ mixBlendMode: 'screen' }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-4 -mt-4 h-8 w-8 rounded-full border border-neon-cyan/70 transition-[width,height,border-color] duration-200"
        style={{ mixBlendMode: 'screen' }}
      />
    </>
  )
}
