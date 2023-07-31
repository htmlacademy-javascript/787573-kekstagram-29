import {isEscapeKey} from './util.js';

const bigPhoto = document.querySelector('.big-picture');
const photoCloseButton = document.querySelector('#picture-cancel');
const bigPhotoUrl = bigPhoto.querySelector('.big-picture__img img');
const bigPhotoLikes = bigPhoto.querySelector('.likes-count');
const bigPhotoComments = bigPhoto.querySelector('.comments-count');
const bigPhotoCaption = bigPhoto.querySelector('.social__caption');
const bigPhotoListComments = bigPhoto.querySelector('.social__comments');
const socialCommentCount = bigPhoto.querySelector('.social__comment-count');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
// const littlePhotos = document.querySelectorAll('.picture');

const createBigPhoto = ({comments, url, description, likes}) => {
  bigPhotoUrl.src = url;
  bigPhotoLikes.textContent = likes;
  bigPhotoComments.textContent = comments.length;
  bigPhotoCaption.textContent = description;
};

const renderComments = (comments) => {
  bigPhotoListComments.textContent = '';
  comments.forEach(({ avatar, message, name }) => {
    const itemComment = `
    <li class="social__comment">
    <img
        class="social__picture"
        src="${avatar}"
        alt="${name}"
        width="35" height="35">
    <p class="social__text">${message}</p>
    </li>`;
    bigPhotoListComments.innerHTML += itemComment;
  });
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};


function openBigPhoto (arrayPhoto) {
  bigPhoto.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  createBigPhoto(arrayPhoto);
  renderComments(arrayPhoto.comments);
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

}

function closeBigPhoto () {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

}

photoCloseButton.addEventListener('click', () => {
  closeBigPhoto();
});


export { openBigPhoto };
