import React from 'react'
import { Section, SectionHeader, Card, SkillTag, Button } from './ui/index.jsx'
import { handleLinkClick, classes } from '../utils/index.js'
import { projects } from '../data/config.js'

const Projects = () => {
  return (
    <Section id="projects">
      <SectionHeader 
        title="Featured Projects"
        subtitle="A selection of projects that showcase my expertise in mechatronics, AI, and software development."
      />
      
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${classes.animate}`}>
        {projects.map((project, index) => (
          <Card key={index} className="relative overflow-hidden p-8 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-txt transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></div>
            
            <div className="mb-6">
              <span className="inline-block bg-card-hover text-txt px-3 py-1.5 rounded-full text-xs font-semibold border border-border">
                {project.status}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-muted mb-5 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {project.skills.map((skill, skillIndex) => (
                <SkillTag key={skillIndex}>{skill}</SkillTag>
              ))}
            </div>
            
            <Button 
              variant="secondary"
              className="text-sm"
              onClick={() => handleLinkClick(project.link)}
            >
              {project.linkText}
            </Button>
          </Card>
        ))}
      </div>
      
      <div className={`text-center mt-15 ${classes.animate}`}>
        <p className="text-muted mb-6 leading-relaxed">
          Interested in seeing more of my work or discussing potential collaborations?
        </p>
        <Button onClick={() => handleLinkClick('https://github.com/HamzaYslmn?tab=repositories')}>
          View All Projects on GitHub
          <span>↗</span>
        </Button>
      </div>
    </Section>
  )
}

export default Projects
