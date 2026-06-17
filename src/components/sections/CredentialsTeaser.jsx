import { ArrowUpRight, GraduationCap, Code2 } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { certGroups, certCount, issuerCount } from '../../data/certificates'
import { education, profile } from '../../data/profile'
import { navigate } from '../../hooks/useHashRoute'

/** Compact home preview that links out to the full /certificates page. */
export default function CredentialsTeaser() {
  const workshops = certGroups.find((g) => g.issuer === 'Workshops')?.items.length || 0
  const topIssuers = certGroups
    .filter((g) => g.issuer !== 'Workshops')
    .slice(0, 8)
    .map((g) => g.issuer)

  const stats = [
    { label: 'Certifications', value: `${certCount}+` },
    { label: 'Platforms', value: issuerCount },
    { label: 'Workshops', value: workshops },
  ]

  return (
    <section id="research" className="relative">
      <div className="section-pad">
        <SectionTitle
          eyebrow="07 · Credentials"
          title="Proof of work — on its own page"
          subtitle="A deep bench of certifications, workshops and academics. The full, filterable gallery lives on a dedicated page so this one stays light."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="gradient-text font-display text-4xl font-bold md:text-5xl">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {topIssuers.map((iss) => (
                <span key={iss} className="chip">{iss}</span>
              ))}
              <span className="chip text-slate-400">+ many more</span>
            </div>

            <button
              onClick={() => navigate('/certificates')}
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-violet px-5 py-3 text-sm font-semibold text-ink transition hover:shadow-glow"
            >
              Explore all credentials
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="glass rounded-3xl p-8 md:p-10">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-white">
              <GraduationCap size={18} className="text-neon-violet" /> Education
            </h3>
            <p className="font-display text-base font-semibold text-white">{education.degree}</p>
            <p className="text-sm text-neon-cyan">{education.school}</p>
            <p className="mt-1 text-xs text-slate-400">
              {education.place} · {education.date}
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-white/5 px-3 py-1 font-mono text-xs text-slate-200">
              CGPA {education.cgpa}
            </div>
            <div className="mt-6">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                <Code2 size={14} className="text-neon-green" /> Coding profiles
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.codingProfiles.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-neon-cyan/50 hover:text-white"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: p.color, boxShadow: `0 0 10px ${p.color}` }}
                    />
                    {p.name}
                    <ArrowUpRight size={12} className="text-slate-500 transition group-hover:text-neon-cyan" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
