new Swiper('.wrapper',{
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    loop: true,
    simulateTouch: false,
    touchRatio: 3,
    touchAngle: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

let menuBtn = document.querySelector(".menu__open");

let menuPopup = document.querySelector(".menu__popup");

let menuClose = document.querySelector(".menu__close");


menuBtn.addEventListener("click", function(){
    menuPopup.classList.add("popup__active");
})

menuClose.addEventListener("click", function(){
    menuPopup.classList.remove("popup__active");
})

new Swiper(".parthners_slider", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next"
    },
});