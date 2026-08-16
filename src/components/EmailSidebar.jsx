import { profile } from '../data/profile'

export default function EmailSidebar() {
  return (
    <div className="hidden md:flex fixed bottom-0 right-8 lg:right-12 flex-col items-center gap-5 z-40">
      <a
        href={`mailto:${profile.email}`}
        className="font-mono text-xs text-slate-dark hover:text-accent hover:-translate-y-1 transition-all duration-200"
        style={{ writingMode: 'vertical-rl' }}
      >
        {profile.email}
      </a>
      <div className="w-px h-24 bg-slate-dark mt-2" />
    </div>
  )
}
