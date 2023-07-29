// Отобразить фотографии других пользователей.
//
//  1. Заведите модуль, который будет отвечать за отрисовку миниатюр.
//
//  2. На основе временных данных для разработки и шаблона #picture создайте DOM-элементы,
//  соответствующие фотографиям, и заполните их данными:
//  - Адрес изображения url подставьте как атрибут src изображения.
//  - Описание изображения description подставьте в атрибут alt изображения.
//  - Количество лайков likes выведите в блок .picture__likes.
//  - Количество комментариев comments выведите в блок .picture__comments.
//
//  3. Отрисуйте сгенерированные DOM-элементы в блок .pictures.
//  Для вставки элементов используйте DocumentFragment.
//
//  4. Подключите модуль в проект.

const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createElement = ({comments, url, description, likes}) => {
  const elementTemplate = photoTemplate.cloneNode(true);
  elementTemplate.querySelector('.picture__img').src = url;
  elementTemplate.querySelector('.picture__img').alt = description;
  elementTemplate.querySelector('.picture__likes').textContent = likes;
  elementTemplate.querySelector('.picture__comments').textContent = comments.length;

  return elementTemplate;
};

const insertElementsToPage = (pictures) =>{
  const photoFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const element = createElement(picture);
    photoFragment.append(element);
  });
  container.append(photoFragment);
};

export {insertElementsToPage};
