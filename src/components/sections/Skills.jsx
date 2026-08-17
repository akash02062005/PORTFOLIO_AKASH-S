import SectionTitle, { Section } from '../ui/SectionTitle'
import { skills as skillGroups } from '../../data/profile'

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle kicker="03 — Skills" title="Tools I work with" />
      <div className="border-b border-line">
        {skillGroups.map((g) => (
          <div key={g.group} className="grid grid-cols-[92px,1fr] gap-3 border-t border-line py-5 sm:grid-cols-[140px,1fr] md:grid-cols-[220px,1fr] md:py-6">
            <h3 className="font-display text-xs font-semibold leading-snug sm:text-sm md:text-base">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip !px-2.5 !text-[11px] sm:!px-3 sm:!text-xs">
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
