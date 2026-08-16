import SectionTitle, { Section } from '../ui/SectionTitle'
import { experience } from '../../data/profile'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle
        kicker="04 — Experience"
        title="Internships & work"
        subtitle={`${experience.length} internships across data analytics, machine learning, Java, Python and web development.`}
      />
      <div className="space-y-4">
        {experience.map((e) => (
          <article key={e.role + e.org} className="card card-hover p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display font-semibold">
                {e.role} <span className="font-normal text-muted">· {e.org}</span>
              </h3>
              <p className="font-mono text-xs text-faint">{e.date}</p>
            </div>
            {e.points.length > 0 && (
            <ul className="mt-3 space-y-2">
              {e.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                  {p}
                </li>
              ))}
            </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
