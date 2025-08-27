import React from 'react'
import { Section, SectionHeader, SkillTag } from './ui/index.jsx'
import { classes } from '../utils/index.js'
import { experiences } from '../data/config.js'

const Experience = () => {
  return (
    <Section id="experience" alt>
      <SectionHeader 
        title="Professional Experience"
        subtitle="A journey of innovation, learning, and delivering impactful solutions across various domains."
      />
      
      <div className={`relative pl-10 ${classes.animate}`}>
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-muted"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-10 p-6 bg-card border border-border rounded-default transition-all duration-200 hover:transform hover:translate-x-2 hover:border-txt">
            <div className="absolute -left-8 top-7 w-3 h-3 bg-txt rounded-full border-3 border-bg"></div>
            
            <div className="text-muted font-semibold text-sm mb-2">{exp.date}</div>
            <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
            <div className="text-muted mb-4 italic">{exp.company}</div>
            <p className="text-muted mb-4 leading-relaxed">{exp.description}</p>
            
            <div className="flex flex-wrap gap-3">
              {exp.skills.map((skill, skillIndex) => (
                <SkillTag key={skillIndex}>{skill}</SkillTag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
