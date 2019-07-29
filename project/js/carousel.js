$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        autoplay: {
            Type: Boolean,
            Default: true,
        },
        loop: {
            Type: Boolean,
            Default: true,
        },
        responsive: {
            320: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 30
            },
            1024: {
                items: 3,
                margin: 30
            }
        }
    });
});