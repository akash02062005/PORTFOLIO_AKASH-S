import { FileDown } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import { resumes } from '../../data/profile'

export default function Resume() {
  return (
    <Section id="resume">
      <SectionTitle
        kicker="11 — Resume"
        title="Pick the resume that fits your role"
        subtitle="Role-tailored resumes — grab the one closest to the position you are hiring for."
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {resumes.map((r) => (
          <div key={r.role} className="card card-hover flex flex-col p-5">
            <h3 className="font-display text-sm font-semibold sm:text-base">{r.role}</h3>
            <p className="mt-1 grow text-xs text-muted sm:text-sm">{r.desc}</p>
            <a href={r.file} download className="btn btn-ghost mt-4 self-start !px-4 !py-1.5">
              <FileDown size={14} /> Download PDF
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
