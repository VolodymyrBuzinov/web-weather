import refs from './refs';

const { imageList } = refs;

export default function (form) {
  let error = 0;
  let formReq = form.querySelectorAll('._req');
  document.querySelector('#form-name').textContent = 'gv';

  const price = document.querySelector('._price');
  const errorPriceBlock = document.querySelector('._error-price');

  errorPriceBlock.classList.remove('visible');

  for (let i = 0; i < formReq.length; i++) {
    const element = formReq[i];
    // console.log(element);
    // console.log(element.nextElementSibling);
    element.nextElementSibling.classList.remove('visible');

    if (element.classList.contains('_category')) {
      //сопоставляем цену и категорию
      errorPriceBlock.classList.remove('visible');

      let value = element.options[element.selectedIndex].value;

      if ((value === 'work' || value === 'for-free') && price.value !== '0') {
        errorPriceBlock.classList.add('visible');
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
