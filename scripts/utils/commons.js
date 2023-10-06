const burger = document.querySelector('.burger');
const burger_menu = document.querySelector('.burger_menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

// ----------------------burger menu------------------------
burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	burger_menu.classList.toggle('active');
	overlay.classList.toggle('active'); 
	if(burger.className == 'burger active') {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'visible';
	}
})
// ----------------------burger menu------------------------