import refs from '../refs'
import apiService from './apiService'
import renderCard from './renderCard'
// import bigImg from './js/bigImg'


function inputSearchValue() {
    refs.body.innerHTML = ''
    apiService.inputValue(
        // refs.inputSearch.value
        'lviv'
         ).then(e => {
        renderCard(e.hits)
    })
}
inputSearchValue()
