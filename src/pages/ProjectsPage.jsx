import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import SectionTitle, { Section } from '../components/ui/SectionTitle'
import ProjectCard from '../components/ui/ProjectCard'
import { projects, projectCategories } from '../data/profile'

export default function ProjectsPage() {
  const [cat, setCat] = useState('all')
  const shown = cat === 'all' ? projects : projects.filter((p) => p.category === cat)

  return (
    <main className="pt-16">
      <Section id="projects-page">
        <a href="#/" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
          <ArrowLeft size={15} /> Back to home
        </a>
        <SectionTitle
          kicker="Work"
          title="All projects"
          subtitle={`${projects.length} production-grade AI and full-stack products.`}
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                cat === c.id
                  ? 'border-ink bg-ink text-paper'
                  : 'border-line text-muted hover:border-faint hover:text-ink'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {shown.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Section>
    </main>
  )
}
