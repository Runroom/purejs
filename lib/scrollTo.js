"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _safeScrollTop = _interopRequireDefault(require("./safeScrollTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
function scrollTo() {
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

  var isInt = function isInt(n) {
    return Number(n) === n;
  };

  function getElementOffsetTop(value) {
    if (!isInt(value)) {
      var elem = document.querySelector(value);
      if (elem) return elem.offsetTop;
    }

    return value || 0;
  }

  function anchor(element) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var target = getElementOffsetTop(element);

    if (!isInt(element)) {
      document.location.hash = element;
    }

    window.scrollTo(0, target - offset);
  }

  function animate(element) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var start = (0, _safeScrollTop.default)();
    var target = getElementOffsetTop(element);
    var change = target - start - offset;
    var increment = 20;
    var currentTime = 0;

    (function animateScroll() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, speed);
      window.scroll(0, val);
      if (currentTime < speed) setTimeout(animateScroll, increment);
    })();
  }

  return {
    anchor: anchor,
    animate: animate
  };
}

var _default = scrollTo();

exports.default = _default;
module.exports = exports.default;