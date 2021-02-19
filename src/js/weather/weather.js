import refs from '../refs';
import swal from 'sweetalert';
// import { reject } from 'core-js/fn/promise';

const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = 'cffa5817950747edab2212245200112';

export default class WeatherApi {
  constructor() {}

  fetchUkraineWeather() {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=Ukraine`;
    return fetch(url).then(res => res.json());
  }

  fetchSearchWeather(searchQuery) {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${searchQuery}`;
    
    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }     
      refs.main.innerHTML = '';
      swal('Ups', 'Information not found, or empty request', 'error');      
      return Promise.reject(new Error('Ups', 'Information not found, or empty request', 'error'));
    });
  }

  fetchThreeDaysWeather(searchQuery) {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${searchQuery}&days=3`;
    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }      
      refs.main.innerHTML = '';
      swal('Ups', 'Information not found, or empty request', 'error');
      return Promise.reject(new Error('Ups', 'Information not found, or empty request', 'error'));
    });
  }
}
