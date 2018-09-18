"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = safeScrollTop;

function safeScrollTop() {
  return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

module.exports = exports.default;