// const catalog__sliders = document.querySelector('.catalog__sliders');
// const catalog_sliderItems = Array.from(catalog__sliders.children);

// const catalog__arrow_left = document.querySelector('.catalog__arrow-left');
// const catalog__arrow_right = document.querySelector('.catalog__arrow-right');

const clientSection = document.querySelector('.clients');
const clients_arrow_left = clientSection.querySelector('.clients_slide_arrow-left');
const clients_arrow_right = clientSection.querySelector('.clients_slide_arrow-right');
const clients_cards = clientSection.querySelector('.clients__cards');

// const images = document.querySelectorAll('.documents__sliders__slider');
// const docs_pop_up = document.querySelector('.docs-pop_up'); 
// const docs_pop_up_img = document.querySelector('.doc-pop-up-img');
// const doc_xmark_pop_up = document.querySelector('.doc-xmark-pop-up');


// ----------------------documents pop-up window------------------------
// images.forEach((item) => {
//     let documents__slidersArray = Array.from(item.children);
//     documents__slidersArray.forEach((image) => {
//         image.addEventListener('click', (e) => {
//             console.log(e.target.src);
//             docs_pop_up.style.display = 'block';
//             docs_pop_up_img.src = e.target.getAttribute('src');
//         })
//     })
// })

// doc_xmark_pop_up.addEventListener('click', (e) => {
//     docs_pop_up.style.display = 'none';
// })
// ----------------------documents pop-up window------------------------

// ----------------------max height slide------------------------

// const blocks = document.querySelectorAll('.catalog__sliders__slider'); // выбираем все блоки

// let maxHeight = 0; // задаем начальное значение максимальной высоты

// blocks.forEach(block => { // перебираем все блоки
//   const blockHeight = block.offsetHeight; // получаем высоту текущего блока
//   if (blockHeight > maxHeight) { // если высота текущего блока больше максимальной
//     maxHeight = blockHeight; // обновляем максимальную высоту
//   }
// });

// blocks.forEach(block => { // перебираем все блоки еще раз
//   block.style.height = `${maxHeight}px`; // устанавливаем максимальную высоту для каждого блока
// });

// ----------------------max height slide------------------------

// ----------------------general section slider------------------------

var general_swiper = new Swiper(".general_swiper", {
    // on: {
    //     init: function() {
    //         this.update();
    //         setEqualSlideHeight(this);
    //     },
    //     resize: function() {
    //         setEqualSlideHeight(this);
    //     }
    // },
    navigation: {
        nextEl: ".general_slider-arrow_right",
        prevEl: ".general_slider-arrow_left",
    },
    pagination: {
        el: '.general-swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    autoHeight: true,
    loop: true,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: true
    },
});
     
// ----------------------general section slider------------------------

// ----------------------bestseller slider------------------------
var bestseller_swiper = new Swiper(".bestseller_swiper", {
    // on: {
    //     init: function() {
    //         this.update();
    //         setEqualSlideHeight(this);
    //     },
    //     resize: function() {
    //         setEqualSlideHeight(this);
    //     }
    // },
    navigation: {
        nextEl: ".bestsellers__arrow-right",
        prevEl: ".bestsellers__arrow-left",
    },
    autoHeight: true,
    loop: true,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});
// ----------------------bestseller slider------------------------

// ----------------------catalog slider------------------------
var catalog_desktop_swiper = new Swiper(".desktop-catalog", {
    // on: {
    //     init: function() {
    //         this.update();
    //         setEqualSlideHeight(this);
    //     },
    //     resize: function() {
    //         setEqualSlideHeight(this);
    //     }
    // },
    navigation: {
        nextEl: ".catalog__arrow-right",
        prevEl: ".catalog__arrow-left",
    },
    // autoHeight: true,
    loop: true,
    speed: 600,
    slidesPerGroup: 1,
    slidesPerView: 2,
    // spaceBetween: 20 
});

// catalog_sliderItems.forEach((slide, index) => {
//     if(index !== 0) {
//         slide.classList.add('hidden');
//     }

