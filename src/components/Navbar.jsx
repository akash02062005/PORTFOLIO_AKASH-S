import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Talks', href: '#talks' },
  { label: 'Blog', href: '#/blog' },
  { label: 'Contact', href: '#contact' },
]

function ThemeButton({ theme, onToggleTheme }) {
  return (
    <button
      onClick={onToggleTheme}
      aria-label="Toggle theme"
      className="rounded-full border border-line p-2 text-muted transition-colors hover:text-ink"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-bold tracking-tight"
        >
          akash<span className="text-faint">.s</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href="#resume" className="btn btn-ghost !px-4 !py-1.5">
            Resume
          </a>
          <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-full border border-line p-2 text-muted transition-colors hover:text-ink"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-line bg-paper lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {[...links, { label: 'Resume', href: '#resume' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm text-muted transition-colors last:border-0 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
