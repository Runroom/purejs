(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("purejs", [], factory);
	else if(typeof exports === 'object')
		exports["purejs"] = factory();
	else
		root["purejs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = safeScrollTop;
function safeScrollTop() {
  return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setCookie = function setCookie(name) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;

  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/';
};

var getCookie = function getCookie(name) {
  var ca = decodeURIComponent(document.cookie).split(';');
  var concatName = name + '=';
  for (var i = 0; i < ca.length; i += 1) {
    var c = ca[i].trim();
    if (c.indexOf(concatName) === 0) {
      return c.substring(concatName.length, c.length);
    }
  }
  return '';
};

var removeCookie = function removeCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

function cookies() {
  return {
    get: getCookie,
    set: setCookie,
    remove: removeCookie
  };
}

exports.default = cookies();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var immediate = arguments[2];

  var timeout = void 0;
  return function debounceFn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  var timer = void 0;
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

exports.default = {
  onDocumentReady: onDocumentReady,
  onResize: onResize
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forEach;
/**
 * https://jsperf.com/for-vs-foreach/37
 * https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
 */
function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i += 1) {
    callback.call(scope, i, array[i]);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = scrollDirection;
var lastScrollTop = 0;
var opts = {
  deltaUp: 10,
  deltaDown: 10,
  classUp: 'scroll-up',
  classDown: 'scroll-down'
};

function clearElementClass() {
  document.documentElement.classList.remove(opts.classUp);
  document.documentElement.classList.remove(opts.classDown);
}

function onPageScroll() {
  var currentScrollTop = this.scrollY || this.scrollTop || 0;

  if (currentScrollTop <= 0) {
    clearElementClass();
    lastScrollTop = currentScrollTop;
  } else if (currentScrollTop > lastScrollTop) {
    if (Math.abs(lastScrollTop - currentScrollTop) >= opts.deltaDown) {
      if (!document.documentElement.classList.contains(opts.classDown)) {
        clearElementClass();
        document.documentElement.classList.add(opts.classDown);
      }
      lastScrollTop = currentScrollTop;
    }
  } else if (Math.abs(lastScrollTop - currentScrollTop) >= opts.deltaUp) {
    if (!document.documentElement.classList.contains(opts.classUp)) {
      clearElementClass();
      document.documentElement.classList.add(opts.classUp);
    }
    lastScrollTop = currentScrollTop;
  }
}

function handleExtend(settings) {
  opts = _extends({}, opts, settings);
}

function scrollDirection(settings) {
  if (settings) handleExtend(settings);

  if (window.addEventListener) {
    window.addEventListener('scroll', onPageScroll);
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _safeScrollTop = __webpack_require__(0);

var _safeScrollTop2 = _interopRequireDefault(_safeScrollTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/

/**
 * t = current time
 * b = start value
 * c = change in value
 * d = speed
 */
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  var currentTime = t / (d / 2);
  if (currentTime < 1) return c / 2 * currentTime * currentTime + b;
  currentTime -= 1;
  return -c / 2 * (currentTime * (currentTime - 2) - 1) + b;
};

var isInt = function isInt(n) {
  return Number(n) === n;
};

function getElementOffsetTop(value) {
  if (!isInt(value)) {
    var elem = document.querySelector(value);
    if (elem) return elem.offsetTop;
  }
  return value || 0;
}

function anchor(element) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var target = getElementOffsetTop(element);
  if (!isInt(element)) {
    document.location.hash = element;
  }
  window.scrollTo(0, target - offset);
}

function animate(element) {
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var start = (0, _safeScrollTop2.default)();
  var target = getElementOffsetTop(element);
  var change = target - start - offset;
  var increment = 20;
  var currentTime = 0;

  (function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, speed);
    window.scroll(0, val);
    if (currentTime < speed) setTimeout(animateScroll, increment);
  })();
}

function scrollTo() {
  return {
    anchor: anchor,
    animate: animate
  };
}

exports.default = scrollTo();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.touchable = exports.scrollTo = exports.scrollDirection = exports.safeScrollTop = exports.forEach = exports.events = exports.debounce = exports.removePolicyCookie = exports.addPolicyCookie = exports.getPolicyCookie = exports.cookies = undefined;

var _cookies = __webpack_require__(1);

var _cookies2 = _interopRequireDefault(_cookies);

var _debounce = __webpack_require__(2);

var _debounce2 = _interopRequireDefault(_debounce);

var _events = __webpack_require__(3);

var _events2 = _interopRequireDefault(_events);

var _forEach = __webpack_require__(4);

var _forEach2 = _interopRequireDefault(_forEach);

var _safeScrollTop = __webpack_require__(0);

var _safeScrollTop2 = _interopRequireDefault(_safeScrollTop);

var _scrollDirection = __webpack_require__(5);

var _scrollDirection2 = _interopRequireDefault(_scrollDirection);

var _scrollTo = __webpack_require__(6);

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _touchable = __webpack_require__(7);

var _touchable2 = _interopRequireDefault(_touchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var purejs = {
  cookies: _cookies2.default,
  getPolicyCookie: _cookies.getPolicyCookie,
  addPolicyCookie: _cookies.addPolicyCookie,
  removePolicyCookie: _cookies.removePolicyCookie,
  debounce: _debounce2.default,
  events: _events2.default,
  forEach: _forEach2.default,
  safeScrollTop: _safeScrollTop2.default,
  scrollDirection: _scrollDirection2.default,
  scrollTo: _scrollTo2.default,
  touchable: _touchable2.default
};

exports.cookies = _cookies2.default;
exports.getPolicyCookie = _cookies.getPolicyCookie;
exports.addPolicyCookie = _cookies.addPolicyCookie;
exports.removePolicyCookie = _cookies.removePolicyCookie;
exports.debounce = _debounce2.default;
exports.events = _events2.default;
exports.forEach = _forEach2.default;
exports.safeScrollTop = _safeScrollTop2.default;
exports.scrollDirection = _scrollDirection2.default;
exports.scrollTo = _scrollTo2.default;
exports.touchable = _touchable2.default;
exports.default = purejs;

/***/ })
/******/ ]);
});
//# sourceMappingURL=purejs.js.map