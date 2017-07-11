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

let p = new Proxy(x, handler);
p.id = 12345;
console.log('proxy');
console.log(p.id);

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