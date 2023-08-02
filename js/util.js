const DEFAULT_SHOW_ERROR_TIME = 10000;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const openErrorMessage = (message) => {
  const containerErrorMessage = document.createElement('div');
  containerErrorMessage.classList.add('container-error-message');
  document.body.append(containerErrorMessage);

  const errorMessage = document.createElement('div');
  errorMessage.textContent = message;
  errorMessage.classList.add('error-message');
  containerErrorMessage.append(errorMessage);

  setTimeout(() => {
    containerErrorMessage.remove();
  }, DEFAULT_SHOW_ERROR_TIME);
};
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export{getRandomInteger, isEscapeKey, openErrorMessage, debounce};
