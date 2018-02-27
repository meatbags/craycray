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
  this.eye = new _module.Eye();
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
exports.Menu = exports.Eye = undefined;

var _menu = __webpack_require__(2);

var _menu2 = _interopRequireDefault(_menu);

var _eye = __webpack_require__(3);

var _eye2 = _interopRequireDefault(_eye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Eye = _eye2.default;
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
    this.events();
  }

  _createClass(Menu, [{
    key: '_uid',
    value: function _uid() {
      // get unique id

      this.uid = this.uid ? this.uid + 1 : 1;

      return 'uid' + this.uid;
    }
  }, {
    key: 'events',
    value: function events() {
      var _this = this;

      // doc events

      $('.image_sequence').on('mouseenter', function (evt) {
        // trigger image sequence

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
        // revert image sequence to first state

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Eye = function () {
  function Eye() {
    _classCallCheck(this, Eye);

    // eye handler

    this.target = $('.nav-logo');
    this.eye = {
      glow: $('.eye-glow'),
      base: $('.eye-base'),
      pupil: $('.eye-pupil'),
      ray: $('.eye-ray')
    };
    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.centre = {
      x: 0,
      y: 0
    };
    this.scale = 1;
    this.eyeWidth = 340;
    this.pupilSize = 35;
    this.active = true;
    this.duration = 0;
    this.durationMax = 0.6;

    // set events

    this.events();
    this.resize();
    this.show();
  }

  _createClass(Eye, [{
    key: 'events',
    value: function events() {
      var _this = this;

      // doc events

      this.target.on('mousedown', function (e) {
        if (_this.active) {
          _this.roll(e.clientX, e.clientY);
        }
      });
      $(document).on('mousemove', function (e) {
        if (_this.active) {
          _this.move(e.clientX, e.clientY);
        } else {
          _this.mouse.x = e.clientX;
          _this.mouse.y = e.clientY;
        }
      });
      $(window).on('resize', function (e) {
        _this.resize();
      });
      $('.item').on('mouseenter', function (e) {
        _this.setRay($(e.currentTarget));
      });
      $('.item').on('mouseleave', function () {
        _this.hideRay();
      });
    }
  }, {
    key: 'roll',
    value: function roll(mouseX, mouseY) {
      // roll the eye

      var x = this.mouse.x - this.centre.x;
      var y = this.mouse.y - this.centre.y;
      var h = Math.hypot(x, y);
      var len = this.pupilSize * this.scale;

      // set new pupil position

      this.active = false;
      this.animation = {
        mag: h < len ? h : len,
        angle: Math.atan2(y, x)
      };
      this.time = new Date().getTime();
      this.duration = this.durationMax;
      this.loop();
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this2 = this;

      // loop while animating

      if (this.duration > 0) {
        requestAnimationFrame(function () {
          _this2.loop();
        });
        var now = new Date().getTime();
        var delta = (now - this.time) / 1000.;
        this.time = now;
        this.duration -= delta;
        this.animateEye();
      } else {
        this.active = true;
        this.move(this.mouse.x, this.mouse.y);
      }
    }
  }, {
    key: 'animateEye',
    value: function animateEye() {
      // animate

      var t = Math.min(1, 1 - this.duration / this.durationMax);
      var x = this.centre.x + Math.cos(this.animation.angle + t * Math.PI * 4) * this.animation.mag;
      var y = this.centre.y + Math.sin(this.animation.angle + t * Math.PI * 4) * this.animation.mag;
      this.resizeImage(this.eye.pupil, x, y, this.scale);
      this.resizeImage(this.eye.glow, x, y, this.scale);
    }
  }, {
    key: 'resize',
    value: function resize() {
      // resize pieces

      var pos = this.target.position();
      var width = this.target.width();
      var height = this.target.height();
      this.centre.x = pos.left + width / 2;
      this.centre.y = pos.top + height / 2;

      // calculate new scale and reposition images

      this.scale = this.eyeWidth / this.eye.base[0].naturalWidth;
      this.resizeImage(this.eye.base, this.centre.x, this.centre.y, this.scale);
      this.resizeImage(this.eye.glow, this.centre.x, this.centre.y, this.scale);
      this.resizeImage(this.eye.pupil, this.centre.x, this.centre.y, this.scale);
      this.setRayPosition(this.eye.ray, this.centre.x, this.centre.y - 16, this.scale);
    }
  }, {
    key: 'resizeImage',
    value: function resizeImage(image, x, y, scale) {
      // resize image to scale

      var w = image[0].naturalWidth * scale;
      var h = image[0].naturalHeight * scale;
      image.css({
        left: x - w / 2,
        top: y - h / 2,
        width: w,
        height: 'auto'
      });
    }
  }, {
    key: 'setRayPosition',
    value: function setRayPosition(image, x, y, scale) {
      // set eye ray position

      //const w = image[0].naturalWidth * scale;
      var h = image[0].naturalHeight * scale;
      image.css({
        left: x,
        top: y - h / 2,
        height: 'auto'
      });
    }
  }, {
    key: 'setRay',
    value: function setRay(item) {
      // fade in ray

      this.eye.ray.addClass('active');

      // get mag

      var itemx = item.offset().left + item.width() / 2;
      var itemy = item.offset().top + item.height() / 2;
      var x = itemx - this.centre.x;
      var y = itemy - (this.centre.y + $(document).scrollTop());
      var mag = Math.sqrt(x * x + y * y);
      var angle = Math.atan2(y, x) / Math.PI * 180;
      this.eye.ray.css({ width: mag, transform: 'rotate(' + angle + 'deg)' });
    }
  }, {
    key: 'hideRay',
    value: function hideRay(item) {
      // fade out ray

      this.eye.ray.removeClass('active');
    }
  }, {
    key: 'move',
    value: function move(mouseX, mouseY) {
      // set new mouse coords

      this.mouse.x = mouseX;
      this.mouse.y = mouseY;

      // calculate vector, normalise

      var x = this.mouse.x - this.centre.x;
      var y = this.mouse.y - this.centre.y;
      var mag = Math.sqrt(x * x + y * y);

      // set new pupil position

      if (mag != 0) {
        var len = this.pupilSize * this.scale;

        if (mag <= len) {
          x = this.mouse.x;
          y = this.mouse.y;
        } else {
          x = x / mag * len + this.centre.x;
          y = y / mag * len + this.centre.y;
        }

        this.resizeImage(this.eye.pupil, x, y, this.scale);
        this.resizeImage(this.eye.glow, x, y, this.scale);
        //this.setRayPosition(this.eye.ray, x, y, this.scale);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      // show elements

      this.eye.base.removeClass('display-none');
      this.eye.glow.removeClass('display-none');
      this.eye.pupil.removeClass('display-none');
      this.eye.ray.removeClass('display-none');
    }
  }]);

  return Eye;
}();

exports.default = Eye;

/***/ })
/******/ ]);