/**
 * Form functionality for newsletter subscription
 */
export function setupSubscriptionForm() {
  const subscribeForm = document.getElementById('subscribeForm')
  const formSuccess = document.getElementById('formSuccess')
  
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    
    // Simple validation
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
      showFormError('Please fill in all fields')
      return
    }
    
    if (!isValidEmail(emailInput.value)) {
      showFormError('Please enter a valid email address')
      return
    }
    
    // Simulate form submission
    simulateFormSubmission(nameInput.value, emailInput.value)
  })
  
  /**
   * Show form error message
   * @param {string} message - Error message to display
   */
  function showFormError(message) {
    const errorDiv = document.createElement('div')
    errorDiv.className = 'form-error'
    errorDiv.textContent = message
    errorDiv.style.color = 'var(--color-error-500)'
    errorDiv.style.fontWeight = '600'
    errorDiv.style.marginTop = 'var(--space-sm)'
    errorDiv.style.textAlign = 'center'
    
    // Remove any existing error message
    const existingError = document.querySelector('.form-error')
    if (existingError) {
      existingError.remove()
    }
    
    subscribeForm.appendChild(errorDiv)
    
    // Remove error after 3 seconds
    setTimeout(() => {
      errorDiv.remove()
    }, 3000)
  }
  
  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} - Whether email is valid
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  /**
   * Simulate form submission (in a real app, this would be an API call)
   * @param {string} name - User's name
   * @param {string} email - User's email
   */
  function simulateFormSubmission(name, email) {
    // Show loading state
    const submitButton = subscribeForm.querySelector('button')
    const originalText = submitButton.textContent
    submitButton.textContent = 'Subscribing...'
    submitButton.disabled = true
    
    // Simulate API call
    setTimeout(() => {
      // Reset form
      subscribeForm.reset()
      
      // Show success message
      formSuccess.style.display = 'block'
      
      // Reset button
      submitButton.textContent = originalText
      submitButton.disabled = false
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formSuccess.style.display = 'none'
      }, 5000)
    }, 1500)
  }
}