import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import BackgroundEffects from '@/components/BackgroundEffects'

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
