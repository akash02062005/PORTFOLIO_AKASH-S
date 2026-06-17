import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { profile } from '../../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  const send = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (_) {}
  }

  return (
    <section id="contact" className="relative">
      <div className="aurora left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-neon-violet/30" />
      <div className="section-pad relative">
        <SectionTitle
          align="center"
          eyebrow="06 · Contact Terminal"
          title="Let’s build something intelligent"
          subtitle="Open to internships, new-grad roles and ambitious AI projects. Drop a line — I reply fast."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Terminal form */}
          <motion.form
            onSubmit={send}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                akash@neural-universe: ~/contact
              </span>
            </div>
            <div className="space-y-4 p-5">
              <div>
                <label className="mb-1 block font-mono text-xs text-neon-cyan">
                  $ name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none transition focus:border-neon-cyan/60"
                  placeholder="Jane Recruiter"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-neon-cyan">
                  $ email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none transition focus:border-neon-cyan/60"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs text-neon-cyan">
                  $ message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none transition focus:border-neon-cyan/60"
                  placeholder="We’d love to talk to you about…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet px-5 py-3 text-sm font-semibold text-ink transition hover:shadow-glow"
              >
                <Send size={15} /> Send message
              </button>
            </div>
          </motion.form>

          {/* Direct links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <button
              onClick={copyEmail}
              className="glass glass-hover flex items-center justify-between rounded-2xl p-5 text-left"
            >
              <span className="flex items-center gap-3">
                <Mail size={18} className="text-neon-cyan" />
                <span>
                  <span className="block text-sm text-white">{profile.email}</span>
                  <span className="text-xs text-slate-400">Tap to copy</span>
                </span>
              </span>
              {copied ? (
                <Check size={16} className="text-neon-green" />
              ) : (
                <Copy size={16} className="text-slate-400" />
              )}
            </button>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="glass glass-hover flex items-center gap-3 rounded-2xl p-5"
            >
              <Phone size={18} className="text-neon-violet" />
              <span>
                <span className="block text-sm text-white">{profile.phone}</span>
                <span className="text-xs text-slate-400">Call / WhatsApp</span>
              </span>
            </a>

            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              <MapPin size={18} className="text-neon-pink" />
              <span>
                <span className="block text-sm text-white">{profile.location}</span>
                <span className="text-xs text-slate-400">Remote-friendly</span>
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Github, href: profile.socials.github, label: 'GitHub' },
                { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: profile.socials.email, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass glass-hover flex flex-col items-center gap-1.5 rounded-2xl p-4 text-slate-300 hover:text-white"
                >
                  <Icon size={18} />
                  <span className="text-[11px]">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="mt-14 text-center font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name} · Designed & built in the Neural
          Universe.
        </p>
      </div>
    </section>
  )
}
