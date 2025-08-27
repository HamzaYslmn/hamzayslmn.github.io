import React from 'react'

const Main = () => {
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
    <section id="top" className="min-h-screen flex items-center relative overflow-hidden bg-bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-full text-txt font-semibold text-sm mb-6 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <span>🚀</span>
            Senior Mechatronic Engineer & R&D Specialist
          </div>
          
          <h1 className="text-clamp-h1 font-bold leading-tight tracking-tight mb-6 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            Building the future with 
            <span className="text-txt"> AI & Innovation</span>
          </h1>
          
          <p className="text-xl text-muted-light max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            AI and backend developer with a passion for artificial intelligence, scalable backend systems, and innovative solutions. 
            Experienced in mechatronics, embedded systems, IoT, and cutting-edge product development. Transforming complex ideas into 
            real-world, scalable solutions.
          </p>
          
          <div className="flex gap-4 flex-wrap md:justify-start justify-center animate-fade-in-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            <button 
              className="inline-flex items-center gap-3 px-8 py-4 bg-txt text-bg font-semibold rounded-sm transition-all duration-200 hover:shadow-glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-txt focus:ring-opacity-50"
              onClick={() => handleScroll('#contact')}
            >
              Let's Collaborate
              <span>→</span>
            </button>
            <button 
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-txt border-2 border-border font-semibold rounded-sm transition-all duration-200 hover:border-txt hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-txt focus:ring-opacity-50"
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

export default Main
