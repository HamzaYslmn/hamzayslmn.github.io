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
    <section id="skills" className="py-20 bg-bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-clamp-h2 font-bold mb-5">Technical Expertise</h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            A comprehensive skill set spanning hardware, software, AI, and cloud technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 opacity-0 translate-y-8 transition-all duration-700 ease-out">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-default p-6 hover:bg-card-hover transition-all duration-200">
              <h4 className="text-txt text-lg font-semibold mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium transition-all duration-200 hover:bg-card-hover hover:border-txt hover:text-txt">
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

export default Skills
