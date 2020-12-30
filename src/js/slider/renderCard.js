import refs from '../refs'
import hend from '../../handlebars/ulHendel.hbs'
import slider from './slider'

export default function renderCard(resul) {
  const markup = hend(resul);
  refs.body.insertAdjacentHTML('beforeend', markup);
  slider();
}