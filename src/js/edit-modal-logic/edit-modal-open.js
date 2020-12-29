import refs from './refs';
// import formValidate from './edit-modal-validation';
import { handleCloseModal } from './edit-modal-close';
import { formSend } from './edit-modal-send';

const { body, editModalOverlay, imageList, deleteCard, form } = refs;

function fillTheForm(dataset) {
  const { category, description, title, price, phone, id, images } = dataset;
  // console.log(category, description, title, price, phone, id, images);
  // if (images) {
  //   const imagesArray = images.split(',');
  //   if (imagesArray) {
  //     imagesArray.map(item => {
  //       imageList.insertAdjacentHTML(
  //         'beforeend',
  //         `<li class="image-preview__item"><img src="${item}" alt="" /></li>`,
  //       );
  //     });
  //   }
  // }
  const formFields = document.querySelectorAll('._edit');
  formFields.forEach(item => {
    if (item.classList.contains('_name')) {
      item.value = title;
    } else if (item.classList.contains('_description')) {
      item.value = description;
    } else if (item.classList.contains('_phone')) {
      item.value = phone;
    } else if (item.classList.contains('_category')) {
      item.children.forEach(option => {
        if (option.value === category) {
          option.selected = true;
        }
      });
    } else if (item.classList.contains('_price')) {
      item.value = price;
    }
  });

  handleOpenModal();
  deleteCard.addEventListener('click', e => {
    e.preventDefault();
    fetchOnDeleteCard(e, id);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    formSend(e, id);
  });
}

function handleOpenModal() {
  editModalOverlay.classList.add('visible');
  body.classList.add('hidden');
}

function fetchOnDeleteCard(e, id) {
  const accessToken = sessionStorage.getItem('token');
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}`);

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch(`https://callboard-backend.herokuapp.com/call/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      handleCloseModal();
      location.reload();
    })
    .catch(error => console.log('error', error));
}

// import formValidate from './edit-modal-validation';
// import { handleCloseModal } from './edit-modal-close';
// import { fillTheForm } from './edit-modal-open';

// const formdata = new FormData();

// // form.addEventListener('submit', formSend);

// async function formSend(e, id) {
//   e.preventDefault();
//   const accessToken = sessionStorage.getItem('token');
//   let error = formValidate(form);
//   console.log(id);
//   if (error === 0) {
//     var myHeaders = new Headers();
//     myHeaders.append('Authorization', `Bearer ${accessToken}`);

//     let formReq = form.querySelectorAll('._edit');
//     for (let i = 0; i < formReq.length; i++) {
//       const element = formReq[i];

//       if (element.classList.contains('_name')) {
//         formdata.append('title', `${element.value}`);
//       } else if (element.classList.contains('_description')) {
//         formdata.append('description', `${element.value}`);
//       } else if (element.classList.contains('_phone')) {
//         formdata.append('phone', `${element.value}`);
//       } else if (element.classList.contains('_category')) {
//         let value = element.options[element.selectedIndex].value;
//         formdata.append('category', `${value}`);
//       } else if (element.classList.contains('_price')) {
//         formdata.append('price', `${element.value}`);
//       }
//     }

//     var requestOptions = {
//       method: 'PATCH',
//       headers: myHeaders,
//       body: formdata,
//       redirect: 'follow',
//     };

//     fetch(`https://callboard-backend.herokuapp.com/call/${id}`, requestOptions)
//       .then(response => response.text())
//       .then(result => {
//         console.log(result);
//         handleCloseModal();
//       })
//       .catch(error => console.log('error', error));
//   } else {
//     alert('Заповніть будь-ласка всі поля');
//   }
// }

export { fillTheForm };
