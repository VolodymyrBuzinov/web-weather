import uploadFile from './edit-modal-upload-file';
import refs from './refs';
import formValidate from './edit-modal-validation';
import { handleCloseModal } from './edit-modal-close';
// import { fillTheForm } from './edit-modal-open';

const { form, editImage, imageList } = refs;
const formdata = new FormData();

// form.addEventListener('submit', formSend);

async function formSend(e, id) {
  e.preventDefault();
  const accessToken = sessionStorage.getItem('token');
  let error = formValidate(form);
  console.log(id);
  if (error === 0) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${accessToken}`);

    let formReq = form.querySelectorAll('._edit');
    for (let i = 0; i < formReq.length; i++) {
      const element = formReq[i];

      if (element.classList.contains('_name')) {
        formdata.append('title', `${element.value}`);
      } else if (element.classList.contains('_description')) {
        formdata.append('description', `${element.value}`);
      } else if (element.classList.contains('_phone')) {
        formdata.append('phone', `${element.value}`);
      } else if (element.classList.contains('_category')) {
        let value = element.options[element.selectedIndex].value;
        formdata.append('category', `${value}`);
      } else if (element.classList.contains('_price')) {
        formdata.append('price', `${element.value}`);
      }
    }

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(`https://callboard-backend.herokuapp.com/call/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        handleCloseModal();
      })
      .catch(error => console.log('error', error));
  } else {
    alert('Заповніть будь-ласка всі поля');
  }
}

editImage.addEventListener('change', () => {
  uploadFile(editImage.files[0]);
  console.log(editImage.files);
  formdata.append('file', editImage.files[0]);
});

imageList.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const remove = confirm('Ви впевнені що хочете видалити фото зі списку?');
    if (remove) {
      e.target.parentNode.remove();
    }
  }
});
export { formSend };