//     slide.dataset.index = index;
    
//     catalog_sliderItems[0].setAttribute('catalog-data-active', '');
// });

// catalog__arrow_right.onclick = function() {
//     catalogShowNextSlide('next');
// };

// catalog__arrow_left.onclick = function() {
//     catalogShowNextSlide('prev');
// };

// function catalogShowNextSlide(direction) {
//     const currentSlide = catalog__sliders.querySelector('[catalog-data-active]');
//     const currentSlideIndex = +currentSlide.dataset.index;
//     currentSlide.classList.add('hidden');
//     currentSlide.removeAttribute('catalog-data-active');

//     let nextSlideIndex;

//     if(direction === 'next'){
//         if(currentSlideIndex + 1 === catalog_sliderItems.length) {
//             nextSlideIndex = 0;
//         } else {
//             nextSlideIndex = currentSlideIndex + 1;
//         }
//     } else if (direction === 'prev') {
//         if(currentSlideIndex === 0) {
//             nextSlideIndex = catalog_sliderItems.length - 1;
//         } else {
//             nextSlideIndex = currentSlideIndex - 1;
//         }
//     };

//     const nextSlide = catalog__sliders.querySelector(`[data-index="${nextSlideIndex}"]`);
//     nextSlide.classList.remove('hidden');
//     nextSlide.setAttribute('catalog-data-active', '');
// }
// ----------------------catalog slider------------------------

