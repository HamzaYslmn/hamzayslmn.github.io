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
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2>Professional Experience</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
            A journey of innovation, learning, and delivering impactful solutions across various domains.
          </p>
        </div>
        
        <div className="timeline fade-in">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
                {exp.description}
              </p>
              <div className="skill-list">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
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
