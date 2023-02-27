
const wishGamesList = JSON.parse(localStorage.getItem('wish-games')) || [];


const saveWishGamesToLocalStorage = (wishGamesList) => {
    localStorage.setItem('wish-games', JSON.stringify(wishGamesList));
}

// Sale card html
const htmlSaleCard = ({name, price, img, oldPrice}) => {
    return`
    <div class="sale__cards">
                    <img src="${img}" class="sale__card__img" title="${name}" alt="${name}">
                    <div class="sale-card__content">
                        <div class="sale-card__prices">
                            <p>${oldPrice}$</p>
                            <p>${price.toFixed(2) + '$'}</p>
                        </div>
                        <div class="sale-card__btns">
                            <i class="bi bi-heart-fill heart" data-id="${name}"></i>
                            <button class="btn btn--buy" data-name="${name}">Comprar</button>
                        </div>
                    </div>
                </div>
    `
}

// discover card html
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
                    <img src="${img}" class="discover__card__img" title="${name}" alt="${name}">
                    <div class="discover__card__middle">
                        <i class="bi bi-heart-fill heart" data-id="${name}"></i>
                        <p>${price.toFixed(2) + '$'}</p>
                    </div>
                    <div class="discover__card__bottom">
                        <p class="discover__card--${category}">${discoverCaterogryIcon(category)}</p>
                        <button class="btn btn--buy" data-name="${name}">Comprar</button>
                    </div>
                </div>
    `
}

const hiddeOverlay = (e) => {
    if(!e.target.classList.contains('overlay')) return;
    overlay.classList.remove('overlay')
    navbar.classList.remove('navbar--active')
    if(!cartMenu) return;
    cartMenu.classList.remove('cart-menu--active')
}


const formatPrice = price => price.toFixed(2) + '$'

