const frame = document.querySelector('.about__video iframe');
const playButton = document.querySelector('.about__video button');

export const playVideo = () => {
  playButton.addEventListener('click', () => {
    if (frame) {
      frame.style.zIndex = '3';
      frame.src = frame.getAttribute('data-src');
    }
  });
};
