import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink2 border-t border-cream/10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-cream/40">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          <a href={`https://t.me/${profile.telegram}`} target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors">
            Telegram
          </a>
          <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors">
            Instagram
          </a>
          <a href="#top" className="hover:text-mint transition-colors">
            Yuqoriga ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
