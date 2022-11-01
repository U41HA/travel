// Burger Menu scripts

const menuButton = document.querySelector('.header-burger-btn');
const burgerMenuBg = document.querySelector('.burger-menu-bg');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuClose = document.querySelector('.burger-menu-close');

function toggleMenu() {
	menuButton.classList.toggle('active');
	burgerMenuBg.classList.toggle('active');
}

function toggleMenuBg(clickTarget) {
	let menuClick = clickTarget.composedPath().includes(burgerMenu);
	if (!menuClick) {
		toggleMenu();
	}
}

function escapeMenu(e) {
	if (e.key === 'Escape' && menuButton.classList.contains('active')) {
		toggleMenu();
	}
}

menuButton.addEventListener('click', toggleMenu);

burgerMenuClose.addEventListener('click', toggleMenu);

burgerMenuBg.addEventListener('click', toggleMenuBg)

document.addEventListener('keydown', escapeMenu);


//Carousel travel section

let firstDot = document.querySelector('.destination-ellipse-container').firstElementChild;
let secondDot = firstDot.nextElementSibling;
let lastDot = secondDot.nextElementSibling;
let ellipseContainer = document.querySelector('.destination-ellipse-container');
let imageContainer = document.querySelector('.destination-image-box');

secondDot.classList.add('active'); // default position

function toggleEllipse(e) {
	if (e.target.classList.contains('active')) return;

	e.target.classList.toggle('active');

	let dots = document.querySelectorAll('.destination-ellipse');
	for (let dot of dots) {
		if (e.target == dot) continue;
		if (dot.classList.contains('active')) dot.classList.toggle('active');
	}
}

ellipseContainer.addEventListener('click', toggleEllipse);

ellipseContainer.addEventListener('click', function(e) {
	if (e.target == firstDot) {
		imageContainer.className = 'destination-image-box first';
	}
	if (e.target == secondDot) {
		imageContainer.className = 'destination-image-box';
	}
	if (e.target == lastDot) {
		imageContainer.className = 'destination-image-box last';
	}
});