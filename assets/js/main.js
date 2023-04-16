const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar')
const toggleCart = document.getElementById('toggle-cart');
const cartMenu = document.querySelector('.cart-menu');
const bubbleCart = document.querySelector('.cart-bubble');
const overlay = document.getElementById('overlay');

const carouselArrowLeft = document.getElementById('hero__carousel--arrow-left');
const carouselArrowRight = document.getElementById('hero__carousel--arrow-right');
const heroCarousel = document.querySelector('.hero__carousel__img');

const saleContainerCards = document.querySelector('.sale-container');

const discoverBtns = document.querySelectorAll('.btn--discover');
const discoverCardsContainer = document.querySelector('.discover-cards-container');

const productsContainer = document.querySelector('.cart-menu__products');
const buyCartBtn = document.getElementById('buyCart');
const deleteAllBtn = document.getElementById('deleteAll');
const totalPrice = document.getElementById('total');
const emptyText = document.querySelector('.empty-cart-text');

// cart

let productsList = JSON.parse(localStorage.getItem('products')) || [];


const saveProductsToLocalStorage = productsList => {
    localStorage.setItem('products', JSON.stringify(productsList))
}

const saveValueToLocalStorage = value =>{
    localStorage.setItem('total', JSON.stringify(value))
}

const showBubbleNumber = productsList => {
    if(productsList.length < 1){
        bubbleCart.setAttribute('hidden', 'true');
    }else{
        bubbleCart.removeAttribute('hidden');
        bubbleCart.textContent = productsList.length;
    }
}

const productCartHTML = (product) => {
    return `
    <div class="cart-menu__products__item">
                        <div class="product__item__info">
                            <i class="bi bi-trash delete" data-id="${product.name}"></i>
                            <img src="${product.img}" alt="${product.name}" title="${product.name}" class="product__item__img">
                            <p class="product__item__title" title="${product.name}">${product.name}</p>
                        </div>
                        <div class="product__item__btns">
                            
                            <div class="product__options">
                                <label for="">Seleccione su plataforma</label>
                                <select name="" id="">
                                    <option value="">Steam</option>
                                    <option value="">Epic</option>
                                    <option value="">Ubisoft</option>
                                    <option value="">Origin</option>
                                    <option value="">GOG</option>
                                </select>
                            </div>
                        </div>
                    </div>
    `
}

const renderProducts = productsList => {
    productsContainer.innerHTML = productsList.map(product => productCartHTML(product)).join('')
    totalPrice.innerHTML = formatPrice(price)
}

let price = JSON.parse(localStorage.getItem('total')) || 0;

const addGameToCart = (gameList, btn) => {
    const gameFinded = gameList.find(game => game.name === btn.dataset.name)
    if(productsList.some(product => product.name === gameFinded.name)){
        alertify.alert('El juego ya esta en el carrito').set('closable', false)
        return;
    }
    price += gameFinded.price;
    totalPrice.innerHTML = formatPrice(price);
    productsList.push(gameFinded);
    renderProducts(productsList);
    saveProductsToLocalStorage(productsList);
    saveValueToLocalStorage(price);
    showEmptyText(productsList);
    showBubbleNumber(productsList);
}

const deleteProduct = (e) =>{
    if(!e.target.classList.contains('delete')) return
    alertify.confirm('¿Eliminar el producto del carrito?').set('onok', () => {
        const productDelete = productsList.find(product => product.name === e.target.dataset.id)
    price = price - productDelete.price
    totalPrice.innerHTML = formatPrice(price)
    productsList = productsList.filter(product => product !== productDelete)
    renderProducts(productsList)
    saveProductsToLocalStorage(productsList)
    saveValueToLocalStorage(price);
    showEmptyText(productsList);
    showBubbleNumber(productsList);
    });
    
}


const deleteAllProducts = () => {
    alertify.confirm('¿Vaciar todo el carrito?').set('onok', (() => {
        productsList = [];
        renderProducts(productsList);
        price = 0;
        totalPrice.innerHTML = formatPrice(price);
        saveProductsToLocalStorage(productsList);
        saveValueToLocalStorage(price);
        showEmptyText(productsList);
        showBubbleNumber(productsList);
    }) );
}


// Hero Carousel

let heroCarouselImg = [
    './assets/img/carousel-hero/carousel-img-1.jpg',
    './assets/img/carousel-hero/carousel-img-2.jpg',
    './assets/img/carousel-hero/carousel-img-3.jpg',
    './assets/img/carousel-hero/carousel-img-4.jpg',
    './assets/img/carousel-hero/carousel-img-5.jpg'
]

