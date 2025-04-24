/**
 * Testimonial slider functionality
 */
export function setupTestimonialSlider() {
  const testimonialSlides = document.querySelectorAll('.testimonial-slide')
  const dots = document.querySelectorAll('.dot')
  const prevButton = document.getElementById('prevTestimonial')
  const nextButton = document.getElementById('nextTestimonial')
  
  let currentSlide = 0
  const slideCount = testimonialSlides.length
  
  // Set up automatic slider
  let slideInterval = setInterval(nextSlide, 6000)
  
  // Previous slide button
  prevButton.addEventListener('click', () => {
    clearInterval(slideInterval)
    currentSlide = (currentSlide - 1 + slideCount) % slideCount
    updateSlider()
    slideInterval = setInterval(nextSlide, 6000)
  })
  
  // Next slide button
  nextButton.addEventListener('click', () => {
    clearInterval(slideInterval)
    nextSlide()
    slideInterval = setInterval(nextSlide, 6000)
  })
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval)
      currentSlide = index
      updateSlider()
      slideInterval = setInterval(nextSlide, 6000)
    })
  })
  
  /**
   * Update the slider to show the current slide
   */
  function updateSlider() {
    // Update slides
    testimonialSlides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('active')
      } else {
        slide.classList.remove('active')
      }
    })
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active')
      } else {
        dot.classList.remove('active')
      }
    })
  }
  
  /**
   * Advance to the next slide
   */
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount
    updateSlider()
  }
}