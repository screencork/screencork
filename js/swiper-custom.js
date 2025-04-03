//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  speed: 1200,
  loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      autoplay: {
        delay: 3500,
      },
  });

  let swiper2 = new Swiper(".cardSwiper", {
        breakpoints: {
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        },
    });