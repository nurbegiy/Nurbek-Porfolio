import useReveal from '../hooks/useReveal'
import { skills, strengths } from '../data/content'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="bg-ink px-6 py-24 md:py-32">
      {/* max-w-2xl o'rniga max-w-5xl ishlatildi, shunda grid uchun yetarli joy bo'ladi */}
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint mb-3">
          02 — Skills
        </p>
        <h2 className="display-title text-cream text-5xl md:text-6xl mb-12">
          Ko‘nikmalar
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Chap ustun: Skills (tugmachalar) */}
          <div className="flex flex-wrap gap-3 h-fit">
            {skills.map((s) => (
              <span
                key={s}
                className="font-mono text-sm px-4 py-2 rounded-full border border-cream/15 text-cream/80 hover:border-amber hover:text-amber transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>

          {/* O'ng ustun: Kuchli tomonlar. (Xato beruvchi pl-44 olib tashlandi) */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cream/45 mb-6">
              Kuchli tomonlar
            </p>
            {/* space-y-0 o'rniga space-y-4 qo'yildi, matnlar bir-biriga yopishib qolmasligi uchun */}
            <ul className="space-y-4">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-cream/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint shrink-0 mt-2" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}