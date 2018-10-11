require('../css/main.scss');
require('./jquery.backstretch.min');
$(document).ready(function() {

    // Setup slideshow
    $(".slideshow").backstretch([
        "assets/logan6.jpg",
        "assets/logan10.jpg",
        "assets/logan9.png",
        "assets/logan7.jpg",
        "assets/logan4.jpg",
    ], {fade: 750, duration: 3000});

    // Make links smooth scroll to elements
    $('a[href^="#"]').on('click', function(event) {
        var href = this.getAttribute('href');
        console.log(href.indexOf('faq'))
        var target = $(href);
        var navbarHeight = 70;
        if( target.length && href.indexOf('collapse') == -1) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - navbarHeight
            }, 1000);
        }
    });

})