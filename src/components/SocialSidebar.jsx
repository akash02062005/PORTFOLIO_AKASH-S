import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: profile.socials.email, label: 'Email' },
]

export default function SocialSidebar() {
  return (
    <div className="hidden md:flex fixed bottom-0 left-8 lg:left-12 flex-col items-center gap-5 z-40">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-slate-dark hover:text-accent hover:-translate-y-1 transition-all duration-200"
        >
          <Icon size={20} strokeWidth={1.5} />
        </a>
      ))}
      <div className="w-px h-24 bg-slate-dark mt-2" />
    </div>
  )
}
