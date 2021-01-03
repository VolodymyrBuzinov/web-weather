import refs from './refs'
import HeaderLogic from './header/headerLogic'
import bigImg from './slider/bigImg'

const headerLogic = new HeaderLogic();
const mainRefs = {
    header: document.querySelector('.header'),
    main: document.querySelector('.main'),
}
mainRefs.header.addEventListener('click', evt => {
    evt.preventDefault();    
    headerLogic.historyApi(evt);    

    if (evt.target.getAttribute('href') === "/photo"){
        const hiddenSlider = document.querySelector('#slider')
        hiddenSlider.classList.remove('is-hidden')
    }
    // console.log(evt.target);     
})
mainRefs.header.addEventListener('change', evt => {
    evt.preventDefault();       
    headerLogic.searchQuery(evt);
    // console.log(evt.target);     
})
mainRefs.main.addEventListener('click', evt => {
    evt.preventDefault();
     
    if (evt.target.getAttribute('class') === "photo swiper-slide") {
       
        bigImg(evt)
    }
    // console.log(evt.target);
})