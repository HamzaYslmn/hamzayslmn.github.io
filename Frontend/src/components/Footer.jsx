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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            {navItems.map(item => (
              <button 
                key={item}
                onClick={() => handleNavClick(`#${item}`)}
                className="footer-nav-btn"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noreferrer" 
                className="social-link" 
                title={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
              Passionate about creating innovative solutions that bridge the gap between hardware and software. 
              Always excited to collaborate on challenging projects.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              © {currentYear} Hamza Yeşilmen. Built with modern web technologies and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
