import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ParticleField from './components/ParticleField'
import Navbar from './components/Navbar'
import AIAssistant from './components/ui/AIAssistant'
import Home from './pages/Home'
import CertificatesPage from './pages/CertificatesPage'
import EventsPage from './pages/EventsPage'
import { useHashRoute } from './hooks/useHashRoute'

export default function App() {
  const [ready, setReady] = useState(false)
  const route = useHashRoute()

  // jump to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  let page
  if (route === '/certificates') page = <CertificatesPage />
  else if (route === '/events') page = <EventsPage />
  else page = <Home />

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <CustomCursor />
      <ScrollProgress />

      <div
        className={`relative transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* ambient background layers below all content */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 grid-overlay opacity-50" />
          <ParticleField />
          <div className="aurora left-[-15%] top-[10%] h-96 w-96 bg-neon-violet/15" />
          <div className="aurora right-[-15%] top-[45%] h-96 w-96 bg-neon-cyan/10" />
          <div className="aurora bottom-[-10%] left-[30%] h-96 w-96 bg-neon-pink/10" />
        </div>

        <Navbar />
        {page}
        <AIAssistant />
      </div>
    </>
  )
}
