import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { Section } from '../ui/SectionTitle'
import { profile } from '../../data/profile'

export default function Contact() {
  return (
    <Section id="contact" className="!max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">13 — What&apos;s next?</p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
      <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
        I&apos;m open to internships, new-grad roles and interesting collaborations. My inbox is always
        open — whether you have a role, a question or just want to say hi.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href={profile.socials.email} className="btn btn-solid">
          <Mail size={15} /> Say hello
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn btn-ghost">
          <Phone size={15} /> {profile.phone}
        </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-5 text-muted">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
          <Github size={20} />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink">
          <Linkedin size={20} />
        </a>
      </div>
    </Section>
  )
}
