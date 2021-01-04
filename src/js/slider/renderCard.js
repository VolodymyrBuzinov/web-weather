import refs from '../refs'
import hend from '../../handlebars/ulHendel.hbs'






export default function renderCard(resul) {
  const markup = hend(resul);
  refs.body.insertAdjacentHTML('beforeend', markup);
}


