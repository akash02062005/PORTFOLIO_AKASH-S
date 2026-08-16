import { Trophy } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import { milestones } from '../../data/profile'

export default function Milestones() {
  return (
    <Section id="milestones">
      <SectionTitle
        kicker="06 — Milestones"
        title="Moments that matter"
        subtitle="The wins and firsts along the way."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {milestones.map((m) => (
          <div key={m.title} className="card card-hover p-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-faint">{m.year}</p>
              {m.star && <Trophy size={16} className="text-muted" />}
            </div>
            <h3 className="mt-2 font-display font-semibold">{m.title}</h3>
            <p className="mt-1 text-sm text-muted">{m.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
