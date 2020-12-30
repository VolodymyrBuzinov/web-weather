import Swiper from 'swiper/bundle';
export default function onSlider() {
  document.querySelectorAll('.swiper-container').forEach(function (elem) {
    	new Swiper('.swiper-container', {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
}