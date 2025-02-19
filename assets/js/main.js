
$(document).ready(function () {

//Sliders
var swiper3slides = new Swiper(".slider-items-3", {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    speed:1200,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {  
        100: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
    },
    navigation: {
      nextEl: ".slider-items-3-parent .swiper-button-next",
      prevEl: ".slider-items-3-parent .swiper-button-prev",
    }
});
var testimonialSwiper = new Swiper(".testimonial-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation:{
      nextEl: ".testimonial-slider .swiper-button-next",
      prevEl: ".testimonial-slider .swiper-button-prev",
    }
});
var swiper = new Swiper(".heroBanner-swiper", {
    effect: "fade",
    centeredSlides: true,
    autoplay: {
    delay: 5000,
    },
    pagination: {
        el: ".heroBanner-swiper .swiper-pagination",
        clickable: true,
    },
});   
$('.heroBanner-swiper .swiper-pagination-bullet ').each(function(){
    $(this).html('<b class="circleSvg"><svg><circle cx="50%" cy="50%" r="50%"></circle></svg></b>');
});


//For Dropdwon Menu
$('.main-header .flex .main-menu ul ul').each(function(){
    let h = $(this).innerHeight();
    $(this).css('--h',h+3);
    $(this).addClass('submenu');
})
    
// Add Right Arrow on dropdown menu
$('.main-header .flex .main-menu ul ul li.drpdwn').each(function(i,e){
    $(this).addClass('submenu-list');
    $(this).append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"><g><polygon points="3.39,9.042 2.769,8.259 6.848,5.025 2.768,1.74 3.395,0.961 8.449,5.031"></polygon></g></svg>');
})

// Custom JS Animation
$('.card-icon-sec .h3').each(function(i,e){
    let text = e.textContent.split('').map( function(letter,i){
        return `<span style="--delay:${i}">${letter}</span>`
    }).join("");
    $(this).html(text);
});






// end jQuery
});



$(window).scroll(function(){

let offset = window.pageYOffset;
$(".contact-parallax").css('background-position-y',(((offset * 0.1) - 200) + "%"));

});

$(window).bind('load', function () {

    setTimeout(function () {
        AOS.init({
            duration: 1000,
            offset: 150,
            once: true,
            easing: "ease",
        });

    }, 300)

})
// window.load ends

$(window).on("load scroll", function () {



})
/* window load & scroll ends */
        
