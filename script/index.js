const menuButton = document.querySelector('.header-burger-btn');
const burgerMenuBg = document.querySelector('.burger-menu-bg');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuClose = document.querySelector('.burger-menu-close');

function toggleMenu() {
    menuButton.classList.toggle('active');
    burgerMenuBg.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMenu);

burgerMenuClose.addEventListener('click', toggleMenu);

burgerMenuBg.addEventListener( 'click', (clickTarget) => {
	const menuClick = clickTarget.composedPath().includes(burgerMenu);
 
	if (!menuClick) {
		toggleMenu();
	}
})

document.addEventListener('keydown', function(e) {
	if( e.key === 'Escape' && menuButton.classList.contains('active') ){
		toggleMenu();
	}
});




