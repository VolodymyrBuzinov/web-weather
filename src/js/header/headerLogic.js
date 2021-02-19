import refs from '../refs'

export default class HeaderLogic {
    constructor() {
      
    }
    
    historyApi(evt) {
        const href = evt.target.getAttribute('href');    
    if (href) {
        return history.pushState(null, null, `${href}`)
    }
    }
    searchQuery(evt) {
        if (evt.target === refs.headerButton) {
             if (refs.headerInput.value === '') {
            return;
        }
             return console.log(refs.headerInput.value);
         }   
    }
}




