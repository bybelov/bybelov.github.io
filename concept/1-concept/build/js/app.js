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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Intro\", function() { return Intro; });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../../node_modules/swiper/dist/js/swiper.esm.bundle.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ \"../../node_modules/gsap/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Intro =\n/*#__PURE__*/\nfunction () {\n  function Intro(selector) {\n    _classCallCheck(this, Intro);\n\n    this.$el = document.querySelector(selector);\n    this.currentTransitionSpeed = 1000;\n    this.slider(this.$el);\n  }\n\n  _createClass(Intro, [{\n    key: \"getTransitionSpeed\",\n    value: function getTransitionSpeed() {\n      var transitionSpeed = this.currentTransitionSpeed; // reset the variable for future calls\n\n      this.currentTransitionSpeed = 0;\n      return transitionSpeed;\n    }\n  }, {\n    key: \"progress\",\n    value: function progress(swiper, _progress) {\n      /* \r\n      if you need to change something for each progress\r\n      do it here (progress variable is always in range from 0 to 1) representing progress of the whole slider \r\n      */\n      console.log('progress = ', _progress);\n    }\n    /*\r\n     this is a function for the setTransition swiper event. Can be used for setting the CSS transition duration on slides or wrapper. Sometimes called when the change is supposed to be animated, sometimes not called if the change should be immediate (e.g. dragging the slider)\r\n    */\n\n  }, {\n    key: \"setTransition\",\n    value: function setTransition(swiper, transitionSpeed) {\n      this.currentTransitionSpeed = transitionSpeed;\n      console.log('transition', transitionSpeed);\n    }\n  }, {\n    key: \"setTranslate\",\n    value: function setTranslate(swiper, wrapperTranslate) {\n      var durationInSeconds = this.getTransitionSpeed() / 500;\n      var slides = Object.values(swiper.slides).slice(0, -1); // do magic with each slide\n\n      slides.map(function (slide, index) {\n        // to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.\n        var offset = slide.swiperSlideOffset;\n        var x = -offset;\n        if (!swiper.params.virtualTranslate) x -= swiper.translate;\n        var y = 0;\n\n        if (!swiper.isHorizontal()) {\n          y = x;\n          x = 0;\n        }\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(slide, {\n          x: x,\n          y: y\n        });\n        var circle = slide.querySelector('.slide__circle'); // do our animation stuff!\n\n        var clip = function clip(val, min, max) {\n          return Math.max(min, Math.min(val, max));\n        };\n\n        var ZOOM_FACTOR = 0.05;\n        var opacity = Math.max(1 - Math.abs(slide.progress), 0);\n        var clippedProgress = clip(slide.progress, -1, 1);\n        var scale = 1 - ZOOM_FACTOR * clippedProgress; // you can do your CSS animation instead of using tweening.\n\n        gsap__WEBPACK_IMPORTED_MODULE_1__[\"default\"].to(slide, durationInSeconds, {\n          scale: scale,\n          opacity: opacity\n        });\n      });\n    }\n  }, {\n    key: \"slider\",\n    value: function slider(selector) {\n      var that = this;\n      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selector, {\n        // Optional parameters\n        speed: 1000,\n        // Set the speed of your animation in ms\n        watchSlidesProgress: true,\n        // enable the 'proress' property on each slide\n        virtualTranslate: true,\n        // makes the slider not move automatically, you'll have to do the translate animation\n        watchSlidesVisibility: true,\n        // slides that in viewport will have additional visible class\n        effect: 'myCustomTransition',\n        // optional - set the name of your animation. You can later check if your animation is actually applied and abort animation if not.\n        loop: false,\n        roundLengths: true,\n        // effect: 'fade',\n        pagination: {\n          el: '.swiper-pagination',\n          type: 'custom'\n        },\n        on: {\n          init: function init() {\n            // pagination animation\n            var current = this.$el[0].querySelector('.js-swiper-pagination-current');\n            var total = this.$el[0].querySelector('.swiper-pagination-total');\n            total.innerHTML = this.slides.length;\n            current.innerHTML = this.activeIndex + 1; // slide picture animation\n          },\n          slideChange: function slideChange() {\n            // pagination animation\n            var elements = this.pagination.$el[0],\n                index = this.activeIndex,\n                currentWrapper,\n                current,\n                currentNext;\n            currentWrapper = elements.querySelector('.swiper-pagination-current__inner');\n            current = elements.querySelector('.js-swiper-pagination-current');\n            currentNext = elements.querySelector('.js-swiper-pagination-next');\n            updateNextPagination(index + 1, currentWrapper, current, currentNext); // animate circle\n            // let slideCurrent = this.slides[index];\n            // let circleCurrent = slideCurrent.querySelector('.slide__circle');\n            // TweenMax.from(circleCurrent, 1, { opacity: 0 });\n            // slide picture animation\n            // let slideCurrent = this.slides[index];\n            // slideCurrent.querySelectorAll('.slide__img').forEach(element => {\n            //   element.classList.add('is-animated');\n            // });;\n          },\n          slidePrevTransitionStart: function slidePrevTransitionStart() {\n            var prev = this.navigation.$prevEl[0].querySelector('.svg-icon').classList;\n            prev.add('is-animated');\n            setTimeout(function () {\n              prev.remove('is-animated');\n            }, 610);\n          },\n          slideNextTransitionStart: function slideNextTransitionStart() {\n            var next = this.navigation.$nextEl[0].querySelector('.svg-icon').classList;\n            next.add('is-animated');\n            setTimeout(function () {\n              next.remove('is-animated');\n            }, 610);\n          },\n          // custom animations\n          progress: function progress(_progress2) {\n            var swiper = this;\n            if (swiper.params.effect !== 'myCustomTransition') return;\n            that.progress(swiper, _progress2);\n          },\n          setTransition: function setTransition(transition) {\n            var swiper = this;\n            if (swiper.params.effect !== 'myCustomTransition') return;\n            that.setTransition(swiper, transition);\n          },\n          setTranslate: function setTranslate(translate) {\n            var swiper = this;\n            if (swiper.params.effect !== 'myCustomTransition') return;\n            that.setTranslate(swiper, translate);\n          }\n        },\n        // Navigation arrows\n        navigation: {\n          nextEl: '.swiper-button-next',\n          prevEl: '.swiper-button-prev'\n        },\n        a11y: {\n          enabled: true,\n          prevSlideMessage: 'Назад',\n          nextSlideMessage: 'Вперед'\n        }\n      });\n\n      function updateNextPagination(value, wrapper, current, next) {\n        var timeout;\n        next.innerHTML = value;\n        wrapper.classList.add('is-animated');\n        window.clearTimeout(timeout);\n        timeout = window.setTimeout(function () {\n          current.innerHTML = value;\n          wrapper.classList.remove('is-animated');\n        }, 290);\n      } // function animateCircle(element){\n      // }\n\n    }\n  }]);\n\n  return Intro;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW50cm8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW50cm8uanM/ZGI1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCBUd2Vlbk1heCBmcm9tICdnc2FwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRybyB7XHJcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgIHRoaXMuJGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB0aGlzLmN1cnJlbnRUcmFuc2l0aW9uU3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5zbGlkZXIodGhpcy4kZWwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNpdGlvblNwZWVkKCkge1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblNwZWVkID0gdGhpcy5jdXJyZW50VHJhbnNpdGlvblNwZWVkO1xyXG4gICAgLy8gcmVzZXQgdGhlIHZhcmlhYmxlIGZvciBmdXR1cmUgY2FsbHNcclxuICAgIHRoaXMuY3VycmVudFRyYW5zaXRpb25TcGVlZCA9IDA7XHJcbiAgICByZXR1cm4gdHJhbnNpdGlvblNwZWVkO1xyXG4gIH1cclxuXHJcbiAgcHJvZ3Jlc3Moc3dpcGVyLCBwcm9ncmVzcykge1xyXG4gICAgLyrCoFxyXG4gICAgaWYgeW91IG5lZWQgdG8gY2hhbmdlIHNvbWV0aGluZyBmb3IgZWFjaCBwcm9ncmVzc1xyXG4gICAgZG8gaXQgaGVyZSAocHJvZ3Jlc3MgdmFyaWFibGUgaXMgYWx3YXlzIGluIHJhbmdlIGZyb20gMCB0byAxKSByZXByZXNlbnRpbmcgcHJvZ3Jlc3Mgb2YgdGhlIHdob2xlIHNsaWRlciBcclxuICAgICovXHJcbiAgICBjb25zb2xlLmxvZygncHJvZ3Jlc3MgPSAnLCBwcm9ncmVzcyk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgdGhpcyBpcyBhIGZ1bmN0aW9uIGZvciB0aGUgc2V0VHJhbnNpdGlvbiBzd2lwZXIgZXZlbnQuIENhbiBiZSB1c2VkIGZvciBzZXR0aW5nIHRoZSBDU1MgdHJhbnNpdGlvbiBkdXJhdGlvbiBvbiBzbGlkZXMgb3Igd3JhcHBlci4gU29tZXRpbWVzIGNhbGxlZCB3aGVuIHRoZSBjaGFuZ2UgaXMgc3VwcG9zZWQgdG8gYmUgYW5pbWF0ZWQsIHNvbWV0aW1lcyBub3QgY2FsbGVkIGlmIHRoZSBjaGFuZ2Ugc2hvdWxkIGJlIGltbWVkaWF0ZSAoZS5nLiBkcmFnZ2luZyB0aGUgc2xpZGVyKVxyXG4gICovXHJcbiAgc2V0VHJhbnNpdGlvbihzd2lwZXIsIHRyYW5zaXRpb25TcGVlZCkge1xyXG4gICAgdGhpcy5jdXJyZW50VHJhbnNpdGlvblNwZWVkID0gdHJhbnNpdGlvblNwZWVkO1xyXG4gICAgY29uc29sZS5sb2coJ3RyYW5zaXRpb24nLCB0cmFuc2l0aW9uU3BlZWQpO1xyXG4gIH1cclxuXHJcbiAgc2V0VHJhbnNsYXRlKHN3aXBlciwgd3JhcHBlclRyYW5zbGF0ZSkge1xyXG4gICAgY29uc3QgZHVyYXRpb25JblNlY29uZHMgPSB0aGlzLmdldFRyYW5zaXRpb25TcGVlZCgpIC8gNTAwO1xyXG4gICAgY29uc3Qgc2xpZGVzID0gT2JqZWN0LnZhbHVlcyhzd2lwZXIuc2xpZGVzKS5zbGljZSgwLCAtMSk7XHJcbiAgICAvLyBkbyBtYWdpYyB3aXRoIGVhY2ggc2xpZGVcclxuICAgIHNsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4ge1xyXG4gICAgICAvLyB0byBwdXQgdGhlIHNsaWRlcyBiZWhpbmQgZWFjaCBvdGhlciB3ZSBoYXZlIHRvIHNldCB0aGVpciBDU1MgdHJhbnNsYXRlIGFjY29yZGluZ2x5IHNpbmNlIGJ5IGRlZmF1bHQgdGhleSBhcmUgYXJyYW5nZWQgaW4gbGluZS5cclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQ7XHJcbiAgICAgIGxldCB4ID0gLW9mZnNldDtcclxuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHggLT0gc3dpcGVyLnRyYW5zbGF0ZTtcclxuICAgICAgbGV0IHkgPSAwO1xyXG4gICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xyXG4gICAgICAgIHkgPSB4O1xyXG4gICAgICAgIHggPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIFR3ZWVuTWF4LnNldChzbGlkZSwge1xyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNpcmNsZSA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9fY2lyY2xlJyk7XHJcblxyXG4gICAgICAvLyBkbyBvdXIgYW5pbWF0aW9uIHN0dWZmIVxyXG4gICAgICBjb25zdCBjbGlwID0gKHZhbCwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsLCBtYXgpKTtcclxuICAgICAgY29uc3QgWk9PTV9GQUNUT1IgPSAwLjA1O1xyXG5cclxuICAgICAgY29uc3Qgb3BhY2l0eSA9IE1hdGgubWF4KDEgLSBNYXRoLmFicyhzbGlkZS5wcm9ncmVzcyksIDApO1xyXG5cclxuICAgICAgY29uc3QgY2xpcHBlZFByb2dyZXNzID0gY2xpcChzbGlkZS5wcm9ncmVzcywgLTEsIDEpO1xyXG4gICAgICBjb25zdCBzY2FsZSA9IDEgLSBaT09NX0ZBQ1RPUiAqIGNsaXBwZWRQcm9ncmVzcztcclxuXHJcbiAgICAgIC8vIHlvdSBjYW4gZG8geW91ciBDU1MgYW5pbWF0aW9uIGluc3RlYWQgb2YgdXNpbmcgdHdlZW5pbmcuXHJcbiAgICAgIFR3ZWVuTWF4LnRvKHNsaWRlLCBkdXJhdGlvbkluU2Vjb25kcywge1xyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICAgIG9wYWNpdHlcclxuICAgICAgfSk7XHJcbiAgICB9KTsgICAgXHJcblxyXG4gIH1cclxuXHJcbiAgc2xpZGVyKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgXHJcbiAgICB0aGlzLnN3aXBlciA9IG5ldyBTd2lwZXIoc2VsZWN0b3IsIHtcclxuICAgICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gIFxyXG4gICAgICBzcGVlZDogMTAwMCwgLy8gU2V0IHRoZSBzcGVlZCBvZiB5b3VyIGFuaW1hdGlvbiBpbiBtc1xyXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLCAvLyBlbmFibGUgdGhlICdwcm9yZXNzJyBwcm9wZXJ0eSBvbiBlYWNoIHNsaWRlXHJcbiAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IHRydWUsIC8vIG1ha2VzIHRoZSBzbGlkZXIgbm90IG1vdmUgYXV0b21hdGljYWxseSwgeW91J2xsIGhhdmUgdG8gZG8gdGhlIHRyYW5zbGF0ZSBhbmltYXRpb25cclxuICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLCAvLyBzbGlkZXMgdGhhdCBpbiB2aWV3cG9ydCB3aWxsIGhhdmUgYWRkaXRpb25hbCB2aXNpYmxlIGNsYXNzXHJcbiAgICAgIGVmZmVjdDogJ215Q3VzdG9tVHJhbnNpdGlvbicsIC8vIG9wdGlvbmFsIC0gc2V0IHRoZSBuYW1lIG9mIHlvdXIgYW5pbWF0aW9uLiBZb3UgY2FuIGxhdGVyIGNoZWNrIGlmIHlvdXIgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGFwcGxpZWQgYW5kIGFib3J0IGFuaW1hdGlvbiBpZiBub3QuXHJcbiAgXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICByb3VuZExlbmd0aHM6IHRydWUsXHJcbiAgICAgIC8vIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdjdXN0b20nXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICAgIG9uOiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgICAgICAgICAvLyBwYWdpbmF0aW9uIGFuaW1hdGlvblxyXG4gIFxyXG4gICAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLiRlbFswXS5xdWVyeVNlbGVjdG9yKCcuanMtc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcpO1xyXG4gICAgICAgICAgbGV0IHRvdGFsID0gdGhpcy4kZWxbMF0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1wYWdpbmF0aW9uLXRvdGFsJyk7XHJcbiAgICAgICAgICB0b3RhbC5pbm5lckhUTUwgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgICBjdXJyZW50LmlubmVySFRNTCA9IHRoaXMuYWN0aXZlSW5kZXggKyAxO1xyXG4gIFxyXG4gICAgICAgICAgLy8gc2xpZGUgcGljdHVyZSBhbmltYXRpb25cclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWRlQ2hhbmdlOiBmdW5jdGlvbigpIHtcclxuICBcclxuICAgICAgICAgIC8vIHBhZ2luYXRpb24gYW5pbWF0aW9uXHJcbiAgICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLnBhZ2luYXRpb24uJGVsWzBdLFxyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuYWN0aXZlSW5kZXgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRXcmFwcGVyLFxyXG4gICAgICAgICAgICBjdXJyZW50LFxyXG4gICAgICAgICAgICBjdXJyZW50TmV4dDtcclxuICBcclxuICAgICAgICAgIGN1cnJlbnRXcmFwcGVyID0gZWxlbWVudHMucXVlcnlTZWxlY3RvcignLnN3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnRfX2lubmVyJyk7XHJcbiAgICAgICAgICBjdXJyZW50ID0gZWxlbWVudHMucXVlcnlTZWxlY3RvcignLmpzLXN3aXBlci1wYWdpbmF0aW9uLWN1cnJlbnQnKTtcclxuICAgICAgICAgIGN1cnJlbnROZXh0ID0gZWxlbWVudHMucXVlcnlTZWxlY3RvcignLmpzLXN3aXBlci1wYWdpbmF0aW9uLW5leHQnKTtcclxuICBcclxuICAgICAgICAgIHVwZGF0ZU5leHRQYWdpbmF0aW9uKGluZGV4KzEsIGN1cnJlbnRXcmFwcGVyLCBjdXJyZW50LCBjdXJyZW50TmV4dCk7XHJcbiAgXHJcbiAgICAgICAgICAvLyBhbmltYXRlIGNpcmNsZVxyXG4gICAgICAgICAgLy8gbGV0IHNsaWRlQ3VycmVudCA9IHRoaXMuc2xpZGVzW2luZGV4XTtcclxuICAgICAgICAgIC8vIGxldCBjaXJjbGVDdXJyZW50ID0gc2xpZGVDdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9fY2lyY2xlJyk7XHJcbiAgICAgICAgICAvLyBUd2Vlbk1heC5mcm9tKGNpcmNsZUN1cnJlbnQsIDEsIHsgb3BhY2l0eTogMCB9KTtcclxuICBcclxuICAgICAgICAgIC8vIHNsaWRlIHBpY3R1cmUgYW5pbWF0aW9uXHJcbiAgICAgICAgICAvLyBsZXQgc2xpZGVDdXJyZW50ID0gdGhpcy5zbGlkZXNbaW5kZXhdO1xyXG4gICAgICAgICAgLy8gc2xpZGVDdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZV9faW1nJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgIC8vICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1hbmltYXRlZCcpO1xyXG4gICAgICAgICAgLy8gfSk7O1xyXG4gIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGxldCBwcmV2ID0gdGhpcy5uYXZpZ2F0aW9uLiRwcmV2RWxbMF0ucXVlcnlTZWxlY3RvcignLnN2Zy1pY29uJykuY2xhc3NMaXN0O1xyXG4gICAgICAgICAgcHJldi5hZGQoJ2lzLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwcmV2LnJlbW92ZSgnaXMtYW5pbWF0ZWQnKTtcclxuICAgICAgICAgIH0sNjEwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWRlTmV4dFRyYW5zaXRpb25TdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgICAgICAgICBsZXQgbmV4dCA9IHRoaXMubmF2aWdhdGlvbi4kbmV4dEVsWzBdLnF1ZXJ5U2VsZWN0b3IoJy5zdmctaWNvbicpLmNsYXNzTGlzdDtcclxuICAgICAgICAgIG5leHQuYWRkKCdpcy1hbmltYXRlZCcpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbmV4dC5yZW1vdmUoJ2lzLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgICB9LDYxMCk7XHJcbiAgXHJcbiAgICAgICAgfSxcclxuICBcclxuICAgICAgICAvLyBjdXN0b20gYW5pbWF0aW9uc1xyXG4gICAgICAgIHByb2dyZXNzKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xyXG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnbXlDdXN0b21UcmFuc2l0aW9uJykgcmV0dXJuO1xyXG4gICAgICAgICAgdGhhdC5wcm9ncmVzcyhzd2lwZXIsIHByb2dyZXNzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcclxuICAgICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ215Q3VzdG9tVHJhbnNpdGlvbicpIHJldHVybjtcclxuICAgICAgICAgIHRoYXQuc2V0VHJhbnNpdGlvbihzd2lwZXIsIHRyYW5zaXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XHJcbiAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdteUN1c3RvbVRyYW5zaXRpb24nKSByZXR1cm47XHJcbiAgICAgICAgICB0aGF0LnNldFRyYW5zbGF0ZShzd2lwZXIsIHRyYW5zbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICB9LFxyXG4gIFxyXG4gICAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICAgIGExMXk6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQndCw0LfQsNC0JyxcclxuICAgICAgICBuZXh0U2xpZGVNZXNzYWdlOiAn0JLQv9C10YDQtdC0J1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5leHRQYWdpbmF0aW9uKHZhbHVlLCB3cmFwcGVyLCBjdXJyZW50LCBuZXh0KSB7XHJcbiAgXHJcbiAgICAgIGxldCB0aW1lb3V0O1xyXG4gIFxyXG4gICAgICBuZXh0LmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGVkJyk7XHJcbiAgXHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBjdXJyZW50LmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYW5pbWF0ZWQnKTtcclxuICAgICAgfSwgMjkwKTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgIC8vIGZ1bmN0aW9uIGFuaW1hdGVDaXJjbGUoZWxlbWVudCl7XHJcbiAgXHJcbiAgICAvLyB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWVBOzs7O0FBSUE7QUFFQTtBQUVBOzs7O0FBdkJBO0FBQUE7QUFBQTtBQTJCQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQXBFQTtBQUFBO0FBQUE7QUF3RUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBekVBO0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBcEdBO0FBQ0E7QUEwR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUF4TUE7QUFDQTtBQURBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/intro.js\n");

/***/ })

/******/ });