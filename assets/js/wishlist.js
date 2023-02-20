const toggleMenu = document.getElementById('toggle-menu');
const navbar = document.querySelector('.navbar')
const toggleCart = document.getElementById('toggle-cart');
const cartMenu = document.querySelector('.cart-menu');
const overlay = document.getElementById('overlay');
const deleteAllBtn = document.querySelector('.btn--deleteAllWishGames');
const emptyText = document.querySelector('.empty-list');

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
                alertify.confirm('Desea eliminar el juego de la lista?').set('onok', () => {
                    wishGamesList = wishGamesList.filter(game => game.name !== e.target.dataset.name)
                
                    renderWishGames(wishGamesList)
                    saveWishGamesToLocalStorage(wishGamesList)
                    showEmptyText(wishGamesList)
                    showDeleteBtn(wishGamesList)
                    setTimeout(() => {
                        alertify.alert('El juego se ha eliminado de la lista').set('closable', false)
                    }, 100)
                })
            }
        
    }))
}

const deleteAllGames = (wishGamesList) => {
    alertify.confirm('¿Eliminar todos los juegos de la lista?').set('onok', (() => {
        wishGamesList = [];
        renderWishGames(wishGamesList)
        saveWishGamesToLocalStorage(wishGamesList)
        deleteAllBtn.classList.remove('show')
        showEmptyText(wishGamesList);
    }));
}

const showDeleteBtn = (wishGamesList) => {
    if(wishGamesList.length){
        deleteAllBtn.classList.add('show')
    }else{
        deleteAllBtn.classList.remove('show')
    }
}

const showEmptyText = (wishGamesList) => {
    if(!wishGamesList.length){
        emptyText.classList.add('show')
    }else{
        emptyText.classList.remove('show')
    }
}

function init(){
    // Menu Hamburguesa
    toggleMenu.addEventListener('click', () => {
        navbar.classList.toggle('navbar--active')
        overlay.classList.toggle('overlay')
    })
    overlay.addEventListener('click', hiddeOverlay)

    // WishList
    showEmptyText(wishGamesList)
    showDeleteBtn(wishGamesList)
    renderWishGames(wishGamesList)
    deleteWishGame(wishGamesList)
    deleteAllBtn.addEventListener('click', deleteAllGames)

}

init();