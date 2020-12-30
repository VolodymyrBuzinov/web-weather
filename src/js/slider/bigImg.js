import * as basicLightbox from 'basiclightbox'


export default function bigImg(event) {
   const dataSrc = event.target.dataset.src;  
  if (dataSrc) {
    const instance = basicLightbox.create(`
      <img src="${dataSrc}" width="1200" height="800">
  `).show()
  }
}