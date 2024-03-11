window.addEventListener('scroll', function() {
    if (window.innerWidth >= 992) {
        var navbar = document.querySelector('.sticky-navbar');
        var aboutSection = document.getElementById('about');
        var distanceToTop = aboutSection.getBoundingClientRect().top;

        if (distanceToTop <= 56) {
            navbar.classList.add('sticky-top');
        } else {
            navbar.classList.remove('sticky-top');
        }
    }
});

$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if ($(window).width() < 992) {
            if ($('.navbar-collapse').hasClass('show')) {
                $('#about').css('margin-top', '0');
            } else {
                $('#about').css('margin-top', '278px');
            }
        }
    });
});