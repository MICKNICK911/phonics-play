// Play phonics sound when button is clicked
function playSound(letter) {
    const audio = new Audio(`assets/audio/letter-${letter}.mp3`);
    audio.play().catch(error => {
        console.log("Allow audio playback in your browser settings!");
    });
}

// Optional: Add a simple animation to the CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.target.style.transform = 'scale(1.05)';
    setTimeout(() => {
        e.target.style.transform = 'scale(1)';
    }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
    // Attach click handlers to all sound buttons
    document.querySelectorAll('.sound-button').forEach(button => {
      button.addEventListener('click', () => {
        const letter = button.dataset.sound;
        playSound1(letter);
      });
    });
  });
  
function playSound1(letter) {
    const audio = new Audio(`assets/sounds/letter-${letter}.mp3`);
    
    // Handle iOS promise-based playback
    audio.play().catch(error => {
      console.error('Audio playback failed:', error);
      alert('Allow audio playback in your browser settings!');
    });
  }