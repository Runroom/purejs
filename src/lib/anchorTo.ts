// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import * as util from 'util';
import elementOffsetTop from './elementOffsetTop';
import isInt from './isInt';

// for karma test
require('util.promisify').shim();

function anchorTo(
  opts: {
    element: string | number;
    offset?: number;
  },
  callback?: (err?: any, value?: any) => void
) {
  const offset = opts.offset || 0;
  const targetTop = elementOffsetTop(opts.element) as number;
  if (!isInt(opts.element)) {
    if (window && 'location' in window && 'hash' in window.location) {
      window.location.hash = opts.element.toString();
    }
  }

  try {
    window.scrollTo(0, targetTop - offset);
    if (callback) {
      callback(null, targetTop - offset);
    }
  } catch (error) {
    if (callback) {
      callback(error.message, null);
    }
  }
}

export default util.promisify(anchorTo);
