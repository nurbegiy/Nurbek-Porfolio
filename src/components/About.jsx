import useReveal from '../hooks/useReveal'
import { profile } from '../data/content'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="bg-ink2 px-6 py-24 md:py-32">
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto grid md:grid-cols-[0.6fr_1fr] gap-12 items-center"
      >
        <div className="w-full max-w-xs mx-auto md:mx-0 aspect-[4/5] rounded-[2rem] border border-cream/15 bg-ink3/60 flex items-center justify-center overflow-hidden">
          {/* TODO: <img src="/assets/about.jpg" className="w-full h-full object-cover" /> */}
          <img src="/assets/about.jpg" alt="Nurbek Buriyev" className="w-full h-full object-cover" />
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint mb-3">
            01 — Introduction
          </p>
          <h2 className="display-title text-cream text-5xl md:text-6xl mb-6">
            Men haqimda
          </h2>
          <p className="text-cream/70 leading-relaxed max-w-xl">{profile.bio}</p>

          <dl className="grid grid-cols-2 gap-6 mt-10 font-mono text-sm max-w-md">
            <div>
              <dt className="text-cream/40 text-xs uppercase tracking-wider">Rol</dt>
              <dd className="text-cream mt-1">{profile.role}</dd>
            </div>
            <div>
              <dt className="text-cream/40 text-xs uppercase tracking-wider">Manzil</dt>
              <dd className="text-cream mt-1">{profile.location}</dd>
            </div>
          </dl>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-6 py-3 border border-cream/30 text-cream font-mono text-sm uppercase tracking-wide rounded-full hover:border-amber hover:text-amber transition-colors"
          >
            Rezyume ↗
          </a>
        </div>
      </div>
    </section>
  )
}
