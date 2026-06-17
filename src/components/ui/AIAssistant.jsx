import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Send, X, Sparkles } from 'lucide-react'
import { answerQuery, suggestedQuestions, intro } from '../../data/knowledge'

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: intro }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [pinged, setPinged] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // gentle attention nudge after a few seconds
  useEffect(() => {
    const t = setTimeout(() => setPinged(true), 6000)
    return () => clearTimeout(t)
  }, [])

  const ask = (text) => {
    const q = (text ?? input).trim()
    if (!q) return
    setMessages((m) => [...m, { role: 'user', text: q }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const a = answerQuery(q)
      setTyping(false)
      setMessages((m) => [...m, { role: 'bot', text: a }])
    }, 450 + Math.random() * 350)
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => {
          setOpen((o) => !o)
          setPinged(false)
        }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet text-ink shadow-glow"
        aria-label="Ask Akash's AI assistant"
      >
        {open ? <X size={22} /> : <Bot size={24} />}
        {!open && pinged && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-pink opacity-75" />
            <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-neon-pink text-[9px] font-bold text-white">
              1
            </span>
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="glass fixed bottom-24 right-5 z-[70] flex h-[60vh] max-h-[520px] w-[92vw] max-w-[380px] flex-col overflow-hidden rounded-3xl"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-neon-cyan/10 to-neon-violet/10 px-4 py-3.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet text-ink">
                <Bot size={18} />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-panel bg-neon-green" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Aria · Akash’s AI</p>
                <p className="font-mono text-[10px] text-neon-cyan">online · ask me anything</p>
              </div>
            </div>

            {/* messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-gradient-to-br from-neon-cyan to-neon-violet text-ink'
                        : 'border border-white/10 bg-white/5 text-slate-200'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-neon-cyan"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* suggestions (only at start) */}
              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => ask(q)}
                      className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1.5 text-xs text-neon-cyan transition hover:bg-neon-cyan/20"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                ask()
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <Sparkles size={15} className="ml-1 shrink-0 text-neon-violet" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills…"
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet text-ink transition hover:shadow-glow"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
