const swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});