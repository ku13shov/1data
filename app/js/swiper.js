// Слайдер в меню
const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});