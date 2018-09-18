"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var setCookie = function setCookie(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(d.toUTCString(), ";path=/");
};

var getCookie = function getCookie(name) {
  var ca = decodeURIComponent(document.cookie).split(';');
  var concatName = "".concat(name, "=");

  for (var i = 0; i < ca.length; i += 1) {
    var c = ca[i].trim();

    if (c.indexOf(concatName) === 0) {
      return c.substring(concatName.length, c.length);
    }
  }

  return '';
};

var removeCookie = function removeCookie(name) {
  document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
};

function cookies() {
  return {
    get: getCookie,
    set: setCookie,
    remove: removeCookie
  };
}

var _default = cookies();

exports.default = _default;
module.exports = exports.default;