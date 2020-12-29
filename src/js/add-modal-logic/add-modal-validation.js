import refs from './refs';

const { imageList } = refs;

export default function (form) {
  let error = 0;
  let formReq = form.querySelectorAll('._req');

  const price = document.querySelector('._price');
  const errorPriceBlock = document.querySelector('.error-price');

  errorPriceBlock.classList.remove('visible');
  for (let i = 0; i < formReq.length; i++) {
    const element = formReq[i];
    element.nextElementSibling.classList.remove('visible');

    //валидация имени
    if (element.classList.contains('_name')) {
      if (element.value.length <= 3 || element.value.length >= 15) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
      // formdata.append('title', `${element.value}`);
    } else if (element.classList.contains('_description')) {
      //валтдация описания

      if (element.value.length <= 5) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_phone')) {
      //валидация номера телефона

      if (phoneValidate(element)) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_category')) {
      //сопоставляем цену и категорию

      let value = element.options[element.selectedIndex].value;

      if ((value === 'work' || value === 'for-free') && price.value !== '0') {
        errorPriceBlock.classList.add('visible');
      }
      //валидация категории

      if (element.value === 'category') {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (element.classList.contains('_price')) {
      //валидация цены

      if (
        (!Number(element.value) && Number(element.value) !== 0) ||
        element.value === ''
      ) {
        element.nextElementSibling.classList.add('visible');
        error += 1;
      }
    } else if (imageList.children.length < 2 || imageList.children.length > 5) {
      //валидация списка картинок

      element.nextElementSibling.classList.add('visible');
      error += 1;
    }
  }
  return error;
}

function phoneValidate(element) {
  return !/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(element.value);
}