const carouselSlider = () => {
    let i = 0;
    heroCarousel.setAttribute('src',heroCarouselImg[i])
    setInterval(() => {
        heroCarousel.classList.add('hero__carousel__img--fade')
        i++;
        if(i > 4){
            i = 0;
        }
        heroCarousel.setAttribute('src',heroCarouselImg[i])
        setTimeout(() => {
            heroCarousel.classList.remove('hero__carousel__img--fade')
        }, 500)
    }, 2000)
    carouselArrowRight.addEventListener('click', ((e) => {
        e.stopImmediatePropagation();
        heroCarousel.classList.add('hero__carousel__img--fade')
        i++
        if(i > 4){
            i = 0;
        }
        heroCarousel.setAttribute('src',heroCarouselImg[i])
        setTimeout(() => {
            heroCarousel.classList.remove('hero__carousel__img--fade')
        }, 500)
    }))
    carouselArrowLeft.addEventListener('click', (() => {
        heroCarousel.classList.add('hero__carousel__img--fade')
        i--
        if(i < 0){
            i = 4;
        }
        heroCarousel.setAttribute('src',heroCarouselImg[i])
        setTimeout(() => {
            heroCarousel.classList.remove('hero__carousel__img--fade')
        }, 500)
    }))
}

// Sale Cards

const renderSaleCards = games => {
    const saleGames = games.filter(game => game.category === 'sale');
    saleContainerCards.innerHTML = saleGames.map(game => htmlSaleCard(game)).join('')
}


// WishList
const findWishGame = (element) => gameList.find(game => game.name === element.dataset.id)


const heartBtn = () => {
    const heartBtns = document.querySelectorAll('.heart');

    heartBtns.forEach(heart => {
        if(wishGamesList.some(game => game.name === heart.dataset.id)){
            heart.classList.add('heart--active')
        }
    heart.addEventListener('click', (e) => {
        if(!e.target.classList.contains('heart--active')){
            e.target.classList.add('heart--active')

            const findedGame = findWishGame(e.target)
            if(wishGamesList.some(game => game.name == findedGame.name)){
                //alert('El juego ya esta en la lista de deseados')
                return;
            }else{
                wishGamesList.push(findedGame)
                saveWishGamesToLocalStorage(wishGamesList)
            }
        }else alertify.alert('El juego ya esta en la lista de deseados').set('closable', false)
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
            renderSaleCards(gameList)
            heartBtn()
            let btns = [];
            const buyBtns = document.querySelectorAll('.btn--buy')
            btns = [...buyBtns]
            btns.forEach(btn => btn.addEventListener('click', ((e) => addGameToCart(gameList, e.target))))
        }
        
    }))
    
})
    
}

const showEmptyText = productsList => {
    if(!productsList.length){
        emptyText.classList.add('show')
    }else{
        emptyText.classList.remove('show')
    }
}



function init(){
    // Menu Hamburguesa
    toggleMenu.addEventListener('click', () => {
        if(cartMenu.classList.contains('cart-menu--active')){
            cartMenu.classList.remove('cart-menu--active')
            navbar.classList.toggle('navbar--active')
            return;
        }
        navbar.classList.toggle('navbar--active')
        overlay.classList.toggle('overlay')
    })
    // Cart
    toggleCart.addEventListener('click', (() => {
        if(navbar.classList.contains('navbar--active')){
            navbar.classList.remove('navbar--active')
            cartMenu.classList.toggle('cart-menu--active')
            return;
        }
        cartMenu.classList.toggle('cart-menu--active')
        overlay.classList.toggle('overlay')
        
    }))

    showBubbleNumber(productsList)

    overlay.addEventListener('click', hiddeOverlay)

    buyCartBtn.addEventListener('click', (() => {
        alertify.confirm('¿Finalizar compra?').set('onok', () => {
            if(price === 0){
                alertify.alert().set('message', 'El carrito esta vacío').show(); 
                return;
            }
            productsList = [];
            price = 0
            totalPrice.innerHTML = formatPrice(price);
            saveValueToLocalStorage(price)
            saveProductsToLocalStorage(productsList)
            renderProducts(productsList)
            showEmptyText(productsList)
            showBubbleNumber(productsList)
            setTimeout(() => {
                alertify.alert().set('message', 'Gracias por la compra :D').show(); 
            }, 100)
        });
    }))

    productsContainer.addEventListener('click', deleteProduct)

    deleteAllBtn.addEventListener('click', deleteAllProducts)

    showEmptyText(productsList)

    renderProducts(productsList)

    // Carousel
    carouselSlider()
    // Sale Games
    renderSaleCards(gameList)

    // Discover Games
    document.addEventListener('DOMContentLoaded', (() => {
        selectBtnsCategory()
        const buyBtns = document.querySelectorAll('.btn--buy');
        buyBtns.forEach((btn) => {
            btn.addEventListener('click', ((e) => {
                addGameToCart(gameList, e.target)
            }))
        })
    }))

}

init();