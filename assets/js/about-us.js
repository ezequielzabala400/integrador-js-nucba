


const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar');
const overlay = document.getElementById('overlay')

toggleMenu.addEventListener('click', (() => {
    navbar.classList.toggle('navbar--active')
    overlay.classList.toggle('overlay')
}))

overlay.addEventListener('click', ((e) => {
    if(!e.target.classList.contains('overlay')) return;
    overlay.classList.remove('overlay')
    navbar.classList.remove('navbar--active')
}))
