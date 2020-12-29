const sliderMyCalls = function () {
  let position = 0;
  const slidesToShow = 4;
  const slidesToScroll = 1;
  const container = document.querySelector('.js-custom-slider-container');
  const track = document.querySelector('.js-custom-slider');
  const items = document.querySelectorAll('.myCalls__item');
  const btnPrev = document.querySelector('.js-btn-prev');
  const btnNext = document.querySelector('.js-btn-next');
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach(item => {
    item.style.minWidth = `${itemWidth - 20}px`;
  });

  btnNext.addEventListener('click', () => {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disablet = position === 0;
    btnNext.disablet = position <= -(itemsCount - slidesToShow) * itemWidth;
  };
  checkBtns();
};
const sliderFavourites = function () {
  let position = 0;
  const slidesToShow = 4;
  const slidesToScroll = 1;
  const container = document.querySelector(
    '.js-custom-slider-container__favourites',
  );
  const track = document.querySelector('.js-custom-slider__favourites');
  const items = document.querySelectorAll('.myFavourites__item');
  const btnPrev = document.querySelector('.js-btn-prev__favourites');
  const btnNext = document.querySelector('.js-btn-next__favourites');
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach(item => {
    item.style.minWidth = `${itemWidth - 20}px`;
  });

  btnNext.addEventListener('click', () => {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disablet = position === 0;
    btnNext.disablet = position <= -(itemsCount - slidesToShow) * itemWidth;
  };
  checkBtns();
};

export { sliderMyCalls, sliderFavourites };
