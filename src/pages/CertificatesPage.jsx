import { useMemo, useState } from 'react'
import { ArrowLeft, X } from 'lucide-react'
import SectionTitle, { Section } from '../components/ui/SectionTitle'
import { proCertGroups, proCertCount, proIssuerCount } from '../data/proCerts'

function CertCard({ cert, onOpen }) {
  const [imgOk, setImgOk] = useState(true)
  return (
    <button
      onClick={() => imgOk && onOpen(cert)}
      className="card card-hover flex flex-col overflow-hidden text-left"
    >
      {imgOk ? (
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          onError={() => setImgOk(false)}
          className="aspect-[4/3] w-full border-b border-line bg-paper object-contain p-2"
        />
      ) : (
        <div className="flex aspect-[4/3] w-full items-center justify-center border-b border-line bg-paper">
          <span className="font-display text-2xl font-bold text-faint">{cert.issuer[0]}</span>
        </div>
      )}
      <div className="p-4">
        <p className="text-sm font-medium leading-snug">{cert.title}</p>
        <p className="mt-1 text-xs text-faint">
          {cert.issuer}
          {cert.date ? ` · ${cert.date}` : ''}
        </p>
      </div>
    </button>
  )
}

export default function CertificatesPage() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const allCerts = useMemo(
    () => proCertGroups.flatMap((g) => g.items.map((c) => ({ ...c, issuer: g.issuer }))),
    []
  )
  const issuers = ['All', ...proCertGroups.map((g) => g.issuer)]
  const shown = filter === 'All' ? allCerts : allCerts.filter((c) => c.issuer === filter)

  return (
    <main className="pt-16">
      <Section id="certificates-page">
        <a href="#/" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
          <ArrowLeft size={15} /> Back to home
        </a>
        <SectionTitle
          kicker="Credentials"
          title="Certificates"
          subtitle={`${proCertCount} professional certifications across ${proIssuerCount} platforms.`}
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {issuers.map((iss) => (
            <button
              key={iss}
              onClick={() => setFilter(iss)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === iss
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-muted hover:border-faint hover:text-ink'
              }`}
            >
              {iss}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <CertCard key={`${c.issuer}-${c.title}`} cert={c} onOpen={setLightbox} />
          ))}
        </div>
      </Section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button aria-label="Close" className="absolute right-5 top-5 text-white/80 hover:text-white">
            <X size={22} />
          </button>
          <figure className="max-h-[88vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="max-h-[80vh] w-full rounded-lg object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/90">
              {lightbox.title} · <span className="text-white/60">{lightbox.issuer}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
