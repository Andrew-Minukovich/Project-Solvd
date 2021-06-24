const swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});