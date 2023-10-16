// Слайдер в меню
const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Слайдер "УСТАВНЫЕ ДОКУМЕНТЫ КОМПАНИИ"
const swiperDocs = new Swiper('.legally__swiper', {
    spaceBetween: 24,
    slidesPerView: 4,
    grabCursor: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});