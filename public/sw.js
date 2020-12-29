/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
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
/******/ 		var threw = true;
/******/ 		try {
/******/
/******/ 		        var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 		        var cleanup = hasRefresh
/******/ 		          ? self.$RefreshInterceptModuleExecution$(moduleId)
/******/ 		          : function() {};
/******/ 		        try {
/******/ 		        
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		        } finally {
/******/ 		          cleanup();
/******/ 		        }
/******/ 		        
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/*! exports provided: Deferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return Deferred; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/*! exports provided: WorkboxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return WorkboxError; });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = Object(_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__["messageGenerator"])(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/*! exports provided: assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return finalAssertExports; });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? undefined : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/*! exports provided: cacheMatchIgnoreParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheMatchIgnoreParams", function() { return cacheMatchIgnoreParams; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = { ...matchOptions, ignoreSearch: true };
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/*! exports provided: cacheNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/*! exports provided: canConstructResponseFromBodyStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canConstructResponseFromBodyStream", function() { return canConstructResponseFromBodyStream; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/*! exports provided: executeQuotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return executeQuotaErrorCallbacks; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"].size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"]) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/*! exports provided: getFriendlyURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return getFriendlyURL; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? undefined : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/*! exports provided: timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/*! exports provided: waitUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitUntil", function() { return waitUntil; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:6.0.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/*! exports provided: copyResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyResponse", function() { return copyResponse; });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = Object(_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__["canConstructResponseFromBodyStream"])() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/*! exports provided: messageGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageGenerator", function() { return messageGenerator; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__["messages"][code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    undefined : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/*! exports provided: quotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotaErrorCallbacks", function() { return quotaErrorCallbacks; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/*! exports provided: PrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return PrecacheController; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__["PrecacheStrategy"]({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__["PrecacheCacheKeyPlugin"]({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = Object(_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__["createCacheKey"])(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"]('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"]('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {Object} options
     * @param {Event} options.event The install event.
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    install(event) {
        return Object(workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__["waitUntil"])(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__["PrecacheInstallReportPlugin"]();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                Object(_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__["printInstallDetails"])(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent}
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    activate(event) {
        return Object(workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__["waitUntil"])(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                Object(_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__["printCleanupDetails"])(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__["WorkboxError"]('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = { cacheKey, ...options.params };
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/*! exports provided: PrecacheFallbackPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheFallbackPlugin", function() { return PrecacheFallbackPlugin; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController = precacheController ||
            Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/*! exports provided: PrecacheRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheRoute", function() { return PrecacheRoute; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof module:workbox-precaching
 * @extends module:workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"] {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of Object(_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__["generateURLVariations"])(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    return { cacheKey };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(`Precaching did not find a match for ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/*! exports provided: PrecacheStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheStrategy", function() { return PrecacheStrategy; });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







const copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await Object(workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__["copyResponse"])(response) : response;
    }
};
/**
 * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__["Strategy"] {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (!response) {
            // If this is an `install` event then populate the cache. If this is a
            // `fetch` event (or any other event) then respond with the cached
            // response.
            if (handler.event && handler.event.type === 'install') {
                return await this._handleInstall(request, handler);
            }
            return await this._handleFetch(request, handler);
        }
        return response;
    }
    async _handleFetch(request, handler) {
        let response;
        // Fall back to the network if we don't have a cached response
        // (perhaps due to manual cache cleanup).
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`The precached response for ` +
                    `${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network instead.`);
            }
            response = await handler.fetch(request);
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = handler.params && handler.params.cacheKey ||
                await handler.getCacheKey(request, 'read');
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`Precaching is responding to: ` +
                Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`Serving the precached url: ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(cacheKey.url)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        const response = await handler.fetchAndCachePut(request);
        // Any time there's no response, consider it a precaching error.
        let responseSafeToPrecache = Boolean(response);
        // Also consider it an error if the user didn't pass their own
        // cacheWillUpdate plugin, and the response is a 400+ (note: this means
        // that by default opaque responses can be precached).
        if (response && response.status >= 400 &&
            !this._usesCustomCacheableResponseLogic()) {
            responseSafeToPrecache = false;
        }
        if (!responseSafeToPrecache) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__["WorkboxError"]('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * Returns true if any users plugins were added containing their own
     * `cacheWillUpdate` callback.
     *
     * This method indicates whether the default cacheable response logic (i.e.
     * <400, including opaque responses) should be used. If a custom plugin
     * with a `cacheWillUpdate` callback is passed, then the strategy should
     * defer to that plugin's logic.
     *
     * @private
     */
    _usesCustomCacheableResponseLogic() {
        return this.plugins.some((plugin) => plugin.cacheWillUpdate &&
            plugin !== copyRedirectedCacheableResponsesPlugin);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:precaching:6.0.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/*! exports provided: addPlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return addPlugins; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/*! exports provided: addRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__["PrecacheRoute"](precacheController, options);
    Object(workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__["registerRoute"])(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/*! exports provided: cleanupOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return cleanupOutdatedCaches; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
        event.waitUntil(Object(_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["deleteOutdatedCaches"])(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/*! exports provided: createHandlerBoundToURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return createHandlerBoundToURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController, PrecacheRoute, PrecacheStrategy, PrecacheFallbackPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _addRoute_js__WEBPACK_IMPORTED_MODULE_1__["addRoute"]; });

/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["cleanupOutdatedCaches"]; });

/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__["createHandlerBoundToURL"]; });

/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__["getCacheKeyForURL"]; });

/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__["matchPrecache"]; });

/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _precache_js__WEBPACK_IMPORTED_MODULE_6__["precache"]; });

/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__["precacheAndRoute"]; });

/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__["PrecacheController"]; });

/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheRoute", function() { return _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__["PrecacheRoute"]; });

/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheStrategy", function() { return _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__["PrecacheStrategy"]; });

/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheFallbackPlugin", function() { return _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__["PrecacheFallbackPlugin"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */



/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController, PrecacheRoute, PrecacheStrategy, PrecacheFallbackPlugin */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["cleanupOutdatedCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandlerBoundToURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["getCacheKeyForURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["matchPrecache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precacheAndRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheStrategy", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheFallbackPlugin", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheFallbackPlugin"]; });



/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/*! exports provided: matchPrecache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return matchPrecache; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/*! exports provided: precache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return precache; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/*! exports provided: precacheAndRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return precacheAndRoute; });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    Object(_precache_js__WEBPACK_IMPORTED_MODULE_1__["precache"])(entries);
    Object(_addRoute_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"])(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/*! exports provided: PrecacheCacheKeyPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheCacheKeyPlugin", function() { return PrecacheCacheKeyPlugin; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            const cacheKey = params && params.cacheKey ||
                this._precacheController.getCacheKeyForURL(request.url);
            return cacheKey ? new Request(cacheKey) : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/*! exports provided: PrecacheInstallReportPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheInstallReportPlugin", function() { return PrecacheInstallReportPlugin; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                // TODO: `state` should never be undefined...
                const url = state.originalRequest.url;
                if (cachedResponse) {
                    this.notUpdatedURLs.push(url);
                }
                else {
                    this.updatedURLs.push(url);
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/*! exports provided: createCacheKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return createCacheKey; });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/*! exports provided: deleteOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOutdatedCaches", function() { return deleteOutdatedCaches; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/*! exports provided: generateURLVariations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateURLVariations", function() { return generateURLVariations; });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = Object(_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["removeIgnoredSearchParams"])(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/*! exports provided: getOrCreatePrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreatePrecacheController", function() { return getOrCreatePrecacheController; });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/*! exports provided: printCleanupDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printCleanupDetails", function() { return printCleanupDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/*! exports provided: printInstallDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printInstallDetails", function() { return printInstallDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/*! exports provided: removeIgnoredSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIgnoredSearchParams", function() { return removeIgnoredSearchParams; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/*! exports provided: RegExpRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpRoute", function() { return RegExpRoute; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"] {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * [handler's]{@link module:workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if ((url.origin !== location.origin) && (result.index !== 0)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`The regular expression '${regExp}' only partially matched ` +
                        `against the cross-origin URL '${url}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {module:workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["defaultMethod"]) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["validMethods"], { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__["normalizeHandler"])(handler);
        this.match = match;
        this.method = method;
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            if (event.data && event.data.type === 'CACHE_URLS') {
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([
                    `Found a route to handle this request:`, route,
                ]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`, params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`No route found for: ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`Router is responding to: ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        if (responsePromise instanceof Promise && this._catchHandler) {
            responsePromise = responsePromise.catch((err) => {
                if (true) {
                    // Still include URL here as it will be async from the console group
                    // and may not make sense without the URL
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupCollapsed(`Error thrown when responding to: ` +
                        ` ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(url)}. Falling back to Catch Handler.`);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Error thrown by:`, route);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].error(err);
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].groupEnd();
                }
                return this._catchHandler.handle({ url, request, event });
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do. 
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`While routing ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                params = matchResult;
                if (Array.isArray(matchResult) && matchResult.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if ((matchResult.constructor === Object &&
                    Object.keys(matchResult).length === 0)) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__["defaultMethod"]) {
        this._defaultHandlerMap.set(method, Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = Object(_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__["normalizeHandler"])(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:routing:6.0.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/*! exports provided: registerRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRoute", function() { return registerRoute; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http') ?
                captureUrl.pathname : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if ((new RegExp(`${wildcards}`)).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if ((url.pathname === captureUrl.pathname) &&
                    (url.origin !== captureUrl.origin)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"](matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__["RegExpRoute"](capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"](capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__["Route"]) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = Object(_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__["getOrCreateDefaultRouter"])();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/*! exports provided: defaultMethod, validMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMethod", function() { return defaultMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMethods", function() { return validMethods; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/*! exports provided: getOrCreateDefaultRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateDefaultRouter", function() { return getOrCreateDefaultRouter; });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__["Router"]();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/*! exports provided: normalizeHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHandler", function() { return normalizeHandler; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/*! exports provided: Strategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strategy", function() { return Strategy; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * [route]{@link module:workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string' ?
            new Request(options.request) :
            options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__["StrategyHandler"](this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__["WorkboxError"]('no-response', { url: request.url });
            }
        }
        catch (error) {
            for (const callback of handler.iterateCallbacks('handlerDidError')) {
                response = await callback({ error, event, request });
                if (response) {
                    break;
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`While responding to '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}', ` +
                    `an ${error} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            error = waitUntilError;
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/*! exports provided: StrategyHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyHandler", function() { return StrategyHandler; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return (typeof input === 'string') ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {module:workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     *     [match callback]{@link module:workbox-routing~matchCallback},
     *     (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * [match callback]{@link module:workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__["Deferred"]();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` and `plugins` defined on the strategy
     * object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    fetch(input) {
        return this.waitUntil((async () => {
            const { event } = this;
            let request = toRequest(input);
            if (request.mode === 'navigate' &&
                event instanceof FetchEvent &&
                event.preloadResponse) {
                const possiblePreloadResponse = await event.preloadResponse;
                if (possiblePreloadResponse) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].log(`Using a preloaded navigation response for ` +
                            `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}'`);
                    }
                    return possiblePreloadResponse;
                }
            }
            // If there is a fetchDidFail plugin, we need to save a clone of the
            // original request before it's either modified by a requestWillFetch
            // plugin or before the original request's body is consumed via fetch().
            const originalRequest = this.hasCallback('fetchDidFail') ?
                request.clone() : null;
            try {
                for (const cb of this.iterateCallbacks('requestWillFetch')) {
                    request = await cb({ request: request.clone(), event });
                }
            }
            catch (err) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__["WorkboxError"]('plugin-error-request-will-fetch', {
                    thrownError: err,
                });
            }
            // The request can be altered by plugins with `requestWillFetch` making
            // the original request (most likely from a `fetch` event) different
            // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
            const pluginFilteredRequest = request.clone();
            try {
                let fetchResponse;
                // See https://github.com/GoogleChrome/workbox/issues/1796
                fetchResponse = await fetch(request, request.mode === 'navigate' ?
                    undefined : this._strategy.fetchOptions);
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].debug(`Network request for ` +
                        `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}' returned a response with ` +
                        `status '${fetchResponse.status}'.`);
                }
                for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                    fetchResponse = await callback({
                        event,
                        request: pluginFilteredRequest,
                        response: fetchResponse,
                    });
                }
                return fetchResponse;
            }
            catch (error) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].error(`Network request for ` +
                        `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(request.url)}' threw an error.`, error);
                }
                // `originalRequest` will only exist if a `fetchDidFail` callback
                // is being used (see above).
                if (originalRequest) {
                    await this.runCallbacks('fetchDidFail', {
                        error,
                        event,
                        originalRequest: originalRequest.clone(),
                        request: pluginFilteredRequest.clone(),
                    });
                }
                throw error;
            }
        })());
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    cacheMatch(key) {
        return this.waitUntil((async () => {
            const request = toRequest(key);
            let cachedResponse;
            const { cacheName, matchOptions } = this._strategy;
            const effectiveRequest = await this.getCacheKey(request, 'read');
            const multiMatchOptions = { ...matchOptions, ...{ cacheName } };
            cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
            if (true) {
                if (cachedResponse) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].debug(`Found a cached response in '${cacheName}'.`);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].debug(`No cached response found in '${cacheName}'.`);
                }
            }
            for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
                cachedResponse = (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
            }
            return cachedResponse;
        })());
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Promise<void>} response The response to cache.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await Object(workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__["timeout"])(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__["WorkboxError"]('attempt-to-cache-non-get-request', {
                    url: Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].error(`Cannot cache non-existent response for ` +
                    `'${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__["WorkboxError"]('cache-put-with-no-response', {
                url: Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].debug(`Response '${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback ? await Object(workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__["cacheMatchIgnoreParams"])(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) :
            null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__["getFriendlyURL"])(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ?
                responseToCache.clone() : responseToCache);
        }
        catch (error) {
            // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
            if (error.name === 'QuotaExceededError') {
                await Object(workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__["executeQuotaErrorCallbacks"])();
            }
            throw error;
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        if (!this._cacheKeys[mode]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    params: this.params,
                }));
            }
            this._cacheKeys[mode] = effectiveRequest;
        }
        return this._cacheKeys[mode];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = { ...param, state };
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while (promise = this._extendLifetimePromises.shift()) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve();
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache = (await callback({
                request: this.request,
                response: responseToCache,
                event: this.event,
            })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__["logger"].debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:strategies:6.0.2'] && _();
}
catch (e) { }


/***/ }),

