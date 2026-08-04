import useReveal from '../hooks/useReveal'
import { projects } from '../data/content'

function ProjectCard({ project, index }) {
  const ref = useReveal()
  const isLink = project.link && project.link !== '#'

  const Card = (
    <div
      ref={ref}
      className="reveal group rounded-2xl border border-cream/10 bg-ink2/50 overflow-hidden hover:border-amber/50 transition-colors"
      style={{ transitionDelay: `${(index % 3) * 60}ms` }}
    >
      <div className="aspect-[16/10] bg-ink3/60 overflow-hidden flex items-center justify-center">
        {/* TODO: screenshot qo'yish uchun src/assets/projects/ ga rasm joylang
            va content.js dagi image yo'lini shunga moslang */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-mono text-cream text-lg">{project.title}</h3>
          {isLink && (
            <span className="font-mono text-xs text-mint opacity-0 group-hover:opacity-100 transition-opacity">
              ↗
            </span>
          )}
        </div>
        <p className="font-mono text-xs uppercase tracking-wider text-amber/80 mt-1">
          {project.subtitle}
        </p>
        <p className="text-cream/60 text-sm mt-3 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-cream/15 text-cream/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  if (!isLink) return Card

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
      {Card}
    </a>
  )
}

export default function Projects() {
  const headRef = useReveal()

  return (
    <section id="projects" className="bg-ink2 px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint mb-3">
            03 — Projects
          </p>
          <h2 className="display-title text-cream text-5xl md:text-6xl mb-12">
            Loyihalarim
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
