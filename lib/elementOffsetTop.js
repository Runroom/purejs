"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isInt = _interopRequireDefault(require("./isInt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementOffsetTop(value) {
  if (!(0, _isInt.default)(value)) {
    var elem = document.querySelector(value);
    if (elem) return elem.offsetTop;
  }

  return value || 0;
}

var _default = elementOffsetTop;
exports.default = _default;
module.exports = exports.default;