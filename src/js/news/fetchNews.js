
const key = '9a7204efd9174fdf52113071df84b254';
const url = `https://gnews.io/api/v4/search?q=weather&token=${key}`


export default class FetchNews {
    constructor () {}

    getLastNews (){        
        return fetch(url)
            .then(res => res.json(), res => res.status)
            .then(news => {
               
                return news;
            })
            .catch(reason => reason)
    }
}
