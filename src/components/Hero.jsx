import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const CODE_LINE = `const developer = "Nurbek Buriyev";`

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [doneTyping, setDoneTyping] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i += 1
      setTyped(CODE_LINE.slice(0, i))
      if (i >= CODE_LINE.length) {
        clearInterval(t)
        setDoneTyping(true)
      }
    }, 38)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-gradient px-6"
    >
      {/* ambient scanline, purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #F1ECDF 0px, #F1ECDF 1px, transparent 1px, transparent 3px)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full pt-28 pb-16 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        <div>
          {/* terminal line */}
          <p className="font-mono text-sm md:text-base text-mint mb-6 min-h-[1.5em]">
            {typed}
            <span className="caret">▌</span>
          </p>

          {/* signature stacked name */}
          <h1 className="display-title text-cream text-[16vw] md:text-[7.5rem] leading-[0.85]">
            {doneTyping && (
              <>
                <span className="block rise-in">NURBEK</span>
                <span
                  className="block text-amber rise-in"
                  style={{ animationDelay: '0.15s' }}
                >
                  BURIYEV
                </span>
              </>
            )}
          </h1>

          {doneTyping && (
            <div className="fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="font-mono uppercase tracking-[0.3em] text-cream/60 text-xs md:text-sm mt-6">
                Frontend Developer — React · JavaScript · UI
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-amber text-ink font-mono text-sm uppercase tracking-wide rounded-full hover:bg-cream transition-colors"
                >
                  Loyihalarni ko‘rish
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-cream/30 text-cream font-mono text-sm uppercase tracking-wide rounded-full hover:border-mint hover:text-mint transition-colors"
                >
                  Bog‘lanish
                </a>
              </div>
            </div>
          )}
        </div>

        {/* photo slot — user replaces src/assets with their own photo */}
        <div
          className={`relative justify-self-center md:justify-self-end ${doneTyping ? 'fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="w-48 h-64 md:w-64 md:h-80 rounded-[2rem] border border-cream/15 bg-ink2/60 flex items-center justify-center overflow-hidden">
            {/* TODO: shu joyga o'z suratingizni qo'ying:
                <img src="/assets/profile.jpg" alt={profile.name} className="w-full h-full object-cover" /> */}
            <span className="font-mono text-xs text-cream/40 text-center px-6">
              o‘z suratingiz<br />shu yerga tushadi
            </span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-amber/20 blur-2xl" />
        </div>
      </div>

      <a
        href="#about"
        aria-hidden
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 hover:text-mint transition-colors flex-col items-center gap-2"
      >
        scroll
        <span className="w-px h-8 bg-cream/30" />
      </a>
    </section>
  )
}
