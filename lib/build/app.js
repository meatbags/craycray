var stk =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modules = __webpack_require__(1);

var _module = _interopRequireWildcard(_modules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.menu = new _module.Menu();
};

window.onload = function () {
  var app = new App();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = undefined;

var _menu = __webpack_require__(2);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _menu2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu() {
    _classCallCheck(this, Menu);

    // menu handler

    this.fps = 12;
    this.frameInterval = 1000 / this.fps;
    this._events();
  }

  _createClass(Menu, [{
    key: '_uid',
    value: function _uid() {
      // get unique id

      this.uid = this.uid ? this.uid + 1 : 1;

      return 'uid' + this.uid;
    }
  }, {
    key: '_events',
    value: function _events() {
      var _this = this;

      // doc events

      $('.image_sequence').on('mouseenter', function (evt) {
        // set off image sequence

        var flag = _this._uid();
        var index = $('.sequence.active').index();
        if (index == -1) {
          index = 0;
        }

        $(evt.currentTarget).find('.sequence').each(function (i, e) {
          $(e).data('flag', flag);

          if (i >= index) {
            setTimeout(function () {
              if ($(e).data('flag') == flag) {
                $('.sequence').removeClass('active');
                $(e).addClass('active');
              }
            }, (i - index) * _this.frameInterval);
          }
        });
      });

      $('.image_sequence').on('mouseleave', function (evt) {
        // revert image sequence

        var flag = _this._uid();
        var index = $('.sequence.active').index();
        if (index == -1) {
          index = $(evt.currentTarget).find('.sequence').length - 1;
        }
        var max = _this.frameInterval * index;

        $(evt.currentTarget).find('.sequence').each(function (i, e) {
          $(e).data('flag', flag);

          if (i <= index) {
            setTimeout(function () {
              if ($(e).data('flag') == flag) {
                $('.sequence').removeClass('active');
                $(e).addClass('active');
              }
            }, max - i * _this.frameInterval);
          }
        });
      });
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ })
/******/ ]);