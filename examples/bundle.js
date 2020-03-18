(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("data-fetching", ["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["data-fetching"] = factory(require("react"), require("react-dom"));
	else
		root["data-fetching"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
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
/******/ 	__webpack_require__.p = "/examples/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/data-fetching.js":
/*!*******************************!*\
  !*** ./dist/data-fetching.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(/*! react */ \"react\"));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'React'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}\n})(window, function (__WEBPACK_EXTERNAL_MODULE_react__) {\n  return (\n    /******/\n    function (modules) {\n      // webpackBootstrap\n\n      /******/\n      // The module cache\n\n      /******/\n      var installedModules = {};\n      /******/\n\n      /******/\n      // The require function\n\n      /******/\n\n      function __webpack_require__(moduleId) {\n        /******/\n\n        /******/\n        // Check if module is in cache\n\n        /******/\n        if (installedModules[moduleId]) {\n          /******/\n          return installedModules[moduleId].exports;\n          /******/\n        }\n        /******/\n        // Create a new module (and put it into the cache)\n\n        /******/\n\n\n        var module = installedModules[moduleId] = {\n          /******/\n          i: moduleId,\n\n          /******/\n          l: false,\n\n          /******/\n          exports: {}\n          /******/\n\n        };\n        /******/\n\n        /******/\n        // Execute the module function\n\n        /******/\n\n        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n        /******/\n\n        /******/\n        // Flag the module as loaded\n\n        /******/\n\n        module.l = true;\n        /******/\n\n        /******/\n        // Return the exports of the module\n\n        /******/\n\n        return module.exports;\n        /******/\n      }\n      /******/\n\n      /******/\n\n      /******/\n      // expose the modules object (__webpack_modules__)\n\n      /******/\n\n\n      __webpack_require__.m = modules;\n      /******/\n\n      /******/\n      // expose the module cache\n\n      /******/\n\n      __webpack_require__.c = installedModules;\n      /******/\n\n      /******/\n      // define getter function for harmony exports\n\n      /******/\n\n      __webpack_require__.d = function (exports, name, getter) {\n        /******/\n        if (!__webpack_require__.o(exports, name)) {\n          /******/\n          Object.defineProperty(exports, name, {\n            enumerable: true,\n            get: getter\n          });\n          /******/\n        }\n        /******/\n\n      };\n      /******/\n\n      /******/\n      // define __esModule on exports\n\n      /******/\n\n\n      __webpack_require__.r = function (exports) {\n        /******/\n        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n          /******/\n          Object.defineProperty(exports, Symbol.toStringTag, {\n            value: 'Module'\n          });\n          /******/\n        }\n        /******/\n\n\n        Object.defineProperty(exports, '__esModule', {\n          value: true\n        });\n        /******/\n      };\n      /******/\n\n      /******/\n      // create a fake namespace object\n\n      /******/\n      // mode & 1: value is a module id, require it\n\n      /******/\n      // mode & 2: merge all properties of value into the ns\n\n      /******/\n      // mode & 4: return value when already ns object\n\n      /******/\n      // mode & 8|1: behave like require\n\n      /******/\n\n\n      __webpack_require__.t = function (value, mode) {\n        /******/\n        if (mode & 1) value = __webpack_require__(value);\n        /******/\n\n        if (mode & 8) return value;\n        /******/\n\n        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;\n        /******/\n\n        var ns = Object.create(null);\n        /******/\n\n        __webpack_require__.r(ns);\n        /******/\n\n\n        Object.defineProperty(ns, 'default', {\n          enumerable: true,\n          value: value\n        });\n        /******/\n\n        if (mode & 2 && typeof value != 'string') for (var key in value) {\n          __webpack_require__.d(ns, key, function (key) {\n            return value[key];\n          }.bind(null, key));\n        }\n        /******/\n\n        return ns;\n        /******/\n      };\n      /******/\n\n      /******/\n      // getDefaultExport function for compatibility with non-harmony modules\n\n      /******/\n\n\n      __webpack_require__.n = function (module) {\n        /******/\n        var getter = module && module.__esModule ?\n        /******/\n        function getDefault() {\n          return module['default'];\n        } :\n        /******/\n        function getModuleExports() {\n          return module;\n        };\n        /******/\n\n        __webpack_require__.d(getter, 'a', getter);\n        /******/\n\n\n        return getter;\n        /******/\n      };\n      /******/\n\n      /******/\n      // Object.prototype.hasOwnProperty.call\n\n      /******/\n\n\n      __webpack_require__.o = function (object, property) {\n        return Object.prototype.hasOwnProperty.call(object, property);\n      };\n      /******/\n\n      /******/\n      // __webpack_public_path__\n\n      /******/\n\n\n      __webpack_require__.p = \"/dist/\";\n      /******/\n\n      /******/\n\n      /******/\n      // Load entry module and return exports\n\n      /******/\n\n      return __webpack_require__(__webpack_require__.s = \"./main.js\");\n      /******/\n    }(\n    /************************************************************************/\n\n    /******/\n    {\n      /***/\n      \"./hooks/index.js\":\n      /*!************************!*\\\n        !*** ./hooks/index.js ***!\n        \\************************/\n\n      /*! exports provided: useFetch */\n\n      /***/\n      function hooksIndexJs(module, __webpack_exports__, __webpack_require__) {\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _useFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useFetch */ \\\"./hooks/useFetch.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"useFetch\\\", function() { return _useFetch__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]; });\\n\\n\\n\\n\\n//# sourceURL=webpack://data-fetching/./hooks/index.js?\");\n        /***/\n      },\n\n      /***/\n      \"./hooks/useFetch.js\":\n      /*!***************************!*\\\n        !*** ./hooks/useFetch.js ***!\n        \\***************************/\n\n      /*! exports provided: default */\n\n      /***/\n      function hooksUseFetchJs(module, __webpack_exports__, __webpack_require__) {\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return useFetch; });\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \\\"react\\\");\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers */ \\\"./providers/index.js\\\");\\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\\n\\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \\\"next\\\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \\\"throw\\\", err); } _next(undefined); }); }; }\\n\\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\\n\\nfunction _nonIterableRest() { throw new TypeError(\\\"Invalid attempt to destructure non-iterable instance\\\"); }\\n\\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \\\"[object Arguments]\\\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\\\"return\\\"] != null) _i[\\\"return\\\"](); } finally { if (_d) throw _e; } } return _arr; }\\n\\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\\n\\n\\n\\nfunction useFetch() {\\n  var API = Object(react__WEBPACK_IMPORTED_MODULE_0__[\\\"useContext\\\"])(_providers__WEBPACK_IMPORTED_MODULE_1__[\\\"RestContext\\\"]);\\n\\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\\\"useState\\\"])([]),\\n      _useState2 = _slicedToArray(_useState, 2),\\n      data = _useState2[0],\\n      setData = _useState2[1];\\n\\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\\\"useState\\\"])(false),\\n      _useState4 = _slicedToArray(_useState3, 2),\\n      loading = _useState4[0],\\n      setLoading = _useState4[1];\\n\\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\\\"useState\\\"])(null),\\n      _useState6 = _slicedToArray(_useState5, 2),\\n      error = _useState6[0],\\n      setError = _useState6[1];\\n\\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\\\"useState\\\"])(null),\\n      _useState8 = _slicedToArray(_useState7, 2),\\n      abort = _useState8[0],\\n      setAbort = _useState8[1];\\n\\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\\\"useEffect\\\"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\\n    var controller, signal, response, result;\\n    return regeneratorRuntime.wrap(function _callee$(_context) {\\n      while (1) {\\n        switch (_context.prev = _context.next) {\\n          case 0:\\n            setLoading(true);\\n            controller = new AbortController();\\n            signal = controller.signal;\\n            setAbort(function () {\\n              return controller.abort();\\n            });\\n            _context.prev = 4;\\n            _context.next = 7;\\n            return fetch(API.url, {\\n              signal: signal\\n            });\\n\\n          case 7:\\n            response = _context.sent;\\n            _context.next = 10;\\n            return response.json();\\n\\n          case 10:\\n            result = _context.sent;\\n            setData(result);\\n            setLoading(false);\\n            setError(null);\\n            _context.next = 20;\\n            break;\\n\\n          case 16:\\n            _context.prev = 16;\\n            _context.t0 = _context[\\\"catch\\\"](4);\\n            setError(_context.t0);\\n            setLoading(false);\\n\\n          case 20:\\n            return _context.abrupt(\\\"return\\\", function () {\\n              controller.abort();\\n            });\\n\\n          case 21:\\n          case \\\"end\\\":\\n            return _context.stop();\\n        }\\n      }\\n    }, _callee, null, [[4, 16]]);\\n  })), [API.url]);\\n  return {\\n    data: data,\\n    loading: loading,\\n    error: error,\\n    abort: abort\\n  };\\n}\\n\\n//# sourceURL=webpack://data-fetching/./hooks/useFetch.js?\");\n        /***/\n      },\n\n      /***/\n      \"./main.js\":\n      /*!*****************!*\\\n        !*** ./main.js ***!\n        \\*****************/\n\n      /*! exports provided: RestProvider, useFetch */\n\n      /***/\n      function mainJs(module, __webpack_exports__, __webpack_require__) {\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers */ \\\"./providers/index.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"RestProvider\\\", function() { return _providers__WEBPACK_IMPORTED_MODULE_0__[\\\"RestProvider\\\"]; });\\n\\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ \\\"./hooks/index.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"useFetch\\\", function() { return _hooks__WEBPACK_IMPORTED_MODULE_1__[\\\"useFetch\\\"]; });\\n\\n\\n\\n\\n\\n//# sourceURL=webpack://data-fetching/./main.js?\");\n        /***/\n      },\n\n      /***/\n      \"./providers/RestProvider.js\":\n      /*!***********************************!*\\\n        !*** ./providers/RestProvider.js ***!\n        \\***********************************/\n\n      /*! exports provided: RestProvider, RestConsumer, default */\n\n      /***/\n      function providersRestProviderJs(module, __webpack_exports__, __webpack_require__) {\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"RestProvider\\\", function() { return RestProvider; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"RestConsumer\\\", function() { return RestConsumer; });\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \\\"react\\\");\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\\n\\nvar state = {\\n  url: ''\\n};\\nvar RestContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(state);\\nvar RestProvider = RestContext.Provider;\\nvar RestConsumer = RestContext.Consumer;\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (RestContext);\\n\\n//# sourceURL=webpack://data-fetching/./providers/RestProvider.js?\");\n        /***/\n      },\n\n      /***/\n      \"./providers/index.js\":\n      /*!****************************!*\\\n        !*** ./providers/index.js ***!\n        \\****************************/\n\n      /*! exports provided: RestContext, RestProvider, RestConsumer */\n\n      /***/\n      function providersIndexJs(module, __webpack_exports__, __webpack_require__) {\n        \"use strict\";\n\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _RestProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestProvider */ \\\"./providers/RestProvider.js\\\");\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"RestContext\\\", function() { return _RestProvider__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]; });\\n\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"RestProvider\\\", function() { return _RestProvider__WEBPACK_IMPORTED_MODULE_0__[\\\"RestProvider\\\"]; });\\n\\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \\\"RestConsumer\\\", function() { return _RestProvider__WEBPACK_IMPORTED_MODULE_0__[\\\"RestConsumer\\\"]; });\\n\\n\\n\\n\\n//# sourceURL=webpack://data-fetching/./providers/index.js?\");\n        /***/\n      },\n\n      /***/\n      \"react\":\n      /*!**************************************************************************************!*\\\n        !*** external {\"commonjs\":\"react\",\"commonjs2\":\"react\",\"amd\":\"React\",\"root\":\"React\"} ***!\n        \\**************************************************************************************/\n\n      /*! no static exports found */\n\n      /***/\n      function react(module, exports) {\n        eval(\"module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\\n\\n//# sourceURL=webpack://data-fetching/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22React%22,%22root%22:%22React%22%7D?\");\n        /***/\n      }\n      /******/\n\n    })\n  );\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://data-fetching/./dist/data-fetching.js?");

/***/ }),

/***/ "./examples/index.js":
/*!***************************!*\
  !*** ./examples/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Examples; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ \"./dist/data-fetching.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Examples() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__[\"RestProvider\"], {\n    value: {\n      url: 'https://jsonplaceholder.typicode.com/posts'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, null));\n}\n\nfunction View() {\n  var _useFetch = Object(___WEBPACK_IMPORTED_MODULE_2__[\"useFetch\"])(),\n      data = _useFetch.data,\n      loading = _useFetch.loading,\n      error = _useFetch.error;\n\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n  if (!error && data) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, data.map(function (item, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index\n    }, item.title);\n  }));\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Examples, null), document.getElementById('app'));\n\n//# sourceURL=webpack://data-fetching/./examples/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function () {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function () {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack://data-fetching/(webpack)/buildin/module.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://data-fetching/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22React%22,%22root%22:%22React%22%7D?");

/***/ }),

/***/ "react-dom":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"ReactDOM","root":"ReactDOM"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;\n\n//# sourceURL=webpack://data-fetching/external_%7B%22commonjs%22:%22react-dom%22,%22commonjs2%22:%22react-dom%22,%22amd%22:%22ReactDOM%22,%22root%22:%22ReactDOM%22%7D?");

/***/ })

/******/ });
});