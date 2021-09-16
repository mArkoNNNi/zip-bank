var swiper = new Swiper('.slider-reviews', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    watchOverflow: true,
    autoHeight: true,

    breakpoints: {
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
    },
    pagination: {
        el: '.swiper-pagination-event',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});