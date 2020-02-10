// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import elementOffsetTop from './elementOffsetTop';
import isInt from './isInt';

async function anchorTo(
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
    await window.scrollTo(0, targetTop - offset);
    if (callback) {
      callback(null, targetTop - offset);
    }
  } catch (error) {
    if (callback) {
      callback(error.message, null);
    }
  }
}

// export default util.promisify(anchorTo);
export default anchorTo;
