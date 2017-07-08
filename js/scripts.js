// class ma hoisting tak jak var function
class Article {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  // static wywołuje się nie na obiekcie tylko na całej klasie
  static compareId(a, b) {
      const id1 = a.id;
      const id2 = b.id;

      return id1 > id2;
  }

}

const Article2 = class ArticleClass {

}

const art1 = new Article(123, "First title");
const art2 = new Article2;
const art3 = new Article(122, "Second title");

console.log(art2);
console.log(art1);
console.log(art1.id);
console.log(art1.title);
console.log(art1.getId());
console.log(art1.getTitle());
console.log(Article.compareId(art1, art3));

window.onload = function() {

  let w = 'works';

  console.log(w);

}