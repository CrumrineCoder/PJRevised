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
	
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.MailingListFooterBlock').fadeIn();
    } else {
        $('.MailingListFooterBlock').fadeOut();
    }

});	
	
function toggle(id) {
    var el = document.getElementById(id);
    var img = document.getElementById("arrow");
    var box = el.getAttribute("class");
    if(box == "hide"){
        el.setAttribute("class", "show");
        delay(img, "/images/arrowright.png", 400);
    }
    else{
        el.setAttribute("class", "hide");
        delay(img, "/images/arrowleft.png", 400);
    }
}
	
setTimeout(fade_out, 2000);

function fade_out() {
  $("#OrderWindow2").fadeOut();
}	