  // moduły

console.log('modules');

import {env, sumNumbers} from './module.js';
import * as module2 from './module2.js';
console.log(env);
console.log(sumNumbers(2,3));
console.log(module2.env);
console.log(module2.sumNumbers(2,3));