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
	if( e.key === 'Escape' && menuButton.classList.contains('active') ) {
		toggleMenu();
	}
}

menuButton.addEventListener('click', toggleMenu);

burgerMenuClose.addEventListener('click', toggleMenu);

burgerMenuBg.addEventListener( 'click', toggleMenuBg)

document.addEventListener('keydown', escapeMenu);




