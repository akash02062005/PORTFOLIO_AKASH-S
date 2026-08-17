import SectionTitle, { Section } from '../ui/SectionTitle'
import { hobbies, languages } from '../../data/profile'

export default function BeyondCode() {
  return (
    <Section id="beyond">
      <SectionTitle kicker="12 — Beyond code" title="When I am not shipping" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
        <div>
          <h3 className="mb-4 font-display font-semibold text-muted">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <span key={h.name} className="chip !px-4 !py-1.5 !text-sm">
                {h.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-display font-semibold text-muted">Languages</h3>
          <div className="space-y-4">
            {languages.map((l) => (
              <div key={l.name}>
                <div className="mb-1.5 flex items-baseline justify-between">
                  <p className="text-sm font-medium">{l.name}</p>
                  <p className="text-xs text-faint">{l.level}</p>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-ink" style={{ width: `${l.pct}%` }} />
                </div>
                {l.note && <p className="mt-1 text-[11px] text-faint">{l.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
