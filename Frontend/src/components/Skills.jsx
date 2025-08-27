import React from 'react'
import { Section, SectionHeader, SkillTag } from './ui/index.jsx'
import { classes } from '../utils/index.js'
import { skillCategories } from '../data/config.js'

const Skills = () => {
  return (
    <Section id="skills" alt>
      <SectionHeader 
        title="Technical Expertise"
        subtitle="A comprehensive skill set spanning hardware, software, AI, and cloud technologies."
      />
      
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ${classes.animate}`}>
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-card border border-border rounded-default p-6 hover:bg-card-hover transition-all duration-200">
            <h4 className="text-txt text-lg font-semibold mb-4">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <SkillTag key={skillIndex}>{skill}</SkillTag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
