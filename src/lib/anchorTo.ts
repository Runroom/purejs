// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import * as util from 'util';
import elementOffsetTop from './elementOffsetTop';
import isInt from './isInt';

require('util.promisify').shim();

interface IAnchorTo {
  opts: {
    offset?: number;
    element: [string, number]
  };
  callback:
}

function anchorTo(opts, callback): IAnchorTo {
  const offset = opts.offset || 0;
  const targetTop = elementOffsetTop(opts.element);
  if (!isInt(opts.element)) document.location.hash = opts.element;

  try {
    window.scrollTo(0, targetTop - offset);
    callback(null, targetTop - offset);
  } catch (error) {
    callback(error.message, null);
  }
}

export default util.promisify(anchorTo);
