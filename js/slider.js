new Swiper('.our-partners__slider', {
    loop: true,
    slidesPerView: 7,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
  });

  new Swiper('.road-map-content__progress-bar', {
    slidesPerView: 4,
    grabCursor: true,
    loop: false,
    direction: 'horizontal',
    watchSlidesVisibility: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });

