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
        if (evt.target.tagName === "INPUT") {
        if (evt.target.value === '') {
            return;
        }
      return console.log(evt.target.value);
    }
    }
}


