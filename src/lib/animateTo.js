// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import util from 'util';
import elementOffsetTop from './elementOffsetTop';
import safeScrollTop from './safeScrollTop';

require('util.promisify').shim();

/**
 * t = current time
 * b = start value
 * c = change in value
 * d = speed
 */
const easeInOutQuad = (t, b, c, d) => {
  let currentTime = t / (d / 2);
  if (currentTime < 1) return (c / 2) * currentTime * currentTime + b;
  currentTime -= 1;
  return (-c / 2) * (currentTime * (currentTime - 2) - 1) + b;
};

function animateTo(opts, callback) {
  const speed = opts.speed || 500;
  const offset = opts.offset || 0;
  const start = safeScrollTop();
  const target = elementOffsetTop(opts.element);
  const change = target - start - offset;
  const increment = 20;
  let currentTime = 0;

  try {
    (function animateScroll() {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, speed);
      window.scroll(0, val);
      if (currentTime < speed) {
        setTimeout(animateScroll, increment);
      } else {
        callback(null, opts.element);
      }
    })();
  } catch (error) {
    callback(error.message, null);
  }
}

export default util.promisify(animateTo);
