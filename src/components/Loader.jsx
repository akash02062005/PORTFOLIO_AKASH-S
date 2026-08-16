import { useState, useEffect, useRef } from 'react'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timerRef.current)
          setTimeout(() => {
            setHidden(true)
            onDone?.()
          }, 400)
          return 100
        }
        return p + Math.random() * 15 + 5
      })
    }, 120)
    return () => clearInterval(timerRef.current)
  }, [onDone])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-navy-900 transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p className="font-mono text-accent text-sm mb-6 tracking-widest">
        {'<AS />'}
      </p>
      <div className="w-48 h-[2px] bg-navy-700 rounded overflow-hidden">
        <div
          className="h-full bg-accent rounded transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="font-mono text-slate-dark text-[11px] mt-4">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  )
}
