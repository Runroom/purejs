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
var easeInOutQuad = function (t, b, c, d) {
    var currentTime = t / (d / 2);
    if (currentTime < 1)
        return (c / 2) * currentTime * currentTime + b;
    currentTime -= 1;
    return (-c / 2) * (currentTime * (currentTime - 2) - 1) + b;
};
function animateTo(opts, callback) {
    var speed = opts.speed || 500;
    var offset = opts.offset || 0;
    var start = safeScrollTop();
    var target = elementOffsetTop(opts.element);
    var change = target - start - offset;
    var increment = 20;
    var currentTime = 0;
    try {
        (function animateScroll() {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, speed);
            window.scroll(0, val);
            if (currentTime < speed) {
                setTimeout(animateScroll, increment);
            }
            else if (callback) {
                callback(null, opts.element);
            }
        })();
    }
    catch (error) {
        if (callback) {
            callback(error.message, null);
        }
    }
}
export default util.promisify(animateTo);
//# sourceMappingURL=animateTo.js.map