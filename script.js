const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.header-wrapp ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
})