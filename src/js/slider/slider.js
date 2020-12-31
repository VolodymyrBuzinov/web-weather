import Swiper from 'swiper/bundle';
export default function onSlider() {
  document.querySelectorAll('.swiper-container').forEach(function (elem) {
    	new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 740px
        // 320: {
          // slidesPerView: 1,
          // spaceBetween: 10,
          // direction: 'horizontal',
        // },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          // direction: 'horizontal',
          slidesPerGroup: 2,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
          // direction: 'horizontal',
          slidesPerGroup: 3,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
}