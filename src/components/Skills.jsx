import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { skills, strengths } from '../data/content'

export default function Skills() {
  const ref = useReveal()
  const [activeSkill, setActiveSkill] = useState(null)

  // Modal ochiq bo'lganda ESC tugmasi bilan yopish + sahifa scrollini bloklash
  useEffect(() => {
    if (!activeSkill) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveSkill(null)
    }
    document.addEventListener('keydown', onKeyDown)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [activeSkill])

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
              <button
                key={s.name}
                type="button"
                onClick={() => setActiveSkill(s)}
                className="font-mono text-sm px-4 py-2 rounded-full border border-cream/15 text-cream/80 hover:border-amber hover:text-amber transition-colors cursor-pointer"
              >
                {s.name}
              </button>
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

      {activeSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="skill-modal-title"
        >
          {/* Fon — bosilganda modal yopiladi */}
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm fade-in"
            onClick={() => setActiveSkill(null)}
          />

          <div className="relative bg-ink2 border border-cream/10 rounded-2xl p-8 max-w-sm w-full rise-in">
            <button
              type="button"
              onClick={() => setActiveSkill(null)}
              aria-label="Yopish"
              className="absolute top-4 right-4 text-cream/50 hover:text-amber transition-colors text-xl leading-none"
            >
              ✕
            </button>

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint mb-2">
              Ko‘nikma
            </p>
            <h3 id="skill-modal-title" className="display-title text-cream text-4xl mb-6">
              {activeSkill.name}
            </h3>

            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/45">
                Bilim darajasi
              </span>
              <span className="font-mono text-sm text-amber">{activeSkill.level}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-cream/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-mint to-amber transition-all duration-700 ease-out"
                style={{ width: `${activeSkill.level}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}