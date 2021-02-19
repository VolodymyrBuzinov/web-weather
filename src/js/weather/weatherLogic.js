import refs from '../refs';
import countryWeatherTls from '../../templates/oneDayWeather.hbs';
import threeDaysWeatherTls from '../../templates/threeDaysWeather.hbs';
import WeatherApi from './weather';

const weather = new WeatherApi();

export default class WeatherLogic {
  constructor() {}

  renderWeather() {
    weather
      .fetchUkraineWeather()
      .then(data => {        
        this.addCountryWeatherMarkup(data);
      })
      .catch(err => console.log(err));
  }

  renderSearchWeather() {
    const searchQuery = refs.headerInput.value;

    weather
      .fetchSearchWeather(searchQuery)
      .then(data => {
        return this.addCountryWeatherMarkup(data);
      })
      .catch(error => error.message);
  }

  renderThreeDaysWeather() {
    const searchQuery = refs.headerInput.value;

    weather
      .fetchThreeDaysWeather(searchQuery)
      .then(data => {
        this.addThreeDaysWeatherMarkup(data);
      })
      .catch(error => error);
  }

  addCountryWeatherMarkup(data) {
    refs.main.insertAdjacentHTML('beforeend', countryWeatherTls(data));
  }

  addThreeDaysWeatherMarkup(data) {
    refs.main.insertAdjacentHTML('beforeend', threeDaysWeatherTls(data));
  }
}

