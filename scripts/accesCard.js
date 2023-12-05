const params = new  URLSearchParams(window.location.search);

const name = params.get('name');
const mainImage = params.get('mainImage');
const describe = params.get('describe');



const card_name = document.querySelector('.card__block_info-title');
const card_mainImage = document.querySelector('.main_image');
const card_describe = document.querySelector('.describe');



card_name.innerHTML = name;
card_mainImage.src = mainImage;
card_describe.innerHTML = describe;


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

