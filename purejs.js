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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_anchorTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/anchorTo */ "./src/lib/anchorTo.ts");
/* harmony import */ var _lib_animateTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/animateTo */ "./src/lib/animateTo.ts");
/* harmony import */ var _lib_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/debounce */ "./src/lib/debounce.ts");
/* harmony import */ var _lib_elementOffsetTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/elementOffsetTop */ "./src/lib/elementOffsetTop.ts");
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/events */ "./src/lib/events.ts");
/* harmony import */ var _lib_forEach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/forEach */ "./src/lib/forEach.ts");
/* harmony import */ var _lib_isExplorer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/isExplorer */ "./src/lib/isExplorer.ts");
/* harmony import */ var _lib_isInt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/isInt */ "./src/lib/isInt.ts");
/* harmony import */ var _lib_isNan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/isNan */ "./src/lib/isNan.ts");
/* harmony import */ var _lib_safeScrollTop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/safeScrollTop */ "./src/lib/safeScrollTop.ts");
/* harmony import */ var _lib_scrollDirection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/scrollDirection */ "./src/lib/scrollDirection.ts");
/* harmony import */ var _lib_touchable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/touchable */ "./src/lib/touchable.ts");












var purejs = {
    anchorTo: _lib_anchorTo__WEBPACK_IMPORTED_MODULE_0__["default"],
    animateTo: _lib_animateTo__WEBPACK_IMPORTED_MODULE_1__["default"],
    debounce: _lib_debounce__WEBPACK_IMPORTED_MODULE_2__["default"],
    elementOffsetTop: _lib_elementOffsetTop__WEBPACK_IMPORTED_MODULE_3__["default"],
    events: _lib_events__WEBPACK_IMPORTED_MODULE_4__["default"],
    forEach: _lib_forEach__WEBPACK_IMPORTED_MODULE_5__["default"],
    isExplorer: _lib_isExplorer__WEBPACK_IMPORTED_MODULE_6__["default"],
    isInt: _lib_isInt__WEBPACK_IMPORTED_MODULE_7__["default"],
    isNan: _lib_isNan__WEBPACK_IMPORTED_MODULE_8__["default"],
    safeScrollTop: _lib_safeScrollTop__WEBPACK_IMPORTED_MODULE_9__["default"],
    scrollDirection: _lib_scrollDirection__WEBPACK_IMPORTED_MODULE_10__["default"],
    touchable: _lib_touchable__WEBPACK_IMPORTED_MODULE_11__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (purejs);


/***/ }),

/***/ "./src/lib/anchorTo.ts":
/*!*****************************!*\
  !*** ./src/lib/anchorTo.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elementOffsetTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementOffsetTop */ "./src/lib/elementOffsetTop.ts");
/* harmony import */ var _isInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isInt */ "./src/lib/isInt.ts");
/* harmony import */ var _isNan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNan */ "./src/lib/isNan.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/



function anchorTo(opts, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var offset, targetTop, totalOffset, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    offset = opts.offset || 0;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    targetTop = Object(_elementOffsetTop__WEBPACK_IMPORTED_MODULE_0__["default"])(opts.element);
                    totalOffset = targetTop - offset;
                    if (Object(_isNan__WEBPACK_IMPORTED_MODULE_2__["default"])(totalOffset)) {
                        throw "The element doesn't exists or is not a number";
                    }
                    if (!Object(_isInt__WEBPACK_IMPORTED_MODULE_1__["default"])(opts.element)) {
                        if (window && 'location' in window && 'hash' in window.location) {
                            window.location.hash = opts.element.toString();
                        }
                    }
                    return [4 /*yield*/, window.scrollTo(0, totalOffset)];
                case 2:
                    _a.sent();
                    if (callback) {
                        callback(null, totalOffset);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if (callback) {
                        callback(error_1.message, null);
                    }
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
/* harmony default export */ __webpack_exports__["default"] = (anchorTo);


/***/ }),

