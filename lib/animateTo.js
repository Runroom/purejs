"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(require("util"));

var _elementOffsetTop = _interopRequireDefault(require("./elementOffsetTop"));

var _safeScrollTop = _interopRequireDefault(require("./safeScrollTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
require('util.promisify').shim();
/**
 * t = current time
 * b = start value
 * c = change in value
 * d = speed
 */


var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  var currentTime = t / (d / 2);
  if (currentTime < 1) return c / 2 * currentTime * currentTime + b;
  currentTime -= 1;
  return -c / 2 * (currentTime * (currentTime - 2) - 1) + b;
};

function animateTo(opts, callback) {
  var speed = opts.speed || 500;
  var offset = opts.offset || 0;
  var start = (0, _safeScrollTop.default)();
  var target = (0, _elementOffsetTop.default)(opts.element);
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
      } else {
        callback(null, opts.element);
      }
    })();
  } catch (error) {
    callback(error.message, null);
  }
}

var _default = _util.default.promisify(animateTo);

exports.default = _default;
module.exports = exports.default;