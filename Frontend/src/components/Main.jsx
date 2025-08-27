import React from 'react'
import { scrollToSection, classes } from '../utils/index.js'
import { Button } from './ui/index.jsx'
import { personalInfo } from '../data/config.js'

const Main = () => {
  return (
    <section id="top" className="min-h-screen flex items-center relative overflow-hidden bg-bg-secondary">
      <div className="max-w-container mx-auto px-6">
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-full text-txt font-semibold text-sm mb-6 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <span>🚀</span>
            {personalInfo.title}
          </div>
          
          <h1 className="text-clamp-h1 font-bold leading-tight tracking-tight mb-6 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            Building the future with 
            <span className="text-txt"> AI & Innovation</span>
          </h1>
          
          <p className="text-xl text-muted-light max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            {personalInfo.bio[0]}
          </p>
          
          <div className="flex gap-4 flex-wrap md:justify-start justify-center animate-fade-in-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
            <Button onClick={() => scrollToSection('#contact')}>
              Let's Collaborate
              <span>→</span>
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('#projects')}>
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
