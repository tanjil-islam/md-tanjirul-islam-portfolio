import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const particles = [
  { top: '8%', left: '5%', size: 6, delay: '0s', duration: '8s' },
  { top: '14%', left: '18%', size: 4, delay: '1s', duration: '9s' },
  { top: '26%', left: '72%', size: 5, delay: '0.5s', duration: '10s' },
  { top: '34%', left: '12%', size: 3, delay: '2s', duration: '7s' },
  { top: '42%', left: '86%', size: 6, delay: '0.2s', duration: '11s' },
  { top: '57%', left: '22%', size: 4, delay: '1.4s', duration: '9s' },
  { top: '61%', left: '78%', size: 5, delay: '0.8s', duration: '8s' },
  { top: '73%', left: '10%', size: 3, delay: '1.8s', duration: '10s' },
  { top: '81%', left: '66%', size: 4, delay: '0.3s', duration: '12s' },
  { top: '88%', left: '92%', size: 6, delay: '1.1s', duration: '8s' },
]

function getInitialTheme() {
  return 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const routeToSection = {
      '/about': 'about',
      '/projects': 'projects',
      '/skills': 'skills',
      '/contact': 'contact',
      '/home': 'home',
    }

    const fromPath = routeToSection[window.location.pathname.toLowerCase()]
    const fromHash = window.location.hash ? window.location.hash.slice(1) : ''
    const targetId = fromHash || fromPath

    if (!targetId) return

    requestAnimationFrame(() => {
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [])

  return (
    <div className='min-h-screen bg-base-50 text-base-900 transition-colors duration-300 dark:bg-base-950 dark:text-base-50'>
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-90 dark:opacity-100'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,_rgba(140,160,255,0.26),transparent_42%),radial-gradient(circle_at_18%_50%,_rgba(224,214,255,0.5),transparent_40%),radial-gradient(circle_at_88%_45%,_rgba(189,228,255,0.55),transparent_36%)] dark:bg-[radial-gradient(circle_at_50%_20%,_rgba(96,104,255,0.18),transparent_42%),radial-gradient(circle_at_15%_50%,_rgba(44,52,92,0.45),transparent_40%),radial-gradient(circle_at_85%_45%,_rgba(38,66,101,0.45),transparent_36%)]' />
        <div className='absolute inset-y-0 left-1/2 w-[44rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-2xl dark:via-slate-900/35' />

        {particles.map((dot, index) => (
          <span
            key={`particle-${index}`}
            className='absolute rounded-full bg-indigo-400/45 dark:bg-cyan-300/35'
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `floatParticle ${dot.duration} ease-in-out ${dot.delay} infinite`,
            }}
          />
        ))}
      </div>

      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
        }
      />

      <main className='scroll-smooth'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
