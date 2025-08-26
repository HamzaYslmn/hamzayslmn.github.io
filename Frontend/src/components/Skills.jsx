import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: '🔧 Embedded & Hardware',
      skills: ['Embedded C/C++', 'Arduino', 'Raspberry Pi', 'ESP32/ESP8266', 'STM32', 'RTOS', 'I2C/SPI/UART', 'PCB Design', 'Sensor Integration']
    },
    {
      title: '🐍 Programming Languages',
      skills: ['Python', 'C/C++', 'JavaScript/TypeScript', 'C#', 'Go', 'Rust (Learning)', 'Bash/Shell', 'SQL']
    },
    {
      title: '🤖 AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn', 'NumPy/Pandas', 'YOLO', 'Computer Vision', 'Edge AI', 'MLOps']
    },
    {
      title: '🌐 Web & Backend',
      skills: ['FastAPI', 'Django', 'React', 'Next.js', 'Node.js', 'RESTful APIs', 'GraphQL', 'WebSocket', 'Socket.IO']
    },
    {
      title: '☁️ Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'Google Cloud Platform', 'Firebase', 'AWS (Basic)', 'CI/CD', 'GitHub Actions', 'Nginx', 'Linux Administration']
    },
    {
      title: '🗄️ Databases & Tools',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firestore', 'Git/GitHub', 'VS Code', 'Jupyter', 'Postman', 'IFTTT']
    },
    {
      title: '🎯 Specialized Areas',
      skills: ['IoT Solutions', 'Real-time Systems', 'Sensor Fusion', 'Control Systems', 'Robotics', '3D Modeling', 'Product Development', 'R&D Methodologies']
    },
    {
      title: '🛠️ Development Tools',
      skills: ['VS Code', 'CLion', 'PyCharm', 'Arduino IDE', 'PlatformIO', 'Figma', 'SolidWorks', 'KiCad']
    }
  ]

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2>Technical Expertise</h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive skill set spanning hardware, software, AI, and cloud technologies.
          </p>
        </div>
        
        <div className="skill-grid fade-in">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h4>{category.title}</h4>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
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

export default Skills
