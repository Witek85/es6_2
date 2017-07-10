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