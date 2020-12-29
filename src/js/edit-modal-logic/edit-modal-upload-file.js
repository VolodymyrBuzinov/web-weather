import refs from './refs';

const { addImage, imageList } = refs;

export default function uploadFile(file) {
  //проверяем тип файла
  if (!['image/jpeg'].includes(file.type)) {
    alert('Можна добавляти фото тільки формату .jpeg!');
    addImage.value = '';
    return;
  }

  //проверяем размер файла
  if (file.size > 3 * 1024 * 1024) {
    alert('Фото має бути мньше ніж 3 МБ.');
  }

  let reader = new FileReader();
  reader.onload = function (e) {
    imageList.insertAdjacentHTML(
      'beforeend',
      `<li class="image-preview__item"><img src="${e.target.result}" alt="" /></li>`,
    );
  };
  reader.onerror = function (e) {
    alert('Помилка завантаження фото!');
  };

  reader.readAsDataURL(file);
}
