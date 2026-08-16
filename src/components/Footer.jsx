export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-8 text-center sm:px-8">
        <p className="font-mono text-xs text-faint">
          Designed &amp; built by Akash S · © {new Date().getFullYear()}
        </p>
        <a href="#top" className="text-xs text-muted transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
