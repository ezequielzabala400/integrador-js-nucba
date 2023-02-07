const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar')
const toggleCart = document.getElementById('toggle-cart');
const cartMenu = document.querySelector('.cart-menu');





function init(){
    // Menu Hamburguesa
    toggleMenu.addEventListener('click', () => {
        navbar.classList.toggle('navbar--active')
    })
    // Cart
    toggleCart.addEventListener('click', (() => {
        cartMenu.classList.toggle('cart-menu--active')
    }))
}

init();