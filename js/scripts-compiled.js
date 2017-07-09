"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var BlogArticle = function (_Article) {
  _inherits(BlogArticle, _Article);

  function BlogArticle(id, title, category) {
    _classCallCheck(this, BlogArticle);

    var _this = _possibleConstructorReturn(this, (BlogArticle.__proto__ || Object.getPrototypeOf(BlogArticle)).call(this, id, title));

    _this.category = category;
    return _this;
  }

  return BlogArticle;
}(Article);

var Article2 = function ArticleClass() {
  _classCallCheck(this, ArticleClass);
};

var art1 = new Article(123, "First title");
var art2 = new Article2();
var art3 = new Article(122, "Second title");
var blog1 = new BlogArticle(235, "First Blog", "general");

console.log(art2);
console.log(art1);
console.log(art1.id);
console.log(art1.title);
console.log(art1.getId());
console.log(art1.getTitle());
console.log(Article.compareId(art1, art3));
console.log(blog1.id, blog1.title, blog1.category);
console.log(blog1.getId());

// symbole

var s1 = Symbol('login');
var s2 = Symbol('login');

console.log(s1, s2);
// symbole zawsze są unikalne
console.log(s1 == s2);

var Person = {
  name: "Mariusz",
  age: 39,
  city: "Warsaw"

  // przypisanie symbolu do klasy
};var s3 = Symbol();
Person[s3] = 2347239487;

for (var i in Person) {
  console.log(i);
}
// symbol jest quasi-prywatny
// symbol nie jest właściwością obiektu, tylko jest do niego przypisany
console.log(Person[s3]);
console.log(Object.getOwnPropertySymbols(Person));

// literały obiektowe

function getPerson(name, age) {
  return _defineProperty({
    name: name,
    age: age,
    checkAge: function checkAge() {
      return this.age > 18;
    }
  }, 'user' + name + age, "Ok");
}

var Marian = getPerson("Marian", 27);
console.log(Marian);
console.log(Marian.checkAge());
console.log(Marian.userMarian27);

// promise

var x1 = 1;

// resolve - Ok
// reject - odrzucone

var p1 = new Promise(function (resolve, reject) {
  if (x1 == 1) {
    resolve('Ok!');
  } else {
    reject(Error('error'));
  }
});

console.log(x1);
console.log('promise', p1);

// gdy jest status resolve
p1.then(function (result) {
  console.log('promise then - ok');
})
// gdy jest status reject
.catch(function (error) {
  console.log('promise catch - not ok');
});

// promise 2 cd

var p2 = new Promise(function (resolve, reject) {
  resolve('ok 2!');
});

var p3 = new Promise(function (resolve, reject) {
  resolve('ok 3!');
  // reject('error');
});

var p4 = new Promise(function (resolve, reject) {
  resolve('ok 4!');
});

Promise.all([p2, p3, p4]).then(function (result) {
  console.log('all results ok');
}).catch(function (error) {
  console.log('all error');
});

// fetch
// metoda fetch zwraca promise

var image1 = document.querySelector('.fetch-img');

fetch('czajnik.jpg').then(function (response) {
  console.log(response);
  return response.blob();
}).then(function (blob) {
  var imageURL = URL.createObjectURL(blob);
  image1.src = imageURL;
});

window.onload = function () {

  var w = 'works';
  console.log(w);
};
