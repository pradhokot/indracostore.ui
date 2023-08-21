$(document).ready(function() {

    // navigation menu bar
    if ($(window).width() >= 992) {

        $('#mainMenuBar .nav-link').removeAttr('data-bs-toggle');

        $('#mainMenuBar li:first-of-type .nav-link').mouseenter(function() {
            $('#collapseProduk').collapse('show');
            $('#collapseMesin, #collapsePromo').collapse('hide');
        });

        $('#mainMenuBar li:nth-of-type(2) .nav-link').mouseenter(function() {
            $('#collapseMesin').collapse('show');
            $('#collapseProduk, #collapsePromo').collapse('hide');
        });

        $('#mainMenuBar li:last-of-type .nav-link').mouseenter(function() {
            $('#collapsePromo').collapse('show');
            $('#collapseProduk, #collapseMesin').collapse('hide');
        });

        $('#mainMenu').mouseleave(function() {
            $('#mainMenu .collapse').collapse('hide');
        });

        // hover on menu tab produk
        $('#collapseProduk .nav > .nav-item > .nav-link').hover(function() {
            $(this).tab('show');
        });

    } else {

        $('#mainMenuBar .nav-link').removeAttr('href');

    }

});



// swiper menu promo
const swiper = new Swiper(".swiper-promo", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});