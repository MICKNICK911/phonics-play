/**
 * Phonics interactive demo functionality
 * Handles phonics card selection and audio playback
 */
export function setupPhonicsDemo() {
  const phonicsCards = document.querySelectorAll('.phonics-card')
  const currentLetter = document.getElementById('current-letter')
  const currentWord = document.getElementById('current-word')
  const playButton = document.getElementById('play-sound')
  
  // Define phonics data
  const phonicsData = {
    'a': { word: 'apple', pronunciation: '/æ/' },
    'b': { word: 'ball', pronunciation: '/b/' },
    'c': { word: 'cat', pronunciation: '/k/' },
    'd': { word: 'dog', pronunciation: '/d/' },
    'e': { word: 'egg', pronunciation: '/ɛ/' },
    'f': { word: 'fish', pronunciation: '/f/' }
  }
  
  // Set default phonics sound
  let currentSound = 'a'
  updatePhonicsPlayer(currentSound)
  
  // Add click event to phonics cards
  phonicsCards.forEach(card => {
    card.addEventListener('click', () => {
      const sound = card.getAttribute('data-sound')
      currentSound = sound
      
      // Remove active class from all cards
      phonicsCards.forEach(c => c.classList.remove('active'))
      
      // Add active class to clicked card
      card.classList.add('active')
      
      // Update player
      updatePhonicsPlayer(sound)
      
      // Add animation effect
      card.style.transform = 'scale(1.1)'
      setTimeout(() => {
        card.style.transform = ''
      }, 300)
    })
  })
  
  // Play button click event
  playButton.addEventListener('click', () => {
    playPhonicsSound(currentSound)
    
    // Add animation
    playButton.classList.add('playing')
    setTimeout(() => {
      playButton.classList.remove('playing')
    }, 500)
  })
  
  /**
   * Update the phonics player display
   * @param {string} sound - The phonics sound to display
   */
  function updatePhonicsPlayer(sound) {
    const data = phonicsData[sound]
    
    // Update the display
    currentLetter.textContent = sound.toUpperCase()
    currentWord.textContent = data.word
  }
  
  /**
   * Play the phonics sound
   * @param {string} sound - The phonics sound to play
   */
  function playPhonicsSound(sound) {
    const data = phonicsData[sound]
    const utterance = new SpeechSynthesisUtterance(data.word)
    utterance.rate = 0.8
    window.speechSynthesis.speak(utterance)
    
    // Visual feedback
    currentLetter.style.transform = 'scale(1.2)'
    currentLetter.style.color = '#1d4ed8'
    
    setTimeout(() => {
      currentLetter.style.transform = ''
      currentLetter.style.color = ''
    }, 500)
  }
}