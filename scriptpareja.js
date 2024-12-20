const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showSlide(index) {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  index = (index + 1) % images.length; // Ir al siguiente
  showSlide(index);
});

prevButton.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // Ir al anterior
  showSlide(index);
});

// Opcional: deslizar automáticamente cada 5 segundos
setInterval(() => {
  index = (index + 1) % images.length;
  showSlide(index);
}, 5000);
