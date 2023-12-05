// ----------------------popup_consultation------------------------

const popup_consultation = document.querySelector('.popup_consultation');
const closeBtn = document.querySelector('.close_consultation');
const myButtonList = document.querySelectorAll('.btn_consultation');
let myButtons = Array.from(myButtonList);

myButtons.forEach((myButton) => {
    myButton.addEventListener('click', (e) => {
        popup_consultation.classList.add('show');
      });
})

closeBtn.addEventListener('click', (e) => {
  popup_consultation.classList.remove('show');
});
// ----------------------popup_consultation------------------------