import refs from './refs';
import HeaderLogic from './header/headerLogic';
import mapsMarkup from '../templates/maps.hbs';
import MyMap from './maps/maps';

const headerLogic = new HeaderLogic();
const myMap = new MyMap();
const mainRefs = {
  header: document.querySelector('.header'),
  main: document.querySelector('.main'),
};
mainRefs.header.addEventListener('click', evt => {
  evt.preventDefault();
  headerLogic.historyApi(evt);
  headerLogic.searchQuery(evt);

  if (evt.target.getAttribute('href') === '/maps') {
    mainRefs.main.innerHTML = '';
    mainRefs.main.innerHTML = mapsMarkup();
    myMap.initializeMap();
    myMap.codeAddress();
  }

  if (evt.target.classList.contains('header-button')) {
    const location = window.location.href.split('/');
    if (location[location.length - 1] !== 'maps') {
      return;
    }
    myMap.codeAddress();
  }
});

mainRefs.main.addEventListener('click', evt => {
  if (evt.target.dataset.layer) {
    evt.preventDefault();

    myMap.eventListenerOnButtons(evt);
  }
});
