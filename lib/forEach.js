"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * https://jsperf.com/for-vs-foreach/37
 * https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
 */
function forEach(haystack, callback, scope) {
  if (Object.prototype.toString.call(haystack) === '[object Object]') {
    var keyHaystack = Object.keys(haystack);

    for (var i = 0, len = keyHaystack.length; i < len; i += 1) {
      if (Object.prototype.hasOwnProperty.call(keyHaystack, i)) {
        callback.call(scope, haystack[keyHaystack[i]], keyHaystack[i], haystack);
      }
    }
  } else {
    for (var _i = 0, _len = haystack.length; _i < _len; _i += 1) {
      callback.call(scope, haystack[_i], _i, haystack);
    }
  }
}

var _default = forEach;
exports.default = _default;
module.exports = exports.default;