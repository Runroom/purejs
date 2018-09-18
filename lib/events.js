"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// see: http://youmightnotneedjquery.com/#ready
function onDocumentReady(fn) {
  var complete = document.readyState === 'complete';
  var notLoading = document.readyState !== 'loading';
  var ready = document.attachEvent ? complete : notLoading;

  if (ready) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function onResize(fn) {
  var timer;
  var windowWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(fn, 100);
    }
  });
}

var _default = {
  onDocumentReady: onDocumentReady,
  onResize: onResize
};
exports.default = _default;
module.exports = exports.default;