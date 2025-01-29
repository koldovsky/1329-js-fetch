const carousel = document.querySelector(".products-carousel-animated");
const slides = document.querySelectorAll(".products-carousel-animated__slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const totalSlides = slides.length;

let currentIndex = 0;

// Clone first and last slides for infinite effect
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, slides[0]);

const slideWidth = slides[0].offsetWidth;
let currentTranslate = -slideWidth;

function updateCarousel() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function goToNextSlide() {
  currentIndex++;
  currentTranslate -= slideWidth;

  if (currentIndex > totalSlides) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = 1;
      currentTranslate = -slideWidth;
      updateCarousel();
    }, 500);
  }

  carousel.style.transition = "transform 0.5s ease";
  updateCarousel();
}

function goToPrevSlide() {
  currentIndex--;
  currentTranslate += slideWidth;

  if (currentIndex < 0) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = totalSlides - 1;
      currentTranslate = -slideWidth * totalSlides;
      updateCarousel();
    }, 500);
  }

  carousel.style.transition = "transform 0.5s ease";
  updateCarousel();
}

nextButton.addEventListener("click", goToNextSlide);
prevButton.addEventListener("click", goToPrevSlide);

// Initialize carousel position
updateCarousel();
