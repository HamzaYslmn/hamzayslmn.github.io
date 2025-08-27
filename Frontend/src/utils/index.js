// Smooth scroll to target element
export const scrollToSection = (targetId) => {
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

// Handle external and internal links
export const handleLinkClick = (link) => {
  if (link.startsWith('#')) {
    scrollToSection(link)
  } else {
    window.open(link, '_blank', 'noreferrer')
  }
}

// Generate email link
export const generateEmailLink = (to, subject, body) => {
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodedSubject}&body=${encodedBody}`
}

// Class name utilities
export const cn = (...classes) => classes.filter(Boolean).join(' ')

// Common class combinations
export const classes = {
  section: 'py-20',
  sectionAlt: 'py-20 bg-bg-secondary',
  container: 'max-w-container mx-auto px-6',
  heading: 'text-clamp-h2 font-bold mb-5',
  subtitle: 'text-muted max-w-2xl mx-auto leading-relaxed',
  card: 'bg-card border border-border rounded-default transition-all duration-200 hover:bg-card-hover hover:border-border-light hover:-translate-y-1 shadow-custom',
  button: 'inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-txt focus:ring-opacity-50',
  buttonPrimary: 'bg-txt text-bg hover:shadow-glow hover:scale-105',
  buttonSecondary: 'bg-transparent text-txt border-2 border-border hover:border-txt hover:-translate-y-0.5',
  animate: 'animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out'
}
