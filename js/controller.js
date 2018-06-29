// index.js

const main = () => {
    // Load custom tracking code lazily, so it's non-blocking.
    import('./analytics/base.js').then((analytics) => analytics.init());
  
    // Initiate all other code paths here...
  };
  
  // Start the app through its main entry point.
  main();

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
   
  /*  pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, */
});



$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 700) {
        $('nav').fadeIn();
        $('nav').removeClass("hide");
    } else {
        $('nav').fadeOut();
    }

});	
	
function toggle(id) {
    $("#" + id).toggleClass("hide");
}

window.onload = function() {
	// Intensify all images with the 'intense' classname.
    var elements = document.querySelectorAll( '.intense' );
    Intense( elements );
    
    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1500, function(){
            window.location.hash = hash;
          });
        } 
      });
}

$(document).ready(function() {
    // On submit, validate below fields.
    $("#emailer").validate({
        rules: {
            name: "required",
            email: {
                    required: true,
                    email: true
                },
            subject: "required",
            message: "required"
        },
        messages: {

            name: "required",
            email: {
                    required: "Required",
                    email: "must be valid email"
                },
            subject: "required",
            message: "required"
        }
    });
});