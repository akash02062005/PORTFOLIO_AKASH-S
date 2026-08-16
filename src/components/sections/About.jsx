import SectionTitle, { Section } from '../ui/SectionTitle'
import { about, education } from '../../data/profile'

export default function About() {
  return (
    <Section id="about">
      <SectionTitle kicker="01 — About" title="A little bit about me" />
      <div className="grid gap-8 lg:grid-cols-[1fr,300px] lg:gap-12">
        <div className="space-y-4 leading-relaxed text-muted">
          {about.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3">
            {about.facts.map((f) => (
              <div key={f.label} className="card p-4 text-center">
                <p className="font-display text-xl font-bold">{f.value}</p>
                <p className="mt-1 text-xs text-faint">{f.label}</p>
              </div>
            ))}
          </div>
          <div className="card mt-3 p-4">
            <p className="text-sm font-semibold">{education.degree}</p>
            <p className="mt-1 text-xs text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-faint">
              {education.date} · CGPA {education.cgpa}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
