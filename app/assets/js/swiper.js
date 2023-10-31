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

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        1023: {
            slidesPerView: 4,
        },
    },
});

// Слайдер в каталоге
if (window.innerWidth > 550) {
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

        breakpoints: {
            // 320: {
            //     slidesPerView: 2,
            //     slidesPerGroup: 2,
            //     direction: "vertical",
            // },
            550: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
            },
            1279: {
                slidesPerView: 4,
            },
        },
    });
}