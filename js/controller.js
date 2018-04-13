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
    console.log("test");
    var el = document.getElementById(id);
    var img = document.getElementById("arrow");
    var box = el.getAttribute("class");
    if(box == "hide"){
        el.setAttribute("class", "show");
    }
    else{
        el.setAttribute("class", "hide");
    }
}
	
setTimeout(fade_out, 2000);

function fade_out() {
  $("#OrderWindow2").fadeOut();
}	