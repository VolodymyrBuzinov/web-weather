import refs from '../refs';
import swal from 'sweetalert';
// import { reject } from 'core-js/fn/promise';

const BASE_URL = 'https://api.weatherapi.com/v1';
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
      
      swal('Ups', 'Information not found, or empty request', 'error');      
      return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=Ukraine`).then(res => res.json());
    });
  }

  fetchThreeDaysWeather(searchQuery) {
    const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${searchQuery}&days=3`;
    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }    
      
      swal('Ups', 'Information not found, or empty request', 'error');
      return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=Kiev&days=3`).then(res => res.json())
    });
  }
}
