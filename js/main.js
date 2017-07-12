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