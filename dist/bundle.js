/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/createElement.js */ "./src/createElement.js");
/* harmony import */ var _src_My_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/My.js */ "./src/My.js");


Object(_src_createElement_js__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_src_createElement_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_src_createElement_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_src_My_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: "liyinghao"
}, Object(_src_createElement_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
  id: "a"
}, Object(_src_createElement_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
  id: "aa"
}, "hahaha")), Object(_src_createElement_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
  id: "b"
}, "wawawa"))), document.body);

/***/ }),

/***/ "./src/My.js":
/*!*******************!*\
  !*** ./src/My.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return My; });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var My = /*#__PURE__*/function (_Component) {
  _inherits(My, _Component);

  var _super = _createSuper(My);

  function My() {
    var _this;

    _classCallCheck(this, My);

    _this = _super.call(this);
    _this.state = {
      name: "liyinghao"
    };
    return _this;
  }

  _createClass(My, [{
    key: "render",
    value: function render() {
      return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_createElement__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, this.state.name), this.children);
    }
  }]);

  return My;
}(_createElement__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/*! exports provided: Component, reactNodeElement, reactTextElement, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactNodeElement", function() { return reactNodeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactTextElement", function() { return reactTextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this.props = Object.create(null);
    this._root = null;
    this.children = [];
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.props[name] = value;
    }
  }, {
    key: "appendChild",
    value: function appendChild(component) {
      this.children.push(component);
    }
  }, {
    key: "root",
    get: function get() {
      if (!this._root) {
        this._root = this.render().root;
      }

      return this._root;
    }
  }]);

  return Component;
}();

Component.prototype.setState = function (set) {
  if (!(_typeof(set) === "object" && set instanceof Function)) throw new Error('setState receives only functions');
  var newState = set(this.state, callback);

  var callback = function () {
    Object.assign(this.state, newState);
  }.bind(this);
};
/**
 * reactNodeElement
 * 用来代理常规节点
 * 抹平自定义节点与原生节点的差异
 * 提供普适的setAttribute方法与appendChild方法
 * 实现思路：把原生Dom结构存在this.root中
 */


var reactNodeElement = /*#__PURE__*/function () {
  function reactNodeElement(tag) {
    _classCallCheck(this, reactNodeElement);

    this.root = document.createElement(tag);
  }

  _createClass(reactNodeElement, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.root.setAttribute(name, value);
    }
  }, {
    key: "appendChild",
    value: function appendChild(ele) {
      this.root.appendChild(ele.root);
    }
  }]);

  return reactNodeElement;
}();
/**
 * reactTextElement
 * 用来代理文本节点
 * 不需要上述方法
 */

var reactTextElement = function reactTextElement(content) {
  _classCallCheck(this, reactTextElement);

  this.root = document.createTextNode(content);
};
function createElement(tag, attr) {
  var ele;

  if (typeof tag === "string") {
    // tag 是 string 时， 即表明是一个原生Dom结构
    ele = new reactNodeElement(tag);
  } else {
    ele = new tag(); // 否则即为用户自定义的结构，此结构必定继承于Component方法
  }

  for (var i in attr) {
    ele.setAttribute(i, attr[i]);
  }

  var insertChildren = function insertChildren(children) {
    children.forEach(function (child) {
      if (_typeof(child) === "object" && child instanceof Array) {
        insertChildren(child);
        return;
      }

      if (typeof child === "string") child = new reactTextElement(child);
      ele.appendChild(child);
    });
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  insertChildren(children);
  return ele;
}
function render(component, root) {
  root.appendChild(component.root);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map