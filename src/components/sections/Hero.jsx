import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Trophy } from 'lucide-react'
import { profile, about } from '../../data/profile'

function RoleRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <span key={i} className="role-swap inline-block">
      {profile.roles[i]}
    </span>
  )
}

function Tag({ className = '', children }) {
  return (
    <span
      className={`absolute z-10 whitespace-nowrap rounded-full border border-line bg-paper px-2.5 py-0.5 text-[11px] font-medium shadow-sm sm:px-3 sm:py-1 sm:text-xs ${className}`}
    >
      {children}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="section grid items-center gap-10 !pb-8 !pt-24 md:!pt-28 lg:grid-cols-[1fr,320px] lg:gap-16"
    >
      {/* Photo first on mobile so recruiters see it immediately */}
      <div className="relative order-first mx-auto mt-4 w-full max-w-[240px] sm:max-w-[270px] lg:order-none lg:col-start-2 lg:max-w-[300px]">
        <Tag className="-top-3 left-1/2 -translate-x-1/2 !border-ink !bg-ink font-semibold !text-paper">
          <span className="inline-flex items-center gap-1.5">
            <Trophy size={12} /> Hackwise 2.0 Winner
          </span>
        </Tag>
        <Tag className="-left-5 top-[22%] -rotate-3 sm:-left-6">AI / LLM Engineer</Tag>
        <Tag className="-right-5 top-[42%] rotate-2 sm:-right-6">Full-Stack · MERN</Tag>
        <Tag className="-left-4 top-[64%] rotate-2 sm:-left-5">Machine Learning</Tag>
        <Tag className="-right-3 bottom-[8%] -rotate-2 sm:-right-4">Generative AI</Tag>
        <img
          src={about.photo}
          alt={profile.name}
          className="aspect-[4/5] w-full rounded-2xl border border-line object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
        />
      </div>

      <div className="lg:col-start-1 lg:row-start-1">
        <p className="mb-3 font-mono text-sm text-muted">Hi, my name is</p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Akash S.</h1>
        <h2 className="mt-2 font-display text-xl font-semibold text-muted sm:text-3xl">
          <RoleRotator />
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{profile.tagline}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-faint">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
          <span>{profile.availability}</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-solid">View my work</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
        <div className="mt-6 flex items-center gap-5 text-muted">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
            <Github size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink">
            <Linkedin size={20} />
          </a>
          <a href={profile.socials.email} aria-label="Email" className="transition-colors hover:text-ink">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
