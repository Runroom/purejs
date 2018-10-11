"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = _interopRequireDefault(require("util"));

var _elementOffsetTop = _interopRequireDefault(require("./elementOffsetTop"));

var _isInt = _interopRequireDefault(require("./isInt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
require('util.promisify').shim();

function anchorTo(opts, callback) {
  var offset = opts.offset || 0;
  var targetTop = (0, _elementOffsetTop.default)(opts.element);
  if (!(0, _isInt.default)(opts.element)) document.location.hash = opts.element;

  try {
    window.scrollTo(0, targetTop - offset);
    callback(null, targetTop - offset);
  } catch (error) {
    callback(error.message, null);
  }
}

var _default = _util.default.promisify(anchorTo);

exports.default = _default;
module.exports = exports.default;