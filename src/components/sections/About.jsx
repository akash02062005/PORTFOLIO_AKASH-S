import SectionTitle, { Section } from '../ui/SectionTitle'
import { about, education } from '../../data/profile'

export default function About() {
  return (
    <Section id="about">
      <SectionTitle kicker="01 — About" title="A little bit about me" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr,240px] lg:grid-cols-[1fr,300px] lg:gap-12">
        <div className="flex flex-col justify-between gap-4 leading-relaxed text-muted">
          {about.summary.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            {about.facts.map((f) => (
              <div key={f.label} className="card flex flex-col justify-center p-3 text-center sm:p-4">
                <p className="font-display text-lg font-bold sm:text-xl">{f.value}</p>
                <p className="mt-1 text-xs text-faint">{f.label}</p>
              </div>
            ))}
          </div>
          <div className="card flex grow flex-col justify-center p-4">
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
