import isInt from './isInt';

function elementOffsetTop(value: number | string) {
  if (!isInt(value)) {
    const elem = document.querySelector(value.toString()) as HTMLDivElement;
    if (elem) return elem.offsetTop;
  }
  return value || 0;
}

export default elementOffsetTop;
