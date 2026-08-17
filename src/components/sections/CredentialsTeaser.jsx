import { ArrowRight, BadgeCheck } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import { proCertCount, proIssuerCount } from '../../data/proCerts'
import { profile } from '../../data/profile'

const featured = [
  { date: 'Oct 2025', title: 'Agentic Automation — Developer Associate', issuer: 'UiPath' },
  { date: 'Nov 2025', title: 'Machine Learning with Python', issuer: 'IBM' },
  { date: 'Jan 2026', title: 'Generative AI Foundations', issuer: 'AWS' },
  { date: 'Mar 2026', title: 'Gemini Certified Student (University)', issuer: 'Google' },
]

export default function CredentialsTeaser() {
  return (
    <Section id="certifications">
      <SectionTitle
        kicker="09 — Credentials"
        title="Key certifications"
        subtitle={`The latest of ${proCertCount}+ professional certifications across ${proIssuerCount} platforms.`}
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {featured.map((c) => (
          <div key={c.title} className="card card-hover flex flex-col p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-faint sm:text-xs">{c.date}</p>
              <BadgeCheck size={14} className="shrink-0 text-muted" />
            </div>
            <h3 className="mt-2 grow font-display text-sm font-semibold leading-snug sm:text-base">{c.title}</h3>
            <p className="mt-2 text-xs text-muted">{c.issuer}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {profile.codingProfiles.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="card card-hover p-3 text-center"
          >
            <p className="font-display text-xs font-semibold sm:text-sm">{c.name}</p>
            <p className="mt-0.5 truncate font-mono text-[10px] text-faint">@{c.handle}</p>
          </a>
        ))}
      </div>

      <a href="#/certificates" className="btn btn-ghost mt-6 w-full sm:w-auto">
        All {proCertCount} certificates <ArrowRight size={15} />
      </a>
    </Section>
  )
}
