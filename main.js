import './style.css'
import { setupNavigation } from './js/navigation.js'
import { setupPhonicsDemo } from './js/phonics.js'
import { setupTestimonialSlider } from './js/testimonials.js'
import { setupSubscriptionForm } from './js/form.js'
import { setupAnimations } from './js/animations.js'

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation()
  setupPhonicsDemo()
  setupTestimonialSlider()
  setupSubscriptionForm()
  setupAnimations()
})