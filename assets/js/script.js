$(document).ready(function () {

    // navigation menu bar
    if ($(window).width() >= 992) {

        $('#mainMenuBar .nav-link').removeAttr('data-bs-toggle');

        $('#mainMenuBar li:first-of-type .nav-link').mouseenter(function () {
            $('#collapseProduk').collapse('show');
            $('#collapseMesin, #collapsePromo').collapse('hide');
            $(this).removeClass('collapsed');
            $('#mainMenuBar li:nth-of-type(2) .nav-link, #mainMenuBar li:last-of-type .nav-link').addClass('collapsed');
        });

        $('#mainMenuBar li:nth-of-type(2) .nav-link').mouseenter(function () {
            $('#collapseMesin').collapse('show');
            $('#collapseProduk, #collapsePromo').collapse('hide');
            $(this).removeClass('collapsed');
            $('#mainMenuBar li:first-of-type .nav-link, #mainMenuBar li:last-of-type .nav-link').addClass('collapsed');
        });

        $('#mainMenuBar li:last-of-type .nav-link').mouseenter(function () {
            $('#collapsePromo').collapse('show');
            $('#collapseProduk, #collapseMesin').collapse('hide');
            $(this).removeClass('collapsed');
            $('#mainMenuBar li:first-of-type .nav-link, #mainMenuBar li:nth-of-type(2) .nav-link').addClass('collapsed');
        });

        $('#mainMenu').mouseleave(function () {
            $('#mainMenu .collapse').collapse('hide');
            $('#mainMenuBar li .nav-link').addClass('collapsed');
        });

        // hover on menu tab produk
        $('#collapseProduk .nav > .nav-item > .nav-link').hover(function () {
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



// swiper produk
const swiperProduk = new Swiper(".swiper-produk", {
    slidesPerView: "2",
    spaceBetween: 12,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: "2",
            spaceBetween: 12,
        },
        576: {
            slidesPerView: "2",
            spaceBetween: 24,
        },
        768: {
            slidesPerView: "3",
            spaceBetween: 12,
        },
        992: {
            slidesPerView: "3",
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: "4",
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: "5",
            spaceBetween: 24,
        },
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});