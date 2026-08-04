import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { profile } from '../data/content'

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.message) return

    setStatus('sending')
    try {
      if (!ENDPOINT) throw new Error('missing endpoint')

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('request failed')

      setStatus('sent')
      setForm({ name: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-ink px-6 py-24 md:py-32">
      <div ref={ref} className="reveal max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1fr] gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint mb-3">
            04 — Contact
          </p>
          <h2 className="display-title text-cream text-5xl md:text-6xl mb-6">
            Bog‘lanish
          </h2>
          <p className="text-cream/60 leading-relaxed max-w-sm">
            Loyiha bormi yoki savolingiz bormi? Formani to‘ldiring — xabaringiz
            to‘g‘ridan-to‘g‘ri Telegram’ga tushadi.
          </p>

          <ul className="mt-10 space-y-4 font-mono text-sm">
            <li>
              <span className="text-cream/40 block text-xs uppercase tracking-wider mb-1">Telefon</span>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-cream hover:text-amber transition-colors">
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="text-cream/40 block text-xs uppercase tracking-wider mb-1">Telegram</span>
              <a href={`https://t.me/${profile.telegram}`} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-amber transition-colors">
                @{profile.telegram}
              </a>
            </li>
            <li>
              <span className="text-cream/40 block text-xs uppercase tracking-wider mb-1">Instagram</span>
              <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-amber transition-colors">
                @{profile.instagram}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-cream/50 block mb-2">
              Ism
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={update('name')}
              placeholder="Ismingiz"
              className="w-full bg-ink2/60 border border-cream/15 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 focus:border-mint outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-cream/50 block mb-2">
              Telefon raqam
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              placeholder="+998 __ ___ __ __"
              className="w-full bg-ink2/60 border border-cream/15 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 focus:border-mint outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-cream/50 block mb-2">
              Xabar
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="Nima haqida yozmoqchisiz?"
              className="w-full bg-ink2/60 border border-cream/15 rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 focus:border-mint outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto px-8 py-3 bg-amber text-ink font-mono text-sm uppercase tracking-wide rounded-full hover:bg-cream transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Yuborilmoqda…' : 'Yuborish'}
          </button>

          {status === 'sent' && (
            <p className="font-mono text-sm text-mint">Xabaringiz yuborildi, rahmat!</p>
          )}
          {status === 'error' && (
            <p className="font-mono text-sm text-coral">
              Xatolik yuz berdi. Iltimos Telegram orqali to‘g‘ridan-to‘g‘ri yozing: @{profile.telegram}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
