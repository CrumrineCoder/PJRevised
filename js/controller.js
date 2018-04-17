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

$('#order-form').submit(function() {
    var post_data = $('#order-form').serialize();
    $.post('../scripts/order.php', post_data, function(data) {
    });
  });

  $('#join-form').submit(function() {
    var post_data = $('#join-form').serialize();
    $.post('../scripts/join.php', post_data, function(data) {
    });
  });

  $('#book-form').submit(function() {
    var post_data = $('#book-form').serialize();
    $.post('../scripts/book.php', post_data, function(data) {
    });
  });