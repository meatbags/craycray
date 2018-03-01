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
    key: 'toggleDropdown',
    value: function toggleDropdown(parent) {
      // open, close dropdown menu

      if (!parent.hasClass('active')) {
        $('.cat-parent.active').removeClass('active');
        parent.addClass('active');
        $('.drop-down-item').addClass('display-none');
        $(parent.data('name')).removeClass('display-none');
      }
    }
  }, {
    key: 'filter',
    value: function filter(elem) {
      var _this = this;

      // filter projects

      if (!this.lockFilter && !elem.hasClass('active')) {
        this.lockFilter = true;

        // menu style

        $('.drop-down-item.active').removeClass('active');
        elem.addClass('active');

        // fade out, rearrange columns, fade in

        $('.item').addClass('fade-out');

        setTimeout(function () {
          _this.applyFilter(elem.data('filter'));
          _this.lockFilter = false;
        }, 500);
      }
    }
  }, {
    key: 'resetFilters',
    value: function resetFilters() {
      var _this2 = this;

      // reset filters, show featured

      if (isHome && !this.lockFilter && $('.cat-parent').hasClass('active')) {
        this.lockFilter = true;
        $('.cat-parent.active').removeClass('active');
        $('.drop-down-item.active').removeClass('active').addClass('.display-none');
        $('.item').addClass('fade-out');

        setTimeout(function () {
          _this2.applyFilter('.filter-featured');
          _this2.lockFilter = false;
        }, 500);
      }
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter(selector) {
      // apply filter string to project items

      $('.item').addClass('display-none');
      $(selector).each(function (i, e) {
        var $e = $(e);
        $('.column:eq(' + i % 3 + ')').append($e);
        $e.removeClass('display-none');

        setTimeout(function () {
          $e.removeClass('fade-out');
        }, 100);
      });
    }
  }, {
    key: 'events',
    value: function events() {
      var _this3 = this;

      // doc events

      $('.nav-logo').on('click', function (e) {
        _this3.resetFilters();
      });
      $('.cat-parent').on('click', function (e) {
        _this3.toggleDropdown($(e.currentTarget));
      });
      $('.drop-down-item').on('click', function (e) {
        _this3.filter($(e.currentTarget));
      });
      $('.image_sequence').on('mouseenter', function (evt) {
        // trigger image sequence

        var flag = _this3._uid();
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
            }, (i - index) * _this3.frameInterval);
          }
        });
      });
      $('.image_sequence').on('mouseleave', function (evt) {
        // revert image sequence to first state

        var flag = _this3._uid();
        var index = $('.sequence.active').index();
        if (index == -1) {
          index = $(evt.currentTarget).find('.sequence').length - 1;
        }
        var max = _this3.frameInterval * index;

        $(evt.currentTarget).find('.sequence').each(function (i, e) {
          $(e).data('flag', flag);

          if (i <= index) {
            setTimeout(function () {
              if ($(e).data('flag') == flag) {
                $('.sequence').removeClass('active');
                $(e).addClass('active');
              }
            }, max - i * _this3.frameInterval);
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
    var _this = this;

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
      y: window.innerHeight / 2,
      relative: {
        x: 0,
        y: 0
      }
    };
    this.centre = {
      x: 0,
      y: 0,
      relative: {
        x: 0,
        y: 0
      }
    };
    this.scale = 1;
    this.eyeWidth = 300; // 340?
    this.pupilSize = 35;
    this.active = true;
    this.duration = 0;
    this.durationMax = 0.6;

    // set events

    this.events();
    this.resize();
    setTimeout(function () {
      _this.show();
    }, 100);
  }

  _createClass(Eye, [{
    key: 'events',
    value: function events() {
      var _this2 = this;

      // doc events

      this.target.on('mousedown', function (e) {
        if (_this2.active) {
          _this2.roll(e.clientX, e.clientY);
        }
      });
      $(document).on('mousemove', function (e) {
        if (_this2.active) {
          _this2.move(e.clientX, e.clientY);
        } else {
          _this2.mouse.x = e.clientX;
          _this2.mouse.y = e.clientY;
        }
      });
      $(window).on('resize', function (e) {
        _this2.resize();
      });
      $('.item').on('mouseenter', function (e) {
        var y = _this2.target.offset().top - $(document).scrollTop() + _this2.target.height();
        if (y >= 0) {
          _this2.setRay($(e.currentTarget));
        }
      });
      $('.item').on('mouseleave', function () {
        _this2.hideRay();
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
      var _this3 = this;

      // loop while animating

      if (this.duration > 0) {
        requestAnimationFrame(function () {
          _this3.loop();
        });
        var now = new Date().getTime();
        var delta = (now - this.time) / 1000.;
        this.time = now;
        this.duration -= delta;
        this.animateEye();
      } else {
        if (!isHome) {
          window.location.href = homeURL;
        }
        this.active = true;
        this.move(this.mouse.x, this.mouse.y);
      }
    }
  }, {
    key: 'animateEye',
    value: function animateEye() {
      // animate

      var t = Math.min(1, 1 - this.duration / this.durationMax);
      var x = this.centre.relative.x + Math.cos(this.animation.angle + t * Math.PI * 4) * this.animation.mag;
      var y = this.centre.relative.y + Math.sin(this.animation.angle + t * Math.PI * 4) * this.animation.mag;
      this.resizeImage(this.eye.pupil, x, y, this.scale);
      this.resizeImage(this.eye.glow, x, y, this.scale);
    }
  }, {
    key: 'resize',
    value: function resize() {
      var _this4 = this;

      // resize pieces

      if (!this.resizing) {
        this.resizing = true;
        this.resizeCount = this.resizeCount ? this.resizeCount + 1 : 1;

        setTimeout(function () {
          // get position

          var pos = _this4.target.position();
          var width = _this4.target.width();
          var height = _this4.target.height();
          _this4.centre.x = pos.left + width / 2;
          _this4.centre.y = pos.top + height / 2;
          _this4.centre.relative.x = width / 2;
          _this4.centre.relative.y = height / 2;

          // calculate new scale and reposition images

          _this4.scale = _this4.eyeWidth / _this4.eye.base[0].naturalWidth;
          _this4.resizeImage(_this4.eye.base, _this4.centre.relative.x, _this4.centre.relative.y, _this4.scale);
          _this4.resizeImage(_this4.eye.glow, _this4.centre.relative.x, _this4.centre.relative.y, _this4.scale);
          _this4.resizeImage(_this4.eye.pupil, _this4.centre.relative.x, _this4.centre.relative.y, _this4.scale);
          _this4.setRayPosition(_this4.eye.ray, _this4.centre.relative.x, _this4.centre.relative.y, _this4.scale);

          _this4.resizing = false;
        }, this.resizeCount == 1 ? 1 : 200);
      }
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

      var offsetY = -16;
      var h = image[0].naturalHeight * scale;
      image.css({
        left: x,
        top: y - h / 2 + offsetY,
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
      var itemy = item.offset().top + $(document).scrollTop() + item.height() / 2;
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
      this.mouse.relative.x = mouseX - this.centre.x + this.centre.relative.x;
      this.mouse.relative.y = mouseY - this.centre.y + this.centre.relative.y;

      // calculate vector, normalise

      var x = this.mouse.x - this.centre.x;
      var y = this.mouse.y - this.centre.y;
      var mag = Math.sqrt(x * x + y * y);

      // set new pupil position

      if (mag != 0) {
        var len = this.pupilSize * this.scale;

        if (mag <= len) {
          x = this.mouse.relative.x;
          y = this.mouse.relative.y;
        } else {
          x = x / mag * len + this.centre.relative.x;
          y = y / mag * len + this.centre.relative.y;
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