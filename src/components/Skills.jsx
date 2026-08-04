import useReveal from '../hooks/useReveal'
import { skills, strengths } from '../data/content'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="bg-ink px-6 py-24 md:py-32">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint mb-3">
          02 — Skills
        </p>
        <h2 className="display-title text-cream text-5xl md:text-6xl mb-12">
          Ko‘nikmalar
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="font-mono text-sm px-4 py-2 rounded-full border border-cream/15 text-cream/80 hover:border-amber hover:text-amber transition-colors"
              >
                {s}
              </span>
            ))}
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream/40 mb-4">
              Kuchli tomonlar
            </p>
            <ul className="space-y-3">
              {strengths.map((s) => (
                <li key={s} className="flex items-center gap-3 text-cream/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
