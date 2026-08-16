import SectionTitle, { Section } from '../ui/SectionTitle'
import { skills as skillGroups } from '../../data/profile'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle kicker="03 — Skills" title="Tools I work with" />
      <div className="border-b border-line">
        {skillGroups.map((g) => (
          <div key={g.group} className="grid gap-3 border-t border-line py-6 md:grid-cols-[220px,1fr]">
            <h3 className="font-display font-semibold">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
