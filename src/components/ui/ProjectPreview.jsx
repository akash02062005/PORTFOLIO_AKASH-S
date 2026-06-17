import { useState } from 'react'

/**
 * Shows a real project screenshot if present at `src`, otherwise renders a
 * sleek "browser window" mockup branded in the project colour.
 * Drop screenshots in  public/projects/<id>.png  to replace the fallback.
 */
export default function ProjectPreview({ src, name, color, tags = [] }) {
  const [ok, setOk] = useState(Boolean(src))

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
      {ok ? (
        <img
          src={src}
          alt={`${name} preview`}
          onError={() => setOk(false)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="relative flex h-full w-full flex-col">
          {/* fake browser chrome */}
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
            <span className="ml-2 truncate rounded bg-black/30 px-2 py-0.5 font-mono text-[9px] text-slate-400">
              {name.toLowerCase().replace(/\s+/g, '-')}.app
            </span>
          </div>
          {/* branded body */}
          <div
            className="relative flex flex-1 flex-col items-center justify-center gap-2 px-4 text-center"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${color}33, transparent 60%), radial-gradient(circle at 80% 90%, ${color}22, transparent 55%)`,
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}66)`,
                boxShadow: `0 0 28px ${color}66`,
                color: '#05060f',
              }}
            >
              {name.charAt(0)}
            </div>
            <p className="font-display text-sm font-semibold text-white">{name}</p>
            <div className="flex flex-wrap justify-center gap-1">
              {tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="absolute bottom-2 right-3 font-mono text-[8px] text-slate-500">
              add screenshot → public/projects/
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
