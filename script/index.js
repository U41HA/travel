const menuButton = document.querySelector('.header-burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const activeMenu = document.querySelector('.active');


menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

burgerMenu.addEventListener('click', function () {
    menuButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})



