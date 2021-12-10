$(document).ready(function () {
    "use strict";

    if ($(".banner .slider").length > 0) {
        $(".banner .slider").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            fade: true,
            cssEase: "linear",
        });
    }

    if ($(".testimonial .slider").length > 0) {
        $(".testimonial .slider").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        });
    }

    $(".show-search").on("click", (e) => {
        e.preventDefault();
        $(".search-form").addClass("active");
    });

    $(".search-form .close").on("click", () => {
        $(".search-form").removeClass("active");
    });

    $(window).on("scroll", () => {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > 200) {
            $(".header").addClass("fixed-top");
        } else {
            $(".header").removeClass("fixed-top");
        }
    });

    $(".mobile-menu").on("click", (event) => {
        event.preventDefault();
        $(".header .content .list").slideToggle();
    });

    let filterForm = document.getElementById("filter-form");
    if (filterForm) {
        let allFilterFields = filterForm.querySelectorAll("input, select");
        filterForm.addEventListener("submit", (event) => {
            for (let filterInput of allFilterFields) {
                if (filterInput.value == "") {
                    event.preventDefault();
                }
            }
        });
    }


    let allRadios = document.querySelectorAll('.radio-ratting input');
    let allLabel = document.querySelectorAll('.radio-ratting label');
    Array.from(allRadios).forEach((radio, index) => {
        radio.setAttribute('id', 'input-' + index);
    })

    Array.from(allLabel).forEach((label, index) => {
        label.setAttribute('for', 'input-' + index);

        label.addEventListener('click', event => {
            if(event.target.getAttribute('data-value')) {
                getLabelValue(event.target)
            } else {
                getLabelValue(event.target.parentElement)
            } 
        })

    })

    function getLabelValue(tag) {
        let dataValue = tag.getAttribute('data-value');
        let labels = tag.parentElement.parentElement.querySelectorAll('label');

        Array.from(labels).forEach((label, index) => {
            if(index <= dataValue - 1) {
                label.classList.add('active-color')
                label.querySelector('i').classList.add('fas');
                label.querySelector('i').classList.remove('far');
            } else {
                label.classList.remove('active-color')
                label.querySelector('i').classList.remove('fas');
                label.querySelector('i').classList.add('far');
            }
        })
    }

    function getLabelValueOver(tag) {
        let dataValue = tag.getAttribute('data-value');
        let labels = tag.parentElement.parentElement.querySelectorAll('label');

        Array.from(labels).forEach((label, index) => {
            if(index <= dataValue - 1) {
                label.classList.add('hover-color')
                label.querySelector('i').classList.add('fas');
                label.querySelector('i').classList.remove('far');
            } else {
                label.classList.remove('hover-color')
                label.querySelector('i').classList.remove('fas');
                label.querySelector('i').classList.add('far');
            }
        })
    }



});
