"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class ma hoisting tak jak var function
var Article = function Article(id, title) {
  _classCallCheck(this, Article);

  this.id = id;
  this.title = title;
};

var Article2 = function ArticleClass() {
  _classCallCheck(this, ArticleClass);
};

var art1 = new Article(123, "First title");
var art2 = new Article2();

console.log(art2);
console.log(art1);
console.log(art1.id);
console.log(art1.title);

window.onload = function () {

  var w = 'works';

  console.log(w);
};
