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

var Events = {
  onDocumentReady: onDocumentReady,
  onResize: onResize
};

exports.default = Events;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScrollTo;
function ScrollTo(startPoint) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  var start = document.body.scrollTop;
  var change = startPoint - start;
  var increment = 20;

  var currentTime = 0;

  (function animateScroll() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    document.body.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  })();
}

/**
 * t = current time
 * b = start value
 * c = change in value
 * d = duration
 */
Math.easeInOutQuad = function (t, b, c, d) {
  var currentTime = t / (d / 2);
  if (currentTime < 1) return c / 2 * currentTime * currentTime + b;
  currentTime -= 1;
  return -c / 2 * (currentTime * (currentTime - 2) - 1) + b;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToAnchor = scrollToAnchor;
exports.default = Anchor;

var _ForEach = __webpack_require__(10);

var _ForEach2 = _interopRequireDefault(_ForEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
  trigger: 'js-anchor',
  attribute: 'data-anchor',
  offsetTop: 0
}; // For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/


function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

function scrollToAnchor(hash) {
  if (hash) location.hash = hash;
  var element = document.querySelector(location.hash);
  window.scrollTo(0, element.offsetTop - opts.offsetTop);
}

function Anchor(settings) {
  if (settings) handleExtend(settings);
  if (location.hash) scrollToAnchor();

  var triggers = document.querySelectorAll('.' + opts.trigger);
  (0, _ForEach2.default)(triggers, function (index) {
    triggers[index].addEventListener('click', function (event) {
      event.preventDefault();
      var anchorHash = triggers[index].getAttribute(opts.attribute);
      scrollToAnchor(anchorHash);
    });
  });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolicyCookie = undefined;
exports.default = Cookies;

var _jsCookie = __webpack_require__(11);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _Events = __webpack_require__(0);

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
  element: 'js-cookies',
  button: 'js-cookies-accept',
  cookieName: 'accept_cookies',
  visibleClass: 'cookies--state-visible',
  paddingBottom: false
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

function addPaddingToPage() {
  var element = document.querySelector('.' + opts.element);
  var elementHeight = element.offsetHeight;

  document.documentElement.style.paddingBottom = elementHeight + 'px';
}

function cleanPaddingToPage() {
  document.documentElement.style.paddingBottom = 0;
}

var getPolicyCookie = exports.getPolicyCookie = function getPolicyCookie() {
  return _jsCookie2.default.get(opts.cookieName);
};

function Cookies(settings) {
  if (settings) {
    handleExtend(settings);
  }

  var accepted = getPolicyCookie();

  if (accepted === undefined) {
    if (opts.paddingBottom) addPaddingToPage();
    document.querySelector('.' + opts.element).classList.add(opts.visibleClass);
  }

  document.querySelector('.' + opts.button).addEventListener('click', function (event) {
    event.preventDefault();
    _jsCookie2.default.set(opts.cookieName, 'true', { expires: 365 });
    document.querySelector('.' + opts.element).classList.remove(opts.visibleClass);
    if (opts.paddingBottom) cleanPaddingToPage();
  });

  _Events2.default.onResize(addPaddingToPage);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScrollTop = createScrollTop;
exports.default = GoTop;

var _Debounce = __webpack_require__(9);

var _Debounce2 = _interopRequireDefault(_Debounce);

var _ScrollTo = __webpack_require__(1);

var _ScrollTo2 = _interopRequireDefault(_ScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageHeight = document.body.clientHeight;
var maxScrollTop = pageHeight * 0.25;

var scrollIsVisible = false;

var opts = {
  elementClass: 'js-scrollTop',
  hiddenClass: null,
  createElement: true,
  scrollOffset: 0.25
};

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
  maxScrollTop = pageHeight * opts.scrollOffset;
}

function handleScrollTopVisibility() {
  if (window.scrollY >= maxScrollTop && !scrollIsVisible) {
    if (opts.hiddenClass) {
      document.querySelector('.' + opts.elementClass).classList.remove(opts.hiddenClass);
    } else {
      document.querySelector('.' + opts.elementClass).style.display = 'block';
    }
    scrollIsVisible = true;
  } else if (scrollIsVisible) {
    if (opts.hiddenClass) {
      document.querySelector('.' + opts.elementClass).classList.add(opts.hiddenClass);
    } else {
      document.querySelector('.' + opts.elementClass).style.display = 'none';
    }
    scrollIsVisible = false;
  }
}

function createScrollTop() {
  var styles = {
    background: 'rgba(0, 0, 0, .5)',
    border: '0',
    bottom: '24px',
    borderRadius: '50%',
    display: 'block',
    height: '48px',
    position: 'fixed',
    right: '24px',
    textAlign: 'center',
    textDecoration: 'none',
    width: '48px'
  };

  var content = '<svg style="height: 32px; padding: 8px 0; width: 32px;"><path fill="#fff" d="M21.707 13.293l-5-5a.999.999 0 0 0-1.414 0l-5 5a.999.999 0 1 0 1.414 1.414L15 11.414V23a1 1 0 1 0 2 0V11.414l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414z"/></svg>';

  var element = document.createElement('a');

  element.className = opts.elementClass;
  Object.assign(element.style, styles);
  element.innerHTML = content;

  element.addEventListener('click', function (event) {
    event.preventDefault();
    (0, _ScrollTo2.default)(0);
  });

  document.body.appendChild(element);
}

function GoTop(settings) {
  if (settings) {
    handleExtend(settings);
  }

  if (opts.createElement) createScrollTop();
  handleScrollTopVisibility();
  window.addEventListener('scroll', function () {
    (0, _Debounce2.default)(handleScrollTopVisibility);
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = getConfig;
exports.default = ScrollDirection;
var opts = {
  lastScrollTop: 0,
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
    opts.lastScrollTop = currentScrollTop;
  } else if (currentScrollTop > opts.lastScrollTop) {
    if (Math.abs(opts.lastScrollTop - currentScrollTop) >= opts.deltaDown) {
      if (!document.documentElement.classList.contains(opts.classDown)) {
        clearElementClass();
        document.documentElement.classList.add(opts.classDown);
      }
      opts.lastScrollTop = currentScrollTop;
    }
  } else if (Math.abs(opts.lastScrollTop - currentScrollTop) >= opts.deltaUp) {
    if (!document.documentElement.classList.contains(opts.classUp)) {
      clearElementClass();
      document.documentElement.classList.add(opts.classUp);
    }
    opts.lastScrollTop = currentScrollTop;
  }
}

function handleExtend(settings) {
  opts = Object.assign({}, opts, settings);
}

function getConfig() {
  return opts;
}

function ScrollDirection(settings) {
  if (settings) {
    handleExtend(settings);
  }

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
exports.default = ScrollTop;
function ScrollTop() {
    return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Touchable;
function Touchable(container) {
  var touchsupport = 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  var touchClass = touchsupport ? 'touch' : 'non-touch';
  var el = container;
  if (!container) el = document.documentElement;
  el.classList.add(touchClass);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Touchable = exports.ScrollTop = exports.ScrollTo = exports.ScrollDirection = exports.GoTop = exports.Events = exports.getPolicyCookie = exports.Cookies = exports.scrollToAnchor = exports.Anchor = undefined;

var _Anchor = __webpack_require__(2);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Cookies = __webpack_require__(3);

var _Cookies2 = _interopRequireDefault(_Cookies);

var _Events = __webpack_require__(0);

var _Events2 = _interopRequireDefault(_Events);

var _GoTop = __webpack_require__(4);

var _GoTop2 = _interopRequireDefault(_GoTop);

var _ScrollDirection = __webpack_require__(5);

var _ScrollDirection2 = _interopRequireDefault(_ScrollDirection);

var _ScrollTo = __webpack_require__(1);

var _ScrollTo2 = _interopRequireDefault(_ScrollTo);

var _ScrollTop = __webpack_require__(6);

var _ScrollTop2 = _interopRequireDefault(_ScrollTop);

var _Touchable = __webpack_require__(7);

var _Touchable2 = _interopRequireDefault(_Touchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Anchor = _Anchor2.default;
exports.scrollToAnchor = _Anchor.scrollToAnchor;
exports.Cookies = _Cookies2.default;
exports.getPolicyCookie = _Cookies.getPolicyCookie;
exports.Events = _Events2.default;
exports.GoTop = _GoTop2.default;
exports.ScrollDirection = _ScrollDirection2.default;
exports.ScrollTo = _ScrollTo2.default;
exports.ScrollTop = _ScrollTop2.default;
exports.Touchable = _Touchable2.default;

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ForEach;
/**
 * https://jsperf.com/for-vs-foreach/37
 * https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
 */
function ForEach(array, callback, scope) {
  for (var i = 0; i < array.length; i += 1) {
    callback.call(scope, i, array[i]);
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ })
/******/ ]);
});
//# sourceMappingURL=purejs.js.map