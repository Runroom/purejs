(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("purejs", [], factory);
	else if(typeof exports === 'object')
		exports["purejs"] = factory();
	else
		root["purejs"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.touchable = exports.scrollTo = exports.scrollDirection = exports.safeScrollTop = exports.forEach = exports.events = exports.debounce = exports.cookies = undefined;

var _cookies = __webpack_require__(/*! ./src/cookies */ "./src/cookies.js");

var _cookies2 = _interopRequireDefault(_cookies);

var _debounce = __webpack_require__(/*! ./src/debounce */ "./src/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _events = __webpack_require__(/*! ./src/events */ "./src/events.js");

var _events2 = _interopRequireDefault(_events);

var _forEach = __webpack_require__(/*! ./src/forEach */ "./src/forEach.js");

var _forEach2 = _interopRequireDefault(_forEach);

var _safeScrollTop = __webpack_require__(/*! ./src/safeScrollTop */ "./src/safeScrollTop.js");

var _safeScrollTop2 = _interopRequireDefault(_safeScrollTop);

var _scrollDirection = __webpack_require__(/*! ./src/scrollDirection */ "./src/scrollDirection.js");

var _scrollDirection2 = _interopRequireDefault(_scrollDirection);

var _scrollTo = __webpack_require__(/*! ./src/scrollTo */ "./src/scrollTo.js");

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _touchable = __webpack_require__(/*! ./src/touchable */ "./src/touchable.js");

var _touchable2 = _interopRequireDefault(_touchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var purejs = {
  cookies: _cookies2.default,
  debounce: _debounce2.default,
  events: _events2.default,
  forEach: _forEach2.default,
  safeScrollTop: _safeScrollTop2.default,
  scrollDirection: _scrollDirection2.default,
  scrollTo: _scrollTo2.default,
  touchable: _touchable2.default
};

exports.cookies = _cookies2.default;
exports.debounce = _debounce2.default;
exports.events = _events2.default;
exports.forEach = _forEach2.default;
exports.safeScrollTop = _safeScrollTop2.default;
exports.scrollDirection = _scrollDirection2.default;
exports.scrollTo = _scrollTo2.default;
exports.touchable = _touchable2.default;
exports.default = purejs;

/***/ }),

/***/ "./src/cookies.js":
/*!************************!*\
  !*** ./src/cookies.js ***!
  \************************/
/*! no static exports found */
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

/***/ "./src/debounce.js":
/*!*************************!*\
  !*** ./src/debounce.js ***!
  \*************************/
/*! no static exports found */
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

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! no static exports found */
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

/***/ "./src/forEach.js":
/*!************************!*\
  !*** ./src/forEach.js ***!
  \************************/
/*! no static exports found */
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

/***/ "./src/safeScrollTop.js":
/*!******************************!*\
  !*** ./src/safeScrollTop.js ***!
  \******************************/
/*! no static exports found */
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

/***/ "./src/scrollDirection.js":
/*!********************************!*\
  !*** ./src/scrollDirection.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollDirection;

var _safeScrollTop = __webpack_require__(/*! ./safeScrollTop */ "./src/safeScrollTop.js");

var _safeScrollTop2 = _interopRequireDefault(_safeScrollTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastScrollTop = 0;
var status = 0;

function scrollDirection() {
  var deltaUp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var deltaDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var currentScrollTop = (0, _safeScrollTop2.default)() || 0;

  if (currentScrollTop <= 0) {
    lastScrollTop = currentScrollTop;
    status = 0;
  } else if (currentScrollTop > lastScrollTop) {
    if (Math.abs(lastScrollTop - currentScrollTop) >= deltaDown) {
      lastScrollTop = currentScrollTop;
      status = 1;
    }
  } else if (Math.abs(lastScrollTop - currentScrollTop) >= deltaUp) {
    lastScrollTop = currentScrollTop;
    status = -1;
  }

  return status;
}

/***/ }),

/***/ "./src/scrollTo.js":
/*!*************************!*\
  !*** ./src/scrollTo.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _safeScrollTop = __webpack_require__(/*! ./safeScrollTop */ "./src/safeScrollTop.js");

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

/***/ "./src/touchable.js":
/*!**************************!*\
  !*** ./src/touchable.js ***!
  \**************************/
/*! no static exports found */
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

/***/ })

/******/ });
});
//# sourceMappingURL=purejs.js.map