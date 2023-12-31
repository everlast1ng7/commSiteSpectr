const cardListButtons = document.querySelectorAll('.cardButton');
const cardButtons = Array.from(cardListButtons);


const ARINA_1 = {
    name: 'ИМПУЛЬСНЫЙ ДЕФЕКТОСКОП АРИНА-1',
    mainImage: '/assets/card-arina-1-img-1.webp',
    firstImage: '/assets/card-arina-1-img-2.webp',
    secondImage: '/assets/card-arina-1-img-3.webp',
    thirdImage: '/assets/card-arina-1-img-4.webp',
    fourImage: '/assets/card-arina-1-img-5.webp',
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
    column_third: '25 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы АРИНА-1 основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512. Угол выхода рентгеновского излучения составляет около 150 градусов, что позволяет делать псевдопанорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Аппарат рентгеновский импульсный наносекундный автономный АРИНА-1 ТУ 4276-008-00511769-2010 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000 Сертификат соответствия ГОСТ Р: РОСС RU С-RU.СП28.В.00011/21',
    managementDoc: '',
    miniName: 'АРИНА-1',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const ARINA_3 = {
    name: 'ИМПУЛЬСНЫЙ ДЕФЕКТОСКОП АРИНА-3',
    mainImage: '/assets/card-arina-3-img-1.webp',
    firstImage: '/assets/card-arina-3-img-2.webp',
    secondImage: '/assets/card-arina-3-img-3.webp',
    thirdImage: '/assets/card-arina-3-img-4.webp',
    fourImage: '/assets/card-arina-3-img-1.webp',
    work_voltage: '180 кВ',
    focal_spot: '3 мм',
    dose_size: '600 мР',
    anode_current: '-',
    radiation_output: '-',
    max_anode_power: '-',
    emitter_mass: '5,5 кг',
    emitter_dimensions: '410х112х210',
    transil_method: 'панорамный',
    column_first: '15',
    column_second: '20 мм',
    column_third: '30 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы АРИНА-3 основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512. Угол выхода рентгеновского излучения составляет около 150 градусов, что позволяет делать псевдопанорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Аппарат рентгеновский импульсный наносекундный автономный АРИНА-3 ТУ 4276-008-00511769-2010 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'АРИНА-3',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const ARINA_7 = {
    name: 'ИМПУЛЬСНЫЙ ДЕФЕКТОСКОП АРИНА-7',
    mainImage: '/assets/card-arina-7-img-1.webp',
    firstImage: '/assets/card-arina-7-img-2.webp',
    secondImage: '/assets/card-arina-7-img-3.webp',
    thirdImage: '/assets/card-arina-7-img-4.webp',
    fourImage: '/assets/card-arina-7-img-1.webp',
    work_voltage: '250 кВ',
    focal_spot: '2,5 мм',
    dose_size: '1000 мР',
    anode_current: '-',
    radiation_output: '-',
    max_anode_power: '-',
    emitter_mass: '7,9 кг',
    emitter_dimensions: '525х140х220',
    transil_method: 'направленный / панорамный',
    column_first: '20',
    column_second: '25 мм',
    column_third: '40 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы АРИНА-7 основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512. Угол выхода рентгеновского излучения составляет около 180 градусов, что позволяет делать панорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации: Аппарат рентгеновский импульсный наносекундный автономный АРИНА-7 ТУ 4276-008-00511769-2010 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'АРИНА-7',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const ARINA_9 = {
    name: 'ИМПУЛЬСНЫЙ ДЕФЕКТОСКОП АРИНА-9',
    mainImage: '/assets/card-arina-9-img-1.webp',
    firstImage: '/assets/card-arina-9-img-2.webp',
    secondImage: '/assets/card-arina-9-img-3.webp',
    thirdImage: '/assets/card-arina-9-img-4.webp',
    fourImage: '/assets/card-arina-9-img-1.webp',
    work_voltage: '300 кВ',
    focal_spot: '2,5 мм',
    dose_size: '1200 мР',
    anode_current: '-',
    radiation_output: '-',
    max_anode_power: '-',
    emitter_mass: '8,1 кг',
    emitter_dimensions: '525х140х220',
    transil_method: 'направленный / панорамный',
    column_first: '25',
    column_second: '30 мм',
    column_third: '50 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы АРИНА-9 основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512. Угол выхода рентгеновского излучения составляет около 180 градусов, что позволяет делать панорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации: Аппарат рентгеновский импульсный наносекундный автономный АРИНА-9 ТУ 4276-007-00511769-2009 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'АРИНА-9',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const PAMIR_200 = {
    name: 'ИМПУЛЬСНЫЙ ДЕФЕКТОСКОП ПАМИР-200',
    mainImage: '/assets/card-pamir-200-img-1.webp',
    firstImage: '/assets/card-pamir-200-img-2.webp',
    secondImage: '/assets/card-pamir-200-img-3.webp',
    thirdImage: '/assets/card-pamir-200-img-4.webp',
    fourImage: '/assets/card-pamir-200-img-1.webp',
    work_voltage: '200 кВ',
    focal_spot: '3 мм',
    dose_size: '600 мР',
    anode_current: '-',
    radiation_output: '-',
    max_anode_power: '-',
    emitter_mass: '5 кг',
    emitter_dimensions: '405х114х210',
    transil_method: 'панорамный',
    column_first: '15',
    column_second: '20 мм',
    column_third: '30 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы ПАМИР-200 основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512. Угол выхода рентгеновского излучения составляет около 150 градусов, что позволяет делать псевдопанорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации: Переносной аппарат малогабаритный импульсный рентгеновский ПАМИР-200 ТУ 4276-009-00511769-2012 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'ПАМИР-200',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const PAMIR_250 = {
    name: 'ИМПУЛЬСНЫЙ ДЕФЕКТОСКОП ПАМИР-250',
    mainImage: '/assets/card-pamir-250-img-1.webp',
    firstImage: '/assets/card-pamir-250-img-2.webp',
    secondImage: '/assets/card-pamir-250-img-3.webp',
    thirdImage: '/assets/card-pamir-250-img-4.webp',
    fourImage: '/assets/card-pamir-250-img-1.webp',
    work_voltage: '250 кВ',
    focal_spot: '2,5 мм',
    dose_size: '1200 мР',
    anode_current: '-',
    radiation_output: '-',
    max_anode_power: '-',
    emitter_mass: '7,9 кг',
    emitter_dimensions: '470х112х225',
    transil_method: 'панорамный',
    column_first: '25',
    column_second: '35 мм',
    column_third: '45 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы ПАМИР-250 основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512 Угол выхода рентгеновского излучения составляет около 180 градусов, что позволяет делать панорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Переносной аппарат малогабаритный импульсный рентгеновский ПАМИР-250 ТУ 4276-009-00511769-2012 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'ПАМИР-250',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const PAMIR_300 = {
    name: 'ИМПУЛЬСНЫЙ ДЕФЕКТОСКОП ПАМИР-300',
    mainImage: '/assets/card-pamir-300-img-1.webp',
    firstImage: '/assets/card-pamir-300-img-2.webp',
    secondImage: '/assets/card-pamir-300-img-3.webp',
    thirdImage: '/assets/card-pamir-300-img-4.webp',
    fourImage: '/assets/card-pamir-300-img-1.webp',
    work_voltage: '300 кВ',
    focal_spot: '2,5 мм',
    dose_size: '1500 мР',
    anode_current: '-',
    radiation_output: '-',
    max_anode_power: '-',
    emitter_mass: '8 кг',
    emitter_dimensions: '470х150х230',
    transil_method: 'панорамный',
    column_first: '30',
    column_second: '40 мм',
    column_third: '50 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы ПАМИР-300 основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512. Угол выхода рентгеновского излучения составляет около 180 градусов, что позволяет делать панорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Переносной аппарат малогабаритный импульсный рентгеновский ПАМИР-300 ТУ 4276-009-00511769-2012 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'ПАМИР-300',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const MART_200 = {
    name: 'ДЕФЕКТОСКОП МАРТ-200',
    mainImage: '/assets/card-mart-200-img-1.webp',
    firstImage: '/assets/card-mart-200-img-2.webp',
    secondImage: '/assets/card-mart-200-img-3.webp',
    thirdImage: '/assets/card-mart-200-img-4.webp',
    fourImage: '/assets/card-mart-200-img-5.webp',
    work_voltage: '105-200 кВ',
    focal_spot: '2 мм',
    dose_size: '3 Р',
    anode_current: '0.5 мА',
    radiation_output: '140 град',
    max_anode_power: '100 Вт',
    emitter_mass: '6 кг',
    emitter_dimensions: '430х100х160',
    transil_method: 'направленный / псведопанорамный',
    column_first: '20',
    column_second: '30 мм',
    column_third: '40 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Дефектоскоп МАРТ-200 основан на принципе генерации рентгеновского излучения путем использования термоэмиссионной рентгеновской трубки с постоянным напряжением на аноде. Регулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания широкого диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 1 по ГОСТ 7512. Торцевой выход излучения позволяет использовать дефектоскоп в труднодоступных местах, где затруднительно разместить аппарат с боковым выходом. Без использования коллиматора угол выхода рентгеновского излучения составляет около 140 градусов, что позволяет делать псевдопанорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Аппарат рентгеновский переносной дефектоскопический МАРТ-200 ТУ 4276-010-00511769-2013 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'МАРТ-200',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const MART_250 = {
    name: 'ДЕФЕКТОСКОП МАРТ-250',
    mainImage: '/assets/card-mart-250-img-1.webp',
    firstImage: '/assets/card-mart-250-img-2.webp',
    secondImage: '/assets/card-mart-250-img-3.webp',
    thirdImage: '/assets/card-mart-250-img-4.webp',
    fourImage: '/assets/card-mart-250-img-1.webp',
    work_voltage: '130-250 кВ',
    focal_spot: '0.8x1.2 мм',
    dose_size: '5 Р',
    anode_current: '0.8 мА',
    radiation_output: '140 град',
    max_anode_power: '200 Вт',
    emitter_mass: '9 кг',
    emitter_dimensions: '580х140х190',
    transil_method: 'направленный',
    column_first: '30',
    column_second: '40 мм',
    column_third: '50 мм',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Дефектоскоп МАРТ-250 основан на принципе генерации рентгеновского излучения путем использования термоэмиссионной рентгеновской трубки с постоянным напряжением на аноде. Регулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания широкого диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 1 по ГОСТ 7512. Боковой выход излучения имеет форму конуса с углом порядка 40 градусов позволяет использовать дефектоскоп для направленных схем просвечивания. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Аппарат рентгеновский переносной дефектоскопический МАРТ-250 ТУ 4276-010-00511769-2013 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'МАРТ-250',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const ARINA_3M = {
    name: 'ДЕФЕКТОСКОП АРИНА-3М',
    mainImage: '/assets/card-arina-3m-img-1.webp',
    firstImage: '/assets/card-arina-3m-img-2.webp',
    secondImage: '/assets/card-arina-3m-img-3.webp',
    thirdImage: '/assets/card-arina-3m-img-1.webp',
    fourImage: '/assets/card-arina-3m-img-3.webp',
    work_voltage: '160 кВ',
    focal_spot: '3 мм',
    dose_size: '400 мР',
    anode_current: '0.8 мА',
    radiation_output: '140 град',
    max_anode_power: '200 Вт',
    emitter_mass: '6 кг',
    emitter_dimensions: '465х205х120',
    transil_method: 'панорамный',
    column_first: '15',
    column_second: '-',
    column_third: '-',
    whenChooseFirst: '-',
    whenChooseSecond: '-',
    whenChooseThird: '-',
    describe: 'Импульсные дефектоскопы АРИНА-3 М основаны на принципе взрывной электронной эмиссии в трубке на холодном катоде. Отличительной особенностью АРИНА-3 М является возможность полностью автономной работы без подключения к сети питания. В комплект поставки включены два быстросъемных аккумулятора, емкости каждого достаточно для 20 минут работы аппарата. Все органы управления располагаются на корпусе моноблока. Нерегулируемое напряжение на аноде рентгеновской трубки позволяет использовать дефектоскоп для просвечивания ограниченного диапазона толщин материалов. Класс чувствительности рентгеновских снимков - 2 по ГОСТ 7512. Угол выхода рентгеновского излучения составляет около 150 градусов, что позволяет делать псевдопанорамные снимки, используя боковой лепесток излучения, что также может быть полезно в труднодоступных местах. Дефектоскоп имеет рекордно малые вес и габариты, что повышает удобство его использования в полевых условиях.',
    options: '-',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Аппарат рентгеновский переносной дефектоскопический МАРТ-250 ТУ 4276-010-00511769-2013 ОКПД2: 26.51.66.125 ОКОФ (ОК 013-2014): 330.26.51.66 ТНВЭД: 9022190000',
    managementDoc: '',
    miniName: 'АРИНА-3М',
    imageAdditAccecOne: '',
    describeAdditAccecOne: '-',
    imageAdditAccecTwo: '',
    describeAdditAccecTwo: '-',
}

const dataById = {
    ARINA_1: ARINA_1,
    ARINA_3: ARINA_3,
    ARINA_7: ARINA_7,
    ARINA_9: ARINA_9,
    PAMIR_200: PAMIR_200,
    PAMIR_250: PAMIR_250,
    PAMIR_300: PAMIR_300,
    MART_200: MART_200,
    MART_250: MART_250,
    ARINA_3M: ARINA_3M,

}

cardButtons.forEach((cardButton) => {
    cardButton.addEventListener('click', (e) => {
        // console.log(window.location);
        const host = window.location.host;
        const path = '/card.html';
        const id = e.target.id;
        const product = dataById[id];
        const params = {
            name: product.name,
            mainImage: product.mainImage,
            firstImage: product.firstImage,
            secondImage: product.secondImage,
            thirdImage: product.thirdImage,
            fourImage: product.fourImage,
            fiveImage: product.fiveImage,
            work_voltage: product.work_voltage,
            focal_spot: product.focal_spot,
            dose_size: product.dose_size,
            anode_current: product.anode_current,
            radiation_output: product.radiation_output,
            max_anode_power: product.max_anode_power,
            emitter_mass: product.emitter_mass,
            emitter_dimensions: product.emitter_dimensions,
            transil_method: product.transil_method,
            column_first: product.column_first,
            column_second: product.column_second,
            column_third: product.column_third,
            whenChooseFirst: product.whenChooseFirst,
            whenChooseSecond: product.whenChooseSecond,
            whenChooseThird: product.whenChooseThird,
            describe: product.describe,
            options: product.options,
            documentation: product.documentation,
            managementDoc: product.managementDoc,
            miniName: product.miniName,
            imageAdditAccecOne: product.imageAdditAccecOne,
            describeAdditAccecOne: product.describeAdditAccecOne,
            imageAdditAccecTwo: product.imageAdditAccecTwo,
            describeAdditAccecTwo: product.describeAdditAccecTwo
        }
        const url = `${path}?${new URLSearchParams(params)}`;
        window.location.replace(url);
    })
})

