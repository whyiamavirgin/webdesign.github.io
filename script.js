$('#menu-checkbox').on('click', function () {
    var x = document.getElementById('logo');
    if ( $(this).is(':checked') ) {
        x.className += " invisible";
    } else {
        // checkbox unchecked 
        x.className = "logo";
    }
})

$(function() {
    $('.toggles button').click(function() { // при нажатии на кнопку будет вызываться функция
        var get_id = this.id; //записывается тот айди, на который нажали
        var get_current = $('.posts .' + get_id); 

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function() {
        $('.post').show(500);
    });
});

  var owl = $(".owl-carousel");
  owl.owlCarousel({
      items:8,
      loop:true,
      smartSpeed:500,
      dots:false,
      autoplay:true,
      responsiveClass: true,
      responsive:{
        0: {
            items: 1,
               loop: true,
               dots: false,
               smartSpeed: 1000,
               margin: 5
        },
        300: {
            items:2,
               loop: true,
               dots: false,
               smartSpeed: 1000,
               margin: 5
        },
           420: {
               items:4,
               loop: true,
               dots: false,
               smartSpeed: 1000,
               margin: 10
           },
           720: {
               items:6,
               loop: true,
               dots: false,
               smartSpeed: 1000,
               margin: 15
           },
           1100: {
               items:8,
        loop: true,
        dots: false,
        smartSpeed: 1000,
        margin: 25
           }
       }
  });
// if($(window).width() < 420 ) {
//     owl.owlCarousel({
//         items:3
//     });
// }
  // Go to the next item
  $('.owl-next').click(function() {
      owl.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.owl-prev').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  });


var abc = document.getElementById('footer-navig');
if($(window).width() < 420) {
    abc.className += " disabled";
} else {
    abc.className = "footer-nav";
};

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", 
            block: "start"
        })
    })
}