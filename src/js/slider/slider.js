import refs from '../refs'
import hend from '../../templates/ulHendel.hbs'
import Swal from 'sweetalert2'

export default class SliderLogic {
    constructor() {}
    
        
      
    
    inputSearchValue(inputSearch) {    
        refs.main.innerHTML = ''
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputSearch}&page=1&per_page=48&key=19060894-87e054058a337546d07970d77`).then(r => r.json()).then(e => {
                
                   if (e.hits.length === 0) {
                this.onNotify()                    
                this.notFound ()                  
                } else {const markup = hend(e.hits);
                refs.main.insertAdjacentHTML('beforeend', markup);
            }       
                  
                
            })    
        }
        
      notFound(){                
        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&page=1&per_page=48&key=19060894-87e054058a337546d07970d77`).then(r => r.json()).then(e => {
            const markup = hend(e.hits);
            refs.main.insertAdjacentHTML('beforeend', markup);        
        })  
    }

     onNotify(){
        //  error({hide: true, delay: 3500, text:'По Вашему запросу ничего не найдено!'})
        Swal.fire('Oops...', 'По Вашему запросу ничего не найдено!', 'error')
     }

}