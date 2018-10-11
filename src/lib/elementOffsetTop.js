import isInt from './isInt';

function elementOffsetTop(value) {
  if (!isInt(value)) {
    const elem = document.querySelector(value);
    if (elem) return elem.offsetTop;
  }
  return value || 0;
}

export default elementOffsetTop;
