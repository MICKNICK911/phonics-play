/**
 * Animation effects for page elements
 */
export function setupAnimations() {
  // Animate elements when they enter the viewport
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1
    })
    
    // Observe lesson categories
    document.querySelectorAll('.lesson-category').forEach(element => {
      observer.observe(element)
      element.classList.add('animate-on-scroll')
    })
    
    // Observe benefit cards
    document.querySelectorAll('.benefit-card').forEach((element, index) => {
      observer.observe(element)
      element.classList.add('animate-on-scroll')
      element.style.transitionDelay = `${index * 0.1}s`
    })
    
    // Observe phonics cards
    document.querySelectorAll('.phonics-card').forEach((element, index) => {
      observer.observe(element)
      element.classList.add('animate-on-scroll')
      element.style.transitionDelay = `${index * 0.1}s`
    })
  }
  
  // Add hover effects to buttons
  const setupButtonEffects = () => {
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)'
      })
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = ''
      })
    })
  }
  
  // Apply parallax effect to hero section
  const setupParallax = () => {
    const hero = document.querySelector('.hero')
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY
      if (scrollPosition < 600) {
        const heroImage = document.querySelector('.hero-image')
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px) rotate(2deg)`
      }
    })
  }
  
  // Initialize all animations
  observeElements()
  setupButtonEffects()
  setupParallax()
  
  // Add these styles for animation classes
  const style = document.createElement('style')
  style.textContent = `
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animate {
      opacity: 1;
      transform: translateY(0);
    }
  `
  document.head.appendChild(style)
}