console.log("go, Valentina, go!");

alert("секретные материалы");

console.log("приветики");


confirm("да?");

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
    rating: 8.38,
    price: 70
};

const bookTitle = book.title;
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventurs']

const bookPrice = book.price;
console.log(bookPrice); // undefined

for (const key in book) {

    console.log(key, ":", book[key]);
}


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }





const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);

console.log("ah so.. danke")

const value = prompt("Please enter a number!");
console.log(value); // "5"


console.log("auwiderzain")


