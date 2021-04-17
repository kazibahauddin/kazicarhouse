/*stickup part start*/
$(document).ready(function(){
 
$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



});

$('.single-item').slick({
  dots:true,
  autoplay:true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});


/*Elevated zoom jquery plugin  end*/


$(".zoom2").elevateZoom();

$(".zoom").elevateZoom({
  zoomType        : "inner",
  cursor: "crosshair"
});

$(".zoom1").elevateZoom({
  zoomType        : "lens",
  lensShape : "round",
  lensSize    : 300
});