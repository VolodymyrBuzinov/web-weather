import refs from '../refs'
import apiService from './apiService'
import renderCard from './renderCard'





export default function inputSearchValue(inputSearch) {
    refs.body.innerHTML = ''
const input = document.querySelector('.header-input')
console.log(input.value);
    apiService.inputValue(
        inputSearch
         ).then(e => {
        renderCard(e.hits)
    })
}

