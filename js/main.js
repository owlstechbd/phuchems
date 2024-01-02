// Service Slider


$(document).ready(function(){
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.thumbnail-slider' // Connect the main slider with the thumbnail slider
  });

  $('.thumbnail-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main-slider', // Connect the thumbnail slider with the main slider
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
});