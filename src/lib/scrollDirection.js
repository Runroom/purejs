import safeScrollTop from './safeScrollTop';

let lastScrollTop = 0;
let status = 0;

export default function scrollDirection(deltaUp = 10, deltaDown = 10) {
  const currentScrollTop = safeScrollTop() || 0;

  if (currentScrollTop <= 0) {
    lastScrollTop = currentScrollTop;
    status = 0;
  } else if (currentScrollTop > lastScrollTop) {
    if (Math.abs(lastScrollTop - currentScrollTop) >= deltaDown) {
      lastScrollTop = currentScrollTop;
      status = 1;
    }
  } else if (Math.abs(lastScrollTop - currentScrollTop) >= deltaUp) {
    lastScrollTop = currentScrollTop;
    status = -1;
  }

  return status;
}
