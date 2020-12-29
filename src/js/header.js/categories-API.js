const { error, success, alert } = require('@pnotify/core');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import links from './links';
import { sliderMyCalls, sliderFavourites } from './custom-slider-for-cabinet';
import favouritesCalls from '../../templates/favourites/favourites-and-myCalls.hbs';
import { fillTheForm } from '../edit-modal-logic/edit-modal-open';
import renderMain from '../pagination/render';
import { openCardModal } from '../card-modal/appendCardModal'

export default class CategoriesApi {
  constructor(query) {
    this.query = query;
  }

  onHome() {
    return fetch('https://callboard-backend.herokuapp.com/call?page=1')
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.pagginationSection.classList.remove('is-hidden');
        links.pagButtons.classList.remove('is-hidden');
        renderMain(result);
        return result;
      })
      .catch(error => console.log('error', error));
  }

  onSales() {
    return fetch('https://callboard-backend.herokuapp.com/call/specific/sales')
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }

  onRecreationAndSport() {
    return fetch(
      'https://callboard-backend.herokuapp.com/call/specific/recreationAndSport',
    )
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }

  onFree() {
    return fetch('https://callboard-backend.herokuapp.com/call/specific/free')
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }

  onbusinessAndServices() {
    return fetch(
      'https://callboard-backend.herokuapp.com/call/specific/businessAndServices',
    )
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }
  onWork() {
    return fetch(`https://callboard-backend.herokuapp.com/call/specific/work`)
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }
  onTransport() {
    return fetch(
      'https://callboard-backend.herokuapp.com/call/specific/transport',
    )
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }
  onElectronics() {
    return fetch(
      'https://callboard-backend.herokuapp.com/call/specific/electronics',
    )
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }
  onTrade() {
    return fetch('https://callboard-backend.herokuapp.com/call/specific/trade')
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }
  onProperty() {
    return fetch(
      'https://callboard-backend.herokuapp.com/call/specific/property',
    )
      .then(response => response.json())
      .then(result => {
        links.myCabinetSection.classList.add('is-hidden');
        links.cardSection.classList.remove('is-hidden');
        links.pagButtons.classList.add('is-hidden');
        return result;
      })
      .catch(error => console.log('error', error));
  }
  inCabinet() {
    var myHeaders = new Headers();
    let storageToken = sessionStorage.getItem('token');
    myHeaders.append('Authorization', storageToken);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    return fetch('https://callboard-backend.herokuapp.com/user', requestOptions)
      .then(response => response.json())
      .then(result => {
        result;
        if (sessionStorage['token']) {
          links.myCabinetSection.innerHTML = favouritesCalls(result);
          links.myCabinetSection.classList.remove('is-hidden');
          links.pagginationSection.classList.add('is-hidden');
          links.cardSection.classList.add('is-hidden');
          links.pagButtons.classList.add('is-hidden');
          links.seacrhSection.classList.add('is-hidden');
        }
        
        // Удаление с избранных
        const myFavouritesList = document.querySelector('.js-favourites__list');
        const deleteFavourites = function (evt) {
          if (evt.target.tagName === 'use') {
            const accessToken = sessionStorage.getItem('token');
            var myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${accessToken}`);
            const id = evt.target.dataset.id;           
            var requestOptions = {
              method: 'DELETE',
              headers: myHeaders,
              redirect: 'follow',
            };
            fetch(
              `https://callboard-backend.herokuapp.com/call/favourite/${id}`,
              requestOptions,
            )
              .then(response => response.json())
              .then(result => {
                success({
                  title: 'Видалено з обраного, перезавантажте сторінку!',
                  delay: 1500,
                });
                return result;
              })
              .catch(error => console.log('error', error));
          }
        };

        myFavouritesList.addEventListener('click', deleteFavourites);
        //вешаем кастомный слайдер
        sliderMyCalls();
        sliderFavourites();

        // Заполнение формы для измененния
        const myCallsContainer = document.querySelector('.myCalls__list');
        myCallsContainer.addEventListener('click', e => {         
          fillTheForm(e.target.dataset);
        });
         const custom = document.querySelector('.js-favourites__list');
        custom.addEventListener('click', evt => {         
          openCardModal(evt);
        })
        return result;
      })
      .catch(error => console.log('error', error));
  }
  onError() {
    error({
      title: 'Невірна адреса сторінки!!!',
      delay: 1500,
    });
  }
}
