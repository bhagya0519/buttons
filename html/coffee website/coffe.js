const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton= document.querySelector("#menu-open-button");
const menuCloseButton= document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",()=>{
    //toggle mobile menu visibility 
    document.body.classList.toggle("show-mobile-menu")
})

//close the menu when the close button is clicked 
menuCloseButton.addEventListener("click",() => menuOpenButton.click());

//close the menu when the nav link is clicked 
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

//Initialize Swiper
const swiper = new swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

// Responsive Breakpoints
    breakpoints: {
        0: {
            sliderPreview: 1
        },
        768: {
            sliderPreview: 2
        },
        1024: {
            sliderPreview: 3
        }
    }
  });
  