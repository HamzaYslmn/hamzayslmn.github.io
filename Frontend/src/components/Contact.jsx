import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const isFormValid = formData.fullname.trim() !== '' && formData.message.trim() !== ''

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!isFormValid) {
      alert('Please fill in all the fields.')
      return
    }

    setIsSubmitting(true)
    
    const subject = encodeURIComponent('Message From Website')
    const body = encodeURIComponent(`Name: ${formData.fullname}\n\n${formData.message}\n\n(Please do not remove this line #Contact)`)
    const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=resmiyslmn@gmail.com&su=${subject}&body=${body}`
    
    window.open(emailLink, '_blank')
    
    setFormData({
      fullname: '',
      message: ''
    })
    
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20">
      <div className="flex justify-center items-center min-h-[70vh] px-6">
        <div className="w-full max-w-2xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <article className="bg-card border border-border rounded-default shadow-custom p-10 w-full">
            <header>
              <h2 className="text-2xl font-bold text-txt capitalize relative pb-2 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-txt after:rounded">
                Contact
              </h2>
            </header>
            
            <section className="relative h-64 w-full rounded-2xl mb-8 border border-border overflow-hidden">
              <figure className="h-full">
                <iframe 
                  src="https://maps.google.com/maps?q=Ankara%2C%20Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale invert-[0.9]"
                  title="Location Map"
                />
              </figure>
            </section>
            
            <section className="max-w-2xl mx-auto">
              <h3 className="mb-5 text-lg text-txt font-semibold">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-3">
                  <input 
                    type="text" 
                    name="fullname" 
                    className="w-full p-4 rounded-lg border border-border bg-card text-txt text-sm mb-3 font-inter transition-all duration-200 focus:border-txt focus:outline-none placeholder:text-muted placeholder:font-medium" 
                    placeholder="Your Name" 
                    required 
                    value={formData.fullname}
                    onChange={handleInputChange}
                  />
                </div>
                <textarea 
                  name="message" 
                  className="w-full p-4 rounded-lg border border-border bg-card text-txt text-sm mb-3 font-inter transition-all duration-200 focus:border-txt focus:outline-none placeholder:text-muted placeholder:font-medium min-h-[100px] resize-y" 
                  placeholder="Your Message" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button 
                  className={`bg-txt text-bg border-0 rounded-lg py-4 px-5 text-sm font-medium cursor-pointer transition-all duration-200 w-auto inline-flex items-center gap-2 ${
                    !isFormValid || isSubmitting 
                      ? 'bg-muted text-bg-secondary cursor-not-allowed' 
                      : 'hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]'
                  }`}
                  type="submit" 
                  disabled={!isFormValid || isSubmitting}
                >
                  <span>{isSubmitting ? 'Opening Email...' : 'Send Message'}</span>
                  <span>📧</span>
                </button>
              </form>
            </section>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
