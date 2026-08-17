import { ArrowRight, BadgeCheck } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import { proCertCount, proIssuerCount } from '../../data/proCerts'
import { profile } from '../../data/profile'

// Highlight certifications, oldest first
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
      <ol className="relative ml-1.5 border-l border-line sm:ml-2">
        {featured.map((c) => (
          <li key={c.title} className="relative mb-9 ml-6 pr-1 last:mb-0 sm:ml-8">
            <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-ink sm:-left-[39px]" />
            <p className="font-mono text-xs uppercase tracking-wider text-faint">{c.date}</p>
            <p className="mt-1 inline-flex items-center gap-2 font-display font-semibold">
              <BadgeCheck size={15} className="shrink-0 text-muted" /> {c.title}
            </p>
            <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        {profile.codingProfiles.map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="chip !px-4 !py-1.5 !text-sm transition-colors hover:border-faint hover:text-ink">
            {c.name}
          </a>
        ))}
      </div>
      <a href="#/certificates" className="btn btn-ghost mt-8 w-full sm:w-auto">
        All {proCertCount} certificates <ArrowRight size={15} />
      </a>
    </Section>
  )
}
