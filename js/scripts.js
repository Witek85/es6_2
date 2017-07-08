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

class BlogArticle extends Article {
    constructor(id, title, category) {
    super(id, title);
    this.category = category;
  }
}

const Article2 = class ArticleClass {

}

const art1 = new Article(123, "First title");
const art2 = new Article2;
const art3 = new Article(122, "Second title");
const blog1 = new BlogArticle(235, "First Blog", "general");

console.log(art2);
console.log(art1);
console.log(art1.id);
console.log(art1.title);
console.log(art1.getId());
console.log(art1.getTitle());
console.log(Article.compareId(art1, art3));
console.log(blog1.id, blog1.title, blog1.category);
console.log(blog1.getId());

window.onload = function() {

  let w = 'works';

  console.log(w);

}