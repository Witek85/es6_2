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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _module = __webpack_require__(1);

var _module2 = __webpack_require__(2);

var module2 = _interopRequireWildcard(_module2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// moduły

console.log('modules');

console.log(_module.env);
console.log((0, _module.multiply)(2, 6));
console.log(module2.env);
console.log(module2.sumNumbers(2, 3));

var x = {};
var handler = {
	get: function get(obj, key) {
		return 'value - ' + obj[key];
	}
};

// proxy:
// stworzenie własnej implementacji dla metody get wywoływanej na obiekcie
var p = new Proxy(x, handler);
p.id = 12345;
console.log('proxy');
console.log(p.id);

// Reflect
var color1 = {
	color: 'blue',
	hex: '#0033cc'
};
var color2 = {
	color: 'red',
	hex: '#0033cc'
};
Reflect.deleteProperty(color1, 'hex');
Reflect.deleteProperty(color2, 'hex');
console.log(color1);
console.log(color2);
var prop1 = Object.defineProperty(color1, 'opacity', { value: 80 });
// zwraca obiekt
var prop2 = Reflect.defineProperty(color2, 'opacity', { value: 50 });
// zwraca boolean
console.log(prop1);
console.log(prop2);
console.log(color1);
console.log(color2);

// typed array
var typedArr1 = new Uint8Array([1, 4, 6, 9.394, 3000]);
var typedArr2 = new Float32Array([1, 4, 6, 9.394, 3000]);
console.log(typedArr1);
console.log(typedArr2);

// Math

var num1 = -21.54;
console.log(Math.sign(num1));
console.log(Math.trunc(num1));
var num2 = 8;
console.log(Math.log2(num2));
var num3 = 100;
console.log(Math.log10(num3));

// number

var num4 = 12;
var num5 = 12 * 'E';

console.log(Number.isInteger(num3));
console.log(Number.isNaN(num5));
// zwykły isnan zwraca true dla undefined i 'NaN'

var num6 = '23.42324';
var num7 = 23.42324;
console.log('parseInt', Number.parseInt(num6));
console.log('isSafeInteger', Number.isSafeInteger(num7));
console.log('typeof', _typeof(Number.parseInt(num6)));
console.log(num7.toFixed());
console.log('typeof', _typeof(num7.toFixed()));
console.log(num7.toFixed() == Number.parseInt(num6)); // true
console.log(num7.toFixed() == Number.parseInt(num7)); // true
console.log(num7.toFixed() === Number.parseInt(num6)); // false
console.log(num7.toFixed() === Number.parseInt(num7)); // false

// array

var arr1 = 'Header';
console.log(Array.from(arr1));
var arr2 = [1, 2, 3, 4];
console.log(Array.from(arr2, function (x) {
	return x + 1;
}));
console.log(arr2.find(function (x) {
	return x > 2;
}));

// Object

var pers = {
	name: 'Witek',
	age: 32
};

var pers2 = Object.assign(pers, { height: 188 });
// let pers3 = pers;
pers.age = 22; // reference
console.log(pers);
console.log(pers2);
// console.log(pers3);
// obiekty - reference, zmienne - kopiowanie
var myAge = 32;
var myage2 = myAge;
myAge = 30;
console.log(myAge);
console.log(myage2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'PROD';

var multiply = function multiply(a, b) {
  return a * b;
};

console.log('hello from module!');

exports.env = env;
exports.multiply = multiply;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = 'DEV';

var sumNumbers = function sumNumbers(a, b) {
  return a + b;
};

exports.env = env;
exports.sumNumbers = sumNumbers;

/***/ })
/******/ ]);