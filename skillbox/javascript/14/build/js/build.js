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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Импортируем стили кнопки

var Button = function () {
  // Разрешаем экспорт класса Button
  function Button(btnText) {
    _classCallCheck(this, Button);

    this.btnText = btnText;
  }

  _createClass(Button, [{
    key: 'counter',
    value: function counter(count) {
      var startCounter = count;
      var button = document.querySelector('.btn');
      var buttonText = button.textContent;
      button.addEventListener('click', function (e) {
        e.preventDefault();
        button.innerHTML = buttonText + ' <span>(\u041A\u043B\u0438\u043A ' + startCounter + ')</span>';
        startCounter++;
      });
    }
  }, {
    key: 'createIn',
    value: function createIn(wrapper) {
      var container = document.querySelector(wrapper); // Контейнер для вставки кнопки
      var button = document.createElement('button'); // Создаем кнопку ввиде ссылки
      var buttonText = document.createTextNode(this.btnText); // Создаем текстовую ноду для вставки в кнопку
      button.appendChild(buttonText); // Вставляем название кнопки
      button.className = "btn"; // Задаем класс для кнопки
      button.type = "button"; // Задаем атрибут type для кнопки
      container.appendChild(button); // Вставляем созданную кнопку в указанный контейнер 'wrapper'
    }
  }]);

  return Button;
}();

exports.default = Button;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Импортируем стили select

var Select = function () {
    // Разрешаем экспорт класса select
    function Select(array) {
        _classCallCheck(this, Select);

        this.array = array;
    }

    _createClass(Select, [{
        key: 'createIn',
        value: function createIn(wrapper) {

            var container = document.querySelector(wrapper); // Контейнер для вставки кнопки
            var arr = this.array;

            console.log(arr);

            // Создаем select
            var select = document.createElement('select');
            // Обходим в цикле массив
            for (var i = 0; i < arr.length; i++) {
                // Создаем option
                var option = new Option(arr[i].value, arr[i].value, arr[i].selected, arr[i].selected);
                console.log(arr[i].value);
                // Добавляем каждый option в select
                select.appendChild(option);
            }
            // Добавляем select с options в блок .js-btn-block
            container.appendChild(select);
        }
    }]);

    return Select;
}();

exports.default = Select;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../index.html";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Импортируем html
// Импортируем базовые стили

__webpack_require__(3);

__webpack_require__(2);

var _button = __webpack_require__(0);

var _button2 = _interopRequireDefault(_button);

var _select = __webpack_require__(1);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Импортируем кнопку со стилями

var button = new _button2.default('Кнопка');
button.createIn('.container'); // Создаем кнопку внутри контейнера с классом .container
button.counter(1); // Запускаем скрипт подсчета кол-ва кликов по кнопке. Отсчет начинаем с 1.

// Импортируем select со стилями

// Создадим массив из объектов для описания опций создаваемого селекта
var arrSelectOptions = [{
  value: 'Опция 1',
  selected: false
}, {
  value: 'Опция 2',
  selected: false
}, {
  value: 'Опция 3',
  selected: true
}, {
  value: 'Опция 4',
  selected: false
}];
console.log(typeof arrSelectOptions === 'undefined' ? 'undefined' : _typeof(arrSelectOptions));
var select = new _select2.default(arrSelectOptions);
select.createIn('.js-select'); // Создаем select внутри контейнера с классом .js-select

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);