import React from 'react'
import { Section, Card, SocialLink } from './ui/index.jsx'
import { classes } from '../utils/index.js'
import { expertise, socialLinks, personalInfo } from '../data/config.js'

const About = () => {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className={classes.animate}>
          <h2 className={classes.heading}>About Me</h2>
          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="text-muted mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-muted rounded-2xl flex items-center justify-center text-3xl text-bg">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
        
        <div className={classes.animate}>
          <Card className="p-10 text-center">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center text-5xl text-bg font-bold">
              {personalInfo.name.charAt(0)}
            </div>
            <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-muted mb-6">{personalInfo.title}</p>
            
            <div className="flex justify-center gap-4 mb-6">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
            
            <div className="text-left text-muted text-sm space-y-2">
              <p><span className="font-semibold">📍 Location:</span> {personalInfo.location}</p>
              <p><span className="font-semibold">💼 Available for:</span> {personalInfo.availability}</p>
              <p><span className="font-semibold">🌐 Languages:</span> {personalInfo.languages}</p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}

export default About
