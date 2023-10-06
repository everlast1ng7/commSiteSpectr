var gallery_swiper = new Swiper(".gallery_swiper", {
    breakpoints: {
        1350: {
            navigation: {
                nextEl: ".gallery__arrow-right",
                prevEl: ".gallery__arrow-left",
            },
            // pagination: {
            //     el: '.gallery-swiper-pagination',
            //     clickable: true,
            //     // dynamicBullets: true,
            // },
            autoHeight: true,
            loop: true,
            speed: 500,
            
            slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 20
        },
        100: {
            // pagination: {
            //     el: '.gallery-swiper-pagination',
            //     clickable: true,
            //     // dynamicBullets: true,
            // },
            autoHeight: true,
            loop: true,
            speed: 500,
            slidesPerView: 1,
        }
    },
    
});