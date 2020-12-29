import { Button } from "bootstrap";

const routers = [
    
    {
        path: '/',    
        // component: fun1,
        meta: { auth: false}
    },
    {
        path: '/page2',    
        // component: fun2,
        meta: { auth: false}
    },
    {
        path: '/page3',   
        // component: fun3,
        meta: { auth: false}
    },
    {
        path: '/recreation and sport',   
        meta: { auth: false}
    },
    {
        path: '/free',   
        meta: { auth: false}
    },
    {
        path: '/business and services',   
        meta: { auth: false}
    },
    {
        path: '/electronics',   
        meta: { auth: false}
    },
    {
        path: '/trade ',   
        meta: { auth: false}
    },
    {
        path: '/transport',   
        meta: { auth: false}
    },
    {
        path: '/work',   
        meta: { auth: false}
    },
    {
        path: '/property',   
        meta: { auth: false}
    },
    {
        path: '/sales',   
        meta: { auth: false}
    },

];

let auth = true;
let startState = true;

let navbarNav = document.querySelector('.navbar-nav');
const renderDiv = document.querySelector('.pagination-div')
const cleanButton = document.querySelector('.header-nav__clear__button')
const cleanButton2 = document.querySelector('.header-menu__clear__button')
const is_hiden = document.querySelector('.card')

function updatePage (e) {
    if (e.target.tagName !== "A") return
    if (e.target.getAttribute('href') !== '/page2' && e.target.getAttribute('href') !== '/page3' && e.target.getAttribute('href') !== '/') {        
        is_hiden.classList.remove('is_hiden')
    }
    e.preventDefault();
    updateHistory(e);    
    
}
function updateButton (e) {
    if (e.target.tagName !== "A") return
    e.preventDefault();
    is_hiden.classList.add('is_hiden')
    updateHist(e);    
    
}
function updateButton2 (e) {
    if (e.target.tagName !== "BUTTON") return
    e.preventDefault();
    is_hiden.classList.add('is_hiden')
    updateHist(e);    
    
}
function updateHist(e) {
    const query = '/';
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}
function updateHistory(e) {
    const query = e.target.getAttribute('href');
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}


navbarNav.addEventListener('click', updatePage);
renderDiv.addEventListener('click', updatePage)
cleanButton.addEventListener('click', updateButton)
cleanButton2.addEventListener('click', updateButton2)
