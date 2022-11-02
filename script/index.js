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



function takeResolution() {
	let windowWidth = document.documentElement.clientWidth;
	if (windowWidth < 411) {
		firstImage.src = "./assets/mobile/mobile_destination-image1.jpg";
		secondImage.src = "./assets/mobile/mobile_destination-image2.jpg";
		lastImage.src = "./assets/mobile/mobile_destination-image3.jpg";
	} else {
		firstImage.src = "./assets/destination-image-1.png";
		secondImage.src = "./assets/destination-image-2.png";
		lastImage.src = "./assets/destination-image-3.png";
	}
}
setInterval(takeResolution, 10000)



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


// popup

let popupLogin = document.querySelector('.login.popup');
let popupSign = document.querySelector('.sign.popup');
let popupsBg = document.querySelectorAll('.popup-wrapper');
let popupLoginBg = popupsBg[0];
let popupSignBg = popupsBg[1];

let loginButton = document.querySelector('.header-button');

function togglePopupLogin() {
	popupLoginBg.classList.toggle('active');
};

function togglePopupBgLogin(clickTarget) {
	let popupClick = clickTarget.composedPath().includes(popupLogin);
	if (!popupClick) {
		togglePopupLogin();
	}
}

loginButton.addEventListener('click', togglePopupLogin);
popupLoginBg.addEventListener('click', togglePopupBgLogin);

const loginContent = popupLogin.innerHTML;
const registerContent = popupSign.innerHTML

let registerButton = document.querySelector('.login.popup-text.register').firstElementChild;

function replacePopupContentLogin() {
	popupLogin.innerHTML = loginContent;
	let registerButton = document.querySelector('.login.popup-text.register').firstElementChild;
	registerButton.addEventListener('click', replacePopupContentRegister);

	let logButton = document.querySelector('.login.popup-button.sign-in');
	logButton.addEventListener('click', sendData);

}

function replacePopupContentRegister() {
	popupLogin.innerHTML = registerContent;
	let backToLogInButton = document.querySelector('.sign.popup-text').firstElementChild;
	backToLogInButton.addEventListener('click', replacePopupContentLogin);

	let regButton = document.querySelector('.sign.popup-button.sign-in');
	regButton.addEventListener('click', sendData);
}


registerButton.addEventListener('click', replacePopupContentRegister);



// send Email and Password 

let logButton = document.querySelector('.login.popup-button.sign-in');
logButton.addEventListener('click', sendData);

let regButton = document.querySelector('.sign.popup-button.sign-in');
regButton.addEventListener('click', sendData);

function sendData() {
	let userEmail = document.querySelector('input[type = "email"]');
	let emailValue = userEmail.value;

	let userPassword = document.querySelector('input[type = "password"]');
	let passwordValue = userPassword.value;

	alert('Your Email: ' + emailValue + '\n' + 'Your password: ' + passwordValue)
}

// Account button

let accountButton = document.querySelectorAll('.burger-menu-link')[4];
accountButton.addEventListener('click', togglePopupLogin);



