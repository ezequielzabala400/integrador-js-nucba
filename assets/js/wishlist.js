const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar')
const toggleCart = document.getElementById('toggle-cart');
const cartMenu = document.querySelector('.cart-menu');

const wishlistContainer = document.querySelector('.wishlist-container');

const HtmlWishGame = ({name, img}) => {
    return`
    <li>
                    <div class="wish-game">
                        <div class="wish-game__title">
                            <img src=".${img}" width="100" alt="">
                            <p>${name}</p>
                        </div>
                        <div class="wish-game__btns">
                            <i class="bi bi-trash" data-name="${name}" data-id="delete"></i>
                            <button class="btn"><a href="../index.html">Comprar</a></button>
                        </div>
                    </div>
                </li>
    `
}

const renderWishGames = wishGamesList => {
        wishlistContainer.innerHTML = wishGamesList.map(game => HtmlWishGame(game)).join('')
}

const deleteWishGame = (wishGamesList) => {
    wishlistContainer.addEventListener('click', ((e) => {
            if(e.target.dataset.id === 'delete'){
                if(window.confirm('Desea eliminar el juego de la lista?')){
                console.log(e.target.dataset.name)
                
                wishGamesList = wishGamesList.filter(game => game.name !== e.target.dataset.name)
                
                renderWishGames(wishGamesList)
                saveWishGamesToLocalStorage(wishGamesList)
                alert('El juego se ha eliminado de la lista')
                }else return
            }
        
    }))
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
    
    renderWishGames(wishGamesList)

    deleteWishGame(wishGamesList)

}

init();