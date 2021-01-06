import refs from './refs';
import HeaderLogic from './header/headerLogic';
import mapsMarkup from '../templates/maps.hbs';
import MyMap from './maps/maps';
import SliderLogic from './slider/slider';
import FetchNews from './news/fetchNews';
import AppendNewsMarkup from './news/appendNewsMarkup';

const headerLogic = new HeaderLogic();
const myMap = new MyMap();
const sliderLogic = new SliderLogic();
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
  if (evt.target.getAttribute('href') === "/news") {
    const { main } = refs;
    main.innerHTML = "";
    const fetchNews = new FetchNews();
    const appendNewsMarkup = new AppendNewsMarkup(main, fetchNews);
}
  if (evt.target.classList.contains('header-button')) {
    const location = window.location.href.split('/');
    if (location[location.length - 1] === 'photo') {
      sliderLogic.inputSearchValue(refs.headerInput.value)
    }    
    if (location[location.length - 1] !== 'maps') {
      return;
    }
    myMap.codeAddress();
    }
    if (evt.target.getAttribute('href') === "/photo") {
      sliderLogic.inputSearchValue(refs.headerInput.value)
    }  
})
 mainRefs.main.addEventListener('click', evt => {
  if (evt.target.dataset.layer) {
    evt.preventDefault();
    myMap.eventListenerOnButtons(evt);
  }
  if (evt.target.getAttribute('class') !== "photo") {
    evt.preventDefault();       
  }
 })

$(window).on('load', function () {
  history.pushState(null, null, `/`)
  var $preloader = $('#page-preloader'),
       $spinner  = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});