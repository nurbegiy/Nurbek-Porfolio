import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'Men haqimda' },
  { href: '#skills', label: 'Ko‘nikmalar' },
  { href: '#projects', label: 'Loyihalar' },
  { href: '#contact', label: 'Aloqa' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-mint text-sm tracking-widest">
          NB<span className="text-cream/50">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-cream/80">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-amber transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden font-mono text-cream text-lg leading-none"
          aria-label="Menyuni ochish"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-5 font-mono text-sm uppercase tracking-wider text-cream/90 bg-ink/95 border-b border-white/10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 border-b border-white/5 hover:text-amber transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
