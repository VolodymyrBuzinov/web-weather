import refs from '../refs'
import apiService from './apiService'
import renderCard from './renderCard'
// import slider from './slider'

function inputSearchValue() {
//   refs.spinner.classList.add('loader')
    // refs.body.innerHTML = ''
    console.log(refs.body);
    apiService.inputValue(
        // refs.inputSearch.value
        'lviv'
         ).then(e => {
        renderCard(e.hits)
    //   refs.btn.classList.remove('none')
    })
      .finally(() => {
    //   refs.spinner.classList.remove('loader')
    });
}
inputSearchValue()
