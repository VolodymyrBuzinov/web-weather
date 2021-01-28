export default class FetchNews {
    constructor () {}

    getLastNews (){
        // const url = 'http://newsapi.org/v2/everything?q=Климат&from=2021-01-28&sortBy=popularity&apiKey=dcd86c1488e4473badee8250e13e81e8';        
       const url = 'http://newsapi.org/v2/everything?' +
           'q=Климат&' +
           'language=ru&' +          
          'apiKey=dcd86c1488e4473badee8250e13e81e8';
        let req = new Request(url);
        return fetch(req)
            .then(res => res.json(), res => res.status)
            .then(news => {
                console.log(news);
                return news
            })
            .catch(reason => console.error(reason))
    }
}
