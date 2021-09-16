$('.open-modal').on("click", function () {
    $('.c-popup').addClass('active');
    $('html').addClass('fixedScroll');
});

$('.c-popup__close').on("click", function () {
    $('.c-popup').removeClass('active');
    $('html').removeClass('fixedScroll');
});