import refs from '../refs'
import apiService from './apiService'
import renderCard from './renderCard'





export default function inputSearchValue(inputSearch) {
    refs.body.innerHTML = ''
    apiService.inputValue(
        inputSearch
         ).then(e => {
        renderCard(e.hits)
    })
}

