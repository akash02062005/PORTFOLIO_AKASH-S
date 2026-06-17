import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Hackathons from '../components/sections/Hackathons'
import EventsTeaser from '../components/sections/EventsTeaser'
import Skills from '../components/sections/Skills'
import Talks from '../components/sections/Talks'
import CredentialsTeaser from '../components/sections/CredentialsTeaser'
import Resume from '../components/sections/Resume'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Hackathons />
      <EventsTeaser />
      <Skills />
      <Talks />
      <CredentialsTeaser />
      <Resume />
      <Contact />
    </main>
  )
}
