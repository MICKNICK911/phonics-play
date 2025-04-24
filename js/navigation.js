/**
 * Navigation functionality
 * Handles mobile menu toggle and scroll behavior
 */
export function setupNavigation() {
  const header = document.getElementById('header')
  const navToggle = document.getElementById('navToggle')
  const navLinks = document.getElementById('navLinks')
  const navLinksArray = document.querySelectorAll('.nav-link')

  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    
    // Transform hamburger to X
    const spans = navToggle.querySelectorAll('span')
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)'
      spans[1].style.opacity = '0'
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)'
    } else {
      spans[0].style.transform = 'none'
      spans[1].style.opacity = '1'
      spans[2].style.transform = 'none'
    }
  })

  // Close mobile menu when clicking on a link
  navLinksArray.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active')
        
        // Reset hamburger icon
        const spans = navToggle.querySelectorAll('span')
        spans[0].style.transform = 'none'
        spans[1].style.opacity = '1'
        spans[2].style.transform = 'none'
      }
    })
  })

  // Change header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)'
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
      header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)'
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault()
        
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          const headerHeight = header.offsetHeight
          const targetPosition = targetElement.offsetTop - headerHeight
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    })
  })
}