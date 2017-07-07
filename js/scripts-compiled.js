'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class ma hoisting tak jak var function
var Article = function Article() {
  _classCallCheck(this, Article);
};

var Article2 = function ArticleClass() {
  _classCallCheck(this, ArticleClass);
};

var art1 = new Article();
var art2 = new Article2();

console.log(art1);
console.log(art2);

window.onload = function () {

  var w = 'works';

  console.log(w);
};
