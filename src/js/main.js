import bigImg from './slider/bigImg'

const mainRefs = {
    header: document.querySelector('.header'),
    main: document.querySelector('.main'),
}
mainRefs.header.addEventListener('click', evt => {
    console.log(evt);
})
mainRefs.main.addEventListener('click', evt => {
    console.log(evt);
    
    if (evt.target.getAttribute('class') === "photo swiper-slide") {
       
        bigImg(evt)
    }
})