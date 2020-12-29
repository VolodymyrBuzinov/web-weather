import refs from './cardModalRefs.js';
import { throttle, delay, debounce } from 'lodash';
import { onFavourite } from '../card/card';

let priсe = 10;

try {
  window.addEventListener('load', () => {
    const lists = document.querySelectorAll('.js-card-open');
    const qq = document.querySelector('.pagination-div')
qq.addEventListener('click', openCardModal)
    lists.forEach(list => {
      list.addEventListener('click', openCardModal);
      list.addEventListener('click', onFavourite);
    });
  });
} catch (error) {
  // console.log("Проблема з додаванням слухача на <body>: ", error);
}

function openCardModal(e) {  
  if (e.target.tagName !== 'LI') {
    return;
  }
  const {
    category,
    description,
    title,
    price,
    phone,
    id,
    images,
  } = e.target.dataset;
  // console.log(category, description, title, price, phone, id, images);
  try {
    refs.title.textContent = title;
    refs.phone.textContent = phone;
    refs.infoButton.textContent = `- на OLX з 12 груд. 2020р.`; //${порахована дата від реєстрації}
    refs.description.textContent = description;
    refs.price.textContent = `${price} грн`;
  } catch (error) {
    // console.log("Проблема з вставкою",error)
  }

  e.preventDefault();
  refs.parent.classList.toggle('is-open');
  refs.bigImage.src = images.split(',')[0];

  document.querySelector('.card-modal__image-tumbnail').src = images;

  const checkImgSrc = () => {
    refs.bigImage.onerror = function () {
      refs.bigImage.setAttribute(
        'alt',
        'Проблема із зображенням: невірний формат або недійсне посилання.',
      );
    };
  };

  checkImgSrc();
  document.querySelector('body').classList.add('hidden');
  refs.overlay.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      closeCardModal(e);
    }
  });
  refs.closeSVG.addEventListener('click', closeCardModal);
}

document.onkeydown = e => {
  if (e.keyCode === 27) {
    refs.parent.classList.remove('is-open');
  }
};

function closeCardModal(e) {
  e.preventDefault();
  document.querySelector('body').classList.remove('hidden');
  refs.parent.classList.remove('is-open');
}

export { openCardModal };