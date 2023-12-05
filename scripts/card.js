const params = new  URLSearchParams(window.location.search);

const name = params.get('name');
const mainImage = params.get('mainImage');
const firstImage = params.get('firstImage');
const secondImage = params.get('secondImage');
const thirdImage = params.get('thirdImage');
const fourImage = params.get('fourImage');
const work_voltage = params.get('work_voltage');
const focal_spot = params.get('focal_spot');
const dose_size = params.get('dose_size');
const anode_current = params.get('anode_current');
const radiation_output = params.get('radiation_output');
const max_anode_power = params.get('max_anode_power');
const emitter_mass = params.get('emitter_mass');
const emitter_dimensions = params.get('emitter_dimensions');
const transil_method = params.get('transil_method');
const column_first = params.get('column_first');
const column_second = params.get('column_second');
const column_third = params.get('column_third');
const whenChooseFirst = params.get('whenChooseFirst');
const whenChooseSecond = params.get('whenChooseSecond');
const whenChooseThird = params.get('whenChooseThird');
const describe = params.get('describe');
const options = params.get('options');
const documentation = params.get('documentation');
const managementDoc = params.get('managementDoc');
const miniName = params.get('miniName');
const imageAdditAccecOne = params.get('imageAdditAccecOne');
const describeAdditAccecOne = params.get('describeAdditAccecOne');
const imageAdditAccecTwo = params.get('imageAdditAccecTwo');
const describeAdditAccecTwo = params.get('describeAdditAccecTwo');

const card_name = document.querySelector('.card__block_info-title');
const card_mainImage = document.querySelector('.main_image');
const card_firstImage = document.querySelector('.other_image-1');
const card_secondImage = document.querySelector('.other_image-2');
const card_thirdImage = document.querySelector('.other_image-3');
const card_fourImage = document.querySelector('.other_image-4');
const card_work_voltage = document.querySelector('.work_voltage');
const card_focal_spot = document.querySelector('.focal_spot');
const card_dose_size = document.querySelector('.dose_size');
const card_anode_current = document.querySelector('.anode_current');
const card_radiation_output = document.querySelector('.radiation_output');
const card_max_anode_power = document.querySelector('.max_anode_power');
const card_emitter_mass = document.querySelector('.emitter_mass');
const card_emitter_dimensions = document.querySelector('.emitter_dimensions');
const card_transil_method = document.querySelector('.transil_method');
const card_column_first = document.querySelector('.column_first');
const card_column_second = document.querySelector('.column_second');
const card_column_third = document.querySelector('.column_third');
const card_whenChooseFirst = document.querySelector('.whenChooseFirst');
const card_whenChooseSecond = document.querySelector('.whenChooseSecond');
const card_whenChooseThird = document.querySelector('.whenChooseThird');
const card_describe = document.querySelector('.describe');
const card_options = document.querySelector('.options');
const card_documentation = document.querySelector('.documentation');
// const card_managementDoc = document.querySelector('managementDoc');
const card_miniName = document.querySelector('.miniName');
// const card_imageAdditAccecOne = document.querySelector('imageAdditAccecOne');
// const card_describeAdditAccecOne = document.querySelector('describeAdditAccecOne');
// const card_imageAdditAccecTwo = document.querySelector('imageAdditAccecTwo');
// const card_describeAdditAccecTwo = document.querySelector('describeAdditAccecTwo');

card_name.innerHTML = name;
card_mainImage.src = mainImage;
card_firstImage.src = firstImage;
card_secondImage.src = secondImage;
card_thirdImage.src = thirdImage;
card_fourImage.src = fourImage;
card_work_voltage.innerHTML = work_voltage;
card_focal_spot.innerHTML = focal_spot;
card_dose_size.innerHTML = dose_size;
card_anode_current.innerHTML = anode_current;
card_radiation_output.innerHTML = radiation_output;
card_max_anode_power.innerHTML = max_anode_power;
card_emitter_mass.innerHTML = emitter_mass;
card_emitter_dimensions.innerHTML = emitter_dimensions;
card_transil_method.innerHTML = transil_method;
card_column_first.innerHTML = column_first;
card_column_second.innerHTML = column_second;
card_column_third.innerHTML = column_third;
card_whenChooseFirst.innerHTML = whenChooseFirst;
card_whenChooseSecond.innerHTML = whenChooseSecond;
card_whenChooseThird.innerHTML = whenChooseThird;
card_describe.innerHTML = describe;
card_options.innerHTML = options;
card_documentation.innerHTML = documentation;
// card_managementDoc.innerHTML = managementDoc;
card_miniName.innerHTML = miniName;
//  card_imageAdditAccecOne.innerHTML = ('imageAdditAccecOne;
//  card_describeAdditAccecOne.innerHTML = ('describeAdditAccecOne;
//  card_imageAdditAccecTwo.innerHTML = ('imageAdditAccecTwo;
//  card_describeAdditAccecTwo.innerHTML = ('describeAdditAccecTwo;

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

