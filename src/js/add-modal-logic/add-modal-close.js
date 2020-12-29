import refs from './refs';

const { form, body, closeModalBtn, addModalOverlay, imageList } = refs;

closeModalBtn.addEventListener('click', handleCloseModal);
addModalOverlay.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    handleCloseModal();
  }
});
document.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    handleCloseModal();
  }
});

function handleCloseModal() {
  addModalOverlay.classList.remove('visible');
  body.classList.remove('hidden');
  let formReq = form.querySelectorAll('._req');
  for (let i = 0; i < formReq.length; i++) {
    const element = formReq[i];
    element.nextElementSibling.classList.remove('visible');
  }
  form.reset();
  replaceImagePreview();
}

function replaceImagePreview() {
  imageList.innerHTML = '';
  imageList.insertAdjacentHTML(
    'beforeend',
    `<li class="image-preview__item">
      <div class="choose-image">
        <input
          accept=".jpg"
          type="file"
          class="choose-image__input"
        />
        <div class="image-button">+</div>
      </div>
    </li>`,
  );
}

export { handleCloseModal };
