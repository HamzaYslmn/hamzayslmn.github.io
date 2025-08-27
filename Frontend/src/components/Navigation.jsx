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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-border bg-bg/95 backdrop-blur-sm ${isScrolled ? 'bg-bg/98 shadow-light' : ''}`} id="navbar">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#top" 
            className="text-2xl font-extrabold text-txt no-underline"
            onClick={(e) => handleNavClick(e, '#top')}
          >
            Hamza Yeşilmen
          </a>
          
          <ul className={`flex gap-8 list-none md:flex ${isMobileMenuOpen ? 'absolute top-full left-0 right-0 bg-card border border-border border-t-0 flex-col p-6 opacity-100 visible transform translate-y-0' : 'md:relative md:opacity-100 md:visible md:transform-none hidden'} transition-all duration-200`}>
            {['about', 'experience', 'projects', 'skills', 'contact'].map(section => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  className={`relative px-4 py-2 rounded-sm font-medium transition-all duration-200 hover:text-txt ${activeSection === section ? 'text-txt after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:w-full after:h-0.5 after:bg-txt after:rounded-sm after:transition-all after:duration-200 after:-translate-x-1/2' : 'after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-0.5 after:bg-txt after:rounded-sm after:transition-all after:duration-200 after:-translate-x-1/2 hover:after:w-full'}`}
                  onClick={(e) => handleNavClick(e, `#${section}`)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          
          <div 
            className={`md:hidden flex flex-col gap-1 cursor-pointer p-2 ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span className={`w-6 h-0.5 bg-txt rounded-sm transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-x-1 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-txt rounded-sm transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-txt rounded-sm transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 translate-x-1.5 -translate-y-1.5' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
