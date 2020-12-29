import '../../sass/main.scss';
import cardTpl from '../../templates/card.hbs';
import '../../images/sprite/symbol-defs.svg';
import CategoriesApi from '../header.js/categories-API';
import onPost from './PostFavourite';

const newCaregoriesApi = new CategoriesApi();
const card__listRef = document.querySelector('.card__list');
const priceRef = document.querySelector('.card__price');
const saleRef = document.querySelector('.card__sale');

newCaregoriesApi.onWork().then(resul => renderCard(resul));
newCaregoriesApi.onRecreationAndSport().then(resul => renderCard(resul));
newCaregoriesApi.onbusinessAndServices().then(resul => renderCard(resul));
newCaregoriesApi.onTransport().then(resul => renderCard(resul));
newCaregoriesApi.onElectronics().then(resul => renderCard(resul));
newCaregoriesApi.onTrade().then(resul => renderCard(resul));
newCaregoriesApi.onProperty().then(resul => renderCard(resul));

function renderCard(resul) {
  card__listRef.innerHTML = '';  
  if (resul.isOnSale) {
    saleRef.classList.remove('.isHidden');
    priceRef.innerHTML(resul.oldPrice);
  }

  const card = cardTpl(resul);
  card__listRef.insertAdjacentHTML('beforeend', card);
}

card__listRef.addEventListener('click', onFavourite);
const qq = document.querySelector('.pagination-div')
qq.addEventListener('click', onFavourite)

function onFavourite(event) {
  event.preventDefault;
  if (event.target.tagName === 'svg') {
    const favId = event.target.dataset;
    onPost(favId.id);
    event.target.classList.add('check');
  }
}

export { onFavourite };
