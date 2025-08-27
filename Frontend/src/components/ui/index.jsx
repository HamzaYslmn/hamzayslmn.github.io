import { cn, classes } from '../../utils/index.js'

export const Section = ({ id, className, children, alt = false }) => (
  <section id={id} className={cn(alt ? classes.sectionAlt : classes.section, className)}>
    <div className={classes.container}>
      {children}
    </div>
  </section>
)

export const SectionHeader = ({ title, subtitle, className }) => (
  <div className={cn('text-center mb-20', classes.animate, className)}>
    <h2 className={classes.heading}>{title}</h2>
    {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
  </div>
)

export const Card = ({ children, className, ...props }) => (
  <div className={cn(classes.card, className)} {...props}>
    {children}
  </div>
)

export const Button = ({ variant = 'primary', children, className, ...props }) => (
  <button 
    className={cn(
      classes.button,
      variant === 'primary' ? classes.buttonPrimary : classes.buttonSecondary,
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export const SkillTag = ({ children, className }) => (
  <span className={cn(
    'px-3 py-1 bg-card border border-border rounded-full text-xs font-medium transition-all duration-200 hover:bg-card-hover hover:border-txt hover:text-txt',
    className
  )}>
    {children}
  </span>
)

export const SocialLink = ({ href, icon, title, className }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className={cn(
      'w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-muted hover:border-muted hover:text-bg hover:-translate-y-1 text-xl',
      className
    )}
    title={title}
  >
    {icon}
  </a>
)
