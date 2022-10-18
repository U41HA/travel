let menuButton = document.querySelector('.header-burger-btn');
let burgerMenu = document.querySelector('.burger-menu')

menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})

burgerMenu.addEventListener('click', function(){
    menuButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})
