const navbar = document.querySelector('.nav-links');
const barIcon = document.querySelector('.bars-icon');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

barIcon.addEventListener('click', () => {
    navbar.classList.toggle('nav-active');
    overlay.classList.toggle('visible');
    body.classList.toggle('un-scrollable');
});
