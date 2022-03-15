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