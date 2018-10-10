"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function events() {
  // see: http://youmightnotneedjquery.com/#ready
  function onDocumentReady(callback) {
    var complete = document.readyState === 'complete';
    var notLoading = document.readyState !== 'loading';
    var ready = document.attachEvent ? complete : notLoading;

    if (ready) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function onResizeWidth(callback) {
    var timer;
    var windowWidth = window.innerWidth;
    window.addEventListener('resize', function () {
      if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        if (timer) clearTimeout(timer);
        timer = setTimeout(callback, 100);
      }
    });
  }

  return {
    onDocumentReady: onDocumentReady,
    onResizeWidth: onResizeWidth
  };
}

var _default = events();

exports.default = _default;
module.exports = exports.default;