/***/ "./src/lib/animateTo.ts":
/*!******************************!*\
  !*** ./src/lib/animateTo.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elementOffsetTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementOffsetTop */ "./src/lib/elementOffsetTop.ts");
/* harmony import */ var _safeScrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safeScrollTop */ "./src/lib/safeScrollTop.ts");
/* harmony import */ var _isNan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNan */ "./src/lib/isNan.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/



/**
 * t = current time
 * b = start value
 * c = change in value
 * d = speed
 */
var easeInOutQuad = function (t, b, c, d) {
    var currentTime = t / (d / 2);
    if (currentTime < 1)
        return (c / 2) * currentTime * currentTime + b;
    currentTime -= 1;
    return (-c / 2) * (currentTime * (currentTime - 2) - 1) + b;
};
function animateTo(opts, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var speed, offset, start, target, change, increment, currentTime;
        return __generator(this, function (_a) {
            speed = opts.speed || 500;
            offset = opts.offset || 0;
            start = Object(_safeScrollTop__WEBPACK_IMPORTED_MODULE_1__["default"])();
            target = Object(_elementOffsetTop__WEBPACK_IMPORTED_MODULE_0__["default"])(opts.element);
            change = target - start - offset;
            increment = 20;
            currentTime = 0;
            try {
                if (Object(_isNan__WEBPACK_IMPORTED_MODULE_2__["default"])(change)) {
                    throw "The element doesn't exists or is not a number";
                }
                (function animateScroll() {
                    currentTime += increment;
                    var val = easeInOutQuad(currentTime, start, change, speed);
                    window.scroll(0, val);
                    if (currentTime < speed) {
                        setTimeout(animateScroll, increment);
                    }
                    else if (callback) {
                        callback(null, val);
                    }
                })();
            }
            catch (error) {
                throw error;
            }
            return [2 /*return*/];
        });
    });
}
/* harmony default export */ __webpack_exports__["default"] = (animateTo);


/***/ }),

/***/ "./src/lib/debounce.ts":
/*!*****************************!*\
  !*** ./src/lib/debounce.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function debounce(callback, waitMilliseconds, isImmediate) {
    if (waitMilliseconds === void 0) { waitMilliseconds = 50; }
    var timeoutId;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var doLater = function () {
            timeoutId = undefined;
            if (!isImmediate) {
                callback.apply(context, args);
            }
        };
        var shouldCallNow = isImmediate && timeoutId === undefined;
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(doLater, waitMilliseconds);
        if (shouldCallNow) {
            callback.apply(context, args);
        }
    };
}
/* harmony default export */ __webpack_exports__["default"] = (debounce);


/***/ }),

/***/ "./src/lib/elementOffsetTop.ts":
/*!*************************************!*\
  !*** ./src/lib/elementOffsetTop.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isInt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInt */ "./src/lib/isInt.ts");

function elementOffsetTop(value) {
    if (!Object(_isInt__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
        var elem = document.querySelector(value.toString());
        if (elem)
            return elem.offsetTop;
    }
    return value || 0;
}
/* harmony default export */ __webpack_exports__["default"] = (elementOffsetTop);


/***/ }),

/***/ "./src/lib/events.ts":
/*!***************************!*\
  !*** ./src/lib/events.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function events() {
    // see: http://youmightnotneedjquery.com/#ready
    function onDocumentReady(callback) {
        var state = document.readyState;
        if (state === 'complete' || state === 'interactive') {
            return callback();
        }
        document.addEventListener('DOMContentLoaded', function () {
            callback();
        });
    }
    function onResizeWidth(callback) {
        var timer;
        var windowWidth = window.innerWidth;
        window.addEventListener('resize', function () {
            if (windowWidth !== window.innerWidth) {
                windowWidth = window.innerWidth;
                if (timer)
                    clearTimeout(timer);
                timer = setTimeout(function () {
                    callback(windowWidth);
                }, 100);
            }
        });
    }
    return {
        onDocumentReady: onDocumentReady,
        onResizeWidth: onResizeWidth
    };
}
/* harmony default export */ __webpack_exports__["default"] = (events());


