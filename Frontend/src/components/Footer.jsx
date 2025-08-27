import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (targetId) => {
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
  }

  const navItems = ['about', 'experience', 'projects', 'skills', 'contact']
  const socialLinks = [
    { href: 'https://github.com/HamzaYslmn', icon: '📱', title: 'GitHub' },
    { href: 'https://www.linkedin.com/in/hamzayslmn', icon: '💼', title: 'LinkedIn' },
    { href: 'mailto:resmiyslmn@gmail.com', icon: '📧', title: 'Email' }
  ]

  return (
    <footer className="bg-bg-secondary border-t border-border py-15 text-center">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-8">
          <div className="flex justify-center gap-8 mb-6 flex-wrap">
            {navItems.map(item => (
              <button 
                key={item}
                onClick={() => handleNavClick(`#${item}`)}
                className="bg-transparent border-0 text-muted cursor-pointer transition-all duration-200 font-inherit text-inherit hover:text-txt"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-muted hover:border-muted hover:text-bg hover:-translate-y-1 text-xl" 
                title={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="max-w-lg mx-auto">
            <p className="text-muted mb-4 leading-relaxed">
              Passionate about creating innovative solutions that bridge the gap between hardware and software. 
              Always excited to collaborate on challenging projects.
            </p>
            <p className="text-muted text-sm">
              © {currentYear} Hamza Yeşilmen. Built with modern web technologies and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
