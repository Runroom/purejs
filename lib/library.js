(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("library", [], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Touchable = exports.ScrollTop = exports.ScrollTo = exports.Cookies = exports.handleScrollToAnchor = exports.Anchor = undefined;var _Anchor = __webpack_require__(1);var _Anchor2 = _interopRequireDefault(_Anchor);
var _Cookies = __webpack_require__(2);var _Cookies2 = _interopRequireDefault(_Cookies);
var _ScrollTo = __webpack_require__(4);var _ScrollTo2 = _interopRequireDefault(_ScrollTo);
var _ScrollTop = __webpack_require__(5);var _ScrollTop2 = _interopRequireDefault(_ScrollTop);
var _Touchable = __webpack_require__(6);var _Touchable2 = _interopRequireDefault(_Touchable);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.

Anchor = _Anchor2.default;exports.handleScrollToAnchor = _Anchor.handleScrollToAnchor;exports.Cookies = _Cookies2.default;exports.ScrollTo = _ScrollTo2.default;exports.ScrollTop = _ScrollTop2.default;exports.Touchable = _Touchable2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.

















handleScrollToAnchor = handleScrollToAnchor;exports.default =




Anchor;var _ForEach = __webpack_require__(3);var _ForEach2 = _interopRequireDefault(_ForEach);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var opts = { trigger: '.js-anchor', scrollUpClass: 'scroll-up', scrollDownClass: 'scroll-down', offset: 0 };function scrollToAnchor() {var element = document.querySelector(location.hash);window.scrollTo(0, element.offsetTop - opts.offset);}function handleExtend(settings) {opts = Object.assign({}, opts, settings);}function handleScrollToAnchor(hash) {location.hash = hash;scrollToAnchor();}function Anchor(settings) {
  if (settings) {
    handleExtend(settings);
  }

  if (location.hash !== '') {
    scrollToAnchor();

    setTimeout(function () {
      document.documentElement.classList.remove(opts.scrollUpClass);
      document.documentElement.classList.add(opts.scrollDownClass);
    }, 1);
  }

  var triggers = document.querySelectorAll(opts.trigger);
  (0, _ForEach2.default)(triggers, function (index) {
    triggers[index].addEventListener('click', function (event) {
      event.preventDefault();
      location.hash = triggers[index].getAttribute('href');
      scrollToAnchor();
    });
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default =
























Cookies;var _jsCookie = __webpack_require__(8);var _jsCookie2 = _interopRequireDefault(_jsCookie);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var opts = { element: '.js-cookies', button: '.js-cookiesAccept', cookie: 'accept_cookies', visible: 'is-visible', paddingBottom: false };function handleExtend(settings) {opts = Object.assign({}, opts, settings);}function addPaddingToPage() {var element = document.querySelector(opts.element);var elementHeight = element.offsetHeight;document.documentElement.style.paddingBottom = elementHeight + 'px';}function cleanPaddingToPage() {document.documentElement.style.paddingBottom = 0;}function Cookies(settings) {
  if (settings) {
    handleExtend(settings);
  }

  var accepted = _jsCookie2.default.get(opts.cookie);

  if (accepted === undefined) {
    if (opts.paddingBottom) addPaddingToPage();
    document.querySelector(opts.element).classList.add(opts.visible);
  }

  document.querySelector(opts.button).addEventListener('click', function (event) {
    event.preventDefault();
    _jsCookie2.default.set(opts.cookie, 'true', { expires: 365 });
    document.querySelector(opts.element).classList.remove(opts.visible);
    if (opts.paddingBottom) cleanPaddingToPage();
  });

  window.addEventListener('resize', addPaddingToPage, false);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = ForEach;function ForEach(array, callback, scope) {
  for (var i = 0; i < array.length; i += 1) {
    callback.call(scope, i, array[i]);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = ScrollTo;function ScrollTo(startPoint) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = ScrollTop;function ScrollTop() {
    return window.pageYOffset !== undefined ?
    window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = Touchable;function Touchable() {
  var touchsupport =
  'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
  var touchClass = touchsupport ? 'touch' : 'non-touch';
  document.documentElement.classList.add(touchClass);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _index = __webpack_require__(0);

(0, _index.Touchable)();

document.addEventListener('DOMContentLoaded', function () {
  (0, _index.Anchor)({ offset: 56 });
  (0, _index.Cookies)({ paddingBottom: true });

  document.querySelector('.section4').addEventListener('click', function (event) {
    event.preventDefault();
    (0, _index.handleScrollToAnchor)('#Section4');
  });
});

/***/ }),
/* 8 */
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
//# sourceMappingURL=library.js.map