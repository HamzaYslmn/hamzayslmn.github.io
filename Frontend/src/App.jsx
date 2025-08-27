import React, { useEffect } from 'react'
import { useScrollAnimation, useParticleEffect } from './hooks/index.jsx'
import Navigation from './components/Navigation'
import Main from './components/Main'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useScrollAnimation()
  useParticleEffect()

  useEffect(() => {
    // Performance optimization for low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      document.documentElement.style.setProperty('--transition-duration', '0.1s')
    }
  }, [])

  return (
    <div className="App bg-bg text-txt font-inter overflow-x-hidden scroll-smooth">
      <Navigation />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
