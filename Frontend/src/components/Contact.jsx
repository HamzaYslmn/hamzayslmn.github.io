import React, { useState } from 'react'
import { Section, Card, Button } from './ui/index.jsx'
import { generateEmailLink, classes, cn } from '../utils/index.js'
import { personalInfo } from '../data/config.js'

const Contact = () => {
  const [formData, setFormData] = useState({ fullname: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const isFormValid = formData.fullname.trim() && formData.message.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!isFormValid) {
      alert('Please fill in all the fields.')
      return
    }

    setIsSubmitting(true)
    
    const body = `Name: ${formData.fullname}\n\n${formData.message}\n\n(Please do not remove this line #Contact)`
    const emailLink = generateEmailLink(personalInfo.email, 'Message From Website', body)
    
    window.open(emailLink, '_blank')
    setFormData({ fullname: '', message: '' })
    setIsSubmitting(false)
  }

  const inputClasses = "w-full p-4 rounded-lg border border-border bg-card text-txt text-sm mb-3 font-inter transition-all duration-200 focus:border-txt focus:outline-none placeholder:text-muted placeholder:font-medium"

  return (
    <Section id="contact">
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className={`w-full max-w-2xl mx-auto ${classes.animate}`}>
          <Card className="p-10 w-full">
            <header>
              <h2 className="text-2xl font-bold text-txt capitalize relative pb-2 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-txt after:rounded">
                Contact
              </h2>
            </header>
            
            <section className="relative h-64 w-full rounded-2xl mb-8 border border-border overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=Ankara%2C%20Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale invert-[0.9]"
                title="Location Map"
              />
            </section>
            
            <section className="max-w-2xl mx-auto">
              <h3 className="mb-5 text-lg text-txt font-semibold">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="fullname" 
                  className={inputClasses}
                  placeholder="Your Name" 
                  required 
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
                <textarea 
                  name="message" 
                  className={cn(inputClasses, "min-h-[100px] resize-y")}
                  placeholder="Your Message" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <Button
                  type="submit" 
                  disabled={!isFormValid || isSubmitting}
                  className={cn(
                    "w-auto",
                    (!isFormValid || isSubmitting) && 'bg-muted text-bg-secondary cursor-not-allowed opacity-50'
                  )}
                >
                  <span>{isSubmitting ? 'Opening Email...' : 'Send Message'}</span>
                  <span>📧</span>
                </Button>
              </form>
            </section>
          </Card>
        </div>
      </div>
    </Section>
  )
}

export default Contact
