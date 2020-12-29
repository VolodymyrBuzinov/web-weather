import renderDi from './render';
const renderDiv = document.querySelector('.pagination-div');
const btn = document.getElementsByClassName('pagination-catigories-btn');
const cardRef = document.querySelector('.card__list');
const is_hiden = document.querySelector('.card');

export default function renLi(token) {
  let page = 1;
  let newPage = 1;
  btn[0].addEventListener('click', btn1);
  btn[1].addEventListener('click', btn2);
  btn[2].addEventListener('click', btn3);
  const URL = 'https://callboard-backend.herokuapp.com/call?page=';

  const fetchRender = fetch(`${URL}${page}`)
    .then(r => r.json())
    .then(e => {
      renderDi(e);
    });

  function btn1() {
    page = 1;
    cardRef.innerHTML = '';
    renderDiv.classList.remove('render_card');
    if (btn[1].children[0].classList.contains('active')) {
      btn[1].children[0].classList.remove('active');
    } else if (btn[2].children[0].classList.contains('active')) {
      btn[2].children[0].classList.remove('active');
    }
    btn[0].children[0].classList.add('active');
    fetch(`${URL}${page}`)
      .then(r => r.json())
      .then(e => {
        renderDi(e);
      });
  }
  function btn2() {
    page = 2;
    cardRef.innerHTML = '';
    is_hiden.classList.add('is_hiden');
    renderDiv.classList.remove('render_card');
    if (btn[0].children[0].classList.contains('active')) {
      btn[0].children[0].classList.remove('active');
    } else if (btn[2].children[0].classList.contains('active')) {
      btn[2].children[0].classList.remove('active');
    }
    btn[1].children[0].classList.add('active');
    fetch(`${URL}${page}`)
      .then(r => r.json())
      .then(e => {
        renderDi(e);
      });
  }
  function btn3() {
    page = 3;
    cardRef.innerHTML = '';
    is_hiden.classList.add('is_hiden');
    renderDiv.classList.remove('render_card');
    if (btn[0].children[0].classList.contains('active')) {
      btn[0].children[0].classList.remove('active');
    } else if (btn[1].children[0].classList.contains('active')) {
      btn[1].children[0].classList.remove('active');
    }
    btn[2].children[0].classList.add('active');
    fetch(`${URL}${page}`)
      .then(r => r.json())
      .then(e => {
        renderDi(e);
      });
  }
}
