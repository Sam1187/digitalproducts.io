'use strict';

// Initialize Slick Slider for section Works
$(document).ready(function(){
    $('.works__slider').slick({
        dots: true,
        arrows: true,
        nextArrow: '<i class="fa fa-angle-right works__arrowright" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left works__arrowleft" aria-hidden="true"></i>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false
            }
          }
        ]
    });
  });

  // Initialize Slick Slider for section Team
  $(document).ready(function(){
    $('.team__slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '<i class="fa fa-angle-right team__arrowright" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-left team__arrowleft" aria-hidden="true"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
    });
  });

  // Initialize Google map
  $(window).load(function(){
    var map;
    var mapConteiner = $('#map')[0];
    var mapCenter = {lat: 51.490504, lng: 31.306029};
      map = new google.maps.Map(mapConteiner, {
        center: mapCenter,
        zoom: 18
      });   
  });

  // Smooth scroll
  function anchorClick (anchor, id) {
    $(anchor).click(function(){
        $('html, body').animate({scrollTop:$(id).position().top}, 1000);
 })
};

    anchorClick('.about-a', '#about');
    anchorClick('.services-a', '#services');
    anchorClick('.works-a', '#works');
    anchorClick('.contact-a', '#contact'); 
    anchorClick('.arrow-a', '#hero'); 

    // mobile nav
    var navBtn = $('.js-nav-btn');
    var navList = $('.js-nav-list');

    navBtn.on('click', function() {
        console.log(1);
        navList.toggleClass('is-active');
        $('body').toggleClass('no-scroll');
    });