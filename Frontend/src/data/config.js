// Centralized configuration for all portfolio data
export const personalInfo = {
  name: 'Hamza Yeşilmen',
  title: 'Senior Mechatronic Engineer & R&D Specialist',
  email: 'resmiyslmn@gmail.com',
  location: 'Turkey',
  availability: 'Freelance & Full-time',
  languages: 'Turkish, English',
  bio: [
    "I'm a Senior Mechatronic Engineer with expertise in bridging the gap between hardware and software. My passion lies in developing innovative solutions that combine embedded systems, artificial intelligence, and modern web technologies.",
    "With a strong background in R&D, I've contributed to numerous projects ranging from IoT devices and computer vision systems to full-stack web applications and cloud architectures. I believe in continuous learning and staying at the forefront of technological advancement."
  ]
}

export const socialLinks = [
  { href: 'https://github.com/HamzaYslmn', icon: '📱', title: 'GitHub' },
  { href: 'https://www.linkedin.com/in/hamzayslmn', icon: '💼', title: 'LinkedIn' },
  { href: 'mailto:resmiyslmn@gmail.com', icon: '📧', title: 'Email' }
]

export const navigation = ['about', 'experience', 'projects', 'skills', 'contact']

export const expertise = [
  { icon: '🔧', title: 'Hardware Expertise', desc: 'Embedded C/C++, Arduino, Raspberry Pi, sensor integration' },
  { icon: '🤖', title: 'AI & ML', desc: 'Computer Vision, TensorFlow, PyTorch, OpenCV' },
  { icon: '☁️', title: 'Cloud & Web', desc: 'FastAPI, Docker, Google Cloud, full-stack development' }
]

export const experiences = [
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

export const projects = [
  {
    title: '👥 HireUp360 Platform',
    status: '🤖 AI/LLM',
    description: 'HireUp360 is an AI-powered platform designed to simplify modern recruitment processes. It offers real-time candidate matching, automated pre-screening, customizable job postings, and comprehensive analytics dashboards for an efficient and transparent experience for both employers and candidates. The platform ensures scalability and reliability with its microservices architecture and cloud-based infrastructure.',
    skills: ['FastAPI', 'React', 'Docker', 'Supabase', 'AI/ML'],
    link: 'https://hireup360.com/',
    linkText: 'Visit Site ↗'
  },
  {
    title: '⚙️ KromAsistan',
    status: '🤖 AI/LLM',
    description: `Developed in collaboration between Kromaş Makina and Mountain Artificial Intelligence, this smart assistant makes machine selection easy. It provides information about the company and machines.\n\nNow, instead of long forms and catalogs, you can find the most suitable machine just by chatting.`,
    skills: ['Artificial Intelligence', 'Chatbot', 'Machine Selection', 'Joint Development'],
    link: 'https://lnkd.in/dt2zHkNh',
    linkText: 'Click to Try ↗'
  },
  {
    title: 'Digital Teammate 🏔️',
    status: '🤖 AI/LLM',
    description: `Mountain Assistant is our AI assistant that greets visitors to our website and supports our automation processes.\n\nWhile our AI assistant speeds up your work, we focus on innovation and development processes.`,
    skills: ['Artificial Intelligence', 'Automation', 'Chatbot'],
    link: 'https://mountain.com.tr/',
    linkText: 'Learn More'
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
    title: 'Smart IoT Monitoring System',
    status: '🔧 Embedded',
    description: 'Real-time environmental monitoring system with edge AI capabilities. Features wireless sensor networks, predictive analytics, and cloud-based dashboard.',
    skills: ['Embedded C', 'ESP32', 'LoRaWAN', 'TensorFlow Lite', 'Firebase'],
    link: '#contact',
    linkText: 'Contact for Details'
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

export const skillCategories = [
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
