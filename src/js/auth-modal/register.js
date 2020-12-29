import { alert } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import pushError from './error-message';

export default async function register(log) {
    const regOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log)
    };
  
    try {
      fetch("https://callboard-backend.herokuapp.com/auth/register", regOptions)
        .then(response => response.json())
        .then(result => {
          if (result.message === `User with ${JSON.parse(regOptions.body).email} email already exists`) {
            pushError(result.message)
          }
          else if (result.message === '"email" is not allowed to be empty') {
            pushError(result.message)
          }
          else if (result.message === '"password" is not allowed to be empty'){
            pushError(result.message)
          }
          else {
            console.log(result)
            alert({
              title: "Pеєстрація пройшла успішно, натисніть кнопку 'Увійти'",
              delay: 1500
            })
          }
        })
    }
    catch (error) { console.log('error', error) };
  }