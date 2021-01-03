import refs from './refs'
import HeaderLogic from './header/headerLogic'

const headerLogic = new HeaderLogic();
const mainRefs = {
    header: document.querySelector('.header'),
    main: document.querySelector('.main'),
}
mainRefs.header.addEventListener('click', evt => {
    evt.preventDefault();    
    headerLogic.historyApi(evt);       
    headerLogic.searchQuery(evt);        
})

mainRefs.main.addEventListener('click', evt => {
    evt.preventDefault();  
})