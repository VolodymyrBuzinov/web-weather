const mainRefs = {
    header: document.querySelector('.header'),
    main: document.querySelector('.main'),
}
mainRefs.header.addEventListener('click', evt => {
    console.log(evt);
})
mainRefs.main.addEventListener('click', evt => {
    console.log(evt);
})