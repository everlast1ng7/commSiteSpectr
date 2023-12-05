const params = new  URLSearchParams(window.location.search);

const name = params.get('name');
const mainImage = params.get('mainImage');
const diameter_tubes = params.get('diameter_tubes');
const set_weight = params.get('set_weight');
const stopping_accuracy = params.get('stopping_accuracy');
const max_slope = params.get('max_slope');
const dimensions = params.get('dimensions');
const describe = params.get('describe');
const documentation = params.get('documentation');


const card_name = document.querySelector('.card__block_info-title');
const card_mainImage = document.querySelector('.main_image');
const card_diameter_tubes = document.querySelector('.diameter_tubes');
const card_set_weight = document.querySelector('.set_weight');
const card_stopping_accuracy = document.querySelector('.stopping_accuracy');
const card_max_slope = document.querySelector('.max_slope');
const card_dimensions = document.querySelector('.dimensions');
const card_describe = document.querySelector('.describe');
const card_documentation = document.querySelector('.documentation');


card_name.innerHTML = name;
card_mainImage.src = mainImage;
card_diameter_tubes.innerHTML = diameter_tubes;
card_set_weight.innerHTML = set_weight;
card_stopping_accuracy.innerHTML = stopping_accuracy;
card_max_slope.innerHTML = max_slope;
card_dimensions.innerHTML = dimensions;
card_describe.innerHTML = describe;
card_documentation.innerHTML = documentation;

// const utils = JSON.parse(document.querySelector('utils'));


const xmark = document.querySelectorAll('.xmark');
const names = document.querySelectorAll('.name');

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const xmarkArray = Array.from(this.getElementsByClassName('xmark'));
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      xmarkArray[0].style.transform = 'rotate(0deg)';
      // xmarkArray[0].classList.add('xmarkDeactive');
    } else {
      xmarkArray[0].style.transform = 'rotate(45deg)';
      panel.style.maxHeight = panel.scrollHeight + "px";
      // xmarkArray[0].classList.add('xmarkActive');
    }
  });
}

