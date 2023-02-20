
const faqs = document.querySelectorAll('.faq__list__item');
const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar');
const overlay = document.getElementById('overlay')


faqs.forEach(faq => faq.addEventListener('click',(e) => {
    const arrow = faq.querySelector('i');
    const faqInfo = faq.querySelector('p');
    if(e.target.classList.contains('item__title--active')){
        e.target.classList.remove('item__title--active');
        faqInfo.setAttribute('hidden', true);
        arrow.classList.remove('arrow--active');
        return
        }
    if(e.target.classList.contains('item__title')){
        e.target.classList.add('item__title--active');
        faqInfo.removeAttribute('hidden');
        arrow.classList.add('arrow--active');
    }
}))


toggleMenu.addEventListener('click', (() => {
    navbar.classList.toggle('navbar--active')
    overlay.classList.toggle('overlay')
}))

overlay.addEventListener('click', ((e) => {
    if(!e.target.classList.contains('overlay')) return;
    overlay.classList.remove('overlay')
    navbar.classList.remove('navbar--active')
}))
