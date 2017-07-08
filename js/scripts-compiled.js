"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class ma hoisting tak jak var function
var Article = function () {
  function Article(id, title) {
    _classCallCheck(this, Article);

    this.id = id;
    this.title = title;
  }

  _createClass(Article, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
    // static wywołuje się nie na obiekcie tylko na całej klasie

  }], [{
    key: "compareId",
    value: function compareId(a, b) {
      var id1 = a.id;
      var id2 = b.id;

      return id1 > id2;
    }
  }]);

  return Article;
}();

var Article2 = function ArticleClass() {
  _classCallCheck(this, ArticleClass);
};

var art1 = new Article(123, "First title");
var art2 = new Article2();
var art3 = new Article(122, "Second title");

console.log(art2);
console.log(art1);
console.log(art1.id);
console.log(art1.title);
console.log(art1.getId());
console.log(art1.getTitle());
console.log(Article.compareId(art1, art3));

window.onload = function () {

  var w = 'works';

  console.log(w);
};
