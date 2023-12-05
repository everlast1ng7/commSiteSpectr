const cardListButtons = document.querySelectorAll('.cardButton');
const cardButtons = Array.from(cardListButtons);


const DISTANCE_CONTROLLER = {
    name: 'ПУЛЬТ ДИСТАНЦИОННОГО УПРАВЛЕНИЯ',
    mainImage: '/assets/card-distance-controller.webp',
    describe: 'Пульт дистанционного управления может использоваться совместно с импульсными рентгеновскими аппаратами. Позволяет осуществлять включение и выключение рентгеновского излучения с расстояния до 30 метров. Может быть добавлен в комплект при приобретении нового аппарата. Для этого надо уведомить наш отдел сбыта. Если вы хотите добавить ПДУ к уже находящемуся у вас в эксплуатации аппарату, потребуется прислать нам пульт управления для доработки (рентгеновский блок присылать не надо) . Также в комплект к ПДУ может быть заказан гибкий кабель длиной 5 метров. В отличие от штатного 30-метрового кабеля, кабель, входящий в комплект к ПДУ, обладает повышенной гибкостью, в том числе, в зимних условиях.',
}

const dataById = {
    DISTANCE_CONTROLLER: DISTANCE_CONTROLLER,
}

cardButtons.forEach((cardButton) => {
    cardButton.addEventListener('click', (e) => {
        // console.log(window.location);
        const host = window.location.host;
        const path = '/accesCardTemplate.html';
        const id = e.target.id;
        const product = dataById[id];
        const params = {
            name: product.name,
            mainImage: product.mainImage,
            describe: product.describe,
        }
        const url = `${path}?${new URLSearchParams(params)}`;
        window.location.replace(url);
    })
})
