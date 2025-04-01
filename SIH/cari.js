let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0; // Wrap around to the first slide
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // Wrap around to the last slide
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100; 
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Pause auto-slide on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseover', () => clearInterval(autoSlide));
carousel.addEventListener('mouseout', () => autoSlide = setInterval(nextSlide, 3000));
