import refs from '../refs'
import apiService from './apiService'
import renderCard from './renderCard'
import  btnClick from './btn'






export default function inputSearchValue(inputSearch) {    
    refs.body.innerHTML = ''
    apiService.inputValue(
        inputSearch
         ).then(e => {
        renderCard(e.hits)
        refs.btn.classList.remove('is-hidden')
    })    
}

refs.btn.addEventListener('click', btnClick)