  // moduły

console.log('modules');

import {env, multiply} from './module.js';
import * as module2 from './module2.js';
console.log(env);
console.log(multiply(2,6));
console.log(module2.env);
console.log(module2.sumNumbers(2,3));

let x = {};
let handler = {
	get: function(obj, key) {
		return `value - ${obj[key]}`;
	}
};

// proxy:
// stworzenie własnej implementacji dla metody get wywoływanej na obiekcie
let p = new Proxy(x, handler);
p.id = 12345;
console.log('proxy');
console.log(p.id);

// Reflect
let color1 = {
	color: 'blue',
	hex: '#0033cc'
}
let color2 = {
	color: 'red',
	hex: '#0033cc'
}
Reflect.deleteProperty(color1, 'hex');
Reflect.deleteProperty(color2, 'hex');
console.log(color1);
console.log(color2);
let prop1 = Object.defineProperty(color1, 'opacity', {value: 80});
// zwraca obiekt
let prop2 = Reflect.defineProperty(color2, 'opacity', {value: 50});
// zwraca boolean
console.log(prop1);
console.log(prop2);
console.log(color1);
console.log(color2);

// typed array
const typedArr1 = new Uint8Array([1,4,6,9.394,3000]); 
const typedArr2 = new Float32Array([1,4,6,9.394,3000]);
console.log(typedArr1); 
console.log(typedArr2); 

// Math

let num1 = -21.54;
console.log(Math.sign(num1));
console.log(Math.trunc(num1));
let num2 = 8;
console.log(Math.log2(num2));
let num3 = 100;
console.log(Math.log10(num3));

// number

let num4 = 12;
let num5 = 12 * 'E';

console.log(Number.isInteger(num3));
console.log(Number.isNaN(num5));
// zwykły isnan zwraca true dla undefined i 'NaN'

let num6 = '23.42324';
let num7 = 23.42324;
console.log('parseInt', Number.parseInt(num6));
console.log('isSafeInteger', Number.isSafeInteger(num7));
console.log('typeof', typeof(Number.parseInt(num6)));
console.log(num7.toFixed());
console.log('typeof', typeof(num7.toFixed()));
console.log(num7.toFixed()==Number.parseInt(num6)); // true
console.log(num7.toFixed()==Number.parseInt(num7)); // true
console.log(num7.toFixed()===Number.parseInt(num6)); // false
console.log(num7.toFixed()===Number.parseInt(num7)); // false

// array

let arr1 = 'Header';
console.log(Array.from(arr1));
let arr2 = [1,2,3,4];
console.log(Array.from(arr2, x => x + 1));
console.log(arr2.find(x => x > 2));

// Object

let pers = {
	name: 'Witek',
	age: 32
};

let pers2 = Object.assign(pers, {height: 188});
// let pers3 = pers;
pers.age = 22; // reference
console.log(pers);
console.log(pers2);
// console.log(pers3);
// obiekty - reference, zmienne - kopiowanie
let myAge = 32;
let myage2 = myAge;
myAge = 30;
console.log(myAge);
console.log(myage2);