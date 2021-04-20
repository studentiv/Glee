// const { on } = require("gulp");

$(function () {

  
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });
  
  $('.product-item__numb').styler();

  $('.dots').on('click', function () {
    $(this).toggleClass('list-style');
  });

  $('.dots').on('click', function () {
    $('.shop-content__item').toggleClass('shop-content__item--list'),
    $('.pagination').toggleClass('sub-class');
  })
  

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
  });
  
  $('.top-slider__inner').slick ({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".star").rateYo({
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });
  
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  
  var config = {
    controls: {
      scope: 'local'
    }
  };
  
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  
  // var mixer = mixitup('.products-top__items')
  // var mixer = mixitup('.design-top__items')

});


