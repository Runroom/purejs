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
/*! exports provided: cookies, debounce, events, forEach, safeScrollTop, scrollDirection, scrollTo, touchable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/cookies */ "./src/cookies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cookies", function() { return _src_cookies__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/debounce */ "./src/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _src_debounce__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/events */ "./src/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _src_events__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_forEach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/forEach */ "./src/forEach.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _src_forEach__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_safeScrollTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/safeScrollTop */ "./src/safeScrollTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeScrollTop", function() { return _src_safeScrollTop__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_scrollDirection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/scrollDirection */ "./src/scrollDirection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollDirection", function() { return _src_scrollDirection__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_scrollTo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/scrollTo */ "./src/scrollTo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return _src_scrollTo__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_touchable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/touchable */ "./src/touchable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touchable", function() { return _src_touchable__WEBPACK_IMPORTED_MODULE_7__["default"]; });









var purejs = {
  cookies: _src_cookies__WEBPACK_IMPORTED_MODULE_0__["default"],
  debounce: _src_debounce__WEBPACK_IMPORTED_MODULE_1__["default"],
  events: _src_events__WEBPACK_IMPORTED_MODULE_2__["default"],
  forEach: _src_forEach__WEBPACK_IMPORTED_MODULE_3__["default"],
  safeScrollTop: _src_safeScrollTop__WEBPACK_IMPORTED_MODULE_4__["default"],
  scrollDirection: _src_scrollDirection__WEBPACK_IMPORTED_MODULE_5__["default"],
  scrollTo: _src_scrollTo__WEBPACK_IMPORTED_MODULE_6__["default"],
  touchable: _src_touchable__WEBPACK_IMPORTED_MODULE_7__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (purejs);

/***/ }),

/***/ "./src/cookies.js":
/*!************************!*\
  !*** ./src/cookies.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (cookies());

/***/ }),

/***/ "./src/debounce.js":
/*!*************************!*\
  !*** ./src/debounce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var immediate = arguments.length > 2 ? arguments[2] : undefined;
  var timeout;
  return function debounceFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  onDocumentReady: onDocumentReady,
  onResize: onResize
});

/***/ }),

/***/ "./src/forEach.js":
/*!************************!*\
  !*** ./src/forEach.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forEach; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return safeScrollTop; });
function safeScrollTop() {
  return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

/***/ }),

/***/ "./src/scrollDirection.js":
/*!********************************!*\
  !*** ./src/scrollDirection.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollDirection; });
/* harmony import */ var _safeScrollTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeScrollTop */ "./src/safeScrollTop.js");

var lastScrollTop = 0;
var status = 0;
function scrollDirection() {
  var deltaUp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var deltaDown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var currentScrollTop = Object(_safeScrollTop__WEBPACK_IMPORTED_MODULE_0__["default"])() || 0;

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _safeScrollTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeScrollTop */ "./src/safeScrollTop.js");
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
  var start = Object(_safeScrollTop__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/* harmony default export */ __webpack_exports__["default"] = (scrollTo());

/***/ }),

/***/ "./src/touchable.js":
/*!**************************!*\
  !*** ./src/touchable.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return touchable; });
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