/***/ "./worker.js":
/*!*******************!*\
  !*** ./worker.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");

Object(workbox_precaching__WEBPACK_IMPORTED_MODULE_0__["precacheAndRoute"])([{'revision':null,'url':'/_next/static/chunks/0.js'},{'revision':null,'url':'/_next/static/chunks/amp.js'},{'revision':null,'url':'/_next/static/chunks/main.js'},{'revision':null,'url':'/_next/static/chunks/pages/_app.js'},{'revision':null,'url':'/_next/static/chunks/pages/index.js'},{'revision':null,'url':'/_next/static/chunks/pages/movies.js'},{'revision':null,'url':'/_next/static/chunks/polyfills.js'},{'revision':null,'url':'/_next/static/chunks/react-refresh.js'},{'revision':null,'url':'/_next/static/chunks/webpack.js'},{'revision':null,'url':'/_next/static/development/_buildManifest.js'},{'revision':null,'url':'/_next/static/development/_ssgManifest.js'},{'revision':null,'url':'/_next/static/webpack/a3b382ac6913935ba0d5.hot-update.json'},{'revision':'412192267449ea67eebabd3e62acfe51','url':'/favicon.ico'},{'revision':'4fb1bc8e6a2877c8ccd748e70d3bebbf','url':'/icons/android-icon-192x192-dunplab-manifest-25122.png'},{'revision':'8f051273a6cd737d524d22d5e6452adb','url':'/icons/apple-icon-114x114-dunplab-manifest-25122.png'},{'revision':'b0ff1a9cc0ec64a9bfa6a3c06f8ad80d','url':'/icons/apple-icon-120x120-dunplab-manifest-25122.png'},{'revision':'a8437b2a2410a8a94d2cdd21111f5df6','url':'/icons/apple-icon-144x144-dunplab-manifest-25122.png'},{'revision':'f7b7580a095f723fa607e5217926b289','url':'/icons/apple-icon-152x152-dunplab-manifest-25122.png'},{'revision':'8c1f75f91776bcc3a5b954771aa83010','url':'/icons/apple-icon-180x180-dunplab-manifest-25122.png'},{'revision':'b69e70138b3dffe01203f33e5a835e80','url':'/icons/apple-icon-57x57-dunplab-manifest-25122.png'},{'revision':'ea45a29abdf53814ce7c3976d29d3eff','url':'/icons/apple-icon-60x60-dunplab-manifest-25122.png'},{'revision':'7f8226f10b81d47a971ae43bbd17dc21','url':'/icons/apple-icon-72x72-dunplab-manifest-25122.png'},{'revision':'f6a48053a9bdcb0cec9ccc8aa42d7fd6','url':'/icons/apple-icon-76x76-dunplab-manifest-25122.png'},{'revision':'9d0905cc10fd3eaba73aad790874b508','url':'/icons/favicon-16x16-dunplab-manifest-25122.png'},{'revision':'1cd3b76acebd6866c028af7999fe7eaa','url':'/icons/favicon-32x32-dunplab-manifest-25122.png'},{'revision':'8621a24174e7ffb02308054b5ca14735','url':'/icons/favicon-96x96-dunplab-manifest-25122.png'},{'revision':'688128be216cc2f753fe641590f2fcd3','url':'/manifest.json'},{'revision':'7a7a9fab4ca3224cad19254b6aba0be3','url':'/sw.js'},{'revision':'0222c3eef0be0734c8cd707b37c55d7e','url':'/vercel.svg'}]);
var cacheName = "v1";
var cachePages = ["/", "about"];
self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker 🤙");
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    cache.addAll(cachePages);
  }));
});
self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (cache) {
      if (cache !== cacheName) {
        return caches["delete"](cache);
      }
    }));
  }));
});
self.addEventListener("fetch", function (e) {
  e.respondWith(fetch(e.request)["catch"](function () {
    return caches.match(e.request);
  }));
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS93YWl0VW50aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvY29weVJlc3BvbnNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9QcmVjYWNoZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVGYWxsYmFja1BsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9QcmVjYWNoZVJvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlU3RyYXRlZ3kuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvYWRkUGx1Z2lucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9hZGRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9jbGVhbnVwT3V0ZGF0ZWRDYWNoZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvZ2V0Q2FjaGVLZXlGb3JVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL21hdGNoUHJlY2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvcHJlY2FjaGVBbmRSb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9QcmVjYWNoZUNhY2hlS2V5UGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL1ByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9jcmVhdGVDYWNoZUtleS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9kZWxldGVPdXRkYXRlZENhY2hlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9nZW5lcmF0ZVVSTFZhcmlhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3JlbW92ZUlnbm9yZWRTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUmVnRXhwUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvUm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL192ZXJzaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3JlZ2lzdGVyUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0cmF0ZWd5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL1N0cmF0ZWd5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vd29ya2VyLmpzIl0sIm5hbWVzIjpbInByZWNhY2hlQW5kUm91dGUiLCJzZWxmIiwiX19XQl9NQU5JRkVTVCIsImNhY2hlTmFtZSIsImNhY2hlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwid2FpdFVudGlsIiwiY2FjaGVzIiwib3BlbiIsInRoZW4iLCJjYWNoZSIsImFkZEFsbCIsImtleXMiLCJjYWNoZU5hbWVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImUiLCJyZXNwb25kV2l0aCIsImZldGNoIiwicmVxdWVzdCIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQSxZQUFZO1FBQ1o7UUFDQTs7UUFFQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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LE1BQU0sVUFBTixDQUFjRyxLQUFkLENBQVA7QUFDRDtBQUNGLEtBSkQsQ0FESyxDQUFQO0FBT0QsR0FSRCxDQURGO0FBV0QsQ0FaRDtBQWNBWixJQUFJLENBQUNJLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVNlLENBQVQsRUFBWTtBQUN6Q0EsR0FBQyxDQUFDQyxXQUFGLENBQWNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDRyxPQUFILENBQUwsVUFBdUI7QUFBQSxXQUFNYixNQUFNLENBQUNjLEtBQVAsQ0FBYUosQ0FBQyxDQUFDRyxPQUFmLENBQU47QUFBQSxHQUF2QixDQUFkO0FBQ0QsQ0FGRCIsImZpbGUiOiIuLi9wdWJsaWMvc3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBub29wIGZucyB0byBwcmV2ZW50IHJ1bnRpbWUgZXJyb3JzIGR1cmluZyBpbml0aWFsaXphdGlvblxuIFx0aWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdHNlbGYuJFJlZnJlc2hSZWckID0gZnVuY3Rpb24gKCkge307XG4gXHRcdHNlbGYuJFJlZnJlc2hTaWckID0gZnVuY3Rpb24gKCkge1xuIFx0XHRcdHJldHVybiBmdW5jdGlvbiAodHlwZSkge1xuIFx0XHRcdFx0cmV0dXJuIHR5cGU7XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcblxuIFx0XHQgICAgICAgIHZhciBoYXNSZWZyZXNoID0gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgISFzZWxmLiRSZWZyZXNoSW50ZXJjZXB0TW9kdWxlRXhlY3V0aW9uJDtcbiBcdFx0ICAgICAgICB2YXIgY2xlYW51cCA9IGhhc1JlZnJlc2hcbiBcdFx0ICAgICAgICAgID8gc2VsZi4kUmVmcmVzaEludGVyY2VwdE1vZHVsZUV4ZWN1dGlvbiQobW9kdWxlSWQpXG4gXHRcdCAgICAgICAgICA6IGZ1bmN0aW9uKCkge307XG4gXHRcdCAgICAgICAgdHJ5IHtcbiBcdFx0ICAgICAgICBcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQgICAgICAgIH0gZmluYWxseSB7XG4gXHRcdCAgICAgICAgICBjbGVhbnVwKCk7XG4gXHRcdCAgICAgICAgfVxuIFx0XHQgICAgICAgIFxuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd29ya2VyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgRGVmZXJyZWQgY2xhc3MgY29tcG9zZXMgUHJvbWlzZXMgaW4gYSB3YXkgdGhhdCBhbGxvd3MgZm9yIHRoZW0gdG8gYmVcbiAqIHJlc29sdmVkIG9yIHJlamVjdGVkIGZyb20gb3V0c2lkZSB0aGUgY29uc3RydWN0b3IuIEluIG1vc3QgY2FzZXMgcHJvbWlzZXNcbiAqIHNob3VsZCBiZSB1c2VkIGRpcmVjdGx5LCBidXQgRGVmZXJyZWRzIGNhbiBiZSBuZWNlc3Nhcnkgd2hlbiB0aGUgbG9naWMgdG9cbiAqIHJlc29sdmUgYSBwcm9taXNlIG11c3QgYmUgc2VwYXJhdGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGVmZXJyZWQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9taXNlIGFuZCBleHBvc2VzIGl0cyByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGFzIG1ldGhvZHMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGVmZXJyZWQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IG1lc3NhZ2VHZW5lcmF0b3IgfSBmcm9tICcuLi9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZUdlbmVyYXRvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogV29ya2JveCBlcnJvcnMgc2hvdWxkIGJlIHRocm93biB3aXRoIHRoaXMgY2xhc3MuXG4gKiBUaGlzIGFsbG93cyB1c2UgdG8gZW5zdXJlIHRoZSB0eXBlIGVhc2lseSBpbiB0ZXN0cyxcbiAqIGhlbHBzIGRldmVsb3BlcnMgaWRlbnRpZnkgZXJyb3JzIGZyb20gd29ya2JveFxuICogZWFzaWx5IGFuZCBhbGxvd3MgdXNlIHRvIG9wdGltaXNlIGVycm9yXG4gKiBtZXNzYWdlcyBjb3JyZWN0bHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgV29ya2JveEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBUaGUgZXJyb3IgY29kZSB0aGF0XG4gICAgICogaWRlbnRpZmllcyB0aGlzIHBhcnRpY3VsYXIgZXJyb3IuXG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBkZXRhaWxzIEFueSByZWxldmFudCBhcmd1bWVudHNcbiAgICAgKiB0aGF0IHdpbGwgaGVscCBkZXZlbG9wZXJzIGlkZW50aWZ5IGlzc3VlcyBzaG91bGRcbiAgICAgKiBiZSBhZGRlZCBhcyBhIGtleSBvbiB0aGUgY29udGV4dCBvYmplY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlR2VuZXJhdG9yKGVycm9yQ29kZSwgZGV0YWlscyk7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBlcnJvckNvZGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgfVxufVxuZXhwb3J0IHsgV29ya2JveEVycm9yIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKlxuICogVGhpcyBtZXRob2QgdGhyb3dzIGlmIHRoZSBzdXBwbGllZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXkuXG4gKiBUaGUgZGVzdHJ1Y3RlZCB2YWx1ZXMgYXJlIHJlcXVpcmVkIHRvIHByb2R1Y2UgYSBtZWFuaW5nZnVsIGVycm9yIGZvciB1c2Vycy5cbiAqIFRoZSBkZXN0cnVjdGVkIGFuZCByZXN0cnVjdHVyZWQgb2JqZWN0IGlzIHNvIGl0J3MgY2xlYXIgd2hhdCBpc1xuICogbmVlZGVkLlxuICovXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub3QtYW4tYXJyYXknLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaGFzTWV0aG9kID0gKG9iamVjdCwgZXhwZWN0ZWRNZXRob2QsIGRldGFpbHMpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG9iamVjdFtleHBlY3RlZE1ldGhvZF07XG4gICAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRNZXRob2QnXSA9IGV4cGVjdGVkTWV0aG9kO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLWEtbWV0aG9kJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzVHlwZSA9IChvYmplY3QsIGV4cGVjdGVkVHlwZSwgZGV0YWlscykgPT4ge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRUeXBlJ10gPSBleHBlY3RlZFR5cGU7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC10eXBlJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzSW5zdGFuY2UgPSAob2JqZWN0LCBleHBlY3RlZENsYXNzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCEob2JqZWN0IGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRDbGFzcyddID0gZXhwZWN0ZWRDbGFzcztcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LWNsYXNzJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzT25lT2YgPSAodmFsdWUsIHZhbGlkVmFsdWVzLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCF2YWxpZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgZGV0YWlsc1sndmFsaWRWYWx1ZURlc2NyaXB0aW9uJ10gPVxuICAgICAgICAgICAgYFZhbGlkIHZhbHVlcyBhcmUgJHtKU09OLnN0cmluZ2lmeSh2YWxpZFZhbHVlcyl9LmA7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtdmFsdWUnLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaXNBcnJheU9mQ2xhc3MgPSAodmFsdWUsIGV4cGVjdGVkQ2xhc3MsIGRldGFpbHMpID0+IHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hcnJheS1vZi1jbGFzcycsIGRldGFpbHMpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGZpbmFsQXNzZXJ0RXhwb3J0cyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBudWxsIDoge1xuICAgIGhhc01ldGhvZCxcbiAgICBpc0FycmF5LFxuICAgIGlzSW5zdGFuY2UsXG4gICAgaXNPbmVPZixcbiAgICBpc1R5cGUsXG4gICAgaXNBcnJheU9mQ2xhc3MsXG59O1xuZXhwb3J0IHsgZmluYWxBc3NlcnRFeHBvcnRzIGFzIGFzc2VydCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuZnVuY3Rpb24gc3RyaXBQYXJhbXMoZnVsbFVSTCwgaWdub3JlUGFyYW1zKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRVUkwgPSBuZXcgVVJMKGZ1bGxVUkwpO1xuICAgIGZvciAoY29uc3QgcGFyYW0gb2YgaWdub3JlUGFyYW1zKSB7XG4gICAgICAgIHN0cmlwcGVkVVJMLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaXBwZWRVUkwuaHJlZjtcbn1cbi8qKlxuICogTWF0Y2hlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSwgaWdub3Jpbmcgc3BlY2lmaWMgVVJMIHBhcmFtcy4gVGhpcyBpcyBzaW1pbGFyXG4gKiB0byB0aGUgYGlnbm9yZVNlYXJjaGAgb3B0aW9uLCBidXQgaXQgYWxsb3dzIHlvdSB0byBpZ25vcmUganVzdCBzcGVjaWZpY1xuICogcGFyYW1zICh3aGlsZSBjb250aW51aW5nIHRvIG1hdGNoIG9uIHRoZSBvdGhlcnMpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0NhY2hlfSBjYWNoZVxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gbWF0Y2hPcHRpb25zXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlnbm9yZVBhcmFtc1xuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICovXG5hc3luYyBmdW5jdGlvbiBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKGNhY2hlLCByZXF1ZXN0LCBpZ25vcmVQYXJhbXMsIG1hdGNoT3B0aW9ucykge1xuICAgIGNvbnN0IHN0cmlwcGVkUmVxdWVzdFVSTCA9IHN0cmlwUGFyYW1zKHJlcXVlc3QudXJsLCBpZ25vcmVQYXJhbXMpO1xuICAgIC8vIElmIHRoZSByZXF1ZXN0IGRvZXNuJ3QgaW5jbHVkZSBhbnkgaWdub3JlZCBwYXJhbXMsIG1hdGNoIGFzIG5vcm1hbC5cbiAgICBpZiAocmVxdWVzdC51cmwgPT09IHN0cmlwcGVkUmVxdWVzdFVSTCkge1xuICAgICAgICByZXR1cm4gY2FjaGUubWF0Y2gocmVxdWVzdCwgbWF0Y2hPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBtYXRjaCBieSBjb21wYXJpbmcga2V5c1xuICAgIGNvbnN0IGtleXNPcHRpb25zID0geyAuLi5tYXRjaE9wdGlvbnMsIGlnbm9yZVNlYXJjaDogdHJ1ZSB9O1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGF3YWl0IGNhY2hlLmtleXMocmVxdWVzdCwga2V5c09wdGlvbnMpO1xuICAgIGZvciAoY29uc3QgY2FjaGVLZXkgb2YgY2FjaGVLZXlzKSB7XG4gICAgICAgIGNvbnN0IHN0cmlwcGVkQ2FjaGVLZXlVUkwgPSBzdHJpcFBhcmFtcyhjYWNoZUtleS51cmwsIGlnbm9yZVBhcmFtcyk7XG4gICAgICAgIGlmIChzdHJpcHBlZFJlcXVlc3RVUkwgPT09IHN0cmlwcGVkQ2FjaGVLZXlVUkwpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSwgbWF0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IF9jYWNoZU5hbWVEZXRhaWxzID0ge1xuICAgIGdvb2dsZUFuYWx5dGljczogJ2dvb2dsZUFuYWx5dGljcycsXG4gICAgcHJlY2FjaGU6ICdwcmVjYWNoZS12MicsXG4gICAgcHJlZml4OiAnd29ya2JveCcsXG4gICAgcnVudGltZTogJ3J1bnRpbWUnLFxuICAgIHN1ZmZpeDogdHlwZW9mIHJlZ2lzdHJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyByZWdpc3RyYXRpb24uc2NvcGUgOiAnJyxcbn07XG5jb25zdCBfY3JlYXRlQ2FjaGVOYW1lID0gKGNhY2hlTmFtZSkgPT4ge1xuICAgIHJldHVybiBbX2NhY2hlTmFtZURldGFpbHMucHJlZml4LCBjYWNoZU5hbWUsIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeF1cbiAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgIC5qb2luKCctJyk7XG59O1xuY29uc3QgZWFjaENhY2hlTmFtZURldGFpbCA9IChmbikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKF9jYWNoZU5hbWVEZXRhaWxzKSkge1xuICAgICAgICBmbihrZXkpO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgY2FjaGVOYW1lcyA9IHtcbiAgICB1cGRhdGVEZXRhaWxzOiAoZGV0YWlscykgPT4ge1xuICAgICAgICBlYWNoQ2FjaGVOYW1lRGV0YWlsKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsc1trZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIF9jYWNoZU5hbWVEZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0R29vZ2xlQW5hbHl0aWNzTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5nb29nbGVBbmFseXRpY3MpO1xuICAgIH0sXG4gICAgZ2V0UHJlY2FjaGVOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnByZWNhY2hlKTtcbiAgICB9LFxuICAgIGdldFByZWZpeDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMucHJlZml4O1xuICAgIH0sXG4gICAgZ2V0UnVudGltZU5hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucnVudGltZSk7XG4gICAgfSxcbiAgICBnZXRTdWZmaXg6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHN1cHBvcnRTdGF0dXM7XG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzXG4gKiBjb25zdHJ1Y3RpbmcgYSBuZXcgYFJlc3BvbnNlYCBmcm9tIGEgYHJlc3BvbnNlLmJvZHlgIHN0cmVhbS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAsIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgY2FuIHN1Y2Nlc3NmdWxseVxuICogICAgIGNvbnN0cnVjdCBhIGBSZXNwb25zZWAgZnJvbSBhIGByZXNwb25zZS5ib2R5YCBzdHJlYW0sIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0oKSB7XG4gICAgaWYgKHN1cHBvcnRTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0ZXN0UmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoJycpO1xuICAgICAgICBpZiAoJ2JvZHknIGluIHRlc3RSZXNwb25zZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVzcG9uc2UodGVzdFJlc3BvbnNlLmJvZHkpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cHBvcnRTdGF0dXMgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRTdGF0dXM7XG59XG5leHBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4uL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSdW5zIGFsbCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zLCBvbmUgYXQgYSB0aW1lIHNlcXVlbnRpYWxseSwgaW4gdGhlIG9yZGVyXG4gKiBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICogQHByaXZhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgQWJvdXQgdG8gcnVuICR7cXVvdGFFcnJvckNhbGxiYWNrcy5zaXplfSBgICtcbiAgICAgICAgICAgIGBjYWxsYmFja3MgdG8gY2xlYW4gdXAgY2FjaGVzLmApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHF1b3RhRXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgYXdhaXQgY2FsbGJhY2soKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coY2FsbGJhY2ssICdpcyBjb21wbGV0ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKCdGaW5pc2hlZCBydW5uaW5nIGNhbGxiYWNrcy4nKTtcbiAgICB9XG59XG5leHBvcnQgeyBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBnZXRGcmllbmRseVVSTCA9ICh1cmwpID0+IHtcbiAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKFN0cmluZyh1cmwpLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMzIzXG4gICAgLy8gV2Ugd2FudCB0byBpbmNsdWRlIGV2ZXJ5dGhpbmcsIGV4Y2VwdCBmb3IgdGhlIG9yaWdpbiBpZiBpdCdzIHNhbWUtb3JpZ2luLlxuICAgIHJldHVybiB1cmxPYmouaHJlZi5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2xvY2F0aW9uLm9yaWdpbn1gKSwgJycpO1xufTtcbmV4cG9ydCB7IGdldEZyaWVuZGx5VVJMIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBsb2dnZXIgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IG51bGwgOiAoKCkgPT4ge1xuICAgIC8vIERvbid0IG92ZXJ3cml0ZSB0aGlzIHZhbHVlIGlmIGl0J3MgYWxyZWFkeSBzZXQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIyODQjaXNzdWVjb21tZW50LTU2MDQ3MDkyM1xuICAgIGlmICghKCdfX1dCX0RJU0FCTEVfREVWX0xPR1MnIGluIHNlbGYpKSB7XG4gICAgICAgIHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTID0gZmFsc2U7XG4gICAgfVxuICAgIGxldCBpbkdyb3VwID0gZmFsc2U7XG4gICAgY29uc3QgbWV0aG9kVG9Db2xvck1hcCA9IHtcbiAgICAgICAgZGVidWc6IGAjN2Y4YzhkYCxcbiAgICAgICAgbG9nOiBgIzJlY2M3MWAsXG4gICAgICAgIHdhcm46IGAjZjM5YzEyYCxcbiAgICAgICAgZXJyb3I6IGAjYzAzOTJiYCxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGAjMzQ5OGRiYCxcbiAgICAgICAgZ3JvdXBFbmQ6IG51bGwsXG4gICAgfTtcbiAgICBjb25zdCBwcmludCA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwQ29sbGFwc2VkJykge1xuICAgICAgICAgICAgLy8gU2FmYXJpIGRvZXNuJ3QgcHJpbnQgYWxsIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoKSBhcmd1bWVudHM6XG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTgyNzU0XG4gICAgICAgICAgICBpZiAoL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgICAgICAgYGJhY2tncm91bmQ6ICR7bWV0aG9kVG9Db2xvck1hcFttZXRob2RdfWAsXG4gICAgICAgICAgICBgYm9yZGVyLXJhZGl1czogMC41ZW1gLFxuICAgICAgICAgICAgYGNvbG9yOiB3aGl0ZWAsXG4gICAgICAgICAgICBgZm9udC13ZWlnaHQ6IGJvbGRgLFxuICAgICAgICAgICAgYHBhZGRpbmc6IDJweCAwLjVlbWAsXG4gICAgICAgIF07XG4gICAgICAgIC8vIFdoZW4gaW4gYSBncm91cCwgdGhlIHdvcmtib3ggcHJlZml4IGlzIG5vdCBkaXNwbGF5ZWQuXG4gICAgICAgIGNvbnN0IGxvZ1ByZWZpeCA9IGluR3JvdXAgPyBbXSA6IFsnJWN3b3JrYm94Jywgc3R5bGVzLmpvaW4oJzsnKV07XG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5sb2dQcmVmaXgsIC4uLmFyZ3MpO1xuICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBFbmQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFwaSA9IHt9O1xuICAgIGNvbnN0IGxvZ2dlck1ldGhvZHMgPSBPYmplY3Qua2V5cyhtZXRob2RUb0NvbG9yTWFwKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBsb2dnZXJNZXRob2RzKSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGtleTtcbiAgICAgICAgYXBpW21ldGhvZF0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgcHJpbnQobWV0aG9kLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaTtcbn0pKCkpO1xuZXhwb3J0IHsgbG9nZ2VyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW5kIHRoZSBwYXNzZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIFRoaXMgdXRpbGl0eSBpcyBhbiBhc3luYy9hd2FpdC1mcmllbmRseSB2ZXJzaW9uIG9mIGBzZXRUaW1lb3V0YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbXNcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHV0aWxpdHkgbWV0aG9kIHRoYXQgbWFrZXMgaXQgZWFzaWVyIHRvIHVzZSBgZXZlbnQud2FpdFVudGlsYCB3aXRoXG4gKiBhc3luYyBmdW5jdGlvbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXN5bmNGblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jRm4pIHtcbiAgICBjb25zdCByZXR1cm5Qcm9taXNlID0gYXN5bmNGbigpO1xuICAgIGV2ZW50LndhaXRVbnRpbChyZXR1cm5Qcm9taXNlKTtcbiAgICByZXR1cm4gcmV0dXJuUHJvbWlzZTtcbn1cbmV4cG9ydCB7IHdhaXRVbnRpbCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6Y29yZTo2LjAuMiddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0gfSBmcm9tICcuL19wcml2YXRlL2NhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0uanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWxsb3dzIGRldmVsb3BlcnMgdG8gY29weSBhIHJlc3BvbnNlIGFuZCBtb2RpZnkgaXRzIGBoZWFkZXJzYCwgYHN0YXR1c2AsXG4gKiBvciBgc3RhdHVzVGV4dGAgdmFsdWVzICh0aGUgdmFsdWVzIHNldHRhYmxlIHZpYSBhXG4gKiBbYFJlc3BvbnNlSW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNwb25zZS9SZXNwb25zZSNTeW50YXh9XG4gKiBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yKS5cbiAqIFRvIG1vZGlmeSB0aGVzZSB2YWx1ZXMsIHBhc3MgYSBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGF0XG4gKiBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2l0aCBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcmVzcG9uc2UgcHJvcGVydGllc1xuICogYHtoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHR9YC4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIHVzZWQgYXMgdGhlIGBSZXNwb25zZUluaXRgIGZvciB0aGUgbmV3IGBSZXNwb25zZWAuIFRvIGNoYW5nZSB0aGUgdmFsdWVzXG4gKiBlaXRoZXIgbW9kaWZ5IHRoZSBwYXNzZWQgcGFyYW1ldGVyKHMpIGFuZCByZXR1cm4gaXQsIG9yIHJldHVybiBhIHRvdGFsbHlcbiAqIG5ldyBvYmplY3QuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgaW50ZW50aW9uYWxseSBsaW1pdGVkIHRvIHNhbWUtb3JpZ2luIHJlc3BvbnNlcywgcmVnYXJkbGVzcyBvZlxuICogd2hldGhlciBDT1JTIHdhcyB1c2VkIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbW9kaWZpZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvcHlSZXNwb25zZShyZXNwb25zZSwgbW9kaWZpZXIpIHtcbiAgICBsZXQgb3JpZ2luID0gbnVsbDtcbiAgICAvLyBJZiByZXNwb25zZS51cmwgaXNuJ3Qgc2V0LCBhc3N1bWUgaXQncyBjcm9zcy1vcmlnaW4gYW5kIGtlZXAgb3JpZ2luIG51bGwuXG4gICAgaWYgKHJlc3BvbnNlLnVybCkge1xuICAgICAgICBjb25zdCByZXNwb25zZVVSTCA9IG5ldyBVUkwocmVzcG9uc2UudXJsKTtcbiAgICAgICAgb3JpZ2luID0gcmVzcG9uc2VVUkwub3JpZ2luO1xuICAgIH1cbiAgICBpZiAob3JpZ2luICE9PSBzZWxmLmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjcm9zcy1vcmlnaW4tY29weS1yZXNwb25zZScsIHsgb3JpZ2luIH0pO1xuICAgIH1cbiAgICBjb25zdCBjbG9uZWRSZXNwb25zZSA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggYFJlc3BvbnNlSW5pdGAgb2JqZWN0IGJ5IGNsb25pbmcgdGhlIGhlYWRlcnMuXG4gICAgY29uc3QgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhjbG9uZWRSZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgc3RhdHVzOiBjbG9uZWRSZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IGNsb25lZFJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgfTtcbiAgICAvLyBBcHBseSBhbnkgdXNlciBtb2RpZmljYXRpb25zLlxuICAgIGNvbnN0IG1vZGlmaWVkUmVzcG9uc2VJbml0ID0gbW9kaWZpZXIgPyBtb2RpZmllcihyZXNwb25zZUluaXQpIDogcmVzcG9uc2VJbml0O1xuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHJlc3BvbnNlIGZyb20gdGhlIGJvZHkgc3RyZWFtIGFuZCBgUmVzcG9uc2VJbml0YFxuICAgIC8vIG1vZGlmaWNhdGlvbnMuIE5vdGU6IG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgUmVzcG9uc2UuYm9keSBzdHJlYW0sXG4gICAgLy8gc28gZmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIGVudGlyZSBib2R5IGludG8gbWVtb3J5IGFzIGEgYmxvYi5cbiAgICBjb25zdCBib2R5ID0gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpID9cbiAgICAgICAgY2xvbmVkUmVzcG9uc2UuYm9keSA6IGF3YWl0IGNsb25lZFJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG1vZGlmaWVkUmVzcG9uc2VJbml0KTtcbn1cbmV4cG9ydCB7IGNvcHlSZXNwb25zZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgZmFsbGJhY2sgPSAoY29kZSwgLi4uYXJncykgPT4ge1xuICAgIGxldCBtc2cgPSBjb2RlO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbXNnICs9IGAgOjogJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gO1xuICAgIH1cbiAgICByZXR1cm4gbXNnO1xufTtcbmNvbnN0IGdlbmVyYXRvckZ1bmN0aW9uID0gKGNvZGUsIGRldGFpbHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlc1tjb2RlXTtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBtZXNzYWdlIGZvciBjb2RlICcke2NvZGV9Jy5gKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2UoZGV0YWlscyk7XG59O1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VHZW5lcmF0b3IgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgP1xuICAgIGZhbGxiYWNrIDogZ2VuZXJhdG9yRnVuY3Rpb247XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uLy4uL192ZXJzaW9uLmpzJztcbmV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IHtcbiAgICAnaW52YWxpZC12YWx1ZSc6ICh7IHBhcmFtTmFtZSwgdmFsaWRWYWx1ZURlc2NyaXB0aW9uLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmICghcGFyYW1OYW1lIHx8ICF2YWxpZFZhbHVlRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC12YWx1ZScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBnaXZlbiBhIHZhbHVlIHdpdGggYW4gYCArXG4gICAgICAgICAgICBgdW5leHBlY3RlZCB2YWx1ZS4gJHt2YWxpZFZhbHVlRGVzY3JpcHRpb259IFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICAgICAgICBgJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LmA7XG4gICAgfSxcbiAgICAnbm90LWFuLWFycmF5JzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKCFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWUgfHwgIWZ1bmNOYW1lIHx8ICFwYXJhbU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbm90LWFuLWFycmF5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSBwYXJhbWV0ZXIgJyR7cGFyYW1OYW1lfScgcGFzc2VkIGludG8gYCArXG4gICAgICAgICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCknIG11c3QgYmUgYW4gYXJyYXkuYDtcbiAgICB9LFxuICAgICdpbmNvcnJlY3QtdHlwZSc6ICh7IGV4cGVjdGVkVHlwZSwgcGFyYW1OYW1lLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZFR5cGUgfHwgIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LXR5cGUnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZSA/IChjbGFzc05hbWUgKyAnLicpIDogJyd9YCArXG4gICAgICAgICAgICBgJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBvZiB0eXBlICR7ZXhwZWN0ZWRUeXBlfS5gO1xuICAgIH0sXG4gICAgJ2luY29ycmVjdC1jbGFzcyc6ICh7IGV4cGVjdGVkQ2xhc3MsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgaXNSZXR1cm5WYWx1ZVByb2JsZW0gfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkQ2xhc3MgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC1jbGFzcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmV0dXJuVmFsdWVQcm9ibGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gYFRoZSByZXR1cm4gdmFsdWUgZnJvbSBgICtcbiAgICAgICAgICAgICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWUgPyAoY2xhc3NOYW1lICsgJy4nKSA6ICcnfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICAgICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzcy5uYW1lfS5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZSA/IChjbGFzc05hbWUgKyAnLicpIDogJyd9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICAgICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3MubmFtZX0uYDtcbiAgICB9LFxuICAgICdtaXNzaW5nLWEtbWV0aG9kJzogKHsgZXhwZWN0ZWRNZXRob2QsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIGlmICghZXhwZWN0ZWRNZXRob2QgfHwgIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhY2xhc3NOYW1lXG4gICAgICAgICAgICB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbWlzc2luZy1hLW1ldGhvZCcgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGV4cGVjdGVkIHRoZSBgICtcbiAgICAgICAgICAgIGAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgdG8gZXhwb3NlIGEgJyR7ZXhwZWN0ZWRNZXRob2R9JyBtZXRob2QuYDtcbiAgICB9LFxuICAgICdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnOiAoeyBlbnRyeSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgQW4gdW5leHBlY3RlZCBlbnRyeSB3YXMgcGFzc2VkIHRvIGAgK1xuICAgICAgICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIFRoZSBlbnRyeSBgICtcbiAgICAgICAgICAgIGAnJHtKU09OLnN0cmluZ2lmeShlbnRyeSl9JyBpc24ndCBzdXBwb3J0ZWQuIFlvdSBtdXN0IHN1cHBseSBhbiBhcnJheSBvZiBgICtcbiAgICAgICAgICAgIGBzdHJpbmdzIHdpdGggb25lIG9yIG1vcmUgY2hhcmFjdGVycywgb2JqZWN0cyB3aXRoIGEgdXJsIHByb3BlcnR5IG9yIGAgK1xuICAgICAgICAgICAgYFJlcXVlc3Qgb2JqZWN0cy5gO1xuICAgIH0sXG4gICAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnOiAoeyBmaXJzdEVudHJ5LCBzZWNvbmRFbnRyeSB9KSA9PiB7XG4gICAgICAgIGlmICghZmlyc3RFbnRyeSB8fCAhc2Vjb25kRW50cnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICtcbiAgICAgICAgICAgICAgICBgJ2FkZC10by1jYWNoZS1saXN0LWR1cGxpY2F0ZS1lbnRyaWVzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICAgICAgICBgJHtmaXJzdEVudHJ5Ll9lbnRyeUlkfSBidXQgZGlmZmVyZW50IHJldmlzaW9uIGRldGFpbHMuIFdvcmtib3ggaXMgYCArXG4gICAgICAgICAgICBgdW5hYmxlIHRvIGNhY2hlIGFuZCB2ZXJzaW9uIHRoZSBhc3NldCBjb3JyZWN0bHkuIFBsZWFzZSByZW1vdmUgb25lIGAgK1xuICAgICAgICAgICAgYG9mIHRoZSBlbnRyaWVzLmA7XG4gICAgfSxcbiAgICAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCc6ICh7IHRocm93bkVycm9yIH0pID0+IHtcbiAgICAgICAgaWYgKCF0aHJvd25FcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgQW4gZXJyb3Igd2FzIHRocm93biBieSBhIHBsdWdpbnMgJ3JlcXVlc3RXaWxsRmV0Y2goKScgbWV0aG9kLiBgICtcbiAgICAgICAgICAgIGBUaGUgdGhyb3duIGVycm9yIG1lc3NhZ2Ugd2FzOiAnJHt0aHJvd25FcnJvci5tZXNzYWdlfScuYDtcbiAgICB9LFxuICAgICdpbnZhbGlkLWNhY2hlLW5hbWUnOiAoeyBjYWNoZU5hbWVJZCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBpZiAoIWNhY2hlTmFtZUlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGEgJ2NhY2hlTmFtZUlkJyBmb3IgZXJyb3IgJ2ludmFsaWQtY2FjaGUtbmFtZSdgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFlvdSBtdXN0IHByb3ZpZGUgYSBuYW1lIGNvbnRhaW5pbmcgYXQgbGVhc3Qgb25lIGNoYXJhY3RlciBmb3IgYCArXG4gICAgICAgICAgICBgc2V0Q2FjaGVEZXRhaWxzKHske2NhY2hlTmFtZUlkfTogJy4uLid9KS4gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgICAgICAgIGAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9J2A7XG4gICAgfSxcbiAgICAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJzogKHsgbWV0aG9kIH0pID0+IHtcbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byBgICtcbiAgICAgICAgICAgICAgICBgJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgIHByZXZpb3VzbHkgYCArXG4gICAgICAgICAgICBgcmVnaXN0ZXJlZCBmb3IgdGhlIG1ldGhvZCB0eXBlICcke21ldGhvZH0nLmA7XG4gICAgfSxcbiAgICAndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgcHJldmlvdXNseSBgICtcbiAgICAgICAgICAgIGByZWdpc3RlcmVkLmA7XG4gICAgfSxcbiAgICAncXVldWUtcmVwbGF5LWZhaWxlZCc6ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFJlcGxheWluZyB0aGUgYmFja2dyb3VuZCBzeW5jIHF1ZXVlICcke25hbWV9JyBmYWlsZWQuYDtcbiAgICB9LFxuICAgICdkdXBsaWNhdGUtcXVldWUtbmFtZSc6ICh7IG5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBRdWV1ZSBuYW1lICcke25hbWV9JyBpcyBhbHJlYWR5IGJlaW5nIHVzZWQuIGAgK1xuICAgICAgICAgICAgYEFsbCBpbnN0YW5jZXMgb2YgYmFja2dyb3VuZFN5bmMuUXVldWUgbXVzdCBiZSBnaXZlbiB1bmlxdWUgbmFtZXMuYDtcbiAgICB9LFxuICAgICdleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlJzogKHsgbWV0aG9kTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgJyR7bWV0aG9kTmFtZX0oKScgbWV0aG9kIGNhbiBvbmx5IGJlIHVzZWQgd2hlbiB0aGUgYCArXG4gICAgICAgICAgICBgJyR7cGFyYW1OYW1lfScgaXMgdXNlZCBpbiB0aGUgY29uc3RydWN0b3IuYDtcbiAgICB9LFxuICAgICd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgc3VwcGxpZWQgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBhbiB1bnN1cHBvcnRlZCB0eXBlLiBgICtcbiAgICAgICAgICAgIGBQbGVhc2UgY2hlY2sgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9IGZvciBgICtcbiAgICAgICAgICAgIGB2YWxpZCBpbnB1dCB0eXBlcy5gO1xuICAgIH0sXG4gICAgJ25vdC1hcnJheS1vZi1jbGFzcyc6ICh7IHZhbHVlLCBleHBlY3RlZENsYXNzLCBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSBvZiBgICtcbiAgICAgICAgICAgIGAnJHtleHBlY3RlZENsYXNzfScgb2JqZWN0cy4gUmVjZWl2ZWQgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSwnLiBgICtcbiAgICAgICAgICAgIGBQbGVhc2UgY2hlY2sgdGhlIGNhbGwgdG8gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKSBgICtcbiAgICAgICAgICAgIGB0byBmaXggdGhlIGlzc3VlLmA7XG4gICAgfSxcbiAgICAnbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcubWF4RW50cmllcyBvciBjb25maWcubWF4QWdlU2Vjb25kc2AgK1xuICAgICAgICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YDtcbiAgICB9LFxuICAgICdzdGF0dXNlcy1vci1oZWFkZXJzLXJlcXVpcmVkJzogKHsgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcuc3RhdHVzZXMgb3IgY29uZmlnLmhlYWRlcnNgICtcbiAgICAgICAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWA7XG4gICAgfSxcbiAgICAnaW52YWxpZC1zdHJpbmcnOiAoeyBtb2R1bGVOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lIH0pID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU5hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtc3RyaW5nJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFdoZW4gdXNpbmcgc3RyaW5ncywgdGhlICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IHN0YXJ0IHdpdGggYCArXG4gICAgICAgICAgICBgJ2h0dHAnIChmb3IgY3Jvc3Mtb3JpZ2luIG1hdGNoZXMpIG9yICcvJyAoZm9yIHNhbWUtb3JpZ2luIG1hdGNoZXMpLiBgICtcbiAgICAgICAgICAgIGBQbGVhc2Ugc2VlIHRoZSBkb2NzIGZvciAke21vZHVsZU5hbWV9LiR7ZnVuY05hbWV9KCkgZm9yIGAgK1xuICAgICAgICAgICAgYG1vcmUgaW5mby5gO1xuICAgIH0sXG4gICAgJ2NoYW5uZWwtbmFtZS1yZXF1aXJlZCc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBwcm92aWRlIGEgY2hhbm5lbE5hbWUgdG8gY29uc3RydWN0IGEgYCArXG4gICAgICAgICAgICBgQnJvYWRjYXN0Q2FjaGVVcGRhdGUgaW5zdGFuY2UuYDtcbiAgICB9LFxuICAgICdpbnZhbGlkLXJlc3BvbnNlcy1hcmUtc2FtZS1hcmdzJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBhcmd1bWVudHMgcGFzc2VkIGludG8gcmVzcG9uc2VzQXJlU2FtZSgpIGFwcGVhciB0byBiZSBgICtcbiAgICAgICAgICAgIGBpbnZhbGlkLiBQbGVhc2UgZW5zdXJlIHZhbGlkIFJlc3BvbnNlcyBhcmUgdXNlZC5gO1xuICAgIH0sXG4gICAgJ2V4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHknOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgWW91IG11c3QgcHJvdmlkZSBhICdjYWNoZU5hbWUnIHByb3BlcnR5IHdoZW4gdXNpbmcgdGhlIGAgK1xuICAgICAgICAgICAgYGV4cGlyYXRpb24gcGx1Z2luIHdpdGggYSBydW50aW1lIGNhY2hpbmcgc3RyYXRlZ3kuYDtcbiAgICB9LFxuICAgICd1bml0LW11c3QtYmUtYnl0ZXMnOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICd1bml0LW11c3QtYmUtYnl0ZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlICd1bml0JyBwb3J0aW9uIG9mIHRoZSBSYW5nZSBoZWFkZXIgbXVzdCBiZSBzZXQgdG8gJ2J5dGVzJy4gYCArXG4gICAgICAgICAgICBgVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImA7XG4gICAgfSxcbiAgICAnc2luZ2xlLXJhbmdlLW9ubHknOiAoeyBub3JtYWxpemVkUmFuZ2VIZWFkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdzaW5nbGUtcmFuZ2Utb25seScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBNdWx0aXBsZSByYW5nZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgYSAgc2luZ2xlIHN0YXJ0IGAgK1xuICAgICAgICAgICAgYHZhbHVlLCBhbmQgb3B0aW9uYWwgZW5kIHZhbHVlLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgICB9LFxuICAgICdpbnZhbGlkLXJhbmdlLXZhbHVlcyc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSBSYW5nZSBoZWFkZXIgaXMgbWlzc2luZyBib3RoIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLiBBdCBsZWFzdCBgICtcbiAgICAgICAgICAgIGBvbmUgb2YgdGhvc2UgdmFsdWVzIGlzIG5lZWRlZC4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICAgICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImA7XG4gICAgfSxcbiAgICAnbm8tcmFuZ2UtaGVhZGVyJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYE5vIFJhbmdlIGhlYWRlciB3YXMgZm91bmQgaW4gdGhlIFJlcXVlc3QgcHJvdmlkZWQuYDtcbiAgICB9LFxuICAgICdyYW5nZS1ub3Qtc2F0aXNmaWFibGUnOiAoeyBzaXplLCBzdGFydCwgZW5kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgc3RhcnQgKCR7c3RhcnR9KSBhbmQgZW5kICgke2VuZH0pIHZhbHVlcyBpbiB0aGUgUmFuZ2UgYXJlIGAgK1xuICAgICAgICAgICAgYG5vdCBzYXRpc2ZpYWJsZSBieSB0aGUgY2FjaGVkIHJlc3BvbnNlLCB3aGljaCBpcyAke3NpemV9IGJ5dGVzLmA7XG4gICAgfSxcbiAgICAnYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnOiAoeyB1cmwsIG1ldGhvZCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVW5hYmxlIHRvIGNhY2hlICcke3VybH0nIGJlY2F1c2UgaXQgaXMgYSAnJHttZXRob2R9JyByZXF1ZXN0IGFuZCBgICtcbiAgICAgICAgICAgIGBvbmx5ICdHRVQnIHJlcXVlc3RzIGNhbiBiZSBjYWNoZWQuYDtcbiAgICB9LFxuICAgICdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZSc6ICh7IHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlcmUgd2FzIGFuIGF0dGVtcHQgdG8gY2FjaGUgJyR7dXJsfScgYnV0IHRoZSByZXNwb25zZSB3YXMgbm90IGAgK1xuICAgICAgICAgICAgYGRlZmluZWQuYDtcbiAgICB9LFxuICAgICduby1yZXNwb25zZSc6ICh7IHVybCwgZXJyb3IgfSkgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBUaGUgc3RyYXRlZ3kgY291bGQgbm90IGdlbmVyYXRlIGEgcmVzcG9uc2UgZm9yICcke3VybH0nLmA7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgIFRoZSB1bmRlcmx5aW5nIGVycm9yIGlzICR7ZXJyb3J9LmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICAnYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnOiAoeyB1cmwsIHN0YXR1cyB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIHByZWNhY2hpbmcgcmVxdWVzdCBmb3IgJyR7dXJsfScgZmFpbGVkYCArXG4gICAgICAgICAgICAoc3RhdHVzID8gYCB3aXRoIGFuIEhUVFAgc3RhdHVzIG9mICR7c3RhdHVzfS5gIDogYC5gKTtcbiAgICB9LFxuICAgICdub24tcHJlY2FjaGVkLXVybCc6ICh7IHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwoJyR7dXJsfScpIHdhcyBjYWxsZWQsIGJ1dCB0aGF0IFVSTCBpcyBgICtcbiAgICAgICAgICAgIGBub3QgcHJlY2FjaGVkLiBQbGVhc2UgcGFzcyBpbiBhIFVSTCB0aGF0IGlzIHByZWNhY2hlZCBpbnN0ZWFkLmA7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctaW50ZWdyaXRpZXMnOiAoeyB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICAgICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICAgICAgICBgJHt1cmx9IHdpdGggZGlmZmVyZW50IGludGVncml0eSB2YWx1ZXMuIFBsZWFzZSByZW1vdmUgb25lIG9mIHRoZW0uYDtcbiAgICB9LFxuICAgICdtaXNzaW5nLXByZWNhY2hlLWVudHJ5JzogKHsgY2FjaGVOYW1lLCB1cmwgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFVuYWJsZSB0byBmaW5kIGEgcHJlY2FjaGVkIHJlc3BvbnNlIGluICR7Y2FjaGVOYW1lfSBmb3IgJHt1cmx9LmA7XG4gICAgfSxcbiAgICAnY3Jvc3Mtb3JpZ2luLWNvcHktcmVzcG9uc2UnOiAoeyBvcmlnaW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gYHdvcmtib3gtY29yZS5jb3B5UmVzcG9uc2UoKSBjYW4gb25seSBiZSB1c2VkIHdpdGggc2FtZS1vcmlnaW4gYCArXG4gICAgICAgICAgICBgcmVzcG9uc2VzLiBJdCB3YXMgcGFzc2VkIGEgcmVzcG9uc2Ugd2l0aCBvcmlnaW4gJHtvcmlnaW59LmA7XG4gICAgfSxcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIENhbGxiYWNrcyB0byBiZSBleGVjdXRlZCB3aGVuZXZlciB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZXhwb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IHdhaXRVbnRpbCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS93YWl0VW50aWwuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FjaGVLZXkgfSBmcm9tICcuL3V0aWxzL2NyZWF0ZUNhY2hlS2V5LmpzJztcbmltcG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9IGZyb20gJy4vdXRpbHMvUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luLmpzJztcbmltcG9ydCB7IFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4gfSBmcm9tICcuL3V0aWxzL1ByZWNhY2hlQ2FjaGVLZXlQbHVnaW4uanMnO1xuaW1wb3J0IHsgcHJpbnRDbGVhbnVwRGV0YWlscyB9IGZyb20gJy4vdXRpbHMvcHJpbnRDbGVhbnVwRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBwcmludEluc3RhbGxEZXRhaWxzIH0gZnJvbSAnLi91dGlscy9wcmludEluc3RhbGxEZXRhaWxzLmpzJztcbmltcG9ydCB7IFByZWNhY2hlU3RyYXRlZ3kgfSBmcm9tICcuL1ByZWNhY2hlU3RyYXRlZ3kuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogUGVyZm9ybXMgZWZmaWNpZW50IHByZWNhY2hpbmcgb2YgYXNzZXRzLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmNsYXNzIFByZWNhY2hlQ29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IFByZWNhY2hlQ29udHJvbGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBUaGUgY2FjaGUgdG8gdXNlIGZvciBwcmVjYWNoaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wbHVnaW5zXSBQbHVnaW5zIHRvIHVzZSB3aGVuIHByZWNhY2hpbmcgYXMgd2VsbFxuICAgICAqIGFzIHJlc3BvbmRpbmcgdG8gZmV0Y2ggZXZlbnRzIGZvciBwcmVjYWNoZWQgYXNzZXRzLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvXG4gICAgICogZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgY2FjaGVOYW1lLCBwbHVnaW5zID0gW10sIGZhbGxiYWNrVG9OZXR3b3JrID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl91cmxzVG9DYWNoZU1vZGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IG5ldyBQcmVjYWNoZVN0cmF0ZWd5KHtcbiAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoY2FjaGVOYW1lKSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAuLi5wbHVnaW5zLFxuICAgICAgICAgICAgICAgIG5ldyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luKHsgcHJlY2FjaGVDb250cm9sbGVyOiB0aGlzIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZhbGxiYWNrVG9OZXR3b3JrLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQmluZCB0aGUgaW5zdGFsbCBhbmQgYWN0aXZhdGUgbWV0aG9kcyB0byB0aGUgaW5zdGFuY2UuXG4gICAgICAgIHRoaXMuaW5zdGFsbCA9IHRoaXMuaW5zdGFsbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlID0gdGhpcy5hY3RpdmF0ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7bW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZVN0cmF0ZWd5fSBUaGUgc3RyYXRlZ3kgY3JlYXRlZCBieSB0aGlzIGNvbnRyb2xsZXIgYW5kXG4gICAgICogdXNlZCB0byBjYWNoZSBhc3NldHMgYW5kIHJlc3BvbmQgdG8gZmV0Y2ggZXZlbnRzLlxuICAgICAqL1xuICAgIGdldCBzdHJhdGVneSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGl0ZW1zIHRvIHRoZSBwcmVjYWNoZSBsaXN0LCByZW1vdmluZyBhbnkgZHVwbGljYXRlcyBhbmRcbiAgICAgKiBzdG9yZXMgdGhlIGZpbGVzIGluIHRoZVxuICAgICAqIFtcInByZWNhY2hlIGNhY2hlXCJde0BsaW5rIG1vZHVsZTp3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30gd2hlbiB0aGUgc2VydmljZVxuICAgICAqIHdvcmtlciBpbnN0YWxscy5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBbZW50cmllcz1bXV0gQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAgICAgKi9cbiAgICBwcmVjYWNoZShlbnRyaWVzKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYWNoZUxpc3QoZW50cmllcyk7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkKSB7XG4gICAgICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCB0aGlzLmluc3RhbGwpO1xuICAgICAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGUpO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFsbEFuZEFjdGl2ZUxpc3RlbmVyc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGFkZCBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICAgICAqIGFuZCBlbnN1cmluZyB0aGUgaW5mb3JtYXRpb24gaXMgdmFsaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLlByZWNhY2hlRW50cnl8c3RyaW5nPn0gZW50cmllc1xuICAgICAqICAgICBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICAgICAqL1xuICAgIGFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5KGVudHJpZXMsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1wcmVjYWNoaW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQcmVjYWNoZUNvbnRyb2xsZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnYWRkVG9DYWNoZUxpc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2VudHJpZXMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsc1RvV2FybkFib3V0ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjI1OVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB1cmxzVG9XYXJuQWJvdXQucHVzaChlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbnRyeSAmJiBlbnRyeS5yZXZpc2lvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdXJsc1RvV2FybkFib3V0LnB1c2goZW50cnkudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgY2FjaGVLZXksIHVybCB9ID0gY3JlYXRlQ2FjaGVLZXkoZW50cnkpO1xuICAgICAgICAgICAgY29uc3QgY2FjaGVNb2RlID0gKHR5cGVvZiBlbnRyeSAhPT0gJ3N0cmluZycgJiYgZW50cnkucmV2aXNpb24pID9cbiAgICAgICAgICAgICAgICAncmVsb2FkJyA6ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGlmICh0aGlzLl91cmxzVG9DYWNoZUtleXMuaGFzKHVybCkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl91cmxzVG9DYWNoZUtleXMuZ2V0KHVybCkgIT09IGNhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcycsIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFbnRyeTogdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRFbnRyeTogY2FjaGVLZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ICE9PSAnc3RyaW5nJyAmJiBlbnRyeS5pbnRlZ3JpdHkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5oYXMoY2FjaGVLZXkpICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KSAhPT0gZW50cnkuaW50ZWdyaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5zZXQoY2FjaGVLZXksIGVudHJ5LmludGVncml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cmxzVG9DYWNoZUtleXMuc2V0KHVybCwgY2FjaGVLZXkpO1xuICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVNb2Rlcy5zZXQodXJsLCBjYWNoZU1vZGUpO1xuICAgICAgICAgICAgaWYgKHVybHNUb1dhcm5BYm91dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBgV29ya2JveCBpcyBwcmVjYWNoaW5nIFVSTHMgd2l0aG91dCByZXZpc2lvbiBgICtcbiAgICAgICAgICAgICAgICAgICAgYGluZm86ICR7dXJsc1RvV2FybkFib3V0LmpvaW4oJywgJyl9XFxuVGhpcyBpcyBnZW5lcmFsbHkgTk9UIHNhZmUuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgTGVhcm4gbW9yZSBhdCBodHRwczovL2JpdC5seS93Yi1wcmVjYWNoZWA7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIGNvbnNvbGUgZGlyZWN0bHkgdG8gZGlzcGxheSB0aGlzIHdhcm5pbmcgd2l0aG91dCBibG9hdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBidW5kbGUgc2l6ZXMgYnkgcHVsbGluZyBpbiBhbGwgb2YgdGhlIGxvZ2dlciBjb2RlYmFzZSBpbiBwcm9kLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4od2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVjYWNoZXMgbmV3IGFuZCB1cGRhdGVkIGFzc2V0cy4gQ2FsbCB0aGlzIG1ldGhvZCBmcm9tIHRoZSBzZXJ2aWNlIHdvcmtlclxuICAgICAqIGluc3RhbGwgZXZlbnQuXG4gICAgICpcbiAgICAgKiBOb3RlOiB0aGlzIG1ldGhvZCBjYWxscyBgZXZlbnQud2FpdFVudGlsKClgIGZvciB5b3UsIHNvIHlvdSBkbyBub3QgbmVlZFxuICAgICAqIHRvIGNhbGwgaXQgeW91cnNlbGYgaW4geW91ciBldmVudCBoYW5kbGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgaW5zdGFsbCBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuSW5zdGFsbFJlc3VsdD59XG4gICAgICovXG4gICAgaW5zdGFsbChldmVudCkge1xuICAgICAgICByZXR1cm4gd2FpdFVudGlsKGV2ZW50LCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YWxsUmVwb3J0UGx1Z2luID0gbmV3IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbigpO1xuICAgICAgICAgICAgdGhpcy5zdHJhdGVneS5wbHVnaW5zLnB1c2goaW5zdGFsbFJlcG9ydFBsdWdpbik7XG4gICAgICAgICAgICAvLyBDYWNoZSBlbnRyaWVzIG9uZSBhdCBhIHRpbWUuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yNTI4XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFt1cmwsIGNhY2hlS2V5XSBvZiB0aGlzLl91cmxzVG9DYWNoZUtleXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlZ3JpdHkgPSB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmdldChjYWNoZUtleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVNb2RlID0gdGhpcy5fdXJsc1RvQ2FjaGVNb2Rlcy5nZXQodXJsKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIGludGVncml0eSxcbiAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGNhY2hlTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5zdHJhdGVneS5oYW5kbGVBbGwoe1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgY2FjaGVLZXkgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cGRhdGVkVVJMcywgbm90VXBkYXRlZFVSTHMgfSA9IGluc3RhbGxSZXBvcnRQbHVnaW47XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHByaW50SW5zdGFsbERldGFpbHModXBkYXRlZFVSTHMsIG5vdFVwZGF0ZWRVUkxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHVwZGF0ZWRVUkxzLCBub3RVcGRhdGVkVVJMcyB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBhc3NldHMgdGhhdCBhcmUgbm8gbG9uZ2VyIHByZXNlbnQgaW4gdGhlIGN1cnJlbnQgcHJlY2FjaGUgbWFuaWZlc3QuXG4gICAgICogQ2FsbCB0aGlzIG1ldGhvZCBmcm9tIHRoZSBzZXJ2aWNlIHdvcmtlciBhY3RpdmF0ZSBldmVudC5cbiAgICAgKlxuICAgICAqIE5vdGU6IHRoaXMgbWV0aG9kIGNhbGxzIGBldmVudC53YWl0VW50aWwoKWAgZm9yIHlvdSwgc28geW91IGRvIG5vdCBuZWVkXG4gICAgICogdG8gY2FsbCBpdCB5b3Vyc2VsZiBpbiB5b3VyIGV2ZW50IGhhbmRsZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLkNsZWFudXBSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFjdGl2YXRlKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLnN0cmF0ZWd5LmNhY2hlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cyA9IGF3YWl0IGNhY2hlLmtleXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkQ2FjaGVLZXlzID0gbmV3IFNldCh0aGlzLl91cmxzVG9DYWNoZUtleXMudmFsdWVzKCkpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFVSTHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiBjdXJyZW50bHlDYWNoZWRSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIGlmICghZXhwZWN0ZWRDYWNoZUtleXMuaGFzKHJlcXVlc3QudXJsKSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjYWNoZS5kZWxldGUocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRVUkxzLnB1c2gocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBkZWxldGVkVVJMcyB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG1hcHBpbmcgb2YgYSBwcmVjYWNoZWQgVVJMIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhY2hlIGtleSwgdGFraW5nXG4gICAgICogaW50byBhY2NvdW50IHRoZSByZXZpc2lvbiBpbmZvcm1hdGlvbiBmb3IgdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIHN0cmluZz59IEEgVVJMIHRvIGNhY2hlIGtleSBtYXBwaW5nLlxuICAgICAqL1xuICAgIGdldFVSTHNUb0NhY2hlS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHRoZSBVUkxzIHRoYXQgaGF2ZSBiZWVuIHByZWNhY2hlZCBieSB0aGUgY3VycmVudFxuICAgICAqIHNlcnZpY2Ugd29ya2VyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn0gVGhlIHByZWNhY2hlZCBVUkxzLlxuICAgICAqL1xuICAgIGdldENhY2hlZFVSTHMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmtleXMoKV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhY2hlIGtleSB1c2VkIGZvciBzdG9yaW5nIGEgZ2l2ZW4gVVJMLiBJZiB0aGF0IFVSTCBpc1xuICAgICAqIHVudmVyc2lvbmVkLCBsaWtlIGAvaW5kZXguaHRtbCcsIHRoZW4gdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZSBvcmlnaW5hbFxuICAgICAqIFVSTCB3aXRoIGEgc2VhcmNoIHBhcmFtZXRlciBhcHBlbmRlZCB0byBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgQSBVUkwgd2hvc2UgY2FjaGUga2V5IHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmVyc2lvbmVkIFVSTCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEgY2FjaGUga2V5XG4gICAgICogZm9yIHRoZSBvcmlnaW5hbCBVUkwsIG9yIHVuZGVmaW5lZCBpZiB0aGF0IFVSTCBpc24ndCBwcmVjYWNoZWQuXG4gICAgICovXG4gICAgZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKSB7XG4gICAgICAgIGNvbnN0IHVybE9iamVjdCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsT2JqZWN0LmhyZWYpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGFjdHMgYXMgYSBkcm9wLWluIHJlcGxhY2VtZW50IGZvclxuICAgICAqIFtgY2FjaGUubWF0Y2goKWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9tYXRjaClcbiAgICAgKiB3aXRoIHRoZSBmb2xsb3dpbmcgZGlmZmVyZW5jZXM6XG4gICAgICpcbiAgICAgKiAtIEl0IGtub3dzIHdoYXQgdGhlIG5hbWUgb2YgdGhlIHByZWNhY2hlIGlzLCBhbmQgb25seSBjaGVja3MgaW4gdGhhdCBjYWNoZS5cbiAgICAgKiAtIEl0IGFsbG93cyB5b3UgdG8gcGFzcyBpbiBhbiBcIm9yaWdpbmFsXCIgVVJMIHdpdGhvdXQgdmVyc2lvbmluZyBwYXJhbWV0ZXJzLFxuICAgICAqIGFuZCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgbG9vayB1cCB0aGUgY29ycmVjdCBjYWNoZSBrZXkgZm9yIHRoZSBjdXJyZW50bHlcbiAgICAgKiBhY3RpdmUgcmV2aXNpb24gb2YgdGhhdCBVUkwuXG4gICAgICpcbiAgICAgKiBFLmcuLCBgbWF0Y2hQcmVjYWNoZSgnaW5kZXguaHRtbCcpYCB3aWxsIGZpbmQgdGhlIGNvcnJlY3QgcHJlY2FjaGVkXG4gICAgICogcmVzcG9uc2UgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIHNlcnZpY2Ugd29ya2VyLCBldmVuIGlmIHRoZSBhY3R1YWwgY2FjaGVcbiAgICAgKiBrZXkgaXMgYCcvaW5kZXguaHRtbD9fX1dCX1JFVklTSU9OX189MTIzNGFiY2QnYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlcXVlc3R9IHJlcXVlc3QgVGhlIGtleSAod2l0aG91dCByZXZpc2lvbmluZyBwYXJhbWV0ZXJzKVxuICAgICAqIHRvIGxvb2sgdXAgaW4gdGhlIHByZWNhY2hlLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICAgKi9cbiAgICBhc3luYyBtYXRjaFByZWNhY2hlKHJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVxdWVzdCBpbnN0YW5jZW9mIFJlcXVlc3QgPyByZXF1ZXN0LnVybCA6IHJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xuICAgICAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLnN0cmF0ZWd5LmNhY2hlTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUubWF0Y2goY2FjaGVLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGxvb2tzIHVwIGB1cmxgIGluIHRoZSBwcmVjYWNoZSAodGFraW5nIGludG9cbiAgICAgKiBhY2NvdW50IHJldmlzaW9uIGluZm9ybWF0aW9uKSwgYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgYFJlc3BvbnNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHByZWNhY2hlZCBVUkwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGVcbiAgICAgKiBgUmVzcG9uc2VgLlxuICAgICAqIEByZXR1cm4ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICAgICAqL1xuICAgIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKCFjYWNoZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm9uLXByZWNhY2hlZC11cmwnLCB7IHVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcyA9IHsgY2FjaGVLZXksIC4uLm9wdGlvbnMucGFyYW1zIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5oYW5kbGUob3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogYFByZWNhY2hlRmFsbGJhY2tQbHVnaW5gIGFsbG93cyB5b3UgdG8gc3BlY2lmeSBhbiBcIm9mZmxpbmUgZmFsbGJhY2tcIlxuICogcmVzcG9uc2UgdG8gYmUgdXNlZCB3aGVuIGEgZ2l2ZW4gc3RyYXRlZ3kgaXMgdW5hYmxlIHRvIGdlbmVyYXRlIGEgcmVzcG9uc2UuXG4gKlxuICogSXQgZG9lcyB0aGlzIGJ5IGludGVyY2VwdGluZyB0aGUgYGhhbmRsZXJEaWRFcnJvcmAgcGx1Z2luIGNhbGxiYWNrXG4gKiBhbmQgcmV0dXJuaW5nIGEgcHJlY2FjaGVkIHJlc3BvbnNlLCB0YWtpbmcgdGhlIGV4cGVjdGVkIHJldmlzaW9uIHBhcmFtZXRlclxuICogaW50byBhY2NvdW50IGF1dG9tYXRpY2FsbHkuXG4gKlxuICogVW5sZXNzIHlvdSBleHBsaWNpdGx5IHBhc3MgaW4gYSBgUHJlY2FjaGVDb250cm9sbGVyYCBpbnN0YW5jZSB0byB0aGVcbiAqIGNvbnN0cnVjdG9yLCB0aGUgZGVmYXVsdCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQuIEdlbmVyYWxseSBzcGVha2luZywgbW9zdFxuICogZGV2ZWxvcGVycyB3aWxsIGVuZCB1cCB1c2luZyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jbGFzcyBQcmVjYWNoZUZhbGxiYWNrUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IFByZWNhY2hlRmFsbGJhY2tQbHVnaW4gd2l0aCB0aGUgYXNzb2NpYXRlZCBmYWxsYmFja1VSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmZhbGxiYWNrVVJMIEEgcHJlY2FjaGVkIFVSTCB0byB1c2UgYXMgdGhlIGZhbGxiYWNrXG4gICAgICogICAgIGlmIHRoZSBhc3NvY2lhdGVkIHN0cmF0ZWd5IGNhbid0IGdlbmVyYXRlIGEgcmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtQcmVjYWNoZUNvbnRyb2xsZXJ9IFtjb25maWcucHJlY2FjaGVDb250cm9sbGVyXSBBbiBvcHRpb25hbFxuICAgICAqICAgICBQcmVjYWNoZUNvbnRyb2xsZXIgaW5zdGFuY2UuIElmIG5vdCBwcm92aWRlZCwgdGhlIGRlZmF1bHRcbiAgICAgKiAgICAgUHJlY2FjaGVDb250cm9sbGVyIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7IGZhbGxiYWNrVVJMLCBwcmVjYWNoZUNvbnRyb2xsZXIgfSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59IFRoZSBwcmVjYWNoZSByZXNwb25zZSBmb3IgdGhlIGZhbGxiYWNrIFVSTC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlckRpZEVycm9yID0gKCkgPT4gdGhpcy5fcHJlY2FjaGVDb250cm9sbGVyLm1hdGNoUHJlY2FjaGUodGhpcy5fZmFsbGJhY2tVUkwpO1xuICAgICAgICB0aGlzLl9mYWxsYmFja1VSTCA9IGZhbGxiYWNrVVJMO1xuICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIgPSBwcmVjYWNoZUNvbnRyb2xsZXIgfHxcbiAgICAgICAgICAgIGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVSTFZhcmlhdGlvbnMgfSBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVVJMVmFyaWF0aW9ucy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIFtSb3V0ZV17QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gdGhhdCB0YWtlcyBhXG4gKiBbUHJlY2FjaGVDb250cm9sbGVyXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlcn1cbiAqIGluc3RhbmNlIGFuZCB1c2VzIGl0IHRvIG1hdGNoIGluY29taW5nIHJlcXVlc3RzIGFuZCBoYW5kbGUgZmV0Y2hpbmdcbiAqIHJlc3BvbnNlcyBmcm9tIHRoZSBwcmVjYWNoZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBQcmVjYWNoZVJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UHJlY2FjaGVDb250cm9sbGVyfSBwcmVjYWNoZUNvbnRyb2xsZXIgQSBgUHJlY2FjaGVDb250cm9sbGVyYFxuICAgICAqIGluc3RhbmNlIHVzZWQgdG8gYm90aCBtYXRjaCByZXF1ZXN0cyBhbmQgcmVzcG9uZCB0byBmZXRjaCBldmVudHMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIHRvIGNvbnRyb2wgaG93IHJlcXVlc3RzIGFyZSBtYXRjaGVkXG4gICAgICogYWdhaW5zdCB0aGUgbGlzdCBvZiBwcmVjYWNoZWQgVVJMcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlyZWN0b3J5SW5kZXg9aW5kZXguaHRtbF0gVGhlIGBkaXJlY3RvcnlJbmRleGAgd2lsbFxuICAgICAqIGNoZWNrIGNhY2hlIGVudHJpZXMgZm9yIGEgVVJMcyBlbmRpbmcgd2l0aCAnLycgdG8gc2VlIGlmIHRoZXJlIGlzIGEgaGl0IHdoZW5cbiAgICAgKiBhcHBlbmRpbmcgdGhlIGBkaXJlY3RvcnlJbmRleGAgdmFsdWUuXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5pZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmc9Wy9edXRtXy8sIC9eZmJjbGlkJC9dXSBBblxuICAgICAqIGFycmF5IG9mIHJlZ2V4J3MgdG8gcmVtb3ZlIHNlYXJjaCBwYXJhbXMgd2hlbiBsb29raW5nIGZvciBhIGNhY2hlIG1hdGNoLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2xlYW5VUkxzPXRydWVdIFRoZSBgY2xlYW5VUkxzYCBvcHRpb24gd2lsbFxuICAgICAqIGNoZWNrIHRoZSBjYWNoZSBmb3IgdGhlIFVSTCB3aXRoIGEgYC5odG1sYCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBlbmQuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nfnVybE1hbmlwdWxhdGlvbn0gW29wdGlvbnMudXJsTWFuaXB1bGF0aW9uXVxuICAgICAqIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHNob3VsZCB0YWtlIGEgVVJMIGFuZCByZXR1cm4gYW4gYXJyYXkgb2ZcbiAgICAgKiBhbHRlcm5hdGl2ZSBVUkxzIHRoYXQgc2hvdWxkIGJlIGNoZWNrZWQgZm9yIHByZWNhY2hlIG1hdGNoZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJlY2FjaGVDb250cm9sbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxzVG9DYWNoZUtleXMgPSBwcmVjYWNoZUNvbnRyb2xsZXIuZ2V0VVJMc1RvQ2FjaGVLZXlzKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBvc3NpYmxlVVJMIG9mIGdlbmVyYXRlVVJMVmFyaWF0aW9ucyhyZXF1ZXN0LnVybCwgb3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IHVybHNUb0NhY2hlS2V5cy5nZXQocG9zc2libGVVUkwpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZUtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjYWNoZUtleSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBQcmVjYWNoaW5nIGRpZCBub3QgZmluZCBhIG1hdGNoIGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgZ2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIobWF0Y2gsIHByZWNhY2hlQ29udHJvbGxlci5zdHJhdGVneSk7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVSb3V0ZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgY29weVJlc3BvbnNlIH0gZnJvbSAnd29ya2JveC1jb3JlL2NvcHlSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnd29ya2JveC1zdHJhdGVnaWVzL1N0cmF0ZWd5LmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBjb3B5UmVkaXJlY3RlZENhY2hlYWJsZVJlc3BvbnNlc1BsdWdpbiA9IHtcbiAgICBhc3luYyBjYWNoZVdpbGxVcGRhdGUoeyByZXNwb25zZSB9KSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5yZWRpcmVjdGVkID8gYXdhaXQgY29weVJlc3BvbnNlKHJlc3BvbnNlKSA6IHJlc3BvbnNlO1xuICAgIH1cbn07XG4vKipcbiAqIEEgW1N0cmF0ZWd5XXtAbGluayBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fSBpbXBsZW1lbnRhdGlvblxuICogc3BlY2lmaWNhbGx5IGRlc2lnbmVkIHRvIHdvcmsgd2l0aFxuICogW1ByZWNhY2hlQ29udHJvbGxlcl17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXJ9XG4gKiB0byBib3RoIGNhY2hlIGFuZCBmZXRjaCBwcmVjYWNoZWQgYXNzZXRzLlxuICpcbiAqIE5vdGU6IGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaXMgY3JlYXRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gY3JlYXRpbmcgYVxuICogYFByZWNhY2hlQ29udHJvbGxlcmA7IGl0J3MgZ2VuZXJhbGx5IG5vdCBuZWNlc3NhcnkgdG8gY3JlYXRlIHRoaXMgeW91cnNlbGYuXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuY2xhc3MgUHJlY2FjaGVTdHJhdGVneSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiBbd29ya2JveC1jb3JlXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN9XG4gICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFRoZVxuICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmZhbGxiYWNrVG9OZXR3b3JrPXRydWVdIFdoZXRoZXIgdG8gYXR0ZW1wdCB0b1xuICAgICAqIGdldCB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yayBpZiB0aGVyZSdzIGEgcHJlY2FjaGUgbWlzcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgb3B0aW9ucy5jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFByZWNhY2hlTmFtZShvcHRpb25zLmNhY2hlTmFtZSk7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9mYWxsYmFja1RvTmV0d29yayA9IG9wdGlvbnMuZmFsbGJhY2tUb05ldHdvcmsgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAvLyBSZWRpcmVjdGVkIHJlc3BvbnNlcyBjYW5ub3QgYmUgdXNlZCB0byBzYXRpc2Z5IGEgbmF2aWdhdGlvbiByZXF1ZXN0LCBzb1xuICAgICAgICAvLyBhbnkgcmVkaXJlY3RlZCByZXNwb25zZSBtdXN0IGJlIFwiY29waWVkXCIgcmF0aGVyIHRoYW4gY2xvbmVkLCBzbyB0aGUgbmV3XG4gICAgICAgIC8vIHJlc3BvbnNlIGRvZXNuJ3QgY29udGFpbiB0aGUgYHJlZGlyZWN0ZWRgIGZsYWcuIFNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjY5MzYzJmRlc2M9MiNjMVxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChjb3B5UmVkaXJlY3RlZENhY2hlYWJsZVJlc3BvbnNlc1BsdWdpbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIF9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhbiBgaW5zdGFsbGAgZXZlbnQgdGhlbiBwb3B1bGF0ZSB0aGUgY2FjaGUuIElmIHRoaXMgaXMgYVxuICAgICAgICAgICAgLy8gYGZldGNoYCBldmVudCAob3IgYW55IG90aGVyIGV2ZW50KSB0aGVuIHJlc3BvbmQgd2l0aCB0aGUgY2FjaGVkXG4gICAgICAgICAgICAvLyByZXNwb25zZS5cbiAgICAgICAgICAgIGlmIChoYW5kbGVyLmV2ZW50ICYmIGhhbmRsZXIuZXZlbnQudHlwZSA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2hhbmRsZUluc3RhbGwocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faGFuZGxlRmV0Y2gocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBfaGFuZGxlRmV0Y2gocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIC8vIEZhbGwgYmFjayB0byB0aGUgbmV0d29yayBpZiB3ZSBkb24ndCBoYXZlIGEgY2FjaGVkIHJlc3BvbnNlXG4gICAgICAgIC8vIChwZXJoYXBzIGR1ZSB0byBtYW51YWwgY2FjaGUgY2xlYW51cCkuXG4gICAgICAgIGlmICh0aGlzLl9mYWxsYmFja1RvTmV0d29yaykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHByZWNhY2hlZCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0gaW4gJHt0aGlzLmNhY2hlTmFtZX0gd2FzIG5vdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGZvdW5kLiBGYWxsaW5nIGJhY2sgdG8gdGhlIG5ldHdvcmsgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkbid0IG5vcm1hbGx5IGhhcHBlbiwgYnV0IHRoZXJlIGFyZSBlZGdlIGNhc2VzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNDQxXG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLXByZWNhY2hlLWVudHJ5Jywge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogdGhpcy5jYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0LnVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IGhhbmRsZXIucGFyYW1zICYmIGhhbmRsZXIucGFyYW1zLmNhY2hlS2V5IHx8XG4gICAgICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5nZXRDYWNoZUtleShyZXF1ZXN0LCAncmVhZCcpO1xuICAgICAgICAgICAgLy8gV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgICAgICAgLy8gcHJpbnQgdGhlIHJvdXRpbmcgZGV0YWlscyB0byB0aGUgY29uc29sZS5cbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUHJlY2FjaGluZyBpcyByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICBnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCkpO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhgU2VydmluZyB0aGUgcHJlY2FjaGVkIHVybDogJHtnZXRGcmllbmRseVVSTChjYWNoZUtleS51cmwpfWApO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlcXVlc3QgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlc3BvbnNlIGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIF9oYW5kbGVJbnN0YWxsKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCk7XG4gICAgICAgIC8vIEFueSB0aW1lIHRoZXJlJ3Mgbm8gcmVzcG9uc2UsIGNvbnNpZGVyIGl0IGEgcHJlY2FjaGluZyBlcnJvci5cbiAgICAgICAgbGV0IHJlc3BvbnNlU2FmZVRvUHJlY2FjaGUgPSBCb29sZWFuKHJlc3BvbnNlKTtcbiAgICAgICAgLy8gQWxzbyBjb25zaWRlciBpdCBhbiBlcnJvciBpZiB0aGUgdXNlciBkaWRuJ3QgcGFzcyB0aGVpciBvd25cbiAgICAgICAgLy8gY2FjaGVXaWxsVXBkYXRlIHBsdWdpbiwgYW5kIHRoZSByZXNwb25zZSBpcyBhIDQwMCsgKG5vdGU6IHRoaXMgbWVhbnNcbiAgICAgICAgLy8gdGhhdCBieSBkZWZhdWx0IG9wYXF1ZSByZXNwb25zZXMgY2FuIGJlIHByZWNhY2hlZCkuXG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmXG4gICAgICAgICAgICAhdGhpcy5fdXNlc0N1c3RvbUNhY2hlYWJsZVJlc3BvbnNlTG9naWMoKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VTYWZlVG9QcmVjYWNoZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2VTYWZlVG9QcmVjYWNoZSkge1xuICAgICAgICAgICAgLy8gVGhyb3dpbmcgaGVyZSB3aWxsIGxlYWQgdG8gdGhlIGBpbnN0YWxsYCBoYW5kbGVyIGZhaWxpbmcsIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZSB3YW50IHRvIGRvIGlmICphbnkqIG9mIHRoZSByZXNwb25zZXMgYXJlbid0IHNhZmUgdG8gY2FjaGUuXG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdiYWQtcHJlY2FjaGluZy1yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgYW55IHVzZXJzIHBsdWdpbnMgd2VyZSBhZGRlZCBjb250YWluaW5nIHRoZWlyIG93blxuICAgICAqIGBjYWNoZVdpbGxVcGRhdGVgIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRlZmF1bHQgY2FjaGVhYmxlIHJlc3BvbnNlIGxvZ2ljIChpLmUuXG4gICAgICogPDQwMCwgaW5jbHVkaW5nIG9wYXF1ZSByZXNwb25zZXMpIHNob3VsZCBiZSB1c2VkLiBJZiBhIGN1c3RvbSBwbHVnaW5cbiAgICAgKiB3aXRoIGEgYGNhY2hlV2lsbFVwZGF0ZWAgY2FsbGJhY2sgaXMgcGFzc2VkLCB0aGVuIHRoZSBzdHJhdGVneSBzaG91bGRcbiAgICAgKiBkZWZlciB0byB0aGF0IHBsdWdpbidzIGxvZ2ljLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXNlc0N1c3RvbUNhY2hlYWJsZVJlc3BvbnNlTG9naWMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnMuc29tZSgocGx1Z2luKSA9PiBwbHVnaW4uY2FjaGVXaWxsVXBkYXRlICYmXG4gICAgICAgICAgICBwbHVnaW4gIT09IGNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luKTtcbiAgICB9XG59XG5leHBvcnQgeyBQcmVjYWNoZVN0cmF0ZWd5IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpwcmVjYWNoaW5nOjYuMC4yJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZHMgcGx1Z2lucyB0byB0aGUgcHJlY2FjaGluZyBzdHJhdGVneS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHBsdWdpbnNcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBhZGRQbHVnaW5zKHBsdWdpbnMpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHByZWNhY2hlQ29udHJvbGxlci5zdHJhdGVneS5wbHVnaW5zLnB1c2goLi4ucGx1Z2lucyk7XG59XG5leHBvcnQgeyBhZGRQbHVnaW5zIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzJztcbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZVJvdXRlIH0gZnJvbSAnLi9QcmVjYWNoZVJvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZCBhIGBmZXRjaGAgbGlzdGVuZXIgdG8gdGhlIHNlcnZpY2Ugd29ya2VyIHRoYXQgd2lsbFxuICogcmVzcG9uZCB0b1xuICogW25ldHdvcmsgcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlX1dvcmtlcl9BUEkvVXNpbmdfU2VydmljZV9Xb3JrZXJzI0N1c3RvbV9yZXNwb25zZXNfdG9fcmVxdWVzdHN9XG4gKiB3aXRoIHByZWNhY2hlZCBhc3NldHMuXG4gKlxuICogUmVxdWVzdHMgZm9yIGFzc2V0cyB0aGF0IGFyZW4ndCBwcmVjYWNoZWQsIHRoZSBgRmV0Y2hFdmVudGAgd2lsbCBub3QgYmVcbiAqIHJlc3BvbmRlZCB0bywgYWxsb3dpbmcgdGhlIGV2ZW50IHRvIGZhbGwgdGhyb3VnaCB0byBvdGhlciBgZmV0Y2hgIGV2ZW50XG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBTZWVcbiAqIFtQcmVjYWNoZVJvdXRlIG9wdGlvbnNde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVSb3V0ZX0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gYWRkUm91dGUob3B0aW9ucykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgY29uc3QgcHJlY2FjaGVSb3V0ZSA9IG5ldyBQcmVjYWNoZVJvdXRlKHByZWNhY2hlQ29udHJvbGxlciwgb3B0aW9ucyk7XG4gICAgcmVnaXN0ZXJSb3V0ZShwcmVjYWNoZVJvdXRlKTtcbn1cbmV4cG9ydCB7IGFkZFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBkZWxldGVPdXRkYXRlZENhY2hlcyB9IGZyb20gJy4vdXRpbHMvZGVsZXRlT3V0ZGF0ZWRDYWNoZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBhbiBgYWN0aXZhdGVgIGV2ZW50IGxpc3RlbmVyIHdoaWNoIHdpbGwgY2xlYW4gdXAgaW5jb21wYXRpYmxlXG4gKiBwcmVjYWNoZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgb2xkZXIgdmVyc2lvbnMgb2YgV29ya2JveC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMoKSB7XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKCk7XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChkZWxldGVPdXRkYXRlZENhY2hlcyhjYWNoZU5hbWUpLnRoZW4oKGNhY2hlc0RlbGV0ZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlc0RlbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBUaGUgZm9sbG93aW5nIG91dC1vZi1kYXRlIHByZWNhY2hlcyB3ZXJlIGNsZWFuZWQgdXAgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYXV0b21hdGljYWxseTpgLCBjYWNoZXNEZWxldGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9KSk7XG59XG5leHBvcnQgeyBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjYWxsc1xuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNjcmVhdGVIYW5kbGVyQm91bmRUb1VSTH0gb24gdGhlIGRlZmF1bHRcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9IGluc3RhbmNlLlxuICpcbiAqIElmIHlvdSBhcmUgY3JlYXRpbmcgeW91ciBvd24ge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0sIHRoZW4gY2FsbCB0aGVcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjY3JlYXRlSGFuZGxlckJvdW5kVG9VUkx9IG9uIHRoYXQgaW5zdGFuY2UsXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgcHJlY2FjaGVkIFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZVxuICogYFJlc3BvbnNlYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZhbGxiYWNrVG9OZXR3b3JrPXRydWVdIFdoZXRoZXIgdG8gYXR0ZW1wdCB0byBnZXQgdGhlXG4gKiByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICogQHJldHVybiB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwodXJsKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCk7XG59XG5leHBvcnQgeyBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRha2VzIGluIGEgVVJMLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBVUkwgdGhhdCBjb3VsZCBiZSB1c2VkIHRvXG4gKiBsb29rdXAgdGhlIGVudHJ5IGluIHRoZSBwcmVjYWNoZS5cbiAqXG4gKiBJZiBhIHJlbGF0aXZlIFVSTCBpcyBwcm92aWRlZCwgdGhlIGxvY2F0aW9uIG9mIHRoZSBzZXJ2aWNlIHdvcmtlciBmaWxlIHdpbGxcbiAqIGJlIHVzZWQgYXMgdGhlIGJhc2UuXG4gKlxuICogRm9yIHByZWNhY2hlZCBlbnRyaWVzIHdpdGhvdXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB0aGVcbiAqIHNhbWUgYXMgdGhlIG9yaWdpbmFsIFVSTC5cbiAqXG4gKiBGb3IgcHJlY2FjaGVkIGVudHJpZXMgd2l0aCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZVxuICogb3JpZ2luYWwgVVJMIHdpdGggdGhlIGFkZGl0aW9uIG9mIGEgcXVlcnkgcGFyYW1ldGVyIHVzZWQgZm9yIGtlZXBpbmcgdHJhY2sgb2ZcbiAqIHRoZSByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB3aG9zZSBjYWNoZSBrZXkgdG8gbG9vayB1cC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNhY2hlIGtleSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoYXQgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGdldENhY2hlS2V5Rm9yVVJMKHVybCkge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlci5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xufVxuZXhwb3J0IHsgZ2V0Q2FjaGVLZXlGb3JVUkwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFkZFBsdWdpbnMgfSBmcm9tICcuL2FkZFBsdWdpbnMuanMnO1xuaW1wb3J0IHsgYWRkUm91dGUgfSBmcm9tICcuL2FkZFJvdXRlLmpzJztcbmltcG9ydCB7IGNsZWFudXBPdXRkYXRlZENhY2hlcyB9IGZyb20gJy4vY2xlYW51cE91dGRhdGVkQ2FjaGVzLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMIH0gZnJvbSAnLi9jcmVhdGVIYW5kbGVyQm91bmRUb1VSTC5qcyc7XG5pbXBvcnQgeyBnZXRDYWNoZUtleUZvclVSTCB9IGZyb20gJy4vZ2V0Q2FjaGVLZXlGb3JVUkwuanMnO1xuaW1wb3J0IHsgbWF0Y2hQcmVjYWNoZSB9IGZyb20gJy4vbWF0Y2hQcmVjYWNoZS5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZSB9IGZyb20gJy4vcHJlY2FjaGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9IGZyb20gJy4vcHJlY2FjaGVBbmRSb3V0ZS5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL1ByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZVJvdXRlIH0gZnJvbSAnLi9QcmVjYWNoZVJvdXRlLmpzJztcbmltcG9ydCB7IFByZWNhY2hlU3RyYXRlZ3kgfSBmcm9tICcuL1ByZWNhY2hlU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiB9IGZyb20gJy4vUHJlY2FjaGVGYWxsYmFja1BsdWdpbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBNb3N0IGNvbnN1bWVycyBvZiB0aGlzIG1vZHVsZSB3aWxsIHdhbnQgdG8gdXNlIHRoZVxuICogW3ByZWNhY2hlQW5kUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZUFuZFJvdXRlfVxuICogbWV0aG9kIHRvIGFkZCBhc3NldHMgdG8gdGhlIGNhY2hlIGFuZCByZXNwb25kIHRvIG5ldHdvcmsgcmVxdWVzdHMgd2l0aCB0aGVzZVxuICogY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBJZiB5b3UgcmVxdWlyZSBtb3JlIGNvbnRyb2wgb3ZlciBjYWNoaW5nIGFuZCByb3V0aW5nLCB5b3UgY2FuIHVzZSB0aGVcbiAqIFtQcmVjYWNoZUNvbnRyb2xsZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyfVxuICogaW50ZXJmYWNlLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCB7IGFkZFBsdWdpbnMsIGFkZFJvdXRlLCBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMsIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMLCBnZXRDYWNoZUtleUZvclVSTCwgbWF0Y2hQcmVjYWNoZSwgcHJlY2FjaGUsIHByZWNhY2hlQW5kUm91dGUsIFByZWNhY2hlQ29udHJvbGxlciwgUHJlY2FjaGVSb3V0ZSwgUHJlY2FjaGVTdHJhdGVneSwgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiwgfTtcbiIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXguanMnOyIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjYWxsc1xuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNtYXRjaFByZWNhY2hlfSBvbiB0aGUgZGVmYXVsdFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0gaW5zdGFuY2UuXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyB5b3VyIG93biB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSwgdGhlbiBjYWxsXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI21hdGNoUHJlY2FjaGV9IG9uIHRoYXQgaW5zdGFuY2UsXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8UmVxdWVzdH0gcmVxdWVzdCBUaGUga2V5ICh3aXRob3V0IHJldmlzaW9uaW5nIHBhcmFtZXRlcnMpXG4gKiB0byBsb29rIHVwIGluIHRoZSBwcmVjYWNoZS5cbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBtYXRjaFByZWNhY2hlKHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXIubWF0Y2hQcmVjYWNoZShyZXF1ZXN0KTtcbn1cbmV4cG9ydCB7IG1hdGNoUHJlY2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIGl0ZW1zIHRvIHRoZSBwcmVjYWNoZSBsaXN0LCByZW1vdmluZyBhbnkgZHVwbGljYXRlcyBhbmRcbiAqIHN0b3JlcyB0aGUgZmlsZXMgaW4gdGhlXG4gKiBbXCJwcmVjYWNoZSBjYWNoZVwiXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9IHdoZW4gdGhlIHNlcnZpY2VcbiAqIHdvcmtlciBpbnN0YWxscy5cbiAqXG4gKiBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBsZWFzZSBub3RlOiBUaGlzIG1ldGhvZCAqKndpbGwgbm90Kiogc2VydmUgYW55IG9mIHRoZSBjYWNoZWQgZmlsZXMgZm9yIHlvdS5cbiAqIEl0IG9ubHkgcHJlY2FjaGVzIGZpbGVzLiBUbyByZXNwb25kIHRvIGEgbmV0d29yayByZXF1ZXN0IHlvdSBjYWxsXG4gKiBbYWRkUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0uXG4gKlxuICogSWYgeW91IGhhdmUgYSBzaW5nbGUgYXJyYXkgb2YgZmlsZXMgdG8gcHJlY2FjaGUsIHlvdSBjYW4ganVzdCBjYWxsXG4gKiBbcHJlY2FjaGVBbmRSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGV9LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0fHN0cmluZz59IFtlbnRyaWVzPVtdXSBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIHByZWNhY2hlKGVudHJpZXMpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHByZWNhY2hlQ29udHJvbGxlci5wcmVjYWNoZShlbnRyaWVzKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGUgfSBmcm9tICcuL3ByZWNhY2hlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgYWRkIGVudHJpZXMgdG8gdGhlIHByZWNhY2hlIGxpc3QgYW5kIGFkZCBhIHJvdXRlIHRvXG4gKiByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAqXG4gKiBUaGlzIGlzIGEgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgd2lsbCBjYWxsXG4gKiBbcHJlY2FjaGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZX0gYW5kXG4gKiBbYWRkUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0gaW4gYSBzaW5nbGUgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBlbnRyaWVzIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZVxuICogW1ByZWNhY2hlUm91dGUgb3B0aW9uc117QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZVJvdXRlfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBwcmVjYWNoZUFuZFJvdXRlKGVudHJpZXMsIG9wdGlvbnMpIHtcbiAgICBwcmVjYWNoZShlbnRyaWVzKTtcbiAgICBhZGRSb3V0ZShvcHRpb25zKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlQW5kUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHBsdWdpbiwgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIFByZWNhY2hlQ29udHJvbGxlciwgdG8gdHJhbnNsYXRlIFVSTHMgaW50b1xuICogdGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LCBiYXNlZCBvbiB0aGUgY3VycmVudCByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKHsgcHJlY2FjaGVDb250cm9sbGVyIH0pIHtcbiAgICAgICAgdGhpcy5jYWNoZUtleVdpbGxCZVVzZWQgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMsIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gcGFyYW1zICYmIHBhcmFtcy5jYWNoZUtleSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWNhY2hlQ29udHJvbGxlci5nZXRDYWNoZUtleUZvclVSTChyZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVLZXkgPyBuZXcgUmVxdWVzdChjYWNoZUtleSkgOiByZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIgPSBwcmVjYWNoZUNvbnRyb2xsZXI7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDYWNoZUtleVBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgcGx1Z2luLCBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggUHJlY2FjaGVDb250cm9sbGVyLCB0byBkZXRlcm1pbmUgdGhlXG4gKiBvZiBhc3NldHMgdGhhdCB3ZXJlIHVwZGF0ZWQgKG9yIG5vdCB1cGRhdGVkKSBkdXJpbmcgdGhlIGluc3RhbGwgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkVVJMcyA9IFtdO1xuICAgICAgICB0aGlzLm5vdFVwZGF0ZWRVUkxzID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlcldpbGxTdGFydCA9IGFzeW5jICh7IHJlcXVlc3QsIHN0YXRlLCB9KSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBgc3RhdGVgIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuLi5cbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbmFsUmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkID0gYXN5bmMgKHsgZXZlbnQsIHN0YXRlLCBjYWNoZWRSZXNwb25zZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnN0YWxsJykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGBzdGF0ZWAgc2hvdWxkIG5ldmVyIGJlIHVuZGVmaW5lZC4uLlxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHN0YXRlLm9yaWdpbmFsUmVxdWVzdC51cmw7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90VXBkYXRlZFVSTHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVkVVJMcy5wdXNoKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIE5hbWUgb2YgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdXNlZCB0byBzdG9yZSByZXZpc2lvbiBpbmZvLlxuY29uc3QgUkVWSVNJT05fU0VBUkNIX1BBUkFNID0gJ19fV0JfUkVWSVNJT05fXyc7XG4vKipcbiAqIENvbnZlcnRzIGEgbWFuaWZlc3QgZW50cnkgaW50byBhIHZlcnNpb25lZCBVUkwgc3VpdGFibGUgZm9yIHByZWNhY2hpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBlbnRyeVxuICogQHJldHVybiB7c3RyaW5nfSBBIFVSTCB3aXRoIHZlcnNpb25pbmcgaW5mby5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlS2V5KGVudHJ5KSB7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnLCB7IGVudHJ5IH0pO1xuICAgIH1cbiAgICAvLyBJZiBhIHByZWNhY2hlIG1hbmlmZXN0IGVudHJ5IGlzIGEgc3RyaW5nLCBpdCdzIGFzc3VtZWQgdG8gYmUgYSB2ZXJzaW9uZWRcbiAgICAvLyBVUkwsIGxpa2UgJy9hcHAuYWJjZDEyMzQuanMnLiBSZXR1cm4gYXMtaXMuXG4gICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTChlbnRyeSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYWNoZUtleTogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgICAgICB1cmw6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHJldmlzaW9uLCB1cmwgfSA9IGVudHJ5O1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHsgZW50cnkgfSk7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3MganVzdCBhIFVSTCBhbmQgbm8gcmV2aXNpb24sIHRoZW4gaXQncyBhbHNvIGFzc3VtZWQgdG8gYmUgYVxuICAgIC8vIHZlcnNpb25lZCBVUkwuXG4gICAgaWYgKCFyZXZpc2lvbikge1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYWNoZUtleTogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgICAgICB1cmw6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGNvbnN0cnVjdCBhIHByb3Blcmx5IHZlcnNpb25lZCBVUkwgdXNpbmcgdGhlIGN1c3RvbSBXb3JrYm94XG4gICAgLy8gc2VhcmNoIHBhcmFtZXRlciBhbG9uZyB3aXRoIHRoZSByZXZpc2lvbiBpbmZvLlxuICAgIGNvbnN0IGNhY2hlS2V5VVJMID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGNvbnN0IG9yaWdpbmFsVVJMID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGNhY2hlS2V5VVJMLnNlYXJjaFBhcmFtcy5zZXQoUkVWSVNJT05fU0VBUkNIX1BBUkFNLCByZXZpc2lvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FjaGVLZXk6IGNhY2hlS2V5VVJMLmhyZWYsXG4gICAgICAgIHVybDogb3JpZ2luYWxVUkwuaHJlZixcbiAgICB9O1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBTVUJTVFJJTkdfVE9fRklORCA9ICctcHJlY2FjaGUtJztcbi8qKlxuICogQ2xlYW5zIHVwIGluY29tcGF0aWJsZSBwcmVjYWNoZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgb2xkZXIgdmVyc2lvbnMgb2ZcbiAqIFdvcmtib3gsIGJ5IGEgc2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCB1bmRlciB0aGUgY3VycmVudCBzY29wZS5cbiAqXG4gKiBUaGlzIGlzIG1lYW50IHRvIGJlIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBgYWN0aXZhdGVgIGV2ZW50LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHNhZmUgdG8gdXNlIGFzIGxvbmcgYXMgeW91IGRvbid0IGluY2x1ZGUgYHN1YnN0cmluZ1RvRmluZGBcbiAqIChkZWZhdWx0aW5nIHRvIGAtcHJlY2FjaGUtYCkgaW4geW91ciBub24tcHJlY2FjaGUgY2FjaGUgbmFtZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRQcmVjYWNoZU5hbWUgVGhlIGNhY2hlIG5hbWUgY3VycmVudGx5IGluIHVzZSBmb3JcbiAqIHByZWNhY2hpbmcuIFRoaXMgY2FjaGUgd29uJ3QgYmUgZGVsZXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3Vic3RyaW5nVG9GaW5kPSctcHJlY2FjaGUtJ10gQ2FjaGUgbmFtZXMgd2hpY2ggaW5jbHVkZSB0aGlzXG4gKiBzdWJzdHJpbmcgd2lsbCBiZSBkZWxldGVkIChleGNsdWRpbmcgYGN1cnJlbnRQcmVjYWNoZU5hbWVgKS5cbiAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59IEEgbGlzdCBvZiBhbGwgdGhlIGNhY2hlIG5hbWVzIHRoYXQgd2VyZSBkZWxldGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jb25zdCBkZWxldGVPdXRkYXRlZENhY2hlcyA9IGFzeW5jIChjdXJyZW50UHJlY2FjaGVOYW1lLCBzdWJzdHJpbmdUb0ZpbmQgPSBTVUJTVFJJTkdfVE9fRklORCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlTmFtZXMgPSBhd2FpdCBzZWxmLmNhY2hlcy5rZXlzKCk7XG4gICAgY29uc3QgY2FjaGVOYW1lc1RvRGVsZXRlID0gY2FjaGVOYW1lcy5maWx0ZXIoKGNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gY2FjaGVOYW1lLmluY2x1ZGVzKHN1YnN0cmluZ1RvRmluZCkgJiZcbiAgICAgICAgICAgIGNhY2hlTmFtZS5pbmNsdWRlcyhzZWxmLnJlZ2lzdHJhdGlvbi5zY29wZSkgJiZcbiAgICAgICAgICAgIGNhY2hlTmFtZSAhPT0gY3VycmVudFByZWNhY2hlTmFtZTtcbiAgICB9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChjYWNoZU5hbWVzVG9EZWxldGUubWFwKChjYWNoZU5hbWUpID0+IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpKSk7XG4gICAgcmV0dXJuIGNhY2hlTmFtZXNUb0RlbGV0ZTtcbn07XG5leHBvcnQgeyBkZWxldGVPdXRkYXRlZENhY2hlcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogR2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgeWllbGRzIHBvc3NpYmxlIHZhcmlhdGlvbnMgb24gdGhlIG9yaWdpbmFsIFVSTCB0b1xuICogY2hlY2ssIG9uZSBhdCBhIHRpbWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBnZW5lcmF0ZVVSTFZhcmlhdGlvbnModXJsLCB7IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyA9IFsvXnV0bV8vLCAvXmZiY2xpZCQvXSwgZGlyZWN0b3J5SW5kZXggPSAnaW5kZXguaHRtbCcsIGNsZWFuVVJMcyA9IHRydWUsIHVybE1hbmlwdWxhdGlvbiwgfSA9IHt9KSB7XG4gICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIHVybE9iamVjdC5oYXNoID0gJyc7XG4gICAgeWllbGQgdXJsT2JqZWN0LmhyZWY7XG4gICAgY29uc3QgdXJsV2l0aG91dElnbm9yZWRQYXJhbXMgPSByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nKTtcbiAgICB5aWVsZCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmO1xuICAgIGlmIChkaXJlY3RvcnlJbmRleCAmJiB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5wYXRobmFtZS5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVVSTCA9IG5ldyBVUkwodXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZik7XG4gICAgICAgIGRpcmVjdG9yeVVSTC5wYXRobmFtZSArPSBkaXJlY3RvcnlJbmRleDtcbiAgICAgICAgeWllbGQgZGlyZWN0b3J5VVJMLmhyZWY7XG4gICAgfVxuICAgIGlmIChjbGVhblVSTHMpIHtcbiAgICAgICAgY29uc3QgY2xlYW5VUkwgPSBuZXcgVVJMKHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWYpO1xuICAgICAgICBjbGVhblVSTC5wYXRobmFtZSArPSAnLmh0bWwnO1xuICAgICAgICB5aWVsZCBjbGVhblVSTC5ocmVmO1xuICAgIH1cbiAgICBpZiAodXJsTWFuaXB1bGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxVUkxzID0gdXJsTWFuaXB1bGF0aW9uKHsgdXJsOiB1cmxPYmplY3QgfSk7XG4gICAgICAgIGZvciAoY29uc3QgdXJsVG9BdHRlbXB0IG9mIGFkZGl0aW9uYWxVUkxzKSB7XG4gICAgICAgICAgICB5aWVsZCB1cmxUb0F0dGVtcHQuaHJlZjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4uL1ByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBwcmVjYWNoZUNvbnRyb2xsZXI7XG4vKipcbiAqIEByZXR1cm4ge1ByZWNhY2hlQ29udHJvbGxlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXByZWNhY2hlQ29udHJvbGxlcikge1xuICAgICAgICBwcmVjYWNoZUNvbnRyb2xsZXIgPSBuZXcgUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXI7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGVsZXRlZFVSTHNcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBsb2dHcm91cCA9IChncm91cFRpdGxlLCBkZWxldGVkVVJMcykgPT4ge1xuICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChncm91cFRpdGxlKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiBkZWxldGVkVVJMcykge1xuICAgICAgICBsb2dnZXIubG9nKHVybCk7XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cEVuZCgpO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZWxldGVkVVJMc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcykge1xuICAgIGNvbnN0IGRlbGV0aW9uQ291bnQgPSBkZWxldGVkVVJMcy5sZW5ndGg7XG4gICAgaWYgKGRlbGV0aW9uQ291bnQgPiAwKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRHVyaW5nIHByZWNhY2hpbmcgY2xlYW51cCwgYCArXG4gICAgICAgICAgICBgJHtkZWxldGlvbkNvdW50fSBjYWNoZWQgYCArXG4gICAgICAgICAgICBgcmVxdWVzdCR7ZGVsZXRpb25Db3VudCA9PT0gMSA/ICcgd2FzJyA6ICdzIHdlcmUnfSBkZWxldGVkLmApO1xuICAgICAgICBsb2dHcm91cCgnRGVsZXRlZCBDYWNoZSBSZXF1ZXN0cycsIGRlbGV0ZWRVUkxzKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc1xuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9uZXN0ZWRHcm91cChncm91cFRpdGxlLCB1cmxzKSB7XG4gICAgaWYgKHVybHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGdyb3VwVGl0bGUpO1xuICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHMpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh1cmwpO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzVG9QcmVjYWNoZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzQWxyZWFkeVByZWNhY2hlZFxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJbnN0YWxsRGV0YWlscyh1cmxzVG9QcmVjYWNoZSwgdXJsc0FscmVhZHlQcmVjYWNoZWQpIHtcbiAgICBjb25zdCBwcmVjYWNoZWRDb3VudCA9IHVybHNUb1ByZWNhY2hlLmxlbmd0aDtcbiAgICBjb25zdCBhbHJlYWR5UHJlY2FjaGVkQ291bnQgPSB1cmxzQWxyZWFkeVByZWNhY2hlZC5sZW5ndGg7XG4gICAgaWYgKHByZWNhY2hlZENvdW50IHx8IGFscmVhZHlQcmVjYWNoZWRDb3VudCkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBQcmVjYWNoaW5nICR7cHJlY2FjaGVkQ291bnR9IGZpbGUke3ByZWNhY2hlZENvdW50ID09PSAxID8gJycgOiAncyd9LmA7XG4gICAgICAgIGlmIChhbHJlYWR5UHJlY2FjaGVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgJHthbHJlYWR5UHJlY2FjaGVkQ291bnR9IGAgK1xuICAgICAgICAgICAgICAgIGBmaWxlJHthbHJlYWR5UHJlY2FjaGVkQ291bnQgPT09IDEgPyAnIGlzJyA6ICdzIGFyZSd9IGFscmVhZHkgY2FjaGVkLmA7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2UpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgbmV3bHkgcHJlY2FjaGVkIFVSTHMuYCwgdXJsc1RvUHJlY2FjaGUpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgcHJldmlvdXNseSBwcmVjYWNoZWQgVVJMcy5gLCB1cmxzQWxyZWFkeVByZWNhY2hlZCk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZW1vdmVzIGFueSBVUkwgc2VhcmNoIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge1VSTH0gdXJsT2JqZWN0IFRoZSBvcmlnaW5hbCBVUkwuXG4gKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyBSZWdFeHBzIHRvIHRlc3QgYWdhaW5zdFxuICogZWFjaCBzZWFyY2ggcGFyYW1ldGVyIG5hbWUuIE1hdGNoZXMgbWVhbiB0aGF0IHRoZSBzZWFyY2ggcGFyYW1ldGVyIHNob3VsZCBiZVxuICogaWdub3JlZC5cbiAqIEByZXR1cm4ge1VSTH0gVGhlIFVSTCB3aXRoIGFueSBpZ25vcmVkIHNlYXJjaCBwYXJhbWV0ZXJzIHJlbW92ZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nID0gW10pIHtcbiAgICAvLyBDb252ZXJ0IHRoZSBpdGVyYWJsZSBpbnRvIGFuIGFycmF5IGF0IHRoZSBzdGFydCBvZiB0aGUgbG9vcCB0byBtYWtlIHN1cmVcbiAgICAvLyBkZWxldGlvbiBkb2Vzbid0IG1lc3MgdXAgaXRlcmF0aW9uLlxuICAgIGZvciAoY29uc3QgcGFyYW1OYW1lIG9mIFsuLi51cmxPYmplY3Quc2VhcmNoUGFyYW1zLmtleXMoKV0pIHtcbiAgICAgICAgaWYgKGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZy5zb21lKChyZWdFeHApID0+IHJlZ0V4cC50ZXN0KHBhcmFtTmFtZSkpKSB7XG4gICAgICAgICAgICB1cmxPYmplY3Quc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxPYmplY3Q7XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJlZ0V4cFJvdXRlIG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGJhc2VkXG4gKiBbUm91dGVde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9LlxuICpcbiAqIEZvciBzYW1lLW9yaWdpbiByZXF1ZXN0cyB0aGUgUmVnRXhwIG9ubHkgbmVlZHMgdG8gbWF0Y2ggcGFydCBvZiB0aGUgVVJMLiBGb3JcbiAqIHJlcXVlc3RzIGFnYWluc3QgdGhpcmQtcGFydHkgc2VydmVycywgeW91IG11c3QgZGVmaW5lIGEgUmVnRXhwIHRoYXQgbWF0Y2hlc1xuICogdGhlIHN0YXJ0IG9mIHRoZSBVUkwuXG4gKlxuICogW1NlZSB0aGUgbW9kdWxlIGRvY3MgZm9yIGluZm8uXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9tb2R1bGVzL3dvcmtib3gtcm91dGluZ31cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBSZWdFeHBSb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNvbnRhaW5zXG4gICAgICogW2NhcHR1cmUgZ3JvdXBzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWdFeHAjZ3JvdXBpbmctYmFjay1yZWZlcmVuY2VzfSxcbiAgICAgKiB0aGUgY2FwdHVyZWQgdmFsdWVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqIFtoYW5kbGVyJ3Nde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBgcGFyYW1zYFxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ0V4cCBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QgVVJMcy5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAgICogYWdhaW5zdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWdFeHAsIGhhbmRsZXIsIG1ldGhvZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVnRXhwLCBSZWdFeHAsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSZWdFeHBSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncGF0dGVybicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9ICh7IHVybCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZWdFeHAuZXhlYyh1cmwuaHJlZik7XG4gICAgICAgICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBubyBtYXRjaC5cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVxdWlyZSB0aGF0IHRoZSBtYXRjaCBzdGFydCBhdCB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBVUkwgc3RyaW5nXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGEgY3Jvc3Mtb3JpZ2luIHJlcXVlc3QuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODEgZm9yIHRoZSBjb250ZXh0XG4gICAgICAgICAgICAvLyBiZWhpbmQgdGhpcyBiZWhhdmlvci5cbiAgICAgICAgICAgIGlmICgodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luKSAmJiAocmVzdWx0LmluZGV4ICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiAnJHtyZWdFeHB9JyBvbmx5IHBhcnRpYWxseSBtYXRjaGVkIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGFnYWluc3QgdGhlIGNyb3NzLW9yaWdpbiBVUkwgJyR7dXJsfScuIFJlZ0V4cFJvdXRlJ3Mgd2lsbCBvbmx5IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHJvdXRlIG1hdGNoZXMsIGJ1dCB0aGVyZSBhcmVuJ3QgYW55IGNhcHR1cmUgZ3JvdXBzIGRlZmluZWQsIHRoZW5cbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXR1cm4gW10sIHdoaWNoIGlzIHRydXRoeSBhbmQgdGhlcmVmb3JlIHN1ZmZpY2llbnQgdG9cbiAgICAgICAgICAgIC8vIGluZGljYXRlIGEgbWF0Y2guXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgY2FwdHVyZSBncm91cHMsIHRoZW4gaXQgd2lsbCByZXR1cm4gdGhlaXIgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgxKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3VwZXIobWF0Y2gsIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxufVxuZXhwb3J0IHsgUmVnRXhwUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZGVmYXVsdE1ldGhvZCwgdmFsaWRNZXRob2RzIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgbm9ybWFsaXplSGFuZGxlciB9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIGBSb3V0ZWAgY29uc2lzdHMgb2YgYSBwYWlyIG9mIGNhbGxiYWNrIGZ1bmN0aW9ucywgXCJtYXRjaFwiIGFuZCBcImhhbmRsZXJcIi5cbiAqIFRoZSBcIm1hdGNoXCIgY2FsbGJhY2sgZGV0ZXJtaW5lIGlmIGEgcm91dGUgc2hvdWxkIGJlIHVzZWQgdG8gXCJoYW5kbGVcIiBhXG4gKiByZXF1ZXN0IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZSBpZiBpdCBjYW4uIFRoZSBcImhhbmRsZXJcIiBjYWxsYmFja1xuICogaXMgY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtYXRjaCBhbmQgc2hvdWxkIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlc1xuICogdG8gYSBgUmVzcG9uc2VgLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUm91dGUgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gbWF0Y2hcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByb3V0ZSBtYXRjaGVzIGEgZ2l2ZW5cbiAgICAgKiBgZmV0Y2hgIGV2ZW50IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc29sdmluZyB0byBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAgICogYWdhaW5zdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihtYXRjaCwgaGFuZGxlciwgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShtYXRjaCwgJ2Z1bmN0aW9uJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdtYXRjaCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNPbmVPZihtZXRob2QsIHZhbGlkTWV0aG9kcywgeyBwYXJhbU5hbWU6ICdtZXRob2QnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRoZXNlIHZhbHVlcyBhcmUgcmVmZXJlbmNlZCBkaXJlY3RseSBieSBSb3V0ZXIgc28gY2Fubm90IGJlXG4gICAgICAgIC8vIGFsdGVyZWQgYnkgbWluaWZpY2F0b24uXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIHRoaXMubWF0Y2ggPSBtYXRjaDtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgfVxufVxuZXhwb3J0IHsgUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgZGVmYXVsdE1ldGhvZCB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgbm9ybWFsaXplSGFuZGxlciB9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBSb3V0ZXIgY2FuIGJlIHVzZWQgdG8gcHJvY2VzcyBhIEZldGNoRXZlbnQgdGhyb3VnaCBvbmUgb3IgbW9yZVxuICogW1JvdXRlc117QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gcmVzcG9uZGluZyAgd2l0aCBhIFJlcXVlc3QgaWZcbiAqIGEgbWF0Y2hpbmcgcm91dGUgZXhpc3RzLlxuICpcbiAqIElmIG5vIHJvdXRlIG1hdGNoZXMgYSBnaXZlbiBhIHJlcXVlc3QsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImRlZmF1bHRcIlxuICogaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZC5cbiAqXG4gKiBTaG91bGQgdGhlIG1hdGNoaW5nIFJvdXRlIHRocm93IGFuIGVycm9yLCB0aGUgUm91dGVyIHdpbGwgdXNlIGEgXCJjYXRjaFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkIHRvIGdyYWNlZnVsbHkgZGVhbCB3aXRoIGlzc3VlcyBhbmQgcmVzcG9uZCB3aXRoIGFcbiAqIFJlcXVlc3QuXG4gKlxuICogSWYgYSByZXF1ZXN0IG1hdGNoZXMgbXVsdGlwbGUgcm91dGVzLCB0aGUgKiplYXJsaWVzdCoqIHJlZ2lzdGVyZWQgcm91dGUgd2lsbFxuICogYmUgdXNlZCB0byByZXNwb25kIHRvIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgUm91dGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBBcnJheTxtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlPj59IHJvdXRlcyBBIGBNYXBgIG9mIEhUVFBcbiAgICAgKiBtZXRob2QgbmFtZSAoJ0dFVCcsIGV0Yy4pIHRvIGFuIGFycmF5IG9mIGFsbCB0aGUgY29ycmVzcG9uZGluZyBgUm91dGVgXG4gICAgICogaW5zdGFuY2VzIHRoYXQgYXJlIHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gZXZlbnRzIHdoZW4gYSByb3V0ZSBtYXRjaGVzXG4gICAgICogdGhlIGV2ZW50J3MgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhZGRGZXRjaExpc3RlbmVyKCkge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGV2ZW50O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHsgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgocmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbWVzc2FnZSBldmVudCBsaXN0ZW5lciBmb3IgVVJMcyB0byBjYWNoZSBmcm9tIHRoZSB3aW5kb3cuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgdG8gY2FjaGUgcmVzb3VyY2VzIGxvYWRlZCBvbiB0aGUgcGFnZSBwcmlvciB0byB3aGVuIHRoZVxuICAgICAqIHNlcnZpY2Ugd29ya2VyIHN0YXJ0ZWQgY29udHJvbGxpbmcgaXQuXG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIGRhdGEgc2VudCBmcm9tIHRoZSB3aW5kb3cgc2hvdWxkIGJlIGFzIGZvbGxvd3MuXG4gICAgICogV2hlcmUgdGhlIGB1cmxzVG9DYWNoZWAgYXJyYXkgbWF5IGNvbnNpc3Qgb2YgVVJMIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2ZcbiAgICAgKiBVUkwgc3RyaW5nICsgYHJlcXVlc3RJbml0YCBvYmplY3QgKHRoZSBzYW1lIGFzIHlvdSdkIHBhc3MgdG8gYGZldGNoKClgKS5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHtcbiAgICAgKiAgIHR5cGU6ICdDQUNIRV9VUkxTJyxcbiAgICAgKiAgIHBheWxvYWQ6IHtcbiAgICAgKiAgICAgdXJsc1RvQ2FjaGU6IFtcbiAgICAgKiAgICAgICAnLi9zY3JpcHQxLmpzJyxcbiAgICAgKiAgICAgICAnLi9zY3JpcHQyLmpzJyxcbiAgICAgKiAgICAgICBbJy4vc2NyaXB0My5qcycsIHttb2RlOiAnbm8tY29ycyd9XSxcbiAgICAgKiAgICAgXSxcbiAgICAgKiAgIH0sXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGFkZENhY2hlTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FDSEVfVVJMUycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoaW5nIFVSTHMgZnJvbSB0aGUgd2luZG93YCwgcGF5bG9hZC51cmxzVG9DYWNoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlcyA9IFByb21pc2UuYWxsKHBheWxvYWQudXJsc1RvQ2FjaGUubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBbZW50cnldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCguLi5lbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBUeXBlU2NyaXB0IGVycm9ycyB3aXRob3V0IHRoaXMgdHlwZWNhc3QgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgcmVhc29uIChwcm9iYWJseSBhIGJ1ZykuIFRoZSByZWFsIHR5cGUgaGVyZSBzaG91bGQgd29yayBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lc24ndDogYEFycmF5PFByb21pc2U8UmVzcG9uc2U+IHwgdW5kZWZpbmVkPmAuXG4gICAgICAgICAgICAgICAgfSkpOyAvLyBUeXBlU2NyaXB0XG4gICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHJlcXVlc3RQcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBNZXNzYWdlQ2hhbm5lbCB3YXMgdXNlZCwgcmVwbHkgdG8gdGhlIG1lc3NhZ2Ugb24gc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucG9ydHMgJiYgZXZlbnQucG9ydHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFByb21pc2VzLnRoZW4oKCkgPT4gZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2UodHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgcm91dGluZyBydWxlcyB0byBhIEZldGNoRXZlbnQgb2JqZWN0IHRvIGdldCBhIFJlc3BvbnNlIGZyb20gYW5cbiAgICAgKiBhcHByb3ByaWF0ZSBSb3V0ZSdzIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIGhhbmRsZS5cbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gICAgICogICAgIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT58dW5kZWZpbmVkfSBBIHByb21pc2UgaXMgcmV0dXJuZWQgaWYgYVxuICAgICAqICAgICByZWdpc3RlcmVkIHJvdXRlIGNhbiBoYW5kbGUgdGhlIHJlcXVlc3QuIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nXG4gICAgICogICAgIHJvdXRlIGFuZCB0aGVyZSdzIG5vIGBkZWZhdWx0SGFuZGxlcmAsIGB1bmRlZmluZWRgIGlzIHJldHVybmVkLlxuICAgICAqL1xuICAgIGhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZVJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMucmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgV29ya2JveCBSb3V0ZXIgb25seSBzdXBwb3J0cyBVUkxzIHRoYXQgc3RhcnQgd2l0aCAnaHR0cCcuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2FtZU9yaWdpbiA9IHVybC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbjtcbiAgICAgICAgY29uc3QgeyBwYXJhbXMsIHJvdXRlIH0gPSB0aGlzLmZpbmRNYXRjaGluZ1JvdXRlKHtcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgICAgIHNhbWVPcmlnaW4sXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmhhbmRsZXI7XG4gICAgICAgIGNvbnN0IGRlYnVnTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgYEZvdW5kIGEgcm91dGUgdG8gaGFuZGxlIHRoaXMgcmVxdWVzdDpgLCByb3V0ZSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICBgUGFzc2luZyB0aGUgZm9sbG93aW5nIHBhcmFtcyB0byB0aGUgcm91dGUncyBoYW5kbGVyOmAsIHBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBoYW5kbGVyIGJlY2F1c2UgdGhlcmUgd2FzIG5vIG1hdGNoaW5nIHJvdXRlLCB0aGVuXG4gICAgICAgIC8vIGZhbGwgYmFjayB0byBkZWZhdWx0SGFuZGxlciBpZiB0aGF0J3MgZGVmaW5lZC5cbiAgICAgICAgY29uc3QgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgICAgIGlmICghaGFuZGxlciAmJiB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5oYXMobWV0aG9kKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goYEZhaWxlZCB0byBmaW5kIGEgbWF0Y2hpbmcgcm91dGUuIEZhbGxpbmcgYCArXG4gICAgICAgICAgICAgICAgICAgIGBiYWNrIHRvIHRoZSBkZWZhdWx0IGhhbmRsZXIgZm9yICR7bWV0aG9kfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIgPSB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5nZXQobWV0aG9kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gaGFuZGxlciBzbyBXb3JrYm94IHdpbGwgZG8gbm90aGluZy4gSWYgbG9ncyBpcyBzZXQgb2YgZGVidWdcbiAgICAgICAgICAgICAgICAvLyBpLmUuIHZlcmJvc2UsIHdlIHNob3VsZCBwcmludCBvdXQgdGhpcyBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE5vIHJvdXRlIGZvdW5kIGZvcjogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGEgaGFuZGxlciwgbWVhbmluZyBXb3JrYm94IGlzIGdvaW5nIHRvIGhhbmRsZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBSb3V0ZXIgaXMgcmVzcG9uZGluZyB0bzogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coLi4ubXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdyYXAgaW4gdHJ5IGFuZCBjYXRjaCBpbiBjYXNlIHRoZSBoYW5kbGUgbWV0aG9kIHRocm93cyBhIHN5bmNocm9ub3VzXG4gICAgICAgIC8vIGVycm9yLiBJdCBzaG91bGQgc3RpbGwgY2FsbGJhY2sgdG8gdGhlIGNhdGNoIGhhbmRsZXIuXG4gICAgICAgIGxldCByZXNwb25zZVByb21pc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSBoYW5kbGVyLmhhbmRsZSh7IHVybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtcyB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlICYmIHRoaXMuX2NhdGNoSGFuZGxlcikge1xuICAgICAgICAgICAgcmVzcG9uc2VQcm9taXNlID0gcmVzcG9uc2VQcm9taXNlLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKHVybCl9LiBGYWxsaW5nIGJhY2sgdG8gQ2F0Y2ggSGFuZGxlci5gKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXRjaEhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyBhIHJlcXVlc3QgYW5kIFVSTCAoYW5kIG9wdGlvbmFsbHkgYW4gZXZlbnQpIGFnYWluc3QgdGhlIGxpc3Qgb2ZcbiAgICAgKiByZWdpc3RlcmVkIHJvdXRlcywgYW5kIGlmIHRoZXJlJ3MgYSBtYXRjaCwgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICAgICAqIHJvdXRlIGFsb25nIHdpdGggYW55IHBhcmFtcyBnZW5lcmF0ZWQgYnkgdGhlIG1hdGNoLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHJvdXRlYCBhbmQgYHBhcmFtc2AgcHJvcGVydGllcy5cbiAgICAgKiAgICAgVGhleSBhcmUgcG9wdWxhdGVkIGlmIGEgbWF0Y2hpbmcgcm91dGUgd2FzIGZvdW5kIG9yIGB1bmRlZmluZWRgXG4gICAgICogICAgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBmaW5kTWF0Y2hpbmdSb3V0ZSh7IHVybCwgc2FtZU9yaWdpbiwgcmVxdWVzdCwgZXZlbnQgfSkge1xuICAgICAgICBjb25zdCByb3V0ZXMgPSB0aGlzLl9yb3V0ZXMuZ2V0KHJlcXVlc3QubWV0aG9kKSB8fCBbXTtcbiAgICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXM7XG4gICAgICAgICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHJvdXRlLm1hdGNoKHsgdXJsLCBzYW1lT3JpZ2luLCByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhcm4gZGV2ZWxvcGVycyB0aGF0IHVzaW5nIGFuIGFzeW5jIG1hdGNoQ2FsbGJhY2sgaXMgYWxtb3N0IGFsd2F5c1xuICAgICAgICAgICAgICAgICAgICAvLyBub3QgdGhlIHJpZ2h0IHRoaW5nIHRvIGRvLiBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFdoaWxlIHJvdXRpbmcgJHtnZXRGcmllbmRseVVSTCh1cmwpfSwgYW4gYXN5bmMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb24gd2FzIHVzZWQuIFBsZWFzZSBjb252ZXJ0IHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZm9sbG93aW5nIHJvdXRlIHRvIHVzZSBhIHN5bmNocm9ub3VzIG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb246YCwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIwNzlcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBtYXRjaFJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaFJlc3VsdCkgJiYgbWF0Y2hSZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBhcnJheSBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKG1hdGNoUmVzdWx0LmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWF0Y2hSZXN1bHQpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IG9iamVjdCBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG1hdGNoUmVzdWx0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHRoZSBib29sZWFuIHZhbHVlIHRydWUgKHJhdGhlciB0aGFuIGp1c3Qgc29tZXRoaW5nIHRydXRoLXkpLFxuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBzZXQgcGFyYW1zLlxuICAgICAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjEzNCNpc3N1ZWNvbW1lbnQtNTEzOTI0MzUzXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGhhdmUgYSBtYXRjaC5cbiAgICAgICAgICAgICAgICByZXR1cm4geyByb3V0ZSwgcGFyYW1zIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbm8gbWF0Y2ggd2FzIGZvdW5kIGFib3ZlLCByZXR1cm4gYW5kIGVtcHR5IG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgYSBkZWZhdWx0IGBoYW5kbGVyYCB0aGF0J3MgY2FsbGVkIHdoZW4gbm8gcm91dGVzIGV4cGxpY2l0bHlcbiAgICAgKiBtYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEVhY2ggSFRUUCBtZXRob2QgKCdHRVQnLCAnUE9TVCcsIGV0Yy4pIGdldHMgaXRzIG93biBkZWZhdWx0IGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBXaXRob3V0IGEgZGVmYXVsdCBoYW5kbGVyLCB1bm1hdGNoZWQgcmVxdWVzdHMgd2lsbCBnbyBhZ2FpbnN0IHRoZVxuICAgICAqIG5ldHdvcmsgYXMgaWYgdGhlcmUgd2VyZSBubyBzZXJ2aWNlIHdvcmtlciBwcmVzZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIGFzc29jaWF0ZSB3aXRoIHRoaXNcbiAgICAgKiBkZWZhdWx0IGhhbmRsZXIuIEVhY2ggbWV0aG9kIGhhcyBpdHMgb3duIGRlZmF1bHQuXG4gICAgICovXG4gICAgc2V0RGVmYXVsdEhhbmRsZXIoaGFuZGxlciwgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCkge1xuICAgICAgICB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5zZXQobWV0aG9kLCBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICAgICAqIHdpbGwgYmUgY2FsbGVkIGFuZCBnaXZlbiBhIGNoYW5jZSB0byBwcm92aWRlIGEgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqL1xuICAgIHNldENhdGNoSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuX2NhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHJlZ2lzdGVyLlxuICAgICAqL1xuICAgIHJlZ2lzdGVyUm91dGUocm91dGUpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUsICdvYmplY3QnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0Lmhhc01ldGhvZChyb3V0ZSwgJ21hdGNoJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUuaGFuZGxlciwgJ29iamVjdCcsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKHJvdXRlLmhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlLmhhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKHJvdXRlLm1ldGhvZCwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUubWV0aG9kJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXMuc2V0KHJvdXRlLm1ldGhvZCwgW10pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdpdmUgcHJlY2VkZW5jZSB0byBhbGwgb2YgdGhlIGVhcmxpZXIgcm91dGVzIGJ5IGFkZGluZyB0aGlzIGFkZGl0aW9uYWxcbiAgICAgICAgLy8gcm91dGUgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKS5wdXNoKHJvdXRlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9IHJvdXRlIFRoZSByb3V0ZSB0byB1bnJlZ2lzdGVyLlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXJSb3V0ZShyb3V0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX3JvdXRlcy5oYXMocm91dGUubWV0aG9kKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogcm91dGUubWV0aG9kLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGVJbmRleCA9IHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKS5pbmRleE9mKHJvdXRlKTtcbiAgICAgICAgaWYgKHJvdXRlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLnNwbGljZShyb3V0ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3VucmVnaXN0ZXItcm91dGUtcm91dGUtbm90LXJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IFJvdXRlciB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6cm91dGluZzo2LjAuMiddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0IHsgUmVnRXhwUm91dGUgfSBmcm9tICcuL1JlZ0V4cFJvdXRlLmpzJztcbmltcG9ydCB7IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEVhc2lseSByZWdpc3RlciBhIFJlZ0V4cCwgc3RyaW5nLCBvciBmdW5jdGlvbiB3aXRoIGEgY2FjaGluZ1xuICogc3RyYXRlZ3kgdG8gYSBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlLlxuICpcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZ2VuZXJhdGUgYSBSb3V0ZSBmb3IgeW91IGlmIG5lZWRlZCBhbmRcbiAqIGNhbGwgW3JlZ2lzdGVyUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZXIjcmVnaXN0ZXJSb3V0ZX0uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV+bWF0Y2hDYWxsYmFja3xtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSBjYXB0dXJlXG4gKiBJZiB0aGUgY2FwdHVyZSBwYXJhbSBpcyBhIGBSb3V0ZWAsIGFsbCBvdGhlciBhcmd1bWVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gW2hhbmRsZXJdIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuIFRoaXMgcGFyYW1ldGVyXG4gKiBpcyByZXF1aXJlZCBpZiBgY2FwdHVyZWAgaXMgbm90IGEgYFJvdXRlYCBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICogYWdhaW5zdC5cbiAqIEByZXR1cm4ge21vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9IFRoZSBnZW5lcmF0ZWQgYFJvdXRlYChVc2VmdWwgZm9yXG4gKiB1bnJlZ2lzdGVyaW5nKS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICovXG5mdW5jdGlvbiByZWdpc3RlclJvdXRlKGNhcHR1cmUsIGhhbmRsZXIsIG1ldGhvZCkge1xuICAgIGxldCByb3V0ZTtcbiAgICBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGNhcHR1cmVVcmwgPSBuZXcgVVJMKGNhcHR1cmUsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKCEoY2FwdHVyZS5zdGFydHNXaXRoKCcvJykgfHwgY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJykpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1zdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gY2hlY2sgaWYgRXhwcmVzcy1zdHlsZSB3aWxkY2FyZHMgYXJlIGluIHRoZSBwYXRobmFtZSBvbmx5LlxuICAgICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgbG9nIG1lc3NhZ2UgaW4gdjQuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvQ2hlY2sgPSBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSA/XG4gICAgICAgICAgICAgICAgY2FwdHVyZVVybC5wYXRobmFtZSA6IGNhcHR1cmU7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwI3BhcmFtZXRlcnNcbiAgICAgICAgICAgIGNvbnN0IHdpbGRjYXJkcyA9ICdbKjo/K10nO1xuICAgICAgICAgICAgaWYgKChuZXcgUmVnRXhwKGAke3dpbGRjYXJkc31gKSkuZXhlYyh2YWx1ZVRvQ2hlY2spKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgJyRjYXB0dXJlJyBwYXJhbWV0ZXIgY29udGFpbnMgYW4gRXhwcmVzcy1zdHlsZSB3aWxkY2FyZCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGNoYXJhY3RlciAoJHt3aWxkY2FyZHN9KS4gU3RyaW5ncyBhcmUgbm93IGFsd2F5cyBpbnRlcnByZXRlZCBhcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYGV4YWN0IG1hdGNoZXM7IHVzZSBhIFJlZ0V4cCBmb3IgcGFydGlhbCBvciB3aWxkY2FyZCBtYXRjaGVzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2sgPSAoeyB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHVybC5wYXRobmFtZSA9PT0gY2FwdHVyZVVybC5wYXRobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHVybC5vcmlnaW4gIT09IGNhcHR1cmVVcmwub3JpZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYCR7Y2FwdHVyZX0gb25seSBwYXJ0aWFsbHkgbWF0Y2hlcyB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3VybH0uIFRoaXMgcm91dGUgd2lsbCBvbmx5IGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXJsLmhyZWYgPT09IGNhcHR1cmVVcmwuaHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgc3RyaW5nIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKG1hdGNoQ2FsbGJhY2ssIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgYFJlZ0V4cGAgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUmVnRXhwUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgZnVuY3Rpb24gdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICAgICAgcm91dGUgPSBuZXcgUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgICAgIHJvdXRlID0gY2FwdHVyZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnLCB7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLnJlZ2lzdGVyUm91dGUocm91dGUpO1xuICAgIHJldHVybiByb3V0ZTtcbn1cbmV4cG9ydCB7IHJlZ2lzdGVyUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCwgJ0dFVCcsIHVzZWQgd2hlbiB0aGVyZSdzIG5vIHNwZWNpZmljIG1ldGhvZFxuICogY29uZmlndXJlZCBmb3IgYSByb3V0ZS5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWV0aG9kID0gJ0dFVCc7XG4vKipcbiAqIFRoZSBsaXN0IG9mIHZhbGlkIEhUVFAgbWV0aG9kcyBhc3NvY2lhdGVkIHdpdGggcmVxdWVzdHMgdGhhdCBjb3VsZCBiZSByb3V0ZWQuXG4gKlxuICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkTWV0aG9kcyA9IFtcbiAgICAnREVMRVRFJyxcbiAgICAnR0VUJyxcbiAgICAnSEVBRCcsXG4gICAgJ1BBVENIJyxcbiAgICAnUE9TVCcsXG4gICAgJ1BVVCcsXG5dO1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vUm91dGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IGRlZmF1bHRSb3V0ZXI7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UgaWYgb25lIGRvZXMgbm90IGV4aXN0LiBJZiBvbmVcbiAqIGRvZXMgYWxyZWFkeSBleGlzdCwgdGhhdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Um91dGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyID0gKCkgPT4ge1xuICAgIGlmICghZGVmYXVsdFJvdXRlcikge1xuICAgICAgICBkZWZhdWx0Um91dGVyID0gbmV3IFJvdXRlcigpO1xuICAgICAgICAvLyBUaGUgaGVscGVycyB0aGF0IHVzZSB0aGUgZGVmYXVsdCBSb3V0ZXIgYXNzdW1lIHRoZXNlIGxpc3RlbmVycyBleGlzdC5cbiAgICAgICAgZGVmYXVsdFJvdXRlci5hZGRGZXRjaExpc3RlbmVyKCk7XG4gICAgICAgIGRlZmF1bHRSb3V0ZXIuYWRkQ2FjaGVMaXN0ZW5lcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJvdXRlcjtcbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCl8T2JqZWN0fSBoYW5kbGVyIEVpdGhlciBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3Qgd2l0aCBhXG4gKiAnaGFuZGxlJyBtZXRob2QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGEgaGFuZGxlIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKGhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShoYW5kbGVyLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgaGFuZGxlOiBoYW5kbGVyIH07XG4gICAgfVxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gYWJzdHJhY3QgYmFzZSBjbGFzcyB0aGF0IGFsbCBvdGhlciBzdHJhdGVneSBjbGFzc2VzIG11c3QgZXh0ZW5kIGZyb206XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHN0cmF0ZWd5IGFuZCBzZXRzIGFsbCBkb2N1bWVudGVkIG9wdGlvblxuICAgICAqIHByb3BlcnRpZXMgYXMgcHVibGljIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBOb3RlOiBpZiBhIGN1c3RvbSBzdHJhdGVneSBjbGFzcyBleHRlbmRzIHRoZSBiYXNlIFN0cmF0ZWd5IGNsYXNzIGFuZCBkb2VzXG4gICAgICogbm90IG5lZWQgbW9yZSB0aGFuIHRoZXNlIHByb3BlcnRpZXMsIGl0IGRvZXMgbm90IG5lZWQgdG8gZGVmaW5lIGl0cyBvd25cbiAgICAgKiBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiBbd29ya2JveC1jb3JlXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN9XG4gICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFRoZVxuICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZShvcHRpb25zLmNhY2hlTmFtZSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdFxuICAgICAgICAgKiBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICAgICAqIHVzZWQgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0FycmF5PE9iamVjdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAgICAgKiBbYGluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzfVxuICAgICAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlXG4gICAgICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1hdGNoT3B0aW9ucyA9IG9wdGlvbnMubWF0Y2hPcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoXG4gICAgICogYSBgUmVzcG9uc2VgLCBpbnZva2luZyBhbGwgcmVsZXZhbnQgcGx1Z2luIGNhbGxiYWNrcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYSBzdHJhdGVneSBpbnN0YW5jZSBpcyByZWdpc3RlcmVkIHdpdGggYSBXb3JrYm94XG4gICAgICogW3JvdXRlXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSwgdGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseVxuICAgICAqIGNhbGxlZCB3aGVuIHRoZSByb3V0ZSBtYXRjaGVzLlxuICAgICAqXG4gICAgICogQWx0ZXJuYXRpdmVseSwgdGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgaW4gYSBzdGFuZGFsb25lIGBGZXRjaEV2ZW50YFxuICAgICAqIGxpc3RlbmVyIGJ5IHBhc3NpbmcgaXQgdG8gYGV2ZW50LnJlc3BvbmRXaXRoKClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgICAqL1xuICAgIGhhbmRsZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IFtyZXNwb25zZURvbmVdID0gdGhpcy5oYW5kbGVBbGwob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZURvbmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNpbWlsYXIgdG8gW2BoYW5kbGUoKWBde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSwgYnV0XG4gICAgICogaW5zdGVhZCBvZiBqdXN0IHJldHVybmluZyBhIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHRvIGEgYFJlc3BvbnNlYCBpdFxuICAgICAqIGl0IHdpbGwgcmV0dXJuIGFuIHR1cGxlIG9mIFtyZXNwb25zZSwgZG9uZV0gcHJvbWlzZXMsIHdoZXJlIHRoZSBmb3JtZXJcbiAgICAgKiAoYHJlc3BvbnNlYCkgaXMgZXF1aXZhbGVudCB0byB3aGF0IGBoYW5kbGUoKWAgcmV0dXJucywgYW5kIHRoZSBsYXR0ZXIgaXMgYVxuICAgICAqIFByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb25jZSBhbnkgcHJvbWlzZXMgdGhhdCB3ZXJlIGFkZGVkIHRvXG4gICAgICogYGV2ZW50LndhaXRVbnRpbCgpYCBhcyBwYXJ0IG9mIHBlcmZvcm1pbmcgdGhlIHN0cmF0ZWd5IGhhdmUgY29tcGxldGVkLlxuICAgICAqXG4gICAgICogWW91IGNhbiBhd2FpdCB0aGUgYGRvbmVgIHByb21pc2UgdG8gZW5zdXJlIGFueSBleHRyYSB3b3JrIHBlcmZvcm1lZCBieVxuICAgICAqIHRoZSBzdHJhdGVneSAodXN1YWxseSBjYWNoaW5nIHJlc3BvbnNlcykgY29tcGxldGVzIHN1Y2Nlc3NmdWxseS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmV0Y2hFdmVudHxPYmplY3R9IG9wdGlvbnMgQSBgRmV0Y2hFdmVudGAgb3IgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICogICAgIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICAgKiBAcmV0dXJuIHtBcnJheTxQcm9taXNlPn0gQSB0dXBsZSBvZiBbcmVzcG9uc2UsIGRvbmVdXG4gICAgICogICAgIHByb21pc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gdGhlIHJlc3BvbnNlIHJlc29sdmVzIGFzXG4gICAgICogICAgIHdlbGwgYXMgd2hlbiB0aGUgaGFuZGxlciBoYXMgY29tcGxldGVkIGFsbCBpdHMgd29yay5cbiAgICAgKi9cbiAgICBoYW5kbGVBbGwob3B0aW9ucykge1xuICAgICAgICAvLyBBbGxvdyBmb3IgZmxleGlibGUgb3B0aW9ucyB0byBiZSBwYXNzZWQuXG4gICAgICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRmV0Y2hFdmVudCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBldmVudDogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBvcHRpb25zLnJlcXVlc3QsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gb3B0aW9ucy5ldmVudDtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHR5cGVvZiBvcHRpb25zLnJlcXVlc3QgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgIG5ldyBSZXF1ZXN0KG9wdGlvbnMucmVxdWVzdCkgOlxuICAgICAgICAgICAgb3B0aW9ucy5yZXF1ZXN0O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSAncGFyYW1zJyBpbiBvcHRpb25zID8gb3B0aW9ucy5wYXJhbXMgOiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgU3RyYXRlZ3lIYW5kbGVyKHRoaXMsIHsgZXZlbnQsIHJlcXVlc3QsIHBhcmFtcyB9KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEb25lID0gdGhpcy5fZ2V0UmVzcG9uc2UoaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpO1xuICAgICAgICBjb25zdCBoYW5kbGVyRG9uZSA9IHRoaXMuX2F3YWl0Q29tcGxldGUocmVzcG9uc2VEb25lLCBoYW5kbGVyLCByZXF1ZXN0LCBldmVudCk7XG4gICAgICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBwcm9taXNlcywgc3VpdGFibGUgZm9yIHVzZSB3aXRoIFByb21pc2UuYWxsKCkuXG4gICAgICAgIHJldHVybiBbcmVzcG9uc2VEb25lLCBoYW5kbGVyRG9uZV07XG4gICAgfVxuICAgIGFzeW5jIF9nZXRSZXNwb25zZShoYW5kbGVyLCByZXF1ZXN0LCBldmVudCkge1xuICAgICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlcldpbGxTdGFydCcsIHsgZXZlbnQsIHJlcXVlc3QgfSk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpO1xuICAgICAgICAgICAgLy8gVGhlIFwib2ZmaWNpYWxcIiBTdHJhdGVneSBzdWJjbGFzc2VzIGFsbCB0aHJvdyB0aGlzIGVycm9yIGF1dG9tYXRpY2FsbHksXG4gICAgICAgICAgICAvLyBidXQgaW4gY2FzZSBhIHRoaXJkLXBhcnR5IFN0cmF0ZWd5IGRvZXNuJ3QsIGVuc3VyZSB0aGF0IHdlIGhhdmUgYVxuICAgICAgICAgICAgLy8gY29uc2lzdGVudCBmYWlsdXJlIHdoZW4gdGhlcmUncyBubyByZXNwb25zZSBvciBhbiBlcnJvciByZXNwb25zZS5cbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJEaWRFcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7IGVycm9yLCBldmVudCwgcmVxdWVzdCB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFdoaWxlIHJlc3BvbmRpbmcgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScsIGAgK1xuICAgICAgICAgICAgICAgICAgICBgYW4gJHtlcnJvcn0gZXJyb3Igb2NjdXJyZWQuIFVzaW5nIGEgZmFsbGJhY2sgcmVzcG9uc2UgcHJvdmlkZWQgYnkgYCArXG4gICAgICAgICAgICAgICAgICAgIGBhIGhhbmRsZXJEaWRFcnJvciBwbHVnaW4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJXaWxsUmVzcG9uZCcpKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHsgZXZlbnQsIHJlcXVlc3QsIHJlc3BvbnNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgX2F3YWl0Q29tcGxldGUocmVzcG9uc2VEb25lLCBoYW5kbGVyLCByZXF1ZXN0LCBldmVudCkge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2VEb25lO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gSWdub3JlIGVycm9ycywgYXMgcmVzcG9uc2UgZXJyb3JzIHNob3VsZCBiZSBjYXVnaHQgdmlhIHRoZSBgcmVzcG9uc2VgXG4gICAgICAgICAgICAvLyBwcm9taXNlIGFib3ZlLiBUaGUgYGRvbmVgIHByb21pc2Ugd2lsbCBvbmx5IHRocm93IGZvciBlcnJvcnMgaW5cbiAgICAgICAgICAgIC8vIHByb21pc2VzIHBhc3NlZCB0byBgaGFuZGxlci53YWl0VW50aWwoKWAuXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyRGlkUmVzcG9uZCcsIHtcbiAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVyLmRvbmVXYWl0aW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKHdhaXRVbnRpbEVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IHdhaXRVbnRpbEVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyRGlkQ29tcGxldGUnLCB7XG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIGVycm9yLFxuICAgICAgICB9KTtcbiAgICAgICAgaGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgeyBTdHJhdGVneSB9O1xuLyoqXG4gKiBDbGFzc2VzIGV4dGVuZGluZyB0aGUgYFN0cmF0ZWd5YCBiYXNlZCBjbGFzcyBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kLFxuICogYW5kIGxldmVyYWdlIHRoZSBbYGhhbmRsZXJgXXtAbGluayBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn1cbiAqIGFyZyB0byBwZXJmb3JtIGFsbCBmZXRjaGluZyBhbmQgY2FjaGUgbG9naWMsIHdoaWNoIHdpbGwgZW5zdXJlIGFsbCByZWxldmFudFxuICogY2FjaGUsIGNhY2hlIG9wdGlvbnMsIGZldGNoIG9wdGlvbnMgYW5kIHBsdWdpbnMgYXJlIHVzZWQgKHBlciB0aGUgY3VycmVudFxuICogc3RyYXRlZ3kgaW5zdGFuY2UpLlxuICpcbiAqIEBuYW1lIF9oYW5kbGVcbiAqIEBpbnN0YW5jZVxuICogQGFic3RyYWN0XG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlclxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqL1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMuanMnO1xuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQuanMnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuZnVuY3Rpb24gdG9SZXF1ZXN0KGlucHV0KSB7XG4gICAgcmV0dXJuICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSA/IG5ldyBSZXF1ZXN0KGlucHV0KSA6IGlucHV0O1xufVxuLyoqXG4gKiBBIGNsYXNzIGNyZWF0ZWQgZXZlcnkgdGltZSBhIFN0cmF0ZWd5IGluc3RhbmNlIGluc3RhbmNlIGNhbGxzXG4gKiBbaGFuZGxlKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSBvclxuICogW2hhbmRsZUFsbCgpXXtAbGluayBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZUFsbH0gdGhhdCB3cmFwcyBhbGwgZmV0Y2ggYW5kXG4gKiBjYWNoZSBhY3Rpb25zIGFyb3VuZCBwbHVnaW4gY2FsbGJhY2tzIGFuZCBrZWVwcyB0cmFjayBvZiB3aGVuIHRoZSBzdHJhdGVneVxuICogaXMgXCJkb25lXCIgKGkuZS4gYWxsIGFkZGVkIGBldmVudC53YWl0VW50aWwoKWAgcHJvbWlzZXMgaGF2ZSByZXNvbHZlZCkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RyYXRlZ3lIYW5kbGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFzc2VkIHN0cmF0ZWd5IGFuZCBldmVudFxuICAgICAqIHRoYXQncyBoYW5kbGluZyB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBhbHNvIGluaXRpYWxpemVzIHRoZSBzdGF0ZSB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIGVhY2ggb2ZcbiAgICAgKiB0aGUgcGx1Z2lucyBoYW5kbGluZyB0aGlzIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l9IHN0cmF0ZWd5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgICAqICAgICByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdXG4gICAgICogICAgIFttYXRjaCBjYWxsYmFja117QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSxcbiAgICAgKiAgICAgKGlmIGFwcGxpY2FibGUpLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlS2V5cyA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlcXVlc3QgdGhlIHN0cmF0ZWd5IGlzIHBlcmZvcm1pbmcgKHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgICAgICogQG5hbWUgcmVxdWVzdFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUge1JlcXVlc3R9XG4gICAgICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyByZXF1ZXN0LlxuICAgICAgICAgKiBAbmFtZSBldmVudFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUge0V4dGVuZGFibGVFdmVudH1cbiAgICAgICAgICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBgVVJMYCBpbnN0YW5jZSBvZiBgcmVxdWVzdC51cmxgIChpZiBwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICAgICAqIE5vdGU6IHRoZSBgdXJsYCBwYXJhbSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHN0cmF0ZWd5IHdhcyBpbnZva2VkXG4gICAgICAgICAqIGZyb20gYSB3b3JrYm94IGBSb3V0ZWAgb2JqZWN0LlxuICAgICAgICAgKiBAbmFtZSB1cmxcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHtVUkx8dW5kZWZpbmVkfVxuICAgICAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGBwYXJhbWAgdmFsdWUgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgICAgICogTm90ZTogdGhlIGBwYXJhbWAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdCBhbmQgdGhlXG4gICAgICAgICAqIFttYXRjaCBjYWxsYmFja117QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSByZXR1cm5lZFxuICAgICAgICAgKiBhIHRydXRoeSB2YWx1ZSAoaXQgd2lsbCBiZSB0aGF0IHZhbHVlKS5cbiAgICAgICAgICogQG5hbWUgcGFyYW1zXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7Knx1bmRlZmluZWR9XG4gICAgICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKG9wdGlvbnMuZXZlbnQsIEV4dGVuZGFibGVFdmVudCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1N0cmF0ZWd5SGFuZGxlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5ldmVudCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmV2ZW50ID0gb3B0aW9ucy5ldmVudDtcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5faGFuZGxlckRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgLy8gQ29weSB0aGUgcGx1Z2lucyBsaXN0IChzaW5jZSBpdCdzIG11dGFibGUgb24gdGhlIHN0cmF0ZWd5KSxcbiAgICAgICAgLy8gc28gYW55IG11dGF0aW9ucyBkb24ndCBhZmZlY3QgdGhpcyBoYW5kbGVyIGluc3RhbmNlLlxuICAgICAgICB0aGlzLl9wbHVnaW5zID0gWy4uLnN0cmF0ZWd5LnBsdWdpbnNdO1xuICAgICAgICB0aGlzLl9wbHVnaW5TdGF0ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fcGx1Z2lucykge1xuICAgICAgICAgICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAuc2V0KHBsdWdpbiwge30pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnQud2FpdFVudGlsKHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5wcm9taXNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyBhIGdpdmVuIHJlcXVlc3QgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlIHBsdWdpbiBjYWxsYmFja1xuICAgICAqIG1ldGhvZHMpIHVzaW5nIHRoZSBgZmV0Y2hPcHRpb25zYCBhbmQgYHBsdWdpbnNgIGRlZmluZWQgb24gdGhlIHN0cmF0ZWd5XG4gICAgICogb2JqZWN0LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICAgKiAtIGByZXF1ZXN0V2lsbEZldGNoKClgXG4gICAgICogLSBgZmV0Y2hEaWRTdWNjZWVkKClgXG4gICAgICogLSBgZmV0Y2hEaWRGYWlsKClgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBpbnB1dCBUaGUgVVJMIG9yIHJlcXVlc3QgdG8gZmV0Y2guXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgZmV0Y2goaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdFVudGlsKChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGV2ZW50IH0gPSB0aGlzO1xuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB0b1JlcXVlc3QoaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyAmJlxuICAgICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgRmV0Y2hFdmVudCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZWxvYWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlID0gYXdhaXQgZXZlbnQucHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZVByZWxvYWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVXNpbmcgYSBwcmVsb2FkZWQgbmF2aWdhdGlvbiByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgZmV0Y2hEaWRGYWlsIHBsdWdpbiwgd2UgbmVlZCB0byBzYXZlIGEgY2xvbmUgb2YgdGhlXG4gICAgICAgICAgICAvLyBvcmlnaW5hbCByZXF1ZXN0IGJlZm9yZSBpdCdzIGVpdGhlciBtb2RpZmllZCBieSBhIHJlcXVlc3RXaWxsRmV0Y2hcbiAgICAgICAgICAgIC8vIHBsdWdpbiBvciBiZWZvcmUgdGhlIG9yaWdpbmFsIHJlcXVlc3QncyBib2R5IGlzIGNvbnN1bWVkIHZpYSBmZXRjaCgpLlxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gdGhpcy5oYXNDYWxsYmFjaygnZmV0Y2hEaWRGYWlsJykgP1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2Igb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdyZXF1ZXN0V2lsbEZldGNoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCA9IGF3YWl0IGNiKHsgcmVxdWVzdDogcmVxdWVzdC5jbG9uZSgpLCBldmVudCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3duRXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IGNhbiBiZSBhbHRlcmVkIGJ5IHBsdWdpbnMgd2l0aCBgcmVxdWVzdFdpbGxGZXRjaGAgbWFraW5nXG4gICAgICAgICAgICAvLyB0aGUgb3JpZ2luYWwgcmVxdWVzdCAobW9zdCBsaWtlbHkgZnJvbSBhIGBmZXRjaGAgZXZlbnQpIGRpZmZlcmVudFxuICAgICAgICAgICAgLy8gZnJvbSB0aGUgUmVxdWVzdCB3ZSBtYWtlLiBQYXNzIGJvdGggdG8gYGZldGNoRGlkRmFpbGAgdG8gYWlkIGRlYnVnZ2luZy5cbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZldGNoUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NlxuICAgICAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0LCByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgP1xuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgOiB0aGlzLl9zdHJhdGVneS5mZXRjaE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JyByZXR1cm5lZCBhIHJlc3BvbnNlIHdpdGggYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgc3RhdHVzICcke2ZldGNoUmVzcG9uc2Uuc3RhdHVzfScuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdmZXRjaERpZFN1Y2NlZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogZmV0Y2hSZXNwb25zZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBOZXR3b3JrIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYG9yaWdpbmFsUmVxdWVzdGAgd2lsbCBvbmx5IGV4aXN0IGlmIGEgYGZldGNoRGlkRmFpbGAgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAvLyBpcyBiZWluZyB1c2VkIChzZWUgYWJvdmUpLlxuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ydW5DYWxsYmFja3MoJ2ZldGNoRGlkRmFpbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFJlcXVlc3Q6IG9yaWdpbmFsUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxzIGB0aGlzLmZldGNoKClgIGFuZCAoaW4gdGhlIGJhY2tncm91bmQpIHJ1bnMgYHRoaXMuY2FjaGVQdXQoKWAgb25cbiAgICAgKiB0aGUgcmVzcG9uc2UgZ2VuZXJhdGVkIGJ5IGB0aGlzLmZldGNoKClgLlxuICAgICAqXG4gICAgICogVGhlIGNhbGwgdG8gYHRoaXMuY2FjaGVQdXQoKWAgYXV0b21hdGljYWxseSBpbnZva2VzIGB0aGlzLndhaXRVbnRpbCgpYCxcbiAgICAgKiBzbyB5b3UgZG8gbm90IGhhdmUgdG8gbWFudWFsbHkgY2FsbCBgd2FpdFVudGlsKClgIG9uIHRoZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSByZXF1ZXN0IG9yIFVSTCB0byBmZXRjaCBhbmQgY2FjaGUuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hBbmRDYWNoZVB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2goaW5wdXQpO1xuICAgICAgICBjb25zdCByZXNwb25zZUNsb25lID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAgICAgdGhpcy53YWl0VW50aWwodGhpcy5jYWNoZVB1dChpbnB1dCwgcmVzcG9uc2VDbG9uZSkpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1hdGNoZXMgYSByZXF1ZXN0IGZyb20gdGhlIGNhY2hlIChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZSBwbHVnaW5cbiAgICAgKiBjYWxsYmFjayBtZXRob2RzKSB1c2luZyB0aGUgYGNhY2hlTmFtZWAsIGBtYXRjaE9wdGlvbnNgLCBhbmQgYHBsdWdpbnNgXG4gICAgICogZGVmaW5lZCBvbiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAgICogLSBjYWNoZWRSZXNwb25zZVdpbGxCeVVzZWQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSBSZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59IEEgbWF0Y2hpbmcgcmVzcG9uc2UsIGlmIGZvdW5kLlxuICAgICAqL1xuICAgIGNhY2hlTWF0Y2goa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRVbnRpbCgoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRvUmVxdWVzdChrZXkpO1xuICAgICAgICAgICAgbGV0IGNhY2hlZFJlc3BvbnNlO1xuICAgICAgICAgICAgY29uc3QgeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucyB9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgICAgICAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAncmVhZCcpO1xuICAgICAgICAgICAgY29uc3QgbXVsdGlNYXRjaE9wdGlvbnMgPSB7IC4uLm1hdGNoT3B0aW9ucywgLi4ueyBjYWNoZU5hbWUgfSB9O1xuICAgICAgICAgICAgY2FjaGVkUmVzcG9uc2UgPSBhd2FpdCBjYWNoZXMubWF0Y2goZWZmZWN0aXZlUmVxdWVzdCwgbXVsdGlNYXRjaE9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gY2FjaGVkIHJlc3BvbnNlIGZvdW5kIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQnKSkge1xuICAgICAgICAgICAgICAgIGNhY2hlZFJlc3BvbnNlID0gKGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlZFJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgICAgICB9KSkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xuICAgICAgICB9KSgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHV0cyBhIHJlcXVlc3QvcmVzcG9uc2UgcGFpciBpbiB0aGUgY2FjaGUgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlXG4gICAgICogcGx1Z2luIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCBhbmQgYHBsdWdpbnNgIGRlZmluZWQgb25cbiAgICAgKiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAgICogLSBjYWNoZVdpbGxVcGRhdGUoKVxuICAgICAqIC0gY2FjaGVEaWRVcGRhdGUoKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSByZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICAgKiBAcGFyYW0ge1Byb21pc2U8dm9pZD59IHJlc3BvbnNlIFRoZSByZXNwb25zZSB0byBjYWNoZS5cbiAgICAgKi9cbiAgICBhc3luYyBjYWNoZVB1dChrZXksIHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0b1JlcXVlc3Qoa2V5KTtcbiAgICAgICAgLy8gUnVuIGluIHRoZSBuZXh0IHRhc2sgdG8gYXZvaWQgYmxvY2tpbmcgb3RoZXIgY2FjaGUgcmVhZHMuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvU2VydmljZVdvcmtlci9pc3N1ZXMvMTM5N1xuICAgICAgICBhd2FpdCB0aW1lb3V0KDApO1xuICAgICAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAnd3JpdGUnKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCAmJiBlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYENhbm5vdCBjYWNoZSBub24tZXhpc3RlbnQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZSA9IGF3YWl0IHRoaXMuX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFJlc3BvbnNlICcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nIGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2lsbCBub3QgYmUgY2FjaGVkLmAsIHJlc3BvbnNlVG9DYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucyB9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3BlbihjYWNoZU5hbWUpO1xuICAgICAgICBjb25zdCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID0gdGhpcy5oYXNDYWxsYmFjaygnY2FjaGVEaWRVcGRhdGUnKTtcbiAgICAgICAgY29uc3Qgb2xkUmVzcG9uc2UgPSBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID8gYXdhaXQgY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhcbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiB0aGUgYF9fV0JfUkVWSVNJT05fX2AgcGFyYW0gaXMgYSBwcmVjYWNoaW5nXG4gICAgICAgIC8vIGZlYXR1cmUuIENvbnNpZGVyIGludG8gd2F5cyB0byBvbmx5IGFkZCB0aGlzIGJlaGF2aW9yIGlmIHVzaW5nXG4gICAgICAgIC8vIHByZWNhY2hpbmcuXG4gICAgICAgIGNhY2hlLCBlZmZlY3RpdmVSZXF1ZXN0LmNsb25lKCksIFsnX19XQl9SRVZJU0lPTl9fJ10sIG1hdGNoT3B0aW9ucykgOlxuICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVXBkYXRpbmcgdGhlICcke2NhY2hlTmFtZX0nIGNhY2hlIHdpdGggYSBuZXcgUmVzcG9uc2UgYCArXG4gICAgICAgICAgICAgICAgYGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlLnB1dChlZmZlY3RpdmVSZXF1ZXN0LCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID9cbiAgICAgICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSA6IHJlc3BvbnNlVG9DYWNoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUV4Y2VwdGlvbiNleGNlcHRpb24tUXVvdGFFeGNlZWRlZEVycm9yXG4gICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlRGlkVXBkYXRlJykpIHtcbiAgICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgb2xkUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgbmV3UmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlIGxpc3Qgb2YgcGx1Z2lucyBmb3IgdGhlIGBjYWNoZUtleVdpbGxCZVVzZWRgIGNhbGxiYWNrLCBhbmRcbiAgICAgKiBleGVjdXRlcyBhbnkgb2YgdGhvc2UgY2FsbGJhY2tzIGZvdW5kIGluIHNlcXVlbmNlLiBUaGUgZmluYWwgYFJlcXVlc3RgXG4gICAgICogb2JqZWN0IHJldHVybmVkIGJ5IHRoZSBsYXN0IHBsdWdpbiBpcyB0cmVhdGVkIGFzIHRoZSBjYWNoZSBrZXkgZm9yIGNhY2hlXG4gICAgICogcmVhZHMgYW5kL29yIHdyaXRlcy4gSWYgbm8gYGNhY2hlS2V5V2lsbEJlVXNlZGAgcGx1Z2luIGNhbGxiYWNrcyBoYXZlXG4gICAgICogYmVlbiByZWdpc3RlcmVkLCB0aGUgcGFzc2VkIHJlcXVlc3QgaXMgcmV0dXJuZWQgdW5tb2RpZmllZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlcXVlc3Q+fVxuICAgICAqL1xuICAgIGFzeW5jIGdldENhY2hlS2V5KHJlcXVlc3QsIG1vZGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWNoZUtleXNbbW9kZV0pIHtcbiAgICAgICAgICAgIGxldCBlZmZlY3RpdmVSZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZUtleVdpbGxCZVVzZWQnKSkge1xuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVJlcXVlc3QgPSB0b1JlcXVlc3QoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYWNoZUtleXNbbW9kZV0gPSBlZmZlY3RpdmVSZXF1ZXN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUtleXNbbW9kZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyYXRlZ3kgaGFzIGF0IGxlYXN0IG9uZSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW5cbiAgICAgKiBjYWxsYmFjay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBjaGVjayBmb3IuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNDYWxsYmFjayhuYW1lKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmIChuYW1lIGluIHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUnVucyBhbGwgcGx1Z2luIGNhbGxiYWNrcyBtYXRjaGluZyB0aGUgZ2l2ZW4gbmFtZSwgaW4gb3JkZXIsIHBhc3NpbmcgdGhlXG4gICAgICogZ2l2ZW4gcGFyYW0gb2JqZWN0IChtZXJnZWQgaXRoIHRoZSBjdXJyZW50IHBsdWdpbiBzdGF0ZSkgYXMgdGhlIG9ubHlcbiAgICAgKiBhcmd1bWVudC5cbiAgICAgKlxuICAgICAqIE5vdGU6IHNpbmNlIHRoaXMgbWV0aG9kIHJ1bnMgYWxsIHBsdWdpbnMsIGl0J3Mgbm90IHN1aXRhYmxlIGZvciBjYXNlc1xuICAgICAqIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBjYWxsYmFjayBuZWVkcyB0byBiZSBhcHBsaWVkIHByaW9yIHRvIGNhbGxpbmdcbiAgICAgKiB0aGUgbmV4dCBjYWxsYmFjay4gU2VlXG4gICAgICogW2BpdGVyYXRlQ2FsbGJhY2tzKClgXXtAbGluayBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlciNpdGVyYXRlQ2FsbGJhY2tzfVxuICAgICAqIGJlbG93IGZvciBob3cgdG8gaGFuZGxlIHRoYXQgY2FzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBydW4gd2l0aGluIGVhY2ggcGx1Z2luLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbSBUaGUgb2JqZWN0IHRvIHBhc3MgYXMgdGhlIGZpcnN0IChhbmQgb25seSkgcGFyYW1cbiAgICAgKiAgICAgd2hlbiBleGVjdXRpbmcgZWFjaCBjYWxsYmFjay4gVGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgY3VycmVudCBwbHVnaW4gc3RhdGUgcHJpb3IgdG8gY2FsbGJhY2sgZXhlY3V0aW9uLlxuICAgICAqL1xuICAgIGFzeW5jIHJ1bkNhbGxiYWNrcyhuYW1lLCBwYXJhbSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcyhuYW1lKSkge1xuICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAgICAgICAvLyB0aGlzIHNob3VsZCB3b3JrIHdpdGggYGFzIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdYC5cbiAgICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHBhcmFtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBY2NlcHRzIGEgY2FsbGJhY2sgYW5kIHJldHVybnMgYW4gaXRlcmFibGUgb2YgbWF0Y2hpbmcgcGx1Z2luIGNhbGxiYWNrcyxcbiAgICAgKiB3aGVyZSBlYWNoIGNhbGxiYWNrIGlzIHdyYXBwZWQgd2l0aCB0aGUgY3VycmVudCBoYW5kbGVyIHN0YXRlIChpLmUuIHdoZW5cbiAgICAgKiB5b3UgY2FsbCBlYWNoIGNhbGxiYWNrLCB3aGF0ZXZlciBvYmplY3QgcGFyYW1ldGVyIHlvdSBwYXNzIGl0IHdpbGxcbiAgICAgKiBiZSBtZXJnZWQgd2l0aCB0aGUgcGx1Z2luJ3MgY3VycmVudCBzdGF0ZSkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBmbyB0aGUgY2FsbGJhY2sgdG8gcnVuXG4gICAgICogQHJldHVybiB7QXJyYXk8RnVuY3Rpb24+fVxuICAgICAqL1xuICAgICppdGVyYXRlQ2FsbGJhY2tzKG5hbWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fc3RyYXRlZ3kucGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwbHVnaW5bbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BsdWdpblN0YXRlTWFwLmdldChwbHVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlZnVsQ2FsbGJhY2sgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVmdWxQYXJhbSA9IHsgLi4ucGFyYW0sIHN0YXRlIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHNob3VsZCB3b3JrIHdpdGggYGFzIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdYC5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbltuYW1lXShzdGF0ZWZ1bFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHlpZWxkIHN0YXRlZnVsQ2FsbGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHByb21pc2UgdG8gdGhlXG4gICAgICogW2V4dGVuZCBsaWZldGltZSBwcm9taXNlc117QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2V4dGVuZGFibGVldmVudC1leHRlbmQtbGlmZXRpbWUtcHJvbWlzZXN9XG4gICAgICogb2YgdGhlIGV2ZW50IGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxdWVzdCBiZWluZyBoYW5kbGVkICh1c3VhbGx5IGFcbiAgICAgKiBgRmV0Y2hFdmVudGApLlxuICAgICAqXG4gICAgICogTm90ZTogeW91IGNhbiBhd2FpdFxuICAgICAqIFtgZG9uZVdhaXRpbmcoKWBde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfmRvbmVXYWl0aW5nfVxuICAgICAqIHRvIGtub3cgd2hlbiBhbGwgYWRkZWQgcHJvbWlzZXMgaGF2ZSBzZXR0bGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIEEgcHJvbWlzZSB0byBhZGQgdG8gdGhlIGV4dGVuZCBsaWZldGltZSBwcm9taXNlc1xuICAgICAqICAgICBvZiB0aGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgd2FpdFVudGlsKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCBwcm9taXNlcyBwYXNzZWQgdG9cbiAgICAgKiBbYHdhaXRVbnRpbCgpYF17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+d2FpdFVudGlsfVxuICAgICAqIGhhdmUgc2V0dGxlZC5cbiAgICAgKlxuICAgICAqIE5vdGU6IGFueSB3b3JrIGRvbmUgYWZ0ZXIgYGRvbmVXYWl0aW5nKClgIHNldHRsZXMgc2hvdWxkIGJlIG1hbnVhbGx5XG4gICAgICogcGFzc2VkIHRvIGFuIGV2ZW50J3MgYHdhaXRVbnRpbCgpYCBtZXRob2QgKG5vdCB0aGlzIGhhbmRsZXInc1xuICAgICAqIGB3YWl0VW50aWwoKWAgbWV0aG9kKSwgb3RoZXJ3aXNlIHRoZSBzZXJ2aWNlIHdvcmtlciB0aHJlYWQgbXkgYmUga2lsbGVkXG4gICAgICogcHJpb3IgdG8geW91ciB3b3JrIGNvbXBsZXRpbmcuXG4gICAgICovXG4gICAgYXN5bmMgZG9uZVdhaXRpbmcoKSB7XG4gICAgICAgIGxldCBwcm9taXNlO1xuICAgICAgICB3aGlsZSAocHJvbWlzZSA9IHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMuc2hpZnQoKSkge1xuICAgICAgICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9wcyBydW5uaW5nIHRoZSBzdHJhdGVneSBhbmQgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgYW55IHBlbmRpbmdcbiAgICAgKiBgd2FpdFVudGlsKClgIHByb21pc2VzLlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgY2FsbCBjYWNoZVdpbGxVcGRhdGUgb24gdGhlIGF2YWlsYWJsZSBwbHVnaW5zIChvciB1c2VcbiAgICAgKiBzdGF0dXMgPT09IDIwMCkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBSZXNwb25zZSBpcyBzYWZlIGFuZCB2YWxpZCB0byBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlVG9DYWNoZSA9IHJlc3BvbnNlO1xuICAgICAgICBsZXQgcGx1Z2luc1VzZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlV2lsbFVwZGF0ZScpKSB7XG4gICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgfSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHBsdWdpbnNVc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwbHVnaW5zVXNlZCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZSAmJiByZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpcyBhbiBvcGFxdWUgcmVzcG9uc2UuIFRoZSBjYWNoaW5nIHN0cmF0ZWd5IHRoYXQgeW91J3JlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdXNpbmcgd2lsbCBub3QgY2FjaGUgb3BhcXVlIHJlc3BvbnNlcyBieSBkZWZhdWx0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBUaGUgcmVzcG9uc2UgZm9yICcke3RoaXMucmVxdWVzdC51cmx9JyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHJldHVybmVkIGEgc3RhdHVzIGNvZGUgb2YgJyR7cmVzcG9uc2Uuc3RhdHVzfScgYW5kIHdvbid0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmUgY2FjaGVkIGFzIGEgcmVzdWx0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZVRvQ2FjaGU7XG4gICAgfVxufVxuZXhwb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpzdHJhdGVnaWVzOjYuMC4yJ10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiaW1wb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9IGZyb20gXCJ3b3JrYm94LXByZWNhY2hpbmdcIjtcclxucHJlY2FjaGVBbmRSb3V0ZShzZWxmLl9fV0JfTUFOSUZFU1QpO1xyXG5cclxuY29uc3QgY2FjaGVOYW1lID0gXCJ2MVwiO1xyXG5cclxuY29uc3QgY2FjaGVQYWdlcyA9IFtcIi9cIiwgXCJhYm91dFwiXTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImluc3RhbGxcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkIGZyb20gdGhlIFNlcnZpY2UgV29ya2VyIPCfpJlcIik7XHJcblxyXG4gIGV2ZW50LndhaXRVbnRpbChcclxuICAgIGNhY2hlcy5vcGVuKGNhY2hlTmFtZSkudGhlbihjYWNoZSA9PiB7XHJcbiAgICAgIGNhY2hlLmFkZEFsbChjYWNoZVBhZ2VzKTtcclxuICAgIH0pXHJcbiAgKTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhY3RpdmF0ZVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gIGV2ZW50LndhaXRVbnRpbChcclxuICAgIGNhY2hlcy5rZXlzKCkudGhlbihjYWNoZU5hbWVzID0+IHtcclxuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxyXG4gICAgICAgIGNhY2hlTmFtZXMubWFwKGNhY2hlID0+IHtcclxuICAgICAgICAgIGlmIChjYWNoZSAhPT0gY2FjaGVOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZXMuZGVsZXRlKGNhY2hlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSlcclxuICApO1xyXG59KTtcclxuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsIGZ1bmN0aW9uKGUpIHtcclxuICBlLnJlc3BvbmRXaXRoKGZldGNoKGUucmVxdWVzdCkuY2F0Y2goKCkgPT4gY2FjaGVzLm1hdGNoKGUucmVxdWVzdCkpKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=