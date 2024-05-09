$(document).ready(function(){  

    //* SLICK SLIDER *//
    $('.bannerSlider').slick({
        arrows :false,
        dots : true,
        dotsClass :`bannerDots container`,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    //* BOOTSTRAP TOOLIP *//

    const tooltipTriggerList = document.querySelectorAll
    ('[data-bs-toggle="tooltip"]')
   const tooltipList = [...tooltipTriggerList].map(
    tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);

//* NEW PRODUCT SLIDER *//
$('.ProductsSlider').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "#productLeftArrow",
    nextArrow: "#productRightArrow",

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
           
          },
        },

        {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
             
            },
          },

          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
             
            },
          },
        
       
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]


});

//* Deals Of The Days
$('.Timer').countdown('2025/01/01', function(event) {
  // event.strftime('%w weeks %d days %H:%M:%S')
  $(`.days`).html(event.strftime(' %d '));

  $(`.Hour`).html(event.strftime(' %H '));

  $(`.Minute`).html(event.strftime(' %M '));

  $(`.Sec`).html(event.strftime(' %S '));
  
});

// $('.FairnessCream').slick({
//   slidesToShow: 4,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   prevArrow: "#productLeftArrow",
//   nextArrow: "#productRightArrow",

// });


  });