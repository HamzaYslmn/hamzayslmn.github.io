import React, { useState } from 'react'
import { useScrollNavigation } from '../hooks/index.jsx'
import { scrollToSection, cn } from '../utils/index.js'
import { navigation, personalInfo } from '../data/config.js'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled, activeSection } = useScrollNavigation()

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    scrollToSection(targetId)
    setIsMobileMenuOpen(false)
  }

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-border bg-bg/95 backdrop-blur-sm',
    isScrolled && 'bg-bg/98 shadow-light'
  )

  const mobileMenuClasses = cn(
    'flex gap-8 list-none md:flex transition-all duration-200',
    isMobileMenuOpen 
      ? 'absolute top-full left-0 right-0 bg-card border border-border border-t-0 flex-col p-6 opacity-100 visible transform translate-y-0'
      : 'md:relative md:opacity-100 md:visible md:transform-none hidden'
  )

  const getLinkClasses = (section) => cn(
    'relative px-4 py-2 rounded-sm font-medium transition-all duration-200 hover:text-txt',
    activeSection === section 
      ? 'text-txt after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:w-full after:h-0.5 after:bg-txt after:rounded-sm after:transition-all after:duration-200 after:-translate-x-1/2'
      : 'after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-0.5 after:bg-txt after:rounded-sm after:transition-all after:duration-200 after:-translate-x-1/2 hover:after:w-full'
  )

  const hamburgerLineClasses = (index) => cn(
    'w-6 h-0.5 bg-txt rounded-sm transition-all duration-200',
    isMobileMenuOpen && index === 0 && 'rotate-45 translate-x-1 translate-y-1.5',
    isMobileMenuOpen && index === 1 && 'opacity-0',
    isMobileMenuOpen && index === 2 && '-rotate-45 translate-x-1.5 -translate-y-1.5'
  )

  return (
    <nav className={navClasses} id="navbar">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#top" 
            className="text-2xl font-extrabold text-txt no-underline"
            onClick={(e) => handleNavClick(e, '#top')}
          >
            {personalInfo.name}
          </a>
          
          <ul className={mobileMenuClasses}>
            {navigation.map(section => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  className={getLinkClasses(section)}
                  onClick={(e) => handleNavClick(e, `#${section}`)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          
          <div 
            className={cn('md:hidden flex flex-col gap-1 cursor-pointer p-2', isMobileMenuOpen && 'active')}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {[0, 1, 2].map(index => (
              <span key={index} className={hamburgerLineClasses(index)}></span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
