const body = document.querySelector('body');
const switcher = document.querySelector('.switcher')

const handleSwitcherClick = (evt) => {    
    if (evt.target.checked === true) {
        body.classList.add('light-theme');
        localStorage.setItem('LIGHT', 'light-theme');
    } 
    if (evt.target.checked === false) {
        body.classList.remove('light-theme');
        localStorage.removeItem('LIGHT');
    }
}
switcher.addEventListener('click', handleSwitcherClick);

