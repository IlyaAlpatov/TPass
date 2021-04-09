
const burgerOpenBtn = document.querySelector('.header__burger-open');
const burgerCloseBtn = document.querySelector('.burger__close');
const burgerContainer = document.querySelector('.header__burger-container');

burgerOpenBtn.addEventListener('click', () => {
    burgerContainer.style.top = '-30px';
});

burgerCloseBtn.addEventListener('click', () => {
    burgerContainer.style.top = 'calc(-100vh - 30px)';
});
