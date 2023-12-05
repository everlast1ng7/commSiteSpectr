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
