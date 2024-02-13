var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 3,
     centerSlide: 'true',
    fade: 'true',
    loop: true,
    grabCursor: 'true',
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
        0: {
        },
        520: {
            slidesPerView: 1,
        },
        950: {slidePerView: 3,
        },
        1300: {slidePerView: 3,
        },
    },
  });