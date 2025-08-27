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
    <section id="projects" className="py-20">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-clamp-h2 font-bold mb-5">Featured Projects</h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            A selection of projects that showcase my expertise in mechatronics, AI, and software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden p-8 bg-card border border-border rounded-default transition-all duration-200 hover:bg-card-hover hover:border-border-light hover:-translate-y-1 shadow-custom group">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-txt transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></div>
              
              <div className="mb-6">
                <span className="inline-block bg-card-hover text-txt px-3 py-1.5 rounded-full text-xs font-semibold border border-border">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium transition-all duration-200 hover:bg-card-hover hover:border-txt hover:text-txt">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleLinkClick(project.link)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-txt border-2 border-border font-medium rounded-sm text-sm transition-all duration-200 hover:border-txt hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-txt focus:ring-opacity-50"
                >
                  {project.linkText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-15 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <p className="text-muted mb-6 leading-relaxed">
            Interested in seeing more of my work or discussing potential collaborations?
          </p>
          <button 
            onClick={() => window.open('https://github.com/HamzaYslmn?tab=repositories', '_blank', 'noreferrer')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-txt text-bg font-semibold rounded-sm transition-all duration-200 hover:shadow-glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-txt focus:ring-opacity-50"
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
