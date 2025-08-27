import React, { useEffect } from 'react'
import Navigation from './components/Navigation.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Find all elements with fade-in classes and observe them
    const fadeElements = document.querySelectorAll('.opacity-0');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    // Create particles occasionally
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'fixed w-1 h-1 bg-accent rounded-full pointer-events-none opacity-60 z-10';

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      particle.style.left = x + 'px';
      particle.style.top = y + 'px';

      document.body.appendChild(particle);

      // Animate particle
      particle.animate([
        { transform: 'translateY(0px)', opacity: 0.6 },
        { transform: 'translateY(-100px)', opacity: 0 }
      ], {
        duration: 3000,
        easing: 'ease-out'
      }).onfinish = () => {
        particle.remove();
      };
    };

    const particleInterval = setInterval(createParticle, 2000);

    // Performance optimization: Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
    }

    // Cleanup
    return () => {
      observer.disconnect();
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="App bg-bg text-txt font-inter overflow-x-hidden scroll-smooth">
      <Navigation />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
