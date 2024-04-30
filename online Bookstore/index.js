
function Book(title,author,genere,price){
this.title = title;
this.author = author;

this.genere = genere;
this.price = price;
}


function Author(name,birthYear,nationality){
    this.name = name;
     this.birthYear = birthYear;
     this.nationality = nationality;
}

Book.prototype.getBookInfo = function(){
return`${this.title},${this.author.name},${this.genere} ${this.price}`;
}


const author1 = new Author("james Clear",2002,"american")

const book1 = new Book('small habits: authors name is=> ',author1,"self-inprovement");


console.log('Book store:');

console.log(book1.getBookInfo());
