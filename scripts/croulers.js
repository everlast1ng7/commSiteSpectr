const template_croulers = document.querySelector('.catalog-template_croulers');

const catalog_scroll_content = document.querySelector('.catalog_scroll-content');
const compare_croulers = document.querySelector('.compare_croulers');

const catalog_pop_up = document.querySelector('.catalog_pop_up');
const catalog_xmark_pop_up = document.querySelector('.catalog_xmark-pop-up');

const chekboxesList = document.querySelectorAll('.custom-checkbox');
let chekboxes = Array.from(chekboxesList);

const comparePopover = document.querySelector('.compare-popover');
const popover_template = document.querySelector('.popover_template');
const compare_popover__list = document.querySelector('.compare-popover__list');

const catalog__wrapper_chekbox = document.querySelectorAll('.catalog__wrapper_chekbox');
let chekbox_btns = Array.from(catalog__wrapper_chekbox);

const bodyAll = document.querySelector('body');

const croulers = {
    sirena_5: {
        image: '/assets/crouler_sirena-5.webp',
        name: 'КРОЛУЕР СИРЕНА-5',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        diameter_tubes: '530-1020 мм',
        set_weight: '60кг',
        stopping_accuracy: '10±мм',
        max_slope: '20 град',
        dimensions: '1250х360х300'
    }
}

let arrayDifference = [];

chekbox_btns.forEach((chekbox_btn) => {
    chekbox_btn.addEventListener('click', (e) => {
        if (e.target.id) {
            if (e.target.checked) {
                const data = croulers[e.target.id];
                const element_popover = popover_template.content.cloneNode(true);
                const popover_row_container = element_popover.children[0];
                popover_row_container.dataset.id = e.target.id;
                const popover_list_img = element_popover.querySelector('.popover_list-img');
                const popover_list_name = element_popover.querySelector('.popover_list-name');
    
                popover_list_img.src = data.image;
                popover_list_name.innerHTML = data.name;
    
                compare_popover__list.append(element_popover);
            } else {
                const deleteTemplateElement = compare_popover__list.querySelector(`[data-id="${e.target.id}"]`);
                deleteTemplateElement.remove();
            }
        } 
    });
    chekbox_btn.addEventListener('mouseenter', (e) => {
        comparePopover.style.display = 'block';
        const compareCheckboxCoords = chekbox_btn.getBoundingClientRect();
        comparePopover.style.top = `${compareCheckboxCoords.bottom + window.scrollY}px`;
        comparePopover.style.left = `${compareCheckboxCoords.left}px`;
      });
      
      chekbox_btn.addEventListener('mouseleave', () => {
        comparePopover.style.display = 'none';
      });
});

comparePopover.addEventListener('mouseenter', () => {
    comparePopover.style.display = 'block';
});

comparePopover.addEventListener('mouseleave', () => {
    comparePopover.style.display = 'none';
});

compare_croulers.addEventListener('click', (e) => {
    catalog_pop_up.style.display = 'flex';

    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
      });
    
    bodyAll.style.overflow = 'hidden';

    chekboxes.forEach((chekbox) => {
        if (chekbox.checked) {
            arrayDifference.push(croulers[chekbox.id]);
        } 
    })

    arrayDifference.forEach((item) => {
        const element = template_croulers.content.cloneNode(true);
        const image = element.querySelector('.catalog_template-image');
        const name = element.querySelector('.template_name_title');
        const register = element.querySelector('.singleRegister');
        const diameter_tubes = element.querySelector('.diameter_tubes');
        const set_weight = element.querySelector('.set_weight');
        const stopping_accuracy = element.querySelector('.stopping_accuracy');
        const max_slope = element.querySelector('.max_slope');
        const dimensions = element.querySelector('.dimensions');


        image.src = item.image;
        name.innerHTML = item.name;
        register.innerHTML = item.register;
        diameter_tubes.innerHTML = item.diameter_tubes;
        set_weight.innerHTML = item.set_weight;
        stopping_accuracy.innerHTML = item.stopping_accuracy;
        max_slope.innerHTML = item.max_slope;
        dimensions.innerHTML = item.dimensions;

        catalog_scroll_content.append(element);

        const popup_consultation = document.querySelector('.popup_consultation');
        const closeBtn = document.querySelector('.close_consultation');
        const myButtonList = document.querySelectorAll('.btn_consultation');
        let myButtons = Array.from(myButtonList);

        myButtons.forEach((myButton) => {
            console.log(myButton);
                myButton.addEventListener('click', (e) => {
                    popup_consultation.classList.add('show');
                });
            })

            closeBtn.addEventListener('click', (e) => {
            popup_consultation.classList.remove('show');
        });
      })
})

catalog_xmark_pop_up.addEventListener('click', (e) => {
	catalog_pop_up.style.display = 'none';
    chekboxes.forEach((chekbox) => {
        chekbox.checked = false;
    })
    arrayDifference.splice(0, arrayDifference.length);
    catalog_scroll_content.innerHTML = "";
    compare_popover__list.innerHTML = "";
    bodyAll.style.overflow = 'visible';
})
