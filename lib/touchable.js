"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function touchable() {
  var touchsupport = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  return !!touchsupport;
}

var _default = touchable;
exports.default = _default;
module.exports = exports.default;