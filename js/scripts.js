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


// symbole

let s1 = Symbol('login');
let s2 = Symbol('login');

console.log(s1, s2);
// symbole zawsze są unikalne
console.log(s1 == s2);

let Person = {
  name: "Mariusz",
  age: 39,
  city: "Warsaw"
}

// przypisanie symbolu do klasy
let s3 = Symbol();
Person[s3] = 2347239487;

for (let i in Person) {
  console.log(i);
}
// symbol jest quasi-prywatny
// symbol nie jest właściwością obiektu, tylko jest do niego przypisany
console.log(Person[s3]);
console.log(Object.getOwnPropertySymbols(Person));

// literały obiektowe

function getPerson(name, age) {
  return {
    name,
    age,
    checkAge() {
      return this.age > 18;
    },
    // dynamiczne ustawienie właściwości
    ['user'+name+age]: "Ok"
  }
}

let Marian = getPerson("Marian", 27)
console.log(Marian);
console.log(Marian.checkAge());
console.log(Marian.userMarian27);

// promise

var x1 = 1;

// resolve - Ok
// reject - odrzucone

let p1 = new Promise(function(resolve, reject){
  if (x1 == 1) {
    resolve('Ok!');
  } else {
    reject(Error('error'));
  }
});

console.log(x1);
console.log('promise', p1);

// gdy jest status resolve
p1.then(function(result){
  console.log('promise then - ok');
})
// gdy jest status reject
  .catch(function(error){
 console.log('promise catch - not ok');
});

window.onload = function() {

  let w = 'works';
  console.log(w);

}