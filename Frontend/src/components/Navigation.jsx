import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.offsetTop
      const offsetPosition = elementPosition - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="nav-content">
          <a 
            href="#top" 
            className="nav-logo"
            onClick={(e) => handleNavClick(e, '#top')}
          >
            Hamza Yeşilmen
          </a>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {['about', 'experience', 'projects', 'skills', 'contact'].map(section => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  className={activeSection === section ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, `#${section}`)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          
          <div 
            className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
