import swal from 'sweetalert';



const key = '9a7204efd9174fdf52113071df84b254';
const url = `https://gnews.io/api/v4/search?q=weather&token=${key}`


export default class FetchNews {
    constructor () {}

    getLastNews (){        
        return fetch(url)
            .then(res => { 
                if (res.status === 200) {
                     return res.json();
                }
               swal('Ups', 'Some issues at server, please try again later!', 'error');
            })
            .then(news => {                 
                return news;
            })
            .catch(reason => reason)
    }
}
