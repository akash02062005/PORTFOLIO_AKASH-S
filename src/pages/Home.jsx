import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Journey from '../components/sections/Journey'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Milestones from '../components/sections/Milestones'
import EventsTeaser from '../components/sections/EventsTeaser'
import Talks from '../components/sections/Talks'
import CredentialsTeaser from '../components/sections/CredentialsTeaser'
import BlogTeaser from '../components/sections/BlogTeaser'
import Resume from '../components/sections/Resume'
import BeyondCode from '../components/sections/BeyondCode'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Experience />
      <Projects />
      <Milestones />
      <EventsTeaser />
      <Talks />
      <CredentialsTeaser />
      <BlogTeaser />
      <Resume />
      <BeyondCode />
      <Contact />
    </main>
  )
}
