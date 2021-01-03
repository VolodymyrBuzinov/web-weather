export default {
    page: 1,
    
  
    inputValue(search) {
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${this.page}&per_page=200&key=19060894-87e054058a337546d07970d77`).then(r => r.json()).then(this.page += 1);
        
    },
  }