// ----------------------catalog slider mobile------------------------
var catalog_mobile_swiper = new Swiper(".catalog_swiper", {
    // on: {
    //     init: function() {
    //         this.update();
    //         setEqualSlideHeight(this);
    //     },
    //     resize: function() {
    //         setEqualSlideHeight(this);
    //     }
    // },
    navigation: {
        nextEl: ".catalog-mobile-right-arrow",
        prevEl: ".catalog-mobile-left-arrow",
    },
    pagination: {
        el: '.catalog-swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    // autoHeight: true,
    loop: true,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});
// ----------------------catalog slider mobile------------------------

// ----------------------clients slider------------------------
var clients_swiper = new Swiper(".clients_swiper", {
    breakpoints: {
        500: {
            navigation: {
                nextEl: ".clients_slide_arrow-right",
                prevEl: ".clients_slide_arrow-left",
            },
            // autoHeight: true,
            loop: true,
            speed: 500,
            effect: 'slide',
            slidesPerGroup: 4,
            slidesPerView: 4
        },
    },
    navigation: {
        nextEl: ".clients_slide_arrow-right",
        prevEl: ".clients_slide_arrow-left",
    },
    // autoHeight: true,
    loop: true,
    speed: 500,
    effect: 'slide',
    slidesPerGroup: 1,
    slidesPerView: 1
});

function showClientsCards(){
    for (let i = 1; i <= 16; i++) {
        const clients_card = document.createElement('div');
        const clients_card_img = document.createElement('img');
        clients_card.className = 'clients-card swiper-slide';
        clients_card_img.src = `./assets/clients_card-${i}.png`;
        clients_card.append(clients_card_img);
        clients_cards.append(clients_card);
    }
}

showClientsCards();

// clients_arrow_left.addEventListener('click', (e) => {
//     e.preventDefault();
//     clients_cards.scrollLeft += -320;
// })

// clients_arrow_right.addEventListener('click', (e) => {
//     e.preventDefault();
//     clients_cards.scrollLeft += 320;
// })
// ----------------------clients slider------------------------

// ----------------------documents slider------------------------

// var documents_mobile_swiper = new Swiper(".documents_swiper", {
//     breakpoints: {
//         1800: {
//             // on: {
//             //     init: function() {
//             //         this.update();
//             //         setEqualSlideHeight(this);
//             //     },
//             //     resize: function() {
//             //         setEqualSlideHeight(this);
//             //     }
//             // },
//             navigation: {
//                 nextEl: ".documents_slide_arrow-right",
//                 prevEl: ".documents_slide_arrow-left",
//             },
//             pagination: {
//                 el: '.documents-swiper-pagination',
//                 clickable: true,
//                 // dynamicBullets: true,
//             },
//             autoHeight: true,
//             loop: true,
//             speed: 800,
//             slidesPerView: 4,
//             spaceBetween: 50
//         },
//         1000: {
//             // on: {
//             //     init: function() {
//             //         this.update();
//             //         setEqualSlideHeight(this);
//             //     },
//             //     resize: function() {
//             //         setEqualSlideHeight(this);
//             //     }
//             // },
//             navigation: {
//                 nextEl: ".documents_slide_arrow-right",
//                 prevEl: ".documents_slide_arrow-left",
//             },
//             pagination: {
//                 el: '.documents-swiper-pagination',
//                 clickable: true,
//                 // dynamicBullets: true,
//             },
//             autoHeight: true,
//             loop: true,
//             speed: 500,
//             slidesPerView: 3,
//             spaceBetween: 50
//         },
//         100: {
//             // on: {
//             //     init: function() {
//             //         this.update();
//             //         setEqualSlideHeight(this);
//             //     },
//             //     resize: function() {
//             //         setEqualSlideHeight(this);
//             //     }
//             // },
//             pagination: {
//                 el: '.documents-swiper-pagination',
//                 clickable: true,
//                 // dynamicBullets: true,
//             },
//             autoHeight: true,
//             loop: true,
//             speed: 500,
//             slidesPerView: 1,
//         }
//     },
// });

// ----------------------documents slider------------------------

// ----------------------popup schema and req------------------------

const pop_up_schema = document.querySelector('.pop_up-schema');
const xmark_pop_up_schema = document.querySelector('.xmark-pop-up-schema');
const pop_up_info_schema = document.querySelector('.pop_up-info-schema');
const footer_info__buttons_schema = document.querySelector('.footer_info__buttons-schema');

const pop_up_req = document.querySelector('.pop_up-req');
const xmark_pop_up_req = document.querySelector('.xmark-pop-up-req');
const pop_up_info_req = document.querySelector('.pop_up-info-req');
const footer_info__buttons_req = document.querySelector('.footer_info__buttons-req');


function openPopUpWindow(btn, el) {
    btn.addEventListener('click', (e) => {
        el.style.display = 'flex';
    })
} 

function closePopUpWindow(el, xmark) {
    xmark.addEventListener('click', (e) => {
        el.style.display = 'none';
    })
}

openPopUpWindow(footer_info__buttons_schema, pop_up_schema);
openPopUpWindow(footer_info__buttons_req, pop_up_req);

closePopUpWindow(pop_up_schema, xmark_pop_up_schema);
closePopUpWindow(pop_up_req, xmark_pop_up_req);

// ----------------------popup schema and req------------------------


const b = document.querySelector('.section_general_slider__left_block-button_watch');

const arina_1 = {
    name: 'nikita',
    descr: 'ooooooo',
    im: 'xsaxsdw',
    utils: {
        utilsName: 'kkkkkkk'
    },
}

const dataById = {
    arina_1: arina_1,
}

b.addEventListener('click', (e) => {
    console.log(window.location);
    const host = window.location.host;
    const path = '/card.html';
    const id = e.target.id || 'arina_1';
    const product = dataById[id];
    const params = {
        name: product.name,
        descr: product.descr,
        im: product.im,
        utils: JSON.stringify(product.utils),
        // arina_1: JSON.stringify({
        //     name: '',
        //     text: '',
        //     o: '',
        // }),
        // arr: JSON.stringify([{
        //     key1: 'qqq'
        // }, {
        //     key2: 'yyy'
        // }])
    }
    const url = `${path}?${new URLSearchParams(params)}`;
    window.location.replace(url);
})

// 0) Сделать объект с продуктами
// 1) Получить id кнопки
// 2) Достаю из объекта нужный id 
// 3) Cделать поля карточки в объекте params
