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

function replaceImage(e) {
	if (e.target == firstDot) {
		imageContainer.className = 'destination-image-box first';
	}
	if (e.target == secondDot) {
		imageContainer.className = 'destination-image-box';
	}
	if (e.target == lastDot) {
		imageContainer.className = 'destination-image-box last';
	}
}

ellipseContainer.addEventListener('click', toggleEllipse);
ellipseContainer.addEventListener('click', replaceImage);


// Replace destination image on 410px resolution and add listener on arrow


let firstImage = document.querySelectorAll('.destination-image')[0];
let secondImage = document.querySelectorAll('.destination-image')[1];
let lastImage = document.querySelectorAll('.destination-image')[2];



function takeResolution () {
	let windowWidth = document.documentElement.clientWidth;
	if (windowWidth < 411) {
		firstImage.src = "./assets/mobile/mobile_destination-image1.jpg";
		secondImage.src = "./assets/mobile/mobile_destination-image2.jpg";
		lastImage.src = "./assets/mobile/mobile_destination-image3.jpg";
	}
}
setInterval (takeResolution, 500)



// Arrow replace image
let rightArrow = document.querySelector('.rightArrow');
let leftArrow = document.querySelector('.leftArrow');

function replaceImgRight(e) {
	if (leftArrow.classList.contains('inactiveArrow')) {
		leftArrow.classList.toggle('inactiveArrow');
	}
	if (imageContainer.classList.contains('first')) {
		imageContainer.className = 'destination-image-box';
		firstDot.classList.remove('active');
		secondDot.classList.add('active');
		return
	}

	if (!imageContainer.classList.contains('first') && !imageContainer.classList.contains('last')) {
		imageContainer.className = 'destination-image-box last';
		secondDot.classList.remove('active');
		lastDot.classList.add('active');
		rightArrow.classList.toggle('inactiveArrow');
	}
}
function replaceImgLeft(e) {
	if (rightArrow.classList.contains('inactiveArrow')) {
		rightArrow.classList.toggle('inactiveArrow');
	}

	if (imageContainer.classList.contains('last')) {
		imageContainer.className = 'destination-image-box';
		lastDot.classList.remove('active');
		secondDot.classList.add('active');
		return
	}

	if (!imageContainer.classList.contains('first') && !imageContainer.classList.contains('last')) {
		imageContainer.className = 'destination-image-box first';
		secondDot.classList.remove('active');
		firstDot.classList.add('active');
		leftArrow.classList.toggle('inactiveArrow');
	}

}
function desktopImgClick() {
	if (imageContainer.classList.contains('first')) {
		replaceImgRight();
	}
	if (imageContainer.classList.contains('last')) {
		replaceImgLeft();
	}
}
rightArrow.addEventListener('click', replaceImgRight);
leftArrow.addEventListener('click', replaceImgLeft);

firstImage.addEventListener('click', replaceImgLeft);
secondImage.addEventListener('click', desktopImgClick);
lastImage.addEventListener('click', replaceImgRight);


