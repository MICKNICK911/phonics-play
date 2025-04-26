// Play phonics sound when button is clicked [default]
// function playSound(letter) {
//     const audio = new Audio(`assets/audio/letter-${letter}.mp3`);
//     audio.play().catch(error => {
//         console.log("Allow audio playback in your browser settings!");
//     });
// }

// Optional: Add a simple animation to the CTA button
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.target.style.transform = 'scale(1.05)';
    setTimeout(() => {
        e.target.style.transform = 'scale(1)';
    }, 200);
});


// howler Initialize the sound[current Use]
const sound = new Howl({
    src: ['assets/audio/letter-a.mp3'], // Path to your audio file
    volume: 1, // Optional: Set volume (0 to 1)
  });
  
  // Play the sound on button click
function playSound1() {
    sound.play();
  }