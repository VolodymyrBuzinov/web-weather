import refs from './refs';
import login from './login';
import register from './register';

const el = document.querySelector('.registration-input-login');
function tolowcase(element) {
  const str = element.value;
  const res = str.toLowerCase();
  element.value = res;
}


const handleRegisterSubmit = event => {
  event.preventDefault();

  tolowcase(el)
  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  })

  if (event.target.classList.value === "registration-button") {
    register(body);
  } else
    if (event.target.classList.value === "registration-button-entry") {
      login(body);
    }

}

refs.registerFormRef.addEventListener('click', handleRegisterSubmit)