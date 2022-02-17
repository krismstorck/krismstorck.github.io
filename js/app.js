// --------------
// Hover animaton
// --------------

const mouthSpeed = .3;
const easeType = Power4.easeOut;
const mouthOpen = gsap.timeline({ paused: true });
mouthOpen.to('.mouth-outside', {duration: mouthSpeed, ease: easeType, x: -50, y: 100,}, 0);
mouthOpen.to('.mouth-inside', {duration: mouthSpeed, ease: easeType, x:-50, y: 95}, 0);
mouthOpen.to('.tongue', {duration: mouthSpeed, ease: easeType, x:-50, y: 100}, 0);
mouthOpen.to('.teeth', {duration: mouthSpeed, ease: easeType, x:-50,y: 90}, 0);
mouthOpen.to('.jaw', {duration: mouthSpeed, ease: easeType, x:-80,y: -50}, 0);


// ------------
// Mouse events
// ------------

const button = document.querySelector('button');

button.addEventListener('mouseenter', enterButton);
button.addEventListener('mouseleave', leaveButton);

function enterButton() { mouthOpen.play(); }
function leaveButton() { mouthOpen.reverse(); }


