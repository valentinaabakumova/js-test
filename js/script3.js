console.log("hello, V");

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country ="Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment.area);
// console.log(apartment.location.city);
// console.log(apartment.location.country);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// }

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
//  for (const key in apartment){
// keys.push(key);
//      values.push(apartment[key]);

//      console.log(key);
//      console.log(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

// const keys = Object.keys(object);

//   // for (const key of keys) {
//   //   // if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   // }
//   // }

//   propCount = Object.keys(object).length;

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps(book));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// const names = [];
// const prices = [];

// let findPrice;
// let findName;

// for (const product of products) {
//   names.push(product.name);
//   prices.push(product.price);
// }

// console.log(names);
// console.log(prices);

// for (const name of names) {
//   if (name === productName) {
//     findName = name;
//     let index = names.indexOf(name);
//     console.log(findName);
//     console.log(index);
//   }

// console.log(Object.values(products[price]));

//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }

//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const val = Object.values(product);

// console.log(".........", product[propName]);
// console.log(Object.keys(product));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let arr = [];
//   console.log("...name of array: ", propName);

//   for (const product of products) {
//     // console.log("has? ", product.hasOwnProperty[propName]);

//     if (product.hasOwnProperty([propName])) {
//       arr.push(product[propName]);
//     }
//   }
//   return arr;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
//   console.log("...name of array: ", productName);

//   for (const product of products) {
//     if (productName === product.name) {
//       total = product.price * product.quantity;
//     }
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// });

// function makeTask(data) {
//   // const completed = false;
//   // const category = "General";
//   // const priority = "Normal";
//   // Change code below this line
//   let { completed, category, priority, text = "" } = data;
//   // const { completed, category, priority, text = "" } = data;
//   console.log(data);

//   const boo = {
//     completed: false,
//     category: "General",
//     priority: "Normal",
//     ...data,
//   };
//   console.log("boo", boo);
//   return boo;
//   // Change code above this line
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// function add(...arg) {
//   console.log(...arg);
//   // const s = Math.sum(arg);
//   let s = 0;
//   for (let i of arg) {
//     s += i;
//   }

//   console.log(s);
//   return s;
// }

// // function add(...arg) {
// //   return arg.reduce((accumulator, current) => {
// //     return (accumulator += current);
// //   });
// // }
// console.log(add(15, 27));
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// function findMatches(arr, ...args) {
//   const matches = [];

//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams", "Red sunset"],
//   getBooks() {
//     return `Returning all books: ${this.books}`;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//     console.log(this.books);
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     if (this.books.includes(bookName)) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     }
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// console.log(bookShelf.getBooks());

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  getBooks() {
    return `Returning all books: ${this.books}`;
  },

  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1);
    this.books.splice(bookIndex, 0, newName);
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(bookShelf.getBooks());
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune"));
console.log(bookShelf.getBooks());

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///
/////////////////////////////////////////

console.log("....... At The Old Toad ........");

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions() {
    return `Returning all Potions: ${this.potions}`;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
    console.log(this.potions);
    return `Adding Potion: ${potionName}`;
  },
  removePotion(potionName) {
    if (this.potions.includes(potionName)) {
      const potionIndex = this.potions.indexOf(potionName);
      this.potions.splice(potionIndex, 1);
    }
    return `Deleting book ${potionName}`;
  },

  updatePotionName(oldName, newName) {
    if (this.potions.includes(oldName)) {
      const potionIndex = this.potions.indexOf(oldName);
      this.potions.splice(potionIndex, 1);
      this.potions.splice(potionIndex, 0, newName);
    }
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.addPotion("Power potion"));
console.log("After adding: ", atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log("After deleting: ", atTheOldToad.getPotions());

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
console.log("After updatind: ", atTheOldToad.getPotions());
