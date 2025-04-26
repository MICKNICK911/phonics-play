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