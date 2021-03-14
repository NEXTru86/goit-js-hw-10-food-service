import cardMenuTpl from './templates/cards.hbs';
import cards from './menu.json';
console.log(cards)
import './styles.css';

const cardsMenuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMenu(cards);

cardsMenuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMenu(cards) {

    return cards.map(cardMenuTpl).join('');

}