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

// Слайдер в каталоге
const swiperCatalog = new Swiper('.catalog__swiper', {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },

    navigation: {
        nextEl: '.catalog__swiper-button-next',
        prevEl: '.catalog__swiper-button-prev',
    },

    pagination: {
        el: ".catalog__swiper-pagination",
        clickable: true,
    },
});