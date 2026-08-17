import { ArrowRight } from 'lucide-react'
import SectionTitle, { Section } from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/profile'

// Featured builds, oldest first
const ORDER = ['fitcare', 'lancera', 'orderstream', 'aifinance']
const featured = ORDER.map((id) => projects.find((p) => p.id === id)).filter(Boolean)

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        kicker="05 — Projects"
        title="Flagship builds, in order"
        subtitle="Four projects, from first MERN platform to award-winning AI products — click through for the rest."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((p, i) => (
          <div key={p.id}>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-faint">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-line text-[10px] font-semibold text-muted">
                {i + 1}
              </span>
              {p.date}
            </p>
            <ProjectCard p={p} compact />
          </div>
        ))}
      </div>
      <a href="#/projects" className="btn btn-ghost mt-8 w-full sm:w-auto">
        All {projects.length} projects <ArrowRight size={15} />
      </a>
    </Section>
  )
}
