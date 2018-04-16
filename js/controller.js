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


function sendOrder() {
    var name = $("#form-name").val();
    var email = $('#form-email').val();
    var number = $("#form-number").val();
    var occasion = $('#form-occasion').val();
    var extra = $("#form-extra").val();

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(occasion);
    console.log(extra);
    console.log('mailto:crumrinecoding@gmail.com?subject=Order for  ' + number + ' cookies for a ' + occasion + " event, from " + name + '(' + email + ')' + '&body=' + extra);

    window.location = 'mailto:crumrinecoding@gmail.com?subject=Order for  ' + number + ' cookies for a ' + occasion + " event, from " + name + '(' + email + ')' + '&body=' + extra;

    console.log("Hi");
};