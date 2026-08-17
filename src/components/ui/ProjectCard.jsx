import { useState } from 'react'
import { Github, ExternalLink, Trophy, MonitorPlay } from 'lucide-react'

/** Media area: screen recording (public/demos/<id>.mp4) → project image → placeholder. */
function Demo({ id, name, image }) {
  const [mode, setMode] = useState('video')
  if (mode === 'video') {
    return (
      <video
        src={`/demos/${id}.mp4`}
        controls
        muted
        playsInline
        preload="metadata"
        onError={() => setMode(image ? 'image' : 'none')}
        aria-label={`${name} screen recording`}
        className="aspect-video w-full border-b border-line bg-paper object-cover"
      />
    )
  }
  if (mode === 'image') {
    return (
      <img
        src={image}
        alt={`${name} preview`}
        loading="lazy"
        onError={() => setMode('none')}
        className="aspect-video w-full border-b border-line bg-paper object-cover"
      />
    )
  }
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 border-b border-line bg-paper text-faint">
      <MonitorPlay size={26} strokeWidth={1.5} />
      <p className="text-xs">Demo recording coming soon</p>
    </div>
  )
}

export default function ProjectCard({ p, highlights = 2, compact = false }) {
  return (
    <article className="card card-hover flex flex-col overflow-hidden">
      <Demo id={p.id} name={p.name} image={p.image} />
      <div className="flex grow flex-col gap-2 p-3 sm:gap-3 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="inline-flex items-center gap-2 font-display text-sm font-semibold sm:text-lg">
              {p.name}
              {p.award && <Trophy size={15} className="shrink-0" aria-label="Award winner" />}
            </h3>
            <p className="mt-0.5 font-mono text-[9px] uppercase leading-tight tracking-wider text-faint sm:text-[11px]">{p.type}{p.date ? ` · ${p.date}` : ''}</p>
          </div>
          <div className="flex shrink-0 gap-3 text-muted">
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="transition-colors hover:text-ink">
                <Github size={18} />
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`} className="transition-colors hover:text-ink">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className={`text-xs leading-relaxed text-muted sm:text-sm ${compact ? "line-clamp-2" : ""}`}>{p.blurb}</p>
        {!compact && (
          <ul className="space-y-1.5">
            {p.highlights.slice(0, highlights).map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {(compact ? p.stack.slice(0, 3) : p.stack).map((s) => (
            <span key={s} className="chip !px-2 !text-[10px] sm:!px-3 sm:!text-xs">
              {s}
            </span>
          ))}
          {compact && p.stack.length > 3 && <span className="chip !px-2 !text-[10px] sm:!px-3 sm:!text-xs">+{p.stack.length - 3}</span>}
        </div>
      </div>
    </article>
  )
}
