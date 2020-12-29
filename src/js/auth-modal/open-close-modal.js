import refs from './refs'

export default function toggleRegisterModal() {
    refs.modalRegistr.classList.toggle('is-hidden')    
}
const authButtonToggle = function (evt) {   
    if (refs.modalRegistr.classList.contains('is-hidden')) {
         refs.modalRegistr.classList.toggle('is-hidden')
        refs.modalRegistr.style.zIndex = 1000;
    }
}
refs.openBtnRegistrModal.addEventListener('click', toggleRegisterModal);
refs.closeBtnRegistrModal.addEventListener('click', toggleRegisterModal);
refs.backgropModal.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        toggleRegisterModal();
    }
});
refs.navAuthButton.addEventListener('click', authButtonToggle)
document.onkeydown = function (e) {
    if (e.key === 'Escape') {
        refs.modalRegistr.classList.add('is-hidden')
    }
}