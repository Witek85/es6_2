// class ma hoisting tak jak var function
class Article {

}

const Article2 = class ArticleClass {

}

const art1 = new Article;
const art2 = new Article2;

console.log(art1);
console.log(art2);

window.onload = function() {

  let w = 'works';

  console.log(w);

}