import {insertPhotosToPage} from './photo.js';
import {openBigPhoto} from './bigPhoto.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  insertPhotosToPage(pictures);
  container.addEventListener('click', (evt) => {
    const picture = evt.target.closest('[data-element-template-id]');
    if (!picture) {
      return;
    }

    evt.preventDefault();

    const currentPhoto = pictures.find(
      (item) => item.id === +picture.dataset.elementTemplateId
    );
    openBigPhoto(currentPhoto);
  });
};

export {renderGallery};
