/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ \"./vendor.js\");\n/* harmony import */ var _app_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/intro */ \"./app/intro.js\");\n\n\n\nwindow.onload = function () {\n  new _app_intro__WEBPACK_IMPORTED_MODULE_1__[\"Intro\"]('.js-slider');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdmVuZG9yJztcclxuaW1wb3J0IHtJbnRyb30gZnJvbSAnLi9hcHAvaW50cm8nO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICBuZXcgSW50cm8oJy5qcy1zbGlkZXInKTtcclxuXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./app/intro.js":
/*!**********************!*\
  !*** ./app/intro.js ***!
  \**********************/
/*! exports provided: Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Intro\", function() { return Intro; });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../../node_modules/swiper/dist/js/swiper.esm.bundle.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"../../node_modules/gsap/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Intro =\n/*#__PURE__*/\nfunction () {\n  function Intro(selector) {\n    _classCallCheck(this, Intro);\n\n    this.$el = document.querySelector(selector);\n    this.slider(this.$el);\n  }\n\n  _createClass(Intro, [{\n    key: \"slider\",\n    value: function slider(selector) {\n      var tl = new TimelineMax({\n        ease: Bounce\n      });\n      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selector, {\n        // Optional parameters\n        speed: 1000,\n        // Set the speed of your animation in ms\n        effect: 'fade',\n        loop: false,\n        // roundLengths: true,\n        pagination: {\n          el: '.swiper-pagination',\n          type: 'custom'\n        },\n        on: {\n          init: function init() {\n            // pagination animation\n            var current = this.$el[0].querySelector('.js-swiper-pagination-current');\n            var total = this.$el[0].querySelector('.swiper-pagination-total');\n            total.innerHTML = this.slides.length;\n            current.innerHTML = this.activeIndex + 1; // slide picture animation\n          },\n          slideChange: function slideChange() {\n            // pagination animation\n            var elements = this.pagination.$el[0],\n                index = this.activeIndex,\n                currentWrapper,\n                current,\n                currentNext;\n            currentWrapper = elements.querySelector('.swiper-pagination-current__inner');\n            current = elements.querySelector('.js-swiper-pagination-current');\n            currentNext = elements.querySelector('.js-swiper-pagination-next');\n            updateNextPagination(index + 1, currentWrapper, current, currentNext); // animate circle\n            // let slideCurrent = this.slides[index];\n            // let circleCurrent = slideCurrent.querySelector('.slide__circle');\n            // TweenMax.from(circleCurrent, 1, { opacity: 0 });\n            // slide picture animation\n            // let slideCurrent = this.slides[index];\n            // slideCurrent.querySelectorAll('.slide__img').forEach(element => {\n            //   element.classList.add('is-animated');\n            // });;\n          },\n          slidePrevTransitionStart: function slidePrevTransitionStart() {\n            var prev = this.navigation.$prevEl[0].querySelector('.svg-icon').classList;\n            prev.add('is-animated');\n            setTimeout(function () {\n              prev.remove('is-animated');\n            }, 610);\n            scaleCircle(this.$el, '.slide__circle');\n            swipeTitle(this.$el, '.slide__title');\n            swipeLeftPicture(this.$el, '.slide__picture.left');\n            swipeRightPicture(this.$el, '.slide__picture.right');\n          },\n          slideNextTransitionStart: function slideNextTransitionStart() {\n            var next = this.navigation.$nextEl[0].querySelector('.svg-icon').classList;\n            next.add('is-animated');\n            setTimeout(function () {\n              next.remove('is-animated');\n            }, 610);\n            scaleCircle(this.$el, '.slide__circle');\n            swipeTitle(this.$el, '.slide__title');\n            swipeLeftPicture(this.$el, '.slide__picture.left');\n            swipeRightPicture(this.$el, '.slide__picture.right');\n          }\n        },\n        // Navigation arrows\n        navigation: {\n          nextEl: '.swiper-button-next',\n          prevEl: '.swiper-button-prev'\n        },\n        a11y: {\n          enabled: true,\n          prevSlideMessage: 'Назад',\n          nextSlideMessage: 'Вперед'\n        }\n      });\n\n      function updateNextPagination(value, wrapper, current, next) {\n        var timeout;\n        next.innerHTML = value;\n        wrapper.classList.add('is-animated');\n        window.clearTimeout(timeout);\n        timeout = window.setTimeout(function () {\n          current.innerHTML = value;\n          wrapper.classList.remove('is-animated');\n        }, 290);\n      }\n\n      function getPrevCurSlide(sliderDOM, selector) {\n        var slideActive = sliderDOM.find('.swiper-slide-active');\n        var current = slideActive.find(selector);\n        var slidePrevios = sliderDOM.find('.swiper-slide-prev, .swiper-slide-next');\n        var previos = slidePrevios.find(selector);\n        return {\n          current: current,\n          previos: previos\n        };\n      }\n\n      function swipeLeftPicture(sliderDOM, selector) {\n        var slide = getPrevCurSlide(sliderDOM, selector); // out left\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.previos, 0.25, {\n          rotation: 70,\n          autoAlpha: 0,\n          xPercent: -300,\n          ease: Power0.easeNone\n        }); // in left\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(slide.current, {\n          autoAlpha: 0,\n          xPercent: -300\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.current, 0.75, {\n          delay: 0.25,\n          autoAlpha: 1,\n          rotation: 0,\n          xPercent: 0,\n          ease: Expo.easeOut\n        });\n      }\n\n      function swipeRightPicture(sliderDOM, selector) {\n        var slide = getPrevCurSlide(sliderDOM, selector); // out right\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.previos, 0.25, {\n          rotation: -70,\n          autoAlpha: 0,\n          xPercent: 300,\n          ease: Power0.easeNone\n        }); // in right\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(slide.current, {\n          autoAlpha: 0,\n          xPercent: 300\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.current, 0.75, {\n          delay: 0.25,\n          autoAlpha: 1,\n          rotation: 0,\n          xPercent: 0,\n          ease: Expo.easeOut\n        });\n      }\n\n      function swipeTitle(sliderDOM, selector) {\n        var slide = getPrevCurSlide(sliderDOM, selector); // out\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.previos, 0.25, {\n          xPercent: 200,\n          autoAlpha: 0\n        }); // in\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(slide.current, {\n          autoAlpha: 0,\n          xPercent: -200\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.current, 0.5, {\n          delay: 0.25,\n          autoAlpha: 1,\n          xPercent: 0\n        });\n      }\n\n      function scaleCircle(sliderDOM, selector) {\n        var slide = getPrevCurSlide(sliderDOM, selector); // out\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.previos, 0.5, {\n          autoAlpha: 0.1,\n          scale: 0.4\n        }); // in\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(slide.current, {\n          autoAlpha: 0,\n          scale: 0.4\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide.current, 0.5, {\n          ease: Elastic.easeOut.config(1, 0.5),\n          delay: 0.5,\n          autoAlpha: 1,\n          scale: 1\n        });\n      }\n    }\n  }]);\n\n  return Intro;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW50cm8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW50cm8uanM/ZGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRybyB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgIHRoaXMuJGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB0aGlzLnNsaWRlcih0aGlzLiRlbCk7XHJcbiAgfVxyXG5cclxuICBzbGlkZXIoc2VsZWN0b3IpIHtcclxuXHJcbiAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7XHJcbiAgICAgIGVhc2U6IEJvdW5jZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCB7XHJcbiAgICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuXHJcbiAgICAgIHNwZWVkOiAxMDAwLCAvLyBTZXQgdGhlIHNwZWVkIG9mIHlvdXIgYW5pbWF0aW9uIGluIG1zXHJcbiAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgLy8gcm91bmRMZW5ndGhzOiB0cnVlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdjdXN0b20nXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBvbjoge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgIC8vIHBhZ2luYXRpb24gYW5pbWF0aW9uXHJcblxyXG4gICAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuJGVsWzBdLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50Jyk7XHJcbiAgICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuJGVsWzBdLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItcGFnaW5hdGlvbi10b3RhbCcpO1xyXG4gICAgICAgICAgdG90YWwuaW5uZXJIVE1MID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgICAgICAgY3VycmVudC5pbm5lckhUTUwgPSB0aGlzLmFjdGl2ZUluZGV4ICsgMTtcclxuXHJcbiAgICAgICAgICAvLyBzbGlkZSBwaWN0dXJlIGFuaW1hdGlvblxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAvLyBwYWdpbmF0aW9uIGFuaW1hdGlvblxyXG4gICAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5wYWdpbmF0aW9uLiRlbFswXSxcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4LFxyXG4gICAgICAgICAgICBjdXJyZW50V3JhcHBlcixcclxuICAgICAgICAgICAgY3VycmVudCxcclxuICAgICAgICAgICAgY3VycmVudE5leHQ7XHJcblxyXG4gICAgICAgICAgY3VycmVudFdyYXBwZXIgPSBlbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudF9faW5uZXInKTtcclxuICAgICAgICAgIGN1cnJlbnQgPSBlbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcuanMtc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcpO1xyXG4gICAgICAgICAgY3VycmVudE5leHQgPSBlbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcuanMtc3dpcGVyLXBhZ2luYXRpb24tbmV4dCcpO1xyXG5cclxuICAgICAgICAgIHVwZGF0ZU5leHRQYWdpbmF0aW9uKGluZGV4ICsgMSwgY3VycmVudFdyYXBwZXIsIGN1cnJlbnQsIGN1cnJlbnROZXh0KTtcclxuXHJcbiAgICAgICAgICAvLyBhbmltYXRlIGNpcmNsZVxyXG4gICAgICAgICAgLy8gbGV0IHNsaWRlQ3VycmVudCA9IHRoaXMuc2xpZGVzW2luZGV4XTtcclxuICAgICAgICAgIC8vIGxldCBjaXJjbGVDdXJyZW50ID0gc2xpZGVDdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9fY2lyY2xlJyk7XHJcbiAgICAgICAgICAvLyBUd2Vlbk1heC5mcm9tKGNpcmNsZUN1cnJlbnQsIDEsIHsgb3BhY2l0eTogMCB9KTtcclxuXHJcbiAgICAgICAgICAvLyBzbGlkZSBwaWN0dXJlIGFuaW1hdGlvblxyXG4gICAgICAgICAgLy8gbGV0IHNsaWRlQ3VycmVudCA9IHRoaXMuc2xpZGVzW2luZGV4XTtcclxuICAgICAgICAgIC8vIHNsaWRlQ3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVfX2ltZycpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAvLyAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYW5pbWF0ZWQnKTtcclxuICAgICAgICAgIC8vIH0pOztcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc3QgcHJldiA9IHRoaXMubmF2aWdhdGlvbi4kcHJldkVsWzBdLnF1ZXJ5U2VsZWN0b3IoJy5zdmctaWNvbicpLmNsYXNzTGlzdDtcclxuICAgICAgICAgIHByZXYuYWRkKCdpcy1hbmltYXRlZCcpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcHJldi5yZW1vdmUoJ2lzLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgICB9LCA2MTApO1xyXG5cclxuICAgICAgICAgIHNjYWxlQ2lyY2xlKHRoaXMuJGVsLCAnLnNsaWRlX19jaXJjbGUnKTtcclxuICAgICAgICAgIHN3aXBlVGl0bGUodGhpcy4kZWwsICcuc2xpZGVfX3RpdGxlJyk7XHJcbiAgICAgICAgICBzd2lwZUxlZnRQaWN0dXJlKHRoaXMuJGVsLCcuc2xpZGVfX3BpY3R1cmUubGVmdCcpO1xyXG4gICAgICAgICAgc3dpcGVSaWdodFBpY3R1cmUodGhpcy4kZWwsJy5zbGlkZV9fcGljdHVyZS5yaWdodCcpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IG5leHQgPSB0aGlzLm5hdmlnYXRpb24uJG5leHRFbFswXS5xdWVyeVNlbGVjdG9yKCcuc3ZnLWljb24nKS5jbGFzc0xpc3Q7XHJcbiAgICAgICAgICBuZXh0LmFkZCgnaXMtYW5pbWF0ZWQnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG5leHQucmVtb3ZlKCdpcy1hbmltYXRlZCcpO1xyXG4gICAgICAgICAgfSwgNjEwKTtcclxuXHJcbiAgICAgICAgICBzY2FsZUNpcmNsZSh0aGlzLiRlbCwgJy5zbGlkZV9fY2lyY2xlJyk7XHJcbiAgICAgICAgICBzd2lwZVRpdGxlKHRoaXMuJGVsLCAnLnNsaWRlX190aXRsZScpO1xyXG4gICAgICAgICAgc3dpcGVMZWZ0UGljdHVyZSh0aGlzLiRlbCwnLnNsaWRlX19waWN0dXJlLmxlZnQnKTtcclxuICAgICAgICAgIHN3aXBlUmlnaHRQaWN0dXJlKHRoaXMuJGVsLCcuc2xpZGVfX3BpY3R1cmUucmlnaHQnKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgfSxcclxuXHJcblxyXG4gICAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhMTF5OiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBwcmV2U2xpZGVNZXNzYWdlOiAn0J3QsNC30LDQtCcsXHJcbiAgICAgICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0LXQtCdcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTmV4dFBhZ2luYXRpb24odmFsdWUsIHdyYXBwZXIsIGN1cnJlbnQsIG5leHQpIHtcclxuXHJcbiAgICAgIGxldCB0aW1lb3V0O1xyXG5cclxuICAgICAgbmV4dC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpcy1hbmltYXRlZCcpO1xyXG5cclxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJlbnQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hbmltYXRlZCcpO1xyXG4gICAgICB9LCAyOTApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmV2Q3VyU2xpZGUoc2xpZGVyRE9NLCBzZWxlY3Rvcikge1xyXG4gICAgICBjb25zdCBzbGlkZUFjdGl2ZSA9IHNsaWRlckRPTS5maW5kKCcuc3dpcGVyLXNsaWRlLWFjdGl2ZScpO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gc2xpZGVBY3RpdmUuZmluZChzZWxlY3Rvcik7XHJcbiAgICAgIGNvbnN0IHNsaWRlUHJldmlvcyA9IHNsaWRlckRPTS5maW5kKCcuc3dpcGVyLXNsaWRlLXByZXYsIC5zd2lwZXItc2xpZGUtbmV4dCcpO1xyXG4gICAgICBjb25zdCBwcmV2aW9zID0gc2xpZGVQcmV2aW9zLmZpbmQoc2VsZWN0b3IpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGN1cnJlbnQsXHJcbiAgICAgICAgcHJldmlvc1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXBlTGVmdFBpY3R1cmUoc2xpZGVyRE9NLCBzZWxlY3Rvcikge1xyXG5cclxuICAgICAgY29uc3Qgc2xpZGUgPSBnZXRQcmV2Q3VyU2xpZGUoc2xpZGVyRE9NLCBzZWxlY3Rvcik7XHJcblxyXG4gICAgICAvLyBvdXQgbGVmdFxyXG4gICAgICBUd2Vlbk1heC50byhzbGlkZS5wcmV2aW9zLCAwLjI1LCB7XHJcbiAgICAgICAgcm90YXRpb24gOiA3MCxcclxuICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgeFBlcmNlbnQ6IC0zMDAsXHJcbiAgICAgICAgZWFzZTogUG93ZXIwLmVhc2VOb25lXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBpbiBsZWZ0XHJcbiAgICAgIFR3ZWVuTWF4LnNldChzbGlkZS5jdXJyZW50LCB7XHJcbiAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgIHhQZXJjZW50OiAtMzAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVHdlZW5NYXgudG8oc2xpZGUuY3VycmVudCwgMC43NSx7XHJcbiAgICAgICAgZGVsYXk6IDAuMjUsXHJcbiAgICAgICAgYXV0b0FscGhhOiAxLFxyXG4gICAgICAgIHJvdGF0aW9uIDogMCxcclxuICAgICAgICB4UGVyY2VudDogMCxcclxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VPdXRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpcGVSaWdodFBpY3R1cmUoc2xpZGVyRE9NLCBzZWxlY3Rvcikge1xyXG5cclxuICAgICAgY29uc3Qgc2xpZGUgPSBnZXRQcmV2Q3VyU2xpZGUoc2xpZGVyRE9NLCBzZWxlY3Rvcik7XHJcblxyXG4gICAgICAvLyBvdXQgcmlnaHRcclxuICAgICAgVHdlZW5NYXgudG8oc2xpZGUucHJldmlvcywgMC4yNSwge1xyXG4gICAgICAgIHJvdGF0aW9uIDogLTcwLFxyXG4gICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICB4UGVyY2VudDogMzAwLFxyXG4gICAgICAgIGVhc2U6IFBvd2VyMC5lYXNlTm9uZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGluIHJpZ2h0XHJcbiAgICAgIFR3ZWVuTWF4LnNldChzbGlkZS5jdXJyZW50LCB7XHJcbiAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgIHhQZXJjZW50OiAzMDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBUd2Vlbk1heC50byhzbGlkZS5jdXJyZW50LCAwLjc1LCB7XHJcbiAgICAgICAgZGVsYXk6IDAuMjUsXHJcbiAgICAgICAgYXV0b0FscGhhOiAxLFxyXG4gICAgICAgIHJvdGF0aW9uIDogMCxcclxuICAgICAgICB4UGVyY2VudDogMCxcclxuICAgICAgICBlYXNlOiBFeHBvLmVhc2VPdXRcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc3dpcGVUaXRsZShzbGlkZXJET00sIHNlbGVjdG9yKSB7XHJcblxyXG4gICAgICBjb25zdCBzbGlkZSA9IGdldFByZXZDdXJTbGlkZShzbGlkZXJET00sIHNlbGVjdG9yKTtcclxuXHJcbiAgICAgIC8vIG91dFxyXG4gICAgICBUd2Vlbk1heC50byhzbGlkZS5wcmV2aW9zLCAwLjI1LCB7XHJcbiAgICAgICAgeFBlcmNlbnQgOiAyMDAsXHJcbiAgICAgICAgYXV0b0FscGhhOiAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gaW5cclxuICAgICAgVHdlZW5NYXguc2V0KHNsaWRlLmN1cnJlbnQsIHtcclxuICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgeFBlcmNlbnQgOiAtMjAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVHdlZW5NYXgudG8oc2xpZGUuY3VycmVudCwgMC41LHtcclxuICAgICAgICBkZWxheTogMC4yNSxcclxuICAgICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgeFBlcmNlbnQgOiAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY2FsZUNpcmNsZShzbGlkZXJET00sIHNlbGVjdG9yKSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBzbGlkZSA9IGdldFByZXZDdXJTbGlkZShzbGlkZXJET00sIHNlbGVjdG9yKTtcclxuICAgXHJcbiAgICAgIC8vIG91dFxyXG4gICAgICBUd2Vlbk1heC50byhzbGlkZS5wcmV2aW9zLCAwLjUsIHtcclxuICAgICAgICBhdXRvQWxwaGE6IDAuMSxcclxuICAgICAgICBzY2FsZTogMC40XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gaW5cclxuICAgICAgVHdlZW5NYXguc2V0KHNsaWRlLmN1cnJlbnQsIHtcclxuICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgc2NhbGU6IDAuNFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFR3ZWVuTWF4LnRvKHNsaWRlLmN1cnJlbnQsIDAuNSx7XHJcbiAgICAgICAgZWFzZTogRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygxLCAwLjUpLFxyXG4gICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgYXV0b0FscGhhOiAxLFxyXG4gICAgICAgIHNjYWxlOiAxXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakVBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBeEZBO0FBQ0E7QUE4RkE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQTlPQTtBQUNBO0FBREE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/intro.js\n");

/***/ })

/******/ });