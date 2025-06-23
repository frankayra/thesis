let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const slidesCount = slides.length;
  const slidesCounter = document.querySelector('#slidesCounter');
  slidesCounter.innerHTML = `${currentSlide + 1}/${slidesCount}`;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    slidesCounter.innerHTML = `${currentSlide + 1}/${slidesCount}`;
  }

  function nextSlide() {
    if (currentSlide >= slidesCount - 1) return;
    currentSlide = (currentSlide + 1) % slidesCount;
    showSlide(currentSlide);
}

function prevSlide() {
    if (currentSlide <= 0) return;
    currentSlide = (currentSlide - 1 + slides.length) % slidesCount;
    showSlide(currentSlide);
  }