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
    <section id="about" className="py-20">
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="text-clamp-h2 font-bold mb-5">About Me</h2>
            <p className="text-muted mb-6 leading-relaxed">
              I'm a Senior Mechatronic Engineer with expertise in bridging the gap between hardware and software. 
              My passion lies in developing innovative solutions that combine embedded systems, artificial intelligence, 
              and modern web technologies.
            </p>
            
            <p className="text-muted mb-8 leading-relaxed">
              With a strong background in R&D, I've contributed to numerous projects ranging from IoT devices 
              and computer vision systems to full-stack web applications and cloud architectures. I believe in 
              continuous learning and staying at the forefront of technological advancement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-default p-10 text-center transition-all duration-200 hover:bg-card-hover hover:border-border-light hover:-translate-y-1 shadow-custom">
                  <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-2xl flex items-center justify-center text-3xl text-bg">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="bg-card border border-border rounded-default p-10 text-center shadow-custom">
              <div className="w-30 h-30 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center text-5xl text-bg">
                H
              </div>
              <h3 className="text-2xl font-bold mb-2">Hamza Yeşilmen</h3>
              <p className="text-muted mb-6">
                Mechatronic Engineer & R&D Specialist
              </p>
              
              <div className="flex justify-center gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <div key={index} className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-muted hover:border-muted hover:text-bg hover:-translate-y-1 text-xl">
                    <a href={link.href} target="_blank" rel="noreferrer">{link.icon}</a>
                  </div>
                ))}
              </div>
              
              <div className="text-left text-muted text-sm space-y-2">
                {personalInfo.map((info, index) => (
                  <p key={index}><span className="font-semibold">{info.label}:</span> {info.value}</p>
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
