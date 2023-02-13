


const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar');

toggleMenu.addEventListener('click', (() => {
    navbar.classList.toggle('navbar--active')
}))
