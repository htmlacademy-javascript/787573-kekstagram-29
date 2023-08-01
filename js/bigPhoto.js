import {isEscapeKey} from './util.js';

const DEFAULT_SHOW_COMMENTS = 5;

const bigPhoto = document.querySelector('.big-picture');
const photoCloseButton = document.querySelector('#picture-cancel');
const bigPhotoUrl = bigPhoto.querySelector('.big-picture__img img');
const bigPhotoLikes = bigPhoto.querySelector('.likes-count');
const bigPhotoComments = bigPhoto.querySelector('.comments-count');
const bigPhotoCaption = bigPhoto.querySelector('.social__caption');
const bigPhotoListComments = bigPhoto.querySelector('.social__comments');
const socialCommentCount = bigPhoto.querySelector('.social__comment-count');
const commentsLoaderButton = bigPhoto.querySelector('.comments-loader');
const commentTemplate = document.querySelector('.social__comment');

let commentsShown = 0;
let commentsArray = [];


const createBigPhoto = ({comments, url, description, likes}) => {
  bigPhotoUrl.src = url;
  bigPhotoLikes.textContent = likes;
  bigPhotoComments.textContent = comments.length;
  bigPhotoCaption.textContent = description;
};

const createComment = ({avatar, message, name}) => {
  const element = commentTemplate.cloneNode(true);
  element.querySelector('.social__picture').src = avatar;
  element.querySelector('.social__picture').alt = name;
  element.querySelector('.social__text').innerHTML = message;
  return element;
};

const renderComments = () => {
  bigPhotoListComments.textContent = '';
  commentsShown += DEFAULT_SHOW_COMMENTS;
  if (commentsShown >= commentsArray.length) {
    commentsLoaderButton.classList.add('hidden');
    commentsShown = commentsArray.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }

  const commentFragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(commentsArray[i]);
    commentFragment.append(commentElement);
  }

  bigPhotoListComments.innerHTML = '';
  bigPhotoListComments.append(commentFragment);
  socialCommentCount.innerHTML = `${commentsShown} из <span class="comments-count">${commentsArray.length}</span> комментариев`;
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
  commentsArray = arrayPhoto.comments;
  if (commentsArray.length === 0) {
    bigPhotoListComments.innerHTML = '';
    commentsLoaderButton.classList.add('hidden');
    socialCommentCount.innerHTML = `${commentsShown} из <span class="comments-count">${commentsArray.length}</span> комментариев`;
  }
  if (commentsArray.length > 0) {
    renderComments();
  }

}

function closeBigPhoto () {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;

}

photoCloseButton.addEventListener('click', () => {
  closeBigPhoto();
});

commentsLoaderButton.addEventListener('click', () => {
  renderComments();
});

export { openBigPhoto };
