// Play phonics sound when button is clicked [default working]
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


// // howler Initialize the sound[current Use working]
// const sound = new Howl({
//     src: ['assets/audio/letter-a.mp3'], // Path to your audio file
//     html5: true,
//     format: ['mp3'],
//     volume: 1, // Optional: Set volume (0 to 1)
//   });
  
//   // Play the sound on button click
// function playSound1() {
//     sound.play();
//   }


//UPDATE/
// Add click effects to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 200);
    });
});

// Randomize floating letters
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const floatingContainer = document.querySelector('.floating-letters');

for(let i = 0; i < 8; i++) {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 100}%`;
    span.style.animationDelay = `${Math.random() * 2}s`;
    floatingContainer.appendChild(span);
}


// script.js smartphone audio howler
let isMobileInitialized = false;
let mobileSound = null;

// Mobile browsers require this initialization pattern
function handleFirstInteraction() {
    if (!isMobileInitialized) {
        // Initialize sounds after first user interaction
        mobileSound = new Howl({
            src: ['assets/audio/letter-a.m4a', 'assets/audio/letter-a.mp3'],
            html5: true, // Required for iOS
            onplayerror: function() {
                mobileSound.once('unlock', function() {
                    mobileSound.play();
                });
            }
        });
        isMobileInitialized = true;
    }
    
    // Now play the sound
    if (mobileSound) {
        mobileSound.play();
    }
}

// For desktop (keep existing code)
if (!/Mobi|Android/i.test(navigator.userAgent)) {
    const desktopSound = new Howl({
        src: ['assets/audio/letter-a.mp3']
    });
    document.getElementById('playA').onclick = () => desktopSound.play();
}