import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CertificatesPage from './pages/CertificatesPage'
import EventsPage from './pages/EventsPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import { useHashRoute } from './hooks/useHashRoute'

function getInitialTheme() {
  try {
    const t = localStorage.getItem('theme')
    if (t) return t
  } catch (e) { /* ignore */ }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const route = useHashRoute()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch (e) { /* ignore */ }
  }, [theme])

  // '#/page' routes scroll to top; plain '#section' hashes scroll to that section on Home.
  useEffect(() => {
    if (route.startsWith('/')) {
      window.scrollTo({ top: 0 })
    } else {
      const el = document.getElementById(route)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [route])

  let page = <Home />
  if (route === '/certificates') page = <CertificatesPage />
  else if (route === '/events') page = <EventsPage />
  else if (route === '/projects') page = <ProjectsPage />
  else if (route.startsWith('/blog')) page = <BlogPage route={route} />

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      {page}
      <Footer />
    </div>
  )
}
