"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollDirection;

var _safeScrollTop = _interopRequireDefault(require("./safeScrollTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastScrollTop = 0;
var status = 0;

function scrollDirection() {
  var deltaUp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var deltaDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var currentScrollTop = (0, _safeScrollTop.default)() || 0;

  if (currentScrollTop <= 0) {
    lastScrollTop = currentScrollTop;
    status = 0;
  } else if (currentScrollTop > lastScrollTop) {
    if (Math.abs(lastScrollTop - currentScrollTop) >= deltaDown) {
      lastScrollTop = currentScrollTop;
      status = 1;
    }
  } else if (Math.abs(lastScrollTop - currentScrollTop) >= deltaUp) {
    lastScrollTop = currentScrollTop;
    status = -1;
  }

  return status;
}

module.exports = exports.default;