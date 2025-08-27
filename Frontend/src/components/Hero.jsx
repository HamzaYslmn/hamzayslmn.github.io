import React from 'react'

const Hero = () => {
  const handleScroll = (targetId) => {
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

  return (
    <section id="top" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🚀</span>
            Senior Mechatronic Engineer & R&D Specialist
          </div>
          
          <h1>
            Building the future with 
            <span className="gradient-text"> AI & Innovation</span>
          </h1>
          
          <p>
            AI and backend developer with a passion for artificial intelligence, scalable backend systems, and innovative solutions. 
            Experienced in mechatronics, embedded systems, IoT, and cutting-edge product development. Transforming complex ideas into 
            real-world, scalable solutions.
          </p>
          
          <div className="hero-cta">
            <button 
              className="btn btn-primary"
              onClick={() => handleScroll('#contact')}
            >
              Let's Collaborate
              <span>→</span>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleScroll('#projects')}
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
