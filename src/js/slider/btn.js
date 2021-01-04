import refs from '../refs'
import apiService from './apiService'
import renderCard from './renderCard'

 export default function btnClick () { 
  apiService.inputValue(refs.search.value ).then(e => {
      renderCard(e.hits)
    scrollTo(0, (refs.clientHeight + pageYOffset - 60))
  })
}