import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function onPost(id) {
  const accessToken = sessionStorage.getItem('token');
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${accessToken}`);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };
  fetch(
    `https://callboard-backend.herokuapp.com/call/favourite/${id}`,
    requestOptions,
  )
    .then(response => response.json())
    .then(result => {
      if (result.message === 'Unauthorized') {
        alert({
          title: 'Щоб добавити товар в обране будь-ласка авторизуйтесь!',
          delay: 1500,
        }); 
      } else {
alert({
        title: 'Цей товар добавлено до ваших обраних',
        delay: 1500,
      });
      }      
    })
    .catch(error => console.log('error', error));
}
