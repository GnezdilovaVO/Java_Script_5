"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const data = products.filter(function (val) {
  for (const key in val) {
    if (key === "photos") {
      if (val.photos.length > 0) {
        return true;
      }
      return false;
    }
  }
});
console.log(data);

let min = products[0];
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < products.length; j++) {
    if (products[i].price < products[j].price) {
      const temp = products[j];
      products[j] = products[i];
      products[i] = temp;
    }
  }
}
console.log(products);

console.log(products.sort(products.price));
