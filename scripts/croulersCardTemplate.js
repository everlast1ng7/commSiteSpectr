const cardListButtons = document.querySelectorAll('.cardButton');
const cardButtons = Array.from(cardListButtons);


const SIRENA_5 = {
    name: 'КРОЛУЕР СИРЕНА-5',
    mainImage: '/assets/card-sirena-5-img-1.webp',
    diameter_tubes: '530-1020 мм',
    set_weight: '60кг',
    stopping_accuracy: '10±мм',
    max_slope: '20 град',
    dimensions: '1250х360х300',
    describe: 'На СИРЕНА-5 используется интеллектуальная система, которая предотвращает застревание кроулера и обеспечивает возврат из трубы в следующих случаях:  Встреча с механическим препятствием, Встреча с водным препятствием, Разрядка аккумуляторной батареи, Уклон трубы более 20°, Потеря в трубе Кроме этого, предусмотрена защита от выпадения кроулера из трубы. Комплект поставки: Самоходная тележка с двумя аккумуляторами 20 Ач, Импульсный управляющий рентгеновский аппарат, Импульсный рентгеновский аппарат АРИНА 7 или АРИНА 9, Устройство зарядки аккумулятора, Звуковой сигнализатор рентгеновского излучения, Четыре транспортировочных сумки, Комплект эксплуатационной документации',
    documentation: 'Обозначение аппарата при заказе и в конструкторской документации:Аппарат рентгеновский самоходный импульсный наносекундный СИРЕНА-5 ТУ 4276-003-00511769-2001 ОКПД2: 26.51.66.125 ТНВЭД: 9022190000',
}

const dataById = {
    SIRENA_5: SIRENA_5,
}

cardButtons.forEach((cardButton) => {
    cardButton.addEventListener('click', (e) => {
        // console.log(window.location);
        const host = window.location.host;
        const path = '/croulersCardTemplate.html';
        const id = e.target.id;
        const product = dataById[id];
        const params = {
            name: product.name,
            mainImage: product.mainImage,
            diameter_tubes: product.diameter_tubes,
            set_weight: product.set_weight,
            stopping_accuracy: product.stopping_accuracy,
            max_slope: product.max_slope,
            dimensions: product.dimensions,
            describe: product.describe,
            documentation: product.documentation
        }
        const url = `${path}?${new URLSearchParams(params)}`;
        window.location.replace(url);
    })
})
