"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = touchable;

function touchable() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  var touchsupport = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  var touchClass = touchsupport ? 'touch' : 'non-touch';
  container.classList.add(touchClass);
}

module.exports = exports.default;