/***/ }),

/***/ "./src/lib/forEach.ts":
/*!****************************!*\
  !*** ./src/lib/forEach.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * https://jsperf.com/for-vs-foreach/37
 * https://coderwall.com/p/kvzbpa/don-t-use-array-foreach-use-for-instead
 */
function forEach(haystack, callback, scope) {
    if (Object.prototype.toString.call(haystack) === '[object Object]') {
        var keyHaystack = Object.keys(haystack);
        for (var i = 0, len = keyHaystack.length; i < len; i += 1) {
            if (Object.prototype.hasOwnProperty.call(keyHaystack, i)) {
                callback.call(scope, haystack[keyHaystack[i]], keyHaystack[i], haystack);
            }
        }
    }
    else {
        for (var i = 0, len = haystack.length; i < len; i += 1) {
            callback.call(scope, haystack[i], i, haystack);
        }
    }
}
/* harmony default export */ __webpack_exports__["default"] = (forEach);


/***/ }),

/***/ "./src/lib/isExplorer.ts":
/*!*******************************!*\
  !*** ./src/lib/isExplorer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @ts-ignore
var isExplorer = function () { return !!window.MSInputMethodContext && !!document.documentMode; };
/* harmony default export */ __webpack_exports__["default"] = (isExplorer);


/***/ }),

/***/ "./src/lib/isInt.ts":
/*!**************************!*\
  !*** ./src/lib/isInt.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isInt = function (n) { return Number(n) === n; };
/* harmony default export */ __webpack_exports__["default"] = (isInt);


/***/ }),

/***/ "./src/lib/isNan.ts":
/*!**************************!*\
  !*** ./src/lib/isNan.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isNan = function (n) { return typeof n === 'number' && isNaN(n); };
/* harmony default export */ __webpack_exports__["default"] = (isNan);


/***/ }),

/***/ "./src/lib/safeScrollTop.ts":
/*!**********************************!*\
  !*** ./src/lib/safeScrollTop.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return safeScrollTop; });
function safeScrollTop() {
    return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}


/***/ }),

/***/ "./src/lib/scrollDirection.ts":
/*!************************************!*\
  !*** ./src/lib/scrollDirection.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _safeScrollTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeScrollTop */ "./src/lib/safeScrollTop.ts");

var lastScrollTop = 0;
var status = 0;
function scrollDirection(deltaUp, deltaDown) {
    if (deltaUp === void 0) { deltaUp = 10; }
    if (deltaDown === void 0) { deltaDown = 10; }
    var currentScrollTop = Object(_safeScrollTop__WEBPACK_IMPORTED_MODULE_0__["default"])() || 0;
    if (currentScrollTop <= 0) {
        lastScrollTop = currentScrollTop;
        status = 0;
    }
    else if (currentScrollTop > lastScrollTop) {
        if (Math.abs(lastScrollTop - currentScrollTop) >= deltaDown) {
            lastScrollTop = currentScrollTop;
            status = 1;
        }
    }
    else if (Math.abs(lastScrollTop - currentScrollTop) >= deltaUp) {
        lastScrollTop = currentScrollTop;
        status = -1;
    }
    return status;
}
/* harmony default export */ __webpack_exports__["default"] = (scrollDirection);


/***/ }),

/***/ "./src/lib/touchable.ts":
/*!******************************!*\
  !*** ./src/lib/touchable.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://github.com/Microsoft/TypeScript/issues/21517#issuecomment-365699236
function touchable() {
    var touchsupport = ('ontouchstart' in window) || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
    return !!touchsupport;
}
/* harmony default export */ __webpack_exports__["default"] = (touchable);


/***/ })

/******/ });
});
//# sourceMappingURL=purejs.js.map