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
    <section id="contact" className="section">
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '70vh', 
        padding: '0' 
      }}>
        <div className="fade-in" style={{ 
          width: '100%', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          <article className="glass contact-card">
            <header>
              <h2 className="contact-title">Contact</h2>
            </header>
            
            <section className="mapbox">
              <figure style={{ height: '100%' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=Ankara%2C%20Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="map-iframe"
                  title="Location Map"
                />
              </figure>
            </section>
            
            <section className="contact-form">
              <h3 className="form-title">Contact Form</h3>
              <form onSubmit={handleSubmit} className="form">
                <div className="input-wrapper">
                  <input 
                    type="text" 
                    name="fullname" 
                    className="form-input" 
                    placeholder="Your Name" 
                    required 
                    value={formData.fullname}
                    onChange={handleInputChange}
                  />
                </div>
                <textarea 
                  name="message" 
                  className="form-input" 
                  placeholder="Your Message" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <button 
                  className="form-btn" 
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
