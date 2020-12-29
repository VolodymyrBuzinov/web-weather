import slider from '../category/slider';
const renderDiv = document.querySelector('.pagination-div');
import hendelDiv from '../../templates/pagination/paginationDiv.hbs';

export default function renderDi(resul) {
  renderDiv.innerHTML = '';
  const markup = hendelDiv(resul);
  renderDiv.insertAdjacentHTML('afterbegin', markup);
  slider();
}
