export default class FetchNews {
    constructor () {}

    getLastNews (){
        const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=ua&' +
        'apiKey=dcd86c1488e4473badee8250e13e81e8';
        let req = new Request(url);
        return fetch(req)
            .then(res => res.json(), res => res.status)
            .then(news => { return news })
            .catch(reason => console.error(reason))
    }
}
