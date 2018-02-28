import cookies, { getPolicyCookie, addPolicyCookie, removePolicyCookie } from './src/cookies';
import debounce from './src/debounce';
import events from './src/events';
import forEach from './src/forEach';
import safeScrollTop from './src/safeScrollTop';
import scrollDirection from './src/scrollDirection';
import scrollTo from './src/scrollTo';
import touchable from './src/touchable';

const purejs = {
  cookies,
  getPolicyCookie,
  addPolicyCookie,
  removePolicyCookie,
  debounce,
  events,
  forEach,
  safeScrollTop,
  scrollDirection,
  scrollTo,
  touchable
};

export {
  cookies,
  getPolicyCookie,
  addPolicyCookie,
  removePolicyCookie,
  debounce,
  events,
  forEach,
  safeScrollTop,
  scrollDirection,
  scrollTo,
  touchable
};

export default purejs;
