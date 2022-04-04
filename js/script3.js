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

function addd(...arg) {
  console.log(...arg);
  // const s = Math.sum(arg);
  let s = 0;
  for (let i of arg) {
    s += i;
  }

  console.log(s);
  return s;
}

function add(...arg) {
  return arg.reduce((accumulator, current) => {
    return (accumulator += current);
  });
}
console.log(add(15, 27));
add(12, 4, 11, 48);
add(32, 6, 13, 19, 8);
add(74, 11, 62, 46, 12, 36);
