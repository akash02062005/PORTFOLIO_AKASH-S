import SectionTitle, { Section } from '../ui/SectionTitle'
import { journey } from '../../data/profile'

export default function Journey() {
  return (
    <Section id="journey">
      <SectionTitle
        kicker="02 — Journey"
        title="Where it started"
        subtitle="From a school in Madurai to national hackathon podiums — the milestones that shaped how I build."
      />
      <ol className="border-t border-line">
        {journey.map((j) => (
          <li key={j.period + j.title} className="grid grid-cols-[64px,1fr] gap-3 border-b border-line py-4 sm:grid-cols-[110px,1fr] sm:gap-6 sm:py-5">
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-wider text-faint sm:text-xs">{j.period}</p>
            <div>
              <h3 className="font-display text-sm font-semibold sm:text-base">{j.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{j.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
