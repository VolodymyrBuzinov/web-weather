import Swiper from 'swiper/bundle';
export default function onSlider() {
  document.querySelectorAll('.swiper-container').forEach(function (elem) {
    // console.dir(elem);
    new Swiper(elem, {
      navigation: {
        nextEl: elem.previousElementSibling.lastElementChild,
        prevEl: elem.previousElementSibling.firstElementChild,
      },
      slidesPerView: 2,
      direction: 'vertical',
      spaceBetween: 20,
      simulateTouch: false,
      touchRatio: 0,

      breakpoints: {
        // when window width is >= 740px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          direction: 'horizontal',
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
          direction: 'horizontal',
        },
      },
    });
  });
}
