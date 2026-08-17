import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Trophy } from 'lucide-react'
import { profile, about } from '../../data/profile'

const DOMAINS = ['AI / LLM Engineer', 'Full-Stack · MERN', 'Machine Learning', 'Generative AI']

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
      className={`absolute z-10 hidden whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium shadow-sm lg:inline-flex ${className}`}
    >
      {children}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="section !pb-8 !pt-24 md:!pt-28">
      {/* Row 1: photo + name side by side at every width */}
      <div className="grid grid-cols-[34%,1fr] items-stretch gap-4 sm:grid-cols-[30%,1fr] sm:gap-6 lg:grid-cols-[1fr,300px] lg:gap-16">
        <div className="relative flex lg:order-2">
          <Tag className="-top-3 left-1/2 -translate-x-1/2 !border-ink !bg-ink font-semibold !text-paper">
            <span className="inline-flex items-center gap-1.5">
              <Trophy size={12} /> Hackwise 2.0 Winner
            </span>
          </Tag>
          <Tag className="-left-6 top-[22%] -rotate-3">AI / LLM Engineer</Tag>
          <Tag className="-right-6 top-[42%] rotate-2">Full-Stack · MERN</Tag>
          <Tag className="-left-5 top-[64%] rotate-2">Machine Learning</Tag>
          <Tag className="-right-4 bottom-[8%] -rotate-2">Generative AI</Tag>
          <img
            src={about.photo}
            alt={profile.name}
            className="h-full w-full rounded-xl border border-line object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 sm:rounded-2xl lg:aspect-[4/5]"
          />
        </div>

        <div className="flex h-full flex-col lg:order-1">
          <p className="mb-1.5 font-mono text-xs text-muted sm:mb-3 sm:text-sm">Hi, my name is</p>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Akash S.
          </h1>
          <h2 className="mt-1.5 font-display text-base font-semibold text-muted sm:text-2xl lg:text-3xl">
            <RoleRotator />
          </h2>
          <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-ink bg-ink px-2.5 py-1 text-[10px] font-semibold text-paper sm:text-xs lg:hidden">
            <Trophy size={11} /> Hackwise 2.0 Winner
          </span>
          {/* Mobile: CTAs + socials sit beside the photo */}
          <div className="mt-auto pt-3 lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              <a href="#projects" className="btn btn-solid !px-3 !py-2 !text-xs sm:!text-sm">View my work</a>
              <a href="#contact" className="btn btn-ghost !px-3 !py-2 !text-xs sm:!text-sm">Get in touch</a>
            </div>
            <div className="mt-3 flex items-center gap-5 text-muted">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink">
                <Github size={18} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink">
                <Linkedin size={18} />
              </a>
              <a href={profile.socials.email} aria-label="Email" className="transition-colors hover:text-ink">
                <Mail size={18} />
              </a>
            </div>
          </div>
          {/* Desktop-only supporting copy sits beside the photo */}
          <p className="mt-4 hidden max-w-2xl leading-relaxed text-muted lg:block">{profile.tagline}</p>
          <div className="mt-3 hidden flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-faint lg:flex">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <span>{profile.availability}</span>
          </div>
          <div className="mt-6 hidden flex-wrap items-center gap-3 lg:flex">
            <a href="#projects" className="btn btn-solid">View my work</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
          <div className="mt-6 hidden items-center gap-5 text-muted lg:flex">
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
      </div>

      {/* Row 2: full-width supporting copy, mobile only */}
      <div className="mt-4 lg:hidden">
        <div className="flex flex-wrap gap-1.5">
          {DOMAINS.map((d) => (
            <span key={d} className="chip !px-2.5 !text-[11px]">{d}</span>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{profile.tagline}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-faint">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} /> {profile.location}
          </span>
          <span>{profile.availability}</span>
        </div>
      </div>

    </section>
  )
}
