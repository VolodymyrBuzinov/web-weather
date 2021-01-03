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
    // console.log(evt.target);     
})
mainRefs.header.addEventListener('change', evt => {
    evt.preventDefault();       
    headerLogic.searchQuery(evt);
    // console.log(evt.target);     
})
mainRefs.main.addEventListener('click', evt => {
    evt.preventDefault();
    // console.log(evt.target);
})