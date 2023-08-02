const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


const createMiniatures = ({comments, url, description, likes, id}) => {
  const elementTemplate = photoTemplate.cloneNode(true);
  const elementImgTemplate = elementTemplate.querySelector('.picture__img');
  elementImgTemplate.src = url;
  elementImgTemplate.alt = description;
  elementTemplate.querySelector('.picture__likes').textContent = likes;
  elementTemplate.querySelector('.picture__comments').textContent = comments.length;
  elementTemplate.dataset.elementTemplateId = id;

  return elementTemplate;
};

const insertPhotosToPage = (pictures) => {
  const photoFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const element = createMiniatures(picture);
    photoFragment.append(element);
  });
  container.append(photoFragment);
};

export {insertPhotosToPage};
