// class ma hoisting tak jak var function
class Article {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }

}

const Article2 = class ArticleClass {

}

const art1 = new Article(123, "First title");
const art2 = new Article2;

console.log(art2);
console.log(art1);
console.log(art1.id);
console.log(art1.title);

window.onload = function() {

  let w = 'works';

  console.log(w);

}