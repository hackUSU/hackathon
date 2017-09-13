require('../css/main.scss');
$(document).ready(() => {

  // Setup slideshow
  $(".slideshow").backstretch([
    "../assets/logan1.jpg",
    "../assets/logan2.jpg",
    "../assets/logan3.jpg",
    "../assets/logan4.jpg",
  ], {fade: 750, duration: 2500});

  // Make links smooth scroll to elements
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    var navbarHeight = 70;
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - navbarHeight
        }, 1000);
    }
});

})