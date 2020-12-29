export default async function refreshToken(id,fresh){


const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${fresh}`
    },
    body: JSON.stringify(id)
};


try {
  await fetch("https://callboard-backend.herokuapp.com/auth/refresh", requestOptions)
  .then(response =>   response.json())
  .then(result => {
      console.log(result); 
        sessionStorage.setItem('token', result.newAccessToken);
        sessionStorage.setItem('sid', result.newSid);
        sessionStorage.setItem('refresh', result.newRefreshToken);
    })}
  catch(error) {
    console.log('error', error);
  };
}

