const BASE_URL = 'https://callboard-backend.herokuapp.com';

function fetchFoundProducts(productTitle) {
    return fetch(`${BASE_URL}/call/find?search=${productTitle}`)
    .then(response => response.json());
  }

export {fetchFoundProducts}