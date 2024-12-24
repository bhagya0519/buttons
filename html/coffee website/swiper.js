//Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive Breakpoints
  breakpoints: {
    0: {
      sliderPreview: 1,
    },
    768: {
      sliderPreview: 2,
    },
    1024: {
      sliderPreview: 3,
    },
  },
});
