let gameList = [];

class Games{
    constructor(name,price,img,category){
        this.name = name;
        this.price = price;
        this.img = img;
        this.category = category;
    }
}

const game1 = new Games('Dead Space', '7,990.00', './assets/img/cards/Discover/new/new-img-1.jpg', 'new');
gameList.push(game1);

const game2 = new Games('Undisputed', '3,149.00', './assets/img/cards/Discover/new/new-img-2.jpg', 'new');
gameList.push(game2);

const game3 = new Games('One Piece Odyssey', '6,099.00' , './assets/img/cards/Discover/new/new-img-3.jpg', 'new');
gameList.push(game3);

const game4 = new Games('Gloria Victis', '499.99', './assets/img/cards/Discover/new/new-img-4.jpg', 'new');
gameList.push(game4);

const game5 = new Games('Crysis 3 Remastered', '1,000.00', './assets/img/cards/Discover/new/new-img-5.jpg', 'new');
gameList.push(game5);

const game6 = new Games('Crysis 2 Remastered', '1,050.00', './assets/img/cards/Discover/new/new-img-6.jpg', 'new');
gameList.push(game6);

const game7 = new Games('Age of Empires II', '98.00', './assets/img/cards/Discover/classic/classic-img-1.jpg', 'classic');
gameList.push(game7);

const game8 = new Games('Rise of Nations', '100.00', './assets/img/cards/Discover/classic/classic-img-2.jpg', 'classic');
gameList.push(game8);

const game9 = new Games('Mafia', '78.00', './assets/img/cards/Discover/classic/classic-img-3.jpg', 'classic');
gameList.push(game9);

const game10 = new Games('Call of Duty 2', '120.00', './assets/img/cards/Discover/classic/classic-img-4.jpg', 'classic');
gameList.push(game10);

const game11 = new Games('Counter Strike 1.6', '60.00', './assets/img/cards/Discover/classic/classic-img-5.jpg', 'classic');
gameList.push(game11);

const game12 = new Games('Grand Theft Auto Vice City', '76.99', './assets/img/cards/Discover/classic/classic-img-6.jpg', 'classic');
gameList.push(game12);

const game13 = new Games('Grand Theft Auto IV & EFLC', '500.00', './assets/img/cards/Discover/sale/sale-img-1.jpg', 'sale');
game13.oldPrice = '1,299.00'
gameList.push(game13);

const game14 = new Games('Call of Duty Black Ops II', '576.92', './assets/img/cards/Discover/sale/sale-img-2.jpg', 'sale');
game14.oldPrice = '1,748.25'
gameList.push(game14);

const game15 = new Games('Naruto Ninja Storm 4', '299.99', './assets/img/cards/Discover/sale/sale-img-3.jpg', 'sale');
game15.oldPrice = '2,624.99'
gameList.push(game15);

const game16 = new Games('Sea of Thieves', '999.50', './assets/img/cards/Discover/sale/sale-img-4.jpg', 'sale');
game16.oldPrice = '7,999.99'
gameList.push(game16);

const game17 = new Games('Payday 2', '74.99', './assets/img/cards/Discover/sale/sale-img-5.jpg', 'sale');
game17.oldPrice = '262.49'
gameList.push(game17);

const game18 = new Games('Nioh 2 Complete Edition', '1,259.40', './assets/img/cards/Discover/sale/sale-img-6.jpg', 'sale');
game18.oldPrice = '3,673.25'
gameList.push(game18);

const game19 = new Games('Terraria', '129.99', './assets/img/cards/Discover/popular/popular-img-1.jpg', 'popular');
gameList.push(game19);

const game20 = new Games('Grand Theft Auto V', '2,000.00', './assets/img/cards/Discover/popular/popular-img-2.jpg', 'popular');
gameList.push(game20);

const game21 = new Games('Skyrim Special Edition', '1,999.00', './assets/img/cards/Discover/popular/popular-img-3.jpg', 'popular');
gameList.push(game21);

const game22 = new Games('Gang Beasts', '89.99', './assets/img/cards/Discover/popular/popular-img-4.jpg', 'popular');
gameList.push(game22);

const game23 = new Games('Red Dead Redemption II', '7,999.99', './assets/img/cards/Discover/popular/popular-img-5.jpg', 'popular');
gameList.push(game23);

const game24 = new Games('God of War', '4,199.00', './assets/img/cards/Discover/popular/popular-img-6.jpg', 'popular');
gameList.push(game24);


