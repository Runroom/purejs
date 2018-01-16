import anchor, { scrollToAnchor } from './src/anchor';
import cookies, { getPolicyCookie, removePolicyCookie } from './src/cookies';
import debounce from './src/debounce';
import events from './src/events';
import forEach from './src/forEach';
import safeScrollTop from './src/safeScrollTop';
import scrollDirection from './src/scrollDirection';
import scrollTo from './src/scrollTo';
import scrollToTop, { createScrollTopButton } from './src/scrollToTop';
import touchable from './src/touchable';

const purejs = {
  anchor,
  scrollToAnchor,
  cookies,
  getPolicyCookie,
  removePolicyCookie,
  debounce,
  events,
  forEach,
  safeScrollTop,
  scrollDirection,
  scrollTo,
  scrollToTop,
  createScrollTopButton,
  touchable
};

export {
  anchor,
  scrollToAnchor,
  cookies,
  getPolicyCookie,
  removePolicyCookie,
  debounce,
  events,
  forEach,
  safeScrollTop,
  scrollDirection,
  scrollTo,
  scrollToTop,
  createScrollTopButton,
  touchable
};

export default purejs;
