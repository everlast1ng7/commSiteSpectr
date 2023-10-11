// const main_image = document.querySelector('.main_image img');
// const image = document.querySelectorAll('.image img');
// const imageArr = Array.from(image);
// console.log(imageArr);


// imageArr.forEach((img) => {
//     img.addEventListener('click', (e) => {
//         main_image.src = e.target.src;
//     })
// })

console.log(window.location);

// const params = location.search
// .slice(1)
// .split('&')
// .map(p => p.split('='))
// .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

// console.log(params);

const params = new  URLSearchParams(window.location.search);

const a = params.get('a');
const arr = params.get('arr');
const obj = params.get('obj');
console.log(a);
console.log(JSON.parse(obj));
arr.forEach((item) => {
    console.log(JSON.parse(item));
});





















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

