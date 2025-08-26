import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'HireUp360 Platform',
      status: '🚀 Active Development',
      description: 'Full-stack AI-powered recruitment platform with microservices architecture. Features real-time matching, automated screening, and advanced analytics dashboard.',
      skills: ['FastAPI', 'React', 'Docker', 'MongoDB', 'AI/ML'],
      link: 'https://github.com/Mountain-YZ/HireUp360-Live',
      linkText: 'View Code ↗'
    },
    {
      title: 'G-Helper Turkish Localization',
      status: '⭐ Open Source',
      description: 'Turkish localization and community support for G-Helper, an open-source control utility for ASUS Zephyrus/Strix/TUF laptops with GPU & performance mode controls.',
      skills: ['C#', 'Windows API', 'Localization', 'Community'],
      link: 'https://github.com/HamzaYslmn/g-helper-TR',
      linkText: 'View Code ↗'
    },
    {
      title: 'Smart IoT Monitoring System',
      status: '🔧 Embedded',
      description: 'Real-time environmental monitoring system with edge AI capabilities. Features wireless sensor networks, predictive analytics, and cloud-based dashboard.',
      skills: ['Embedded C', 'ESP32', 'LoRaWAN', 'TensorFlow Lite', 'Firebase'],
      link: '#contact',
      linkText: 'Contact for Details'
    },
    {
      title: 'Industrial Vision Inspection',
      status: '🤖 AI/ML',
      description: 'AI-powered quality control system for manufacturing. Real-time defect detection with 99.7% accuracy using custom CNN models and optimized inference pipeline.',
      skills: ['OpenCV', 'PyTorch', 'YOLO', 'Edge Computing', 'ROS'],
      link: '#contact',
      linkText: 'Learn More'
    },
    {
      title: 'GitHub Profile Enhancements',
      status: '🎨 Tools',
      description: 'Collection of dynamic GitHub profile components including real-time Spotify integration, customized statistics displays, and automated README generation tools.',
      skills: ['JavaScript', 'Jinja', 'GitHub Actions', 'APIs'],
      link: 'https://github.com/HamzaYslmn/novatorem',
      linkText: 'View Projects ↗'
    },
    {
      title: 'Development Automation Suite',
      status: '⚡ Automation',
      description: 'Comprehensive automation tools for development workflows, including stress testing frameworks, API testing suites, and deployment automation scripts.',
      skills: ['Python', 'Bash', 'Docker', 'CI/CD', 'Testing'],
      link: 'https://github.com/HamzaYslmn?tab=repositories',
      linkText: 'Browse All ↗'
    }
  ]

  const handleLinkClick = (link) => {
    if (link.startsWith('#')) {
      const target = document.querySelector(link)
      if (target) {
        const headerOffset = 80
        const elementPosition = target.offsetTop
        const offsetPosition = elementPosition - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      window.open(link, '_blank', 'noreferrer')
    }
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2>Featured Projects</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
            A selection of projects that showcase my expertise in mechatronics, AI, and software development.
          </p>
        </div>
        
        <div className="grid grid-auto fade-in">
          {projects.map((project, index) => (
            <div key={index} className="card glass card-project">
              <div style={{ marginBottom: '24px' }}>
                <span style={{ 
                  background: 'var(--card-hover)', 
                  color: 'var(--txt)', 
                  padding: '6px 12px', 
                  borderRadius: '20px', 
                  fontSize: '0.8rem', 
                  fontWeight: '600', 
                  border: '1px solid var(--border)' 
                }}>
                  {project.status}
                </span>
              </div>
              <h3>{project.title}</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
                {project.description}
              </p>
              <div className="skill-list" style={{ marginBottom: '20px' }}>
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="flex" style={{ gap: '12px' }}>
                <button 
                  onClick={() => handleLinkClick(project.link)}
                  className="btn btn-secondary" 
                  style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                >
                  {project.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }} className="fade-in">
          <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
            Interested in seeing more of my work or discussing potential collaborations?
          </p>
          <button 
            onClick={() => window.open('https://github.com/HamzaYslmn?tab=repositories', '_blank', 'noreferrer')}
            className="btn btn-primary"
          >
            View All Projects on GitHub
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
