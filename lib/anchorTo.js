// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import * as util from 'util';
import elementOffsetTop from './elementOffsetTop';
import isInt from './isInt';
// for karma test
require('util.promisify').shim();
function anchorTo(opts, callback) {
    var offset = opts.offset || 0;
    var targetTop = elementOffsetTop(opts.element);
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
    }
    catch (error) {
        if (callback) {
            callback(error.message, null);
        }
    }
}
export default util.promisify(anchorTo);
//# sourceMappingURL=anchorTo.js.map