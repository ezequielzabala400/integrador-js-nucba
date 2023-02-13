const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar')
const toggleCart = document.getElementById('toggle-cart');
const cartMenu = document.querySelector('.cart-menu');

const carouselArrowLeft = document.getElementById('hero__carousel--arrow-left');
const carouselArrowRight = document.getElementById('hero__carousel--arrow-right');
const heroCarousel = document.querySelector('.hero__carousel__img');

const saleContainerCards = document.querySelector('.sale-container');

const discoverBtns = document.querySelectorAll('.btn--discover');
const discoverCardsContainer = document.querySelector('.discover-cards-container');

// Hero Carousel

let heroCarouselImg = [
    '../assets/img/carousel-hero/carousel-img-1.jpg',
    '../assets/img/carousel-hero/carousel-img-2.jpg',
    '../assets/img/carousel-hero/carousel-img-3.jpg',
    '../assets/img/carousel-hero/carousel-img-4.jpg',
    '../assets/img/carousel-hero/carousel-img-5.jpg'
]

const carouselSlider = () => {
    let i = 1;
    carouselArrowRight.addEventListener('click', (() => {
        heroCarousel.setAttribute('src',heroCarouselImg[i])
        i++
        if(i > 4){
            i = 0;
        }
    }))
    carouselArrowLeft.addEventListener('click', (() => {
        heroCarousel.setAttribute('src',heroCarouselImg[i])
        i--
        if(i < 0){
            i = 4;
        }
    }))
}

// Sale Cards

const renderSaleCards = games => {
    const saleGames = games.filter(game => game.category === 'sale');
    saleContainerCards.innerHTML = saleGames.map(game => htmlSaleCard(game)).join('')
}







const findWishGame = (element) => gameList.find(game => game.name === element.dataset.id)


const heartBtn = () => {
    const heartBtns = document.querySelectorAll('.heart');

    heartBtns.forEach(heart => {
        
    heart.addEventListener('click', (e) => {
        if(!e.target.classList.contains('heart--active')){
            e.target.classList.add('heart--active')
            console.log(e.target)
            const findedGame = findWishGame(e.target)
            if(wishGamesList.some(game => game.name == findedGame.name)){
                alert('El juego ya esta en la lista de deseados')
                return;
            }else{
                wishGamesList.push(findedGame)
                saveWishGamesToLocalStorage(wishGamesList)
            }
        }
    })
})
}

// Discover games

const selectBtnsCategory = () => {
    let btns = [...discoverBtns];
    discoverCardsContainer.innerHTML = gameList.filter(game => game.category === 'new').map(game => htmlDiscoverCard(game)).join('')
    heartBtn()
    btns.forEach(btn => {
        btn.addEventListener('click', ((e) => {
            const renderDiscoverCards = games => {
                const discoverSelectedGames = games.filter(game => game.category === btn.dataset.category);
                discoverCardsContainer.innerHTML = discoverSelectedGames.map(game => htmlDiscoverCard(game)).join('')
            }        
        btns.find(btn => btn.classList.contains('btn--active')).classList.remove('btn--active')
        if(!e.target.classList.contains('btn--active')){
            e.target.classList.add('btn--active')
            renderDiscoverCards(gameList)
            heartBtn()
        }
    }))
})
}



function init(){
    // Menu Hamburguesa
    toggleMenu.addEventListener('click', () => {
        navbar.classList.toggle('navbar--active')
    })
    // Cart
    toggleCart.addEventListener('click', (() => {
        cartMenu.classList.toggle('cart-menu--active')
    }))
    // Carousel
    carouselSlider();

    // Sale Games
    renderSaleCards(gameList)

    // Discover Games
    document.addEventListener('DOMContentLoaded', selectBtnsCategory)
}

init();