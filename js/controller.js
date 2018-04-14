

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
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
    window.onload = function () {
        // Intensify all images with the 'intense' classname.
        var elements = document.querySelectorAll('.intense');
        Intense(elements);
    }
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
