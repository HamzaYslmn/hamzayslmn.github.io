import React from 'react'

const About = () => {
  const expertise = [
    { icon: '🔧', title: 'Hardware Expertise', desc: 'Embedded C/C++, Arduino, Raspberry Pi, sensor integration' },
    { icon: '🤖', title: 'AI & ML', desc: 'Computer Vision, TensorFlow, PyTorch, OpenCV' },
    { icon: '☁️', title: 'Cloud & Web', desc: 'FastAPI, Docker, Google Cloud, full-stack development' }
  ]

  const socialLinks = [
    { href: 'https://github.com/HamzaYslmn', icon: '📱' },
    { href: 'https://www.linkedin.com/in/hamzayslmn', icon: '💼' },
    { href: 'mailto:resmiyslmn@gmail.com', icon: '📧' }
  ]

  const personalInfo = [
    { label: '📍 Location', value: 'Turkey' },
    { label: '💼 Available for', value: 'Freelance & Full-time' },
    { label: '🌐 Languages', value: 'Turkish, English' }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
          <div className="fade-in">
            <h2>About Me</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
              I'm a Senior Mechatronic Engineer with expertise in bridging the gap between hardware and software. 
              My passion lies in developing innovative solutions that combine embedded systems, artificial intelligence, 
              and modern web technologies.
            </p>
            
            <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
              With a strong background in R&D, I've contributed to numerous projects ranging from IoT devices 
              and computer vision systems to full-stack web applications and cloud architectures. I believe in 
              continuous learning and staying at the forefront of technological advancement.
            </p>
            
            <div className="grid grid-3" style={{ gap: '24px' }}>
              {expertise.map((item, index) => (
                <div key={index} className="card-feature glass">
                  <div className="icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in">
            <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                background: 'var(--muted)', 
                borderRadius: '50%', 
                margin: '0 auto 24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '3rem', 
                color: 'var(--bg)' 
              }}>
                H
              </div>
              <h3>Hamza Yeşilmen</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
                Mechatronic Engineer & R&D Specialist
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
                {socialLinks.map((link, index) => (
                  <div key={index} className="social-link">
                    <a href={link.href} target="_blank" rel="noreferrer">{link.icon}</a>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: 'left', color: 'var(--muted)', fontSize: '0.9rem' }}>
                {personalInfo.map((info, index) => (
                  <p key={index}><strong>{info.label}:</strong> {info.value}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
