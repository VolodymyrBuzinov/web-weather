import refs from '../refs'
import './fetchNews'
import newsHbs from '../../templates/news.hbs'
import { debounce, bind } from 'lodash'

export default class AppendNewsMarkup {
    constructor(main, fetchNews){
        this.refs = {
            newsContainer: main,
            searchObject: fetchNews,
        };
        this.appendMarkup = this.appendMarkup.bind(this);
        this.fetchReturn();
    }

    fetchReturn() {
        return this.refs.searchObject
            .getLastNews()
            .then(this.appendMarkup)
            .then(this.clearInputField)
            .catch();
    }
 
    appendMarkup(news){
        const { articles } = news;
        articles.map( article => {
            if (article.description === '') {
                article.description = `Деталі читайте на сайті ${article.source.name}.`;
            }
        });
        this.refs.newsContainer.insertAdjacentHTML('beforeend', newsHbs(articles));
    }
}
