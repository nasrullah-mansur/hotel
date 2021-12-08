$(document).ready(function() {
    "use strict";

    
    $('.banner .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        fade: true,
        cssEase: 'linear',
    });

    $('.testimonial .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $('.show-search').on('click', (e) => {
        e.preventDefault();
        $('.search-form').addClass('active');
    })

    $('.search-form .close').on('click', () => {
        $('.search-form').removeClass('active');
    })

    $(window).on('scroll', () => {
        let scrollTop = $(this).scrollTop();

        if(scrollTop > 200) {
            $('.header').addClass('fixed-top');
        } else {
            $('.header').removeClass('fixed-top');
        }
    })

    $('.mobile-menu').on('click', () => {
        $('.header .content .list').slideToggle();
    })



    new VenoBox({
        selector: '.my-video-links',
    });
});