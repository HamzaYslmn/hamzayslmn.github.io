import React from 'react'
import { SocialLink } from './ui/index.jsx'
import { scrollToSection } from '../utils/index.js'
import { navigation, socialLinks, personalInfo } from '../data/config.js'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border py-15 text-center">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-8">
          <div className="flex justify-center gap-8 mb-6 flex-wrap">
            {navigation.map(item => (
              <button 
                key={item}
                onClick={() => scrollToSection(`#${item}`)}
                className="bg-transparent border-0 text-muted cursor-pointer transition-all duration-200 font-inherit text-inherit hover:text-txt"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
          
          <div className="max-w-lg mx-auto">
            <p className="text-muted mb-4 leading-relaxed">
              Passionate about creating innovative solutions that bridge the gap between hardware and software. 
              Always excited to collaborate on challenging projects.
            </p>
            <p className="text-muted text-sm">
              © {currentYear} {personalInfo.name}. Built with modern web technologies and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
