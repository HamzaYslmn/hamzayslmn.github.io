import { useEffect, useState } from 'react'

// Hook for scroll-based navigation and active section detection
export const useScrollNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          current = section.getAttribute('id')
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isScrolled, activeSection }
}

// Hook for intersection observer animations
export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// Hook for particle effects
export const useParticleEffect = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'fixed w-1 h-1 bg-txt rounded-full pointer-events-none opacity-60 z-10'
      
      particle.style.left = Math.random() * window.innerWidth + 'px'
      particle.style.top = Math.random() * window.innerHeight + 'px'
      
      document.body.appendChild(particle)

      particle.animate([
        { transform: 'translateY(0px)', opacity: 0.6 },
        { transform: 'translateY(-100px)', opacity: 0 }
      ], {
        duration: 3000,
        easing: 'ease-out'
      }).onfinish = () => particle.remove()
    }

    const interval = setInterval(createParticle, 2000)
    return () => clearInterval(interval)
  }, [])
}
