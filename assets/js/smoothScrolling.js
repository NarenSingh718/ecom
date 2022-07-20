$(document).ready(function () {
  // Add smooth scrolling to all links

  // Handler for .ready() called.
  if (window.location.hash) {
    var hash = window.location.hash;

    if ($(hash).length) {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, 600, 'swing');
    }
  }

  // $("a").on('click', function (event) {
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && this.hash !== "#UK" && this.hash !== "#USA" && this.hash !== "#Canada" && this.hash !== "#Singapore" && this.hash !== "#Germany"  && this.hash !== "#France"  && this.hash !== "#China"  && this.hash !== "#India") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });


});

$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse('hide');
  });
});

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  // Do something

  // var whatsappIconPosition = $('.whatsapp').offset();
  // console.log(scroll, ' scroll position');
  // console.log(whatsappIconPosition,' whatsappIconPosition');
  // if (scroll > 3971) {
  //   $('.cta').css('transform', 'translate(0px, 0px)');

  // } else {
  //   $('.cta').css('transform', 'translate(200%, 0px)');

  // }

});
