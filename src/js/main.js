import refs from './refs';
import HeaderLogic from './header/headerLogic';
import mapsMarkup from '../templates/maps.hbs';
import MyMap from './maps/maps';
import SliderLogic from './slider/slider';
import darkTheme from './maps/mapThemeDark.json';
import FetchNews from './news/fetchNews';
import AppendNewsMarkup from './news/appendNewsMarkup';
import WeatherLogic from './weather/weatherLogic';
import './header/theme-switch';

const headerLogic = new HeaderLogic();
const myMap = new MyMap();
const sliderLogic = new SliderLogic();
const fetchNews = new FetchNews();
const weatherLogic = new WeatherLogic();

const mainRefs = {
  body: document.querySelector('body'),
  header: document.querySelector('.header'),
  main: document.querySelector('.main'),
};
mainRefs.header.addEventListener('click', evt => {
  evt.preventDefault();
  headerLogic.historyApi(evt);
  headerLogic.searchQuery(evt);

  if (evt.target.getAttribute('href') === '/forecast') {
    mainRefs.main.innerHTML = '';
    weatherLogic.renderThreeDaysWeather();
  }

  if (evt.target.getAttribute('href') === '/maps') {
    var $preloader = $('#page-preloader'),
      $spinner = $preloader.find('.spinner');
    $spinner[0].style.display = 'block';
    $preloader[0].style.display = 'block';

    $spinner.delay(500).fadeOut();
    $preloader.delay(500).fadeOut('slow');

    mainRefs.main.innerHTML = '';
    mainRefs.main.innerHTML = mapsMarkup();
    myMap.initializeMap(darkTheme);
    myMap.codeAddress();
  }
  if (evt.target.getAttribute('href') === '/news') {
    const { main } = refs;
    main.innerHTML = '';
    const appendNewsMarkup = new AppendNewsMarkup(main, fetchNews);
  }

  if (evt.target.classList.contains('header-button')) {
    const location = window.location.href.split('/');
    if (location[location.length - 1] === 'photo') {
      sliderLogic.inputSearchValue(refs.headerInput.value);
    }
    if (location[location.length - 1] === 'maps') {
      myMap.codeAddress();
      return;
    }
    if(location[location.length - 1] === 'forecast') {
      mainRefs.main.innerHTML = '';
      weatherLogic.renderSearchWeather();
    }
    if(location[location.length - 1] === '') {
      mainRefs.main.innerHTML = '';
      weatherLogic.renderSearchWeather();
    }
  }

  if (evt.target.getAttribute('href') === '/photo') {
    sliderLogic.inputSearchValue(refs.headerInput.value);
  }

  if (evt.target.getAttribute('href') === '/') {
    mainRefs.main.innerHTML = '';
    weatherLogic.renderSearchWeather();
  } 
});
mainRefs.main.addEventListener('click', evt => {
  if (evt.target.dataset.layer) {
    evt.preventDefault();
    myMap.eventListenerOnButtons(evt);
  }

  // if (evt.target.getAttribute('class') !== 'photo') {
  //   evt.preventDefault();
  // }
});

window.addEventListener('load', function () {  
  history.pushState(null, null, `/`);
  var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  $preloader.delay(500).fadeOut('slow');
  weatherLogic.renderWeather();  
  
  
  if (localStorage.getItem('LIGHT')) {
    mainRefs.body.classList.add('light-theme');
    const switcher = document.querySelector('.switcher')
    switcher.checked = true;
  }
});
