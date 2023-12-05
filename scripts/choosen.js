const template = document.querySelector('.catalog-template');

const catalog_scroll_content = document.querySelector('.catalog_scroll-content');
const compare = document.querySelector('.compare');

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

const defectoscops = {
    mart_200: {
        image: '/assets/def_per_card-1.webp',
        name: 'МАРТ-200',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '105-200 кВ',
        focal_spot: '2,0 мм',
        dose_size: '3 Р',
        anode_current: '0,5 мА',
        radiation_output: '140 град',
        max_anode_power: '100 Вт',
        emitter_mass: '6 кг',
        emitter_dimensions: '430х100х160',
        transil_method: 'направленный / псевдопанорамный',
        column_first: '20 мм',
        column_second: '30 мм',
        column_third: '40 мм'
    },
    mart_250: {
        image: '/assets/def_per_card-2.webp',
        name: 'МАРТ-250',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '130-250 кВ',
        focal_spot: '0,8 x 1,2 мм',
        dose_size: '5 Р',
        anode_current: '0,8 мА',
        radiation_output: '-',
        max_anode_power: '200 Вт',
        emitter_mass: '9 кг',
        emitter_dimensions: '580х140х190',
        transil_method: 'направленный',
        column_first: '30 мм',
        column_second: '40 мм',
        column_third: '50 мм'
    },
    arina_1: {
        image: '/assets/arina-1.webp',
        name: 'АРИНА-1',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '180 кВ',
        focal_spot: '3 мм',
        dose_size: '500 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '8,9 кг',
        emitter_dimensions: '530х125х210',
        transil_method: 'панорамный',
        column_first: '-',
        column_second: '15 мм',
        column_third: '25 мм'
    },
    arina_3: {
        image: '/assets/arina-3.webp',
        name: 'АРИНА-3',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '180 кВ',
        focal_spot: '3 мм',
        dose_size: '600 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '5,5 кг',
        emitter_dimensions: '410х112х210',
        transil_method: 'панорамный',
        column_first: '15 мм',
        column_second: '20 мм',
        column_third: '30 мм'
    },
    arina_7: {
        image: '/assets/arina-7.webp',
        name: 'АРИНА-7',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '250 кВ',
        focal_spot: '2,5 мм',
        dose_size: '1000 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '7,9 кг',
        emitter_dimensions: '525х140х220',
        transil_method: 'направленный / панорамный',
        column_first: '20 мм',
        column_second: '25 мм',
        column_third: '40 мм'
    },
    arina_9: {
        image: '/assets/arina-9.webp',
        name: 'АРИНА-9',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '300 кВ',
        focal_spot: '2,5 мм',
        dose_size: '1200 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '8,1 кг',
        emitter_dimensions: '525х140х220',
        transil_method: 'направленный / панорамный',
        column_first: '25 мм',
        column_second: '30 мм',
        column_third: '50 мм'
    },
    pamir_200: {
        image: '/assets/pamir-200.webp',
        name: 'ПАМИР-200',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '200 кВ',
        focal_spot: '3 мм',
        dose_size: '600 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '5 кг',
        emitter_dimensions: '405х114х210',
        transil_method: 'панорамный',
        column_first: '15 мм',
        column_second: '20 мм',
        column_third: '30 мм'
    },
    pamir_250: {
        image: '/assets/pamir-250.webp',
        name: 'ПАМИР-250',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '250 кВ',
        focal_spot: '2,5 мм',
        dose_size: '1200 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '7,9 кг',
        emitter_dimensions: '470х112х225',
        transil_method: 'панорамный',
        column_first: '25 мм',
        column_second: '35 мм',
        column_third: '45 мм'
    },
    pamir_300: {
        image: '/assets/pamir-300.webp',
        name: 'ПАМИР-300',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '300 кВ',
        focal_spot: '2,5 мм',
        dose_size: '1500 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '8 кг',
        emitter_dimensions: '470х150х230',
        transil_method: 'панорамный',
        column_first: '30 мм',
        column_second: '40 мм',
        column_third: '50 мм'
    },
    arina_3m: {
        image: '/assets/arina-3m.webp',
        name: 'АРИНА-3М',
        register: 'Аппарат включен в Единый Реестр МТР ПАО «Газпром»',
        work_voltage: '160 кВ',
        focal_spot: '3 мм',
        dose_size: '400 мР',
        anode_current: '-',
        radiation_output: '-',
        max_anode_power: '-',
        emitter_mass: '6 кг',
        emitter_dimensions: '465х205х120',
        transil_method: 'панорамный',
        column_first: '-',
        column_second: '15 мм',
        column_third: '-'
    }
};

let arrayDifference = [];


chekbox_btns.forEach((chekbox_btn) => {
    chekbox_btn.addEventListener('click', (e) => {
        console.log(e.target.id);
        if (e.target.id) {
            if (e.target.checked) {
                const data = defectoscops[e.target.id];
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

compare.addEventListener('click', (e) => {
    catalog_pop_up.style.display = 'flex';

    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
      });
    
    bodyAll.style.overflow = 'hidden';

    chekboxes.forEach((chekbox) => {
        if (chekbox.checked) {
            arrayDifference.push(defectoscops[chekbox.id]);
        } 
    })

    arrayDifference.forEach((item) => {
        const element = template.content.cloneNode(true);

        const image = element.querySelector('.catalog_template-image');
        const name = element.querySelector('.template_name_title');
        const register = element.querySelector('.singleRegister');
        const work_voltage = element.querySelector('.work_voltage');
        const focal_spot = element.querySelector('.focal_spot');
        const dose_size = element.querySelector('.dose_size');
        const anode_current = element.querySelector('.anode_current');
        const radiation_output = element.querySelector('.radiation_output');
        const max_anode_power = element.querySelector('.max_anode_power');
        const emitter_mass = element.querySelector('.emitter_mass');
        const emitter_dimensions = element.querySelector('.emitter_dimensions');
        const transil_method = element.querySelector('.transil_method');
        const column_first = element.querySelector('.column_first');
        const column_second = element.querySelector('.column_second');
        const column_third = element.querySelector('.column_third');

         
        image.src = item.image;
        name.innerHTML = item.name;
        register.innerHTML = item.register;
        work_voltage.innerHTML = item.work_voltage;
        focal_spot.innerHTML = item.focal_spot;
        dose_size.innerHTML = item.dose_size;
        anode_current.innerHTML = item.anode_current;
        radiation_output.innerHTML = item.radiation_output;
        max_anode_power.innerHTML = item.max_anode_power;
        emitter_mass.innerHTML = item.emitter_mass;
        emitter_dimensions.innerHTML = item.emitter_dimensions;
        transil_method.innerHTML = item.transil_method;
        column_first.innerHTML = item.column_first;
        column_second.innerHTML = item.column_second;
        column_third.innerHTML = item.column_third;

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
});



catalog_xmark_pop_up.addEventListener('click', (e) => {
	catalog_pop_up.style.display = 'none';
    const chekboxesList = document.querySelectorAll('.custom-checkbox');
    let chekboxes = Array.from(chekboxesList);
    chekboxes.forEach((chekbox) => {
        chekbox.checked = false;
    })
    arrayDifference.splice(0, arrayDifference.length);
    catalog_scroll_content.innerHTML = "";
    compare_popover__list.innerHTML = "";
    bodyAll.style.overflow = 'visible';
});



