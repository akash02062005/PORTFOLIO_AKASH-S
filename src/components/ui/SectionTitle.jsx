import useReveal from '../../hooks/useReveal'

/** Standard page section wrapper with scroll-reveal. */
export function Section({ id, className = '', children }) {
  const ref = useReveal()
  return (
    <section id={id} ref={ref} className={`section reveal ${className}`}>
      {children}
    </section>
  )
}

export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <header className="mb-8 max-w-2xl md:mb-10">
      {kicker && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">{kicker}</p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 leading-relaxed text-muted">{subtitle}</p>}
    </header>
  )
}
