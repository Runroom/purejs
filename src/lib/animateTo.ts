// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import * as util from 'util';
import elementOffsetTop from './elementOffsetTop';
import safeScrollTop from './safeScrollTop';

// for karma test
require('util.promisify').shim();

/**
 * t = current time
 * b = start value
 * c = change in value
 * d = speed
 */
const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  let currentTime = t / (d / 2);
  if (currentTime < 1) return (c / 2) * currentTime * currentTime + b;
  currentTime -= 1;
  return (-c / 2) * (currentTime * (currentTime - 2) - 1) + b;
};

function animateTo(
  opts: {
    element: string | number;
    offset?: number;
    speed?: number;
  },
  callback?: (err?: any, value?: any) => void
) {
  const speed = opts.speed || 500;
  const offset = opts.offset || 0;
  const start = safeScrollTop();
  const target = elementOffsetTop(opts.element) as number;
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
      } else if (callback) {
        callback(null, opts.element);
      }
    })();
  } catch (error) {
    if (callback) {
      callback(error.message, null);
    }
  }
}

export default util.promisify(animateTo);
