var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('nav').fadeIn();
    } else {
        $('nav').fadeOut();
    }

});	
	
	
function toggle(id) {
    console.log("er");
    $("#" + id).toggleClass("hide");
}
    /*
    
	
$(".toggle").click(function(){
    var target = "#" + $(this).attr("toggle-target");
    $(target).toggleClass("hide");
  }); */