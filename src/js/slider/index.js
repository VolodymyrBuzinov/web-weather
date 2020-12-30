import './js/lazy'

import inputSearchValue from './js/input'

import btnClick from './js/btn'
// import * as basicLightbox from 'basiclightbox'
import './css/style.css'
import './css/main.css'
import refs from './js/refs'
import bigImg from './js/bigImg'


refs.inputSearch.addEventListener('input', _.debounce(inputSearchValue, 1000));

// refs.btn.addEventListener('click', btnClick)

// refs.form.addEventListener('click', bigImg)
