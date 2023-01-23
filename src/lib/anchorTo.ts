// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import elementOffsetTop from './elementOffsetTop';
import isInt from './isInt';
import isNan from './isNan';

async function anchorTo(
  opts: {
    element: string | number;
    offset?: number;
  },
  callback?: (err?: any, value?: any) => void
) {
  const offset = opts.offset || 0;

  try {
    const targetTop = elementOffsetTop(opts.element) as number;
    const totalOffset = targetTop - offset;

    if (isNan(totalOffset)) {
      throw `The element doesn't exists or is not a number`;
    }

    if (!isInt(opts.element)) {
      if (window && 'location' in window && 'hash' in window.location) {
        window.location.hash = opts.element.toString();
      }
    }

    await window.scrollTo(0, totalOffset);
    if (callback) {
      callback(null, totalOffset);
    }
  } catch (error) {
    if (callback) {
      // @ts-expect-error TS2571
      callback(error.message, null);
    }

    throw error;
  }
}

export default anchorTo;
