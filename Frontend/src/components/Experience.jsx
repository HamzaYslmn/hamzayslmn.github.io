import React from 'react'

const Experience = () => {
  const experiences = [
    {
      date: '2023 - Present',
      title: 'Senior Mechatronic Engineer',
      company: 'R&D Department',
      description: 'Leading the development of embedded systems and IoT solutions. Specializing in sensor integration, real-time data processing, and AI-powered edge computing applications.',
      skills: ['Embedded C/C++', 'Python', 'IoT', 'Computer Vision', 'Real-time Systems']
    },
    {
      date: '2021 - 2023',
      title: 'Mechatronic Engineer',
      company: 'Product Development Team',
      description: 'Developed innovative mechatronic systems combining mechanical, electrical, and software components. Focused on automation, robotics, and intelligent control systems.',
      skills: ['Arduino', 'Raspberry Pi', 'Sensor Fusion', 'Control Systems', 'PCB Design']
    },
    {
      date: '2020 - 2021',
      title: 'Junior Engineer',
      company: 'Technology Research Lab',
      description: 'Started my professional journey in R&D, working on prototype development and proof-of-concept projects. Gained valuable experience in project management and cross-functional collaboration.',
      skills: ['Prototyping', '3D Design', 'Testing', 'Documentation']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-clamp-h2 font-bold mb-5">Professional Experience</h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            A journey of innovation, learning, and delivering impactful solutions across various domains.
          </p>
        </div>
        
        <div className="relative pl-10 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-muted"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-10 p-6 bg-card border border-border rounded-default transition-all duration-200 hover:transform hover:translate-x-2 hover:border-txt">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-7 w-3 h-3 bg-txt rounded-full border-3 border-bg"></div>
              
              <div className="text-muted font-semibold text-sm mb-2">{exp.date}</div>
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <div className="text-muted mb-4 italic">{exp.company}</div>
              <p className="text-muted mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium transition-all duration-200 hover:bg-card-hover hover:border-txt hover:text-txt">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
