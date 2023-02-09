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
        console.log('right', i)
        i++
        if(i > 4){
            i = 0;
        }
        console.log('right', i)
    }))
    carouselArrowLeft.addEventListener('click', (() => {
        heroCarousel.setAttribute('src',heroCarouselImg[i])
        console.log('left', i)
        i--
        if(i < 0){
            i = 4;
        }
        console.log('left', i)
    }))
}

// Sale Cards

const htmlSaleCard = ({name, price, img, oldPrice}) => {
    return`
    <div class="sale__cards">
                    <img src="${img}" class="sale__card__img" alt="${name}">
                    <div class="sale-card__content">
                        <div class="sale-card__prices">
                            <p>${oldPrice}</p>
                            <p>${price}</p>
                        </div>
                        <div class="sale-card__btns">
                            <i class="bi bi-heart-fill heart"></i>
                            <button class="btn btn--buy">Comprar</button>
                        </div>
                    </div>
                </div>
    `
}

const renderSaleCards = (games) => {
    const saleGames = games.filter(game => game.category === 'sale');
    saleContainerCards.innerHTML = saleGames.map(game => htmlSaleCard(game)).join('')
}

// Discover cards

const discoverCaterogryIcon = category => {
    return category === 'new'
    ? '<i class="bi bi-fire"></i> NEW'
    : category === 'classic'
    ? '<i class="bi bi-controller"></i> CLASSIC'
    : category === 'sale'
    ? '<i class="bi bi-alarm"></i> SALE'
    : '<i class="bi bi-award"></i> POPULAR'
}

const htmlDiscoverCard = ({name, price, img, category}) => {
    return `
    <div class="discover__card">
                    <img src="${img}" class="discover__card__img" alt="${name}">
                    <div class="discover__card__middle">
                        <i class="bi bi-heart-fill heart"></i>
                        <p>${price}</p>
                    </div>
                    <div class="discover__card__bottom">
                        <p class="discover__card--${category}">${discoverCaterogryIcon(category)}</p>
                        <button class="btn">Comprar</button>
                    </div>
                </div>
    `
}

let btns = [...discoverBtns];
discoverCardsContainer.innerHTML = gameList.filter(game => game.category === 'new').map(game => htmlDiscoverCard(game)).join('')
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
        }
    }))
})



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

    

}

init();