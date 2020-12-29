import uploadFile from './add-modal-upload-file';
import refs from './refs';
import formValidate from './add-modal-validation';
import { handleCloseModal } from './add-modal-close';

const { form, addImage, imageList } = refs;

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);
  const accessToken = sessionStorage.getItem('token');

  if (error === 0) {
    const formdata = new FormData(form);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://callboard-backend.herokuapp.com/call/', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        handleCloseModal();
      })
      .catch(error => console.log('error', error));
  } else {
    alert('Заповніть будь-ласка всі поля');
  }
}

addImage.addEventListener('change', () => {
  uploadFile(addImage.files[0]);
});

imageList.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const remove = confirm('Ви впевнені що хочете видалити фото зі списку?');
    if (remove) {
      e.target.parentNode.remove();
    }
  }
});
