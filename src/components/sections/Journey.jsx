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
      <ol className="relative ml-1.5 border-l border-line sm:ml-2">
        {journey.map((j) => (
          <li key={j.period + j.title} className="relative mb-9 ml-6 pr-1 last:mb-0 sm:ml-8">
            <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 sm:-left-[39px] rounded-full border-2 border-paper bg-ink" />
            <p className="font-mono text-xs uppercase tracking-wider text-faint">{j.period}</p>
            <h3 className="mt-1 font-display font-semibold">{j.title}</h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{j.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
