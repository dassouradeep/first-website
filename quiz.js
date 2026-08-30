const track = document.getElementById('track');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  const shiftAmount = -(currentIndex * 100);
  track.style.transform = `translateX(${shiftAmount}%)`;
}
setInterval(() => {
  moveSlide(1);
}, 5000);