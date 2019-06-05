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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Intro\", function() { return Intro; });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../../node_modules/swiper/dist/js/swiper.esm.bundle.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar Intro = function Intro(selector) {\n  _classCallCheck(this, Intro);\n\n  this.$el = document.querySelector(selector); // console.log(this.$el);\n\n  Slider(this.$el);\n};\n\nfunction Slider(selector) {\n  new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selector, {\n    // Optional parameters\n    loop: false,\n    roundLengths: true,\n    effect: 'fade',\n    // If we need pagination\n    pagination: {\n      el: '.swiper-pagination',\n      type: 'custom'\n    },\n    on: {\n      init: function init() {\n        // pagination animation\n        var current = this.$el[0].querySelector('.js-swiper-pagination-current');\n        var total = this.$el[0].querySelector('.swiper-pagination-total');\n        total.innerHTML = this.slides.length;\n        current.innerHTML = this.activeIndex + 1; // slide picture animation\n      },\n      slideChange: function slideChange() {\n        // pagination animation\n        var elements = this.pagination.$el[0],\n            index = this.activeIndex,\n            currentWrapper,\n            current,\n            currentNext;\n        currentWrapper = elements.querySelector('.swiper-pagination-current__inner');\n        current = elements.querySelector('.js-swiper-pagination-current');\n        currentNext = elements.querySelector('.js-swiper-pagination-next');\n        updateNextPagination(index + 1, currentWrapper, current, currentNext); // slide picture animation\n        // let slideCurrent = this.slides[index];\n        // slideCurrent.querySelectorAll('.slide__img').forEach(element => {\n        //   element.classList.add('is-animated');\n        // });;\n      },\n      slidePrevTransitionStart: function slidePrevTransitionStart() {\n        var prev = this.navigation.$prevEl[0].querySelector('.svg-icon').classList;\n        prev.add('is-animated');\n        setTimeout(function () {\n          prev.remove('is-animated');\n        }, 610);\n      },\n      slideNextTransitionStart: function slideNextTransitionStart() {\n        var next = this.navigation.$nextEl[0].querySelector('.svg-icon').classList;\n        next.add('is-animated');\n        setTimeout(function () {\n          next.remove('is-animated');\n        }, 610);\n      }\n    },\n    // Navigation arrows\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    },\n    a11y: {\n      enabled: true,\n      prevSlideMessage: 'Назад',\n      nextSlideMessage: 'Вперед'\n    }\n  });\n\n  function updateNextPagination(value, wrapper, current, next) {\n    var timeout;\n    next.innerHTML = value;\n    wrapper.classList.add('is-animated');\n    window.clearTimeout(timeout);\n    timeout = window.setTimeout(function () {\n      current.innerHTML = value;\n      wrapper.classList.remove('is-animated');\n    }, 290);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW50cm8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW50cm8uanM/ZGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50cm8ge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLiRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy4kZWwpO1xyXG4gICAgU2xpZGVyKHRoaXMuJGVsKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBTbGlkZXIoc2VsZWN0b3IpIHtcclxuXHJcbiAgbmV3IFN3aXBlcihzZWxlY3Rvciwge1xyXG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICByb3VuZExlbmd0aHM6IHRydWUsXHJcbiAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgIHR5cGU6ICdjdXN0b20nXHJcbiAgICB9LFxyXG5cclxuICAgIG9uOiB7XHJcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyBwYWdpbmF0aW9uIGFuaW1hdGlvblxyXG5cclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuJGVsWzBdLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50Jyk7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy4kZWxbMF0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyk7XHJcbiAgICAgICAgdG90YWwuaW5uZXJIVE1MID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgICAgIGN1cnJlbnQuaW5uZXJIVE1MID0gdGhpcy5hY3RpdmVJbmRleCArIDE7XHJcblxyXG4gICAgICAgIC8vIHNsaWRlIHBpY3R1cmUgYW5pbWF0aW9uXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBzbGlkZUNoYW5nZTogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vIHBhZ2luYXRpb24gYW5pbWF0aW9uXHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5wYWdpbmF0aW9uLiRlbFswXSxcclxuICAgICAgICAgIGluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCxcclxuICAgICAgICAgIGN1cnJlbnRXcmFwcGVyLFxyXG4gICAgICAgICAgY3VycmVudCxcclxuICAgICAgICAgIGN1cnJlbnROZXh0O1xyXG5cclxuICAgICAgICBjdXJyZW50V3JhcHBlciA9IGVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItcGFnaW5hdGlvbi1jdXJyZW50X19pbm5lcicpO1xyXG4gICAgICAgIGN1cnJlbnQgPSBlbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcuanMtc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcpO1xyXG4gICAgICAgIGN1cnJlbnROZXh0ID0gZWxlbWVudHMucXVlcnlTZWxlY3RvcignLmpzLXN3aXBlci1wYWdpbmF0aW9uLW5leHQnKTtcclxuXHJcbiAgICAgICAgdXBkYXRlTmV4dFBhZ2luYXRpb24oaW5kZXgrMSwgY3VycmVudFdyYXBwZXIsIGN1cnJlbnQsIGN1cnJlbnROZXh0KTtcclxuXHJcbiAgICAgICAgLy8gc2xpZGUgcGljdHVyZSBhbmltYXRpb25cclxuICAgICAgICAvLyBsZXQgc2xpZGVDdXJyZW50ID0gdGhpcy5zbGlkZXNbaW5kZXhdO1xyXG4gICAgICAgIC8vIHNsaWRlQ3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVfX2ltZycpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgLy8gICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgLy8gfSk7O1xyXG5cclxuICAgICAgfSxcclxuICAgICAgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgcHJldiA9IHRoaXMubmF2aWdhdGlvbi4kcHJldkVsWzBdLnF1ZXJ5U2VsZWN0b3IoJy5zdmctaWNvbicpLmNsYXNzTGlzdDtcclxuICAgICAgICBwcmV2LmFkZCgnaXMtYW5pbWF0ZWQnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcHJldi5yZW1vdmUoJ2lzLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgfSw2MTApO1xyXG4gICAgICB9LFxyXG4gICAgICBzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5uYXZpZ2F0aW9uLiRuZXh0RWxbMF0ucXVlcnlTZWxlY3RvcignLnN2Zy1pY29uJykuY2xhc3NMaXN0O1xyXG4gICAgICAgIG5leHQuYWRkKCdpcy1hbmltYXRlZCcpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBuZXh0LnJlbW92ZSgnaXMtYW5pbWF0ZWQnKTtcclxuICAgICAgICB9LDYxMCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuXHJcbiAgICBhMTF5OiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgICAgbmV4dFNsaWRlTWVzc2FnZTogJ9CS0L/QtdGA0LXQtCdcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlTmV4dFBhZ2luYXRpb24odmFsdWUsIHdyYXBwZXIsIGN1cnJlbnQsIG5leHQpIHtcclxuXHJcbiAgICBsZXQgdGltZW91dDtcclxuICAgIG5leHQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJyk7XHJcblxyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgY3VycmVudC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hbmltYXRlZCcpO1xyXG4gICAgfSwgMjkwKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoREE7QUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFwRUE7QUFDQTtBQTBFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/intro.js\n");

/***/ })

/******/ });