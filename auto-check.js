/* Завдання 1 автоперевірка
 */
// СТВОРЕННЯ ОБ'ЄКТА
// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };




/* Завдання 2 автоперевірка
 */
// ВКЛАДЕНІ ВЛАСТИВОСТІ
// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:
// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
//     },
//   };



/* Завдання 3 автоперевірка
 */
// ДОСТУП ДО ВЛАСТИВОСТЕЙ ЧЕРЕЗ КРАПКУ
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment.rating;
//   console.log(aptRating);
//   const aptDescr = apartment.descr;
//   console.log(aptDescr);
//   const aptPrice = apartment.price;
//   console.log(aptPrice);
//   const aptTags = apartment.tags;
//   console.log(aptTags);






/* Завдання 4 автоперевірка
 */
// ДОСТУП ДО ВКЛАДЕНИХ ВЛАСТИВОСТЕЙ
// Доповни код, присвоївши оголошеним змінним вирази звернення 
// до відповідних властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];






/* Завдання 5 автоперевірка
 */
// ДОСТУП ДО ВЛАСТИВОСТЕЙ ЧЕРЕЗ КВАДРАТНІ ДУЖКИ
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних 
// властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».
// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment["rating"];
//   console.log(aptRating);
//   const aptDescr = apartment["descr"];
//   console.log(aptDescr);
//   const aptPrice = apartment["price"];
//   console.log(aptPrice);
//   const aptTags = apartment["tags"];
//   console.log(aptTags);






/* Завдання 6 автоперевірка
 */
// ЗМІНА ЗНАЧЕННЯ ВЛАСТИВОСТІ
// Доповни код, оновивши значення властивостей об'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = "Henry Sibola";
//   apartment.tags.push("trusted");
  
//   console.log(apartment.price);
//   console.log(apartment.rating);
//   console.log(apartment.owner.name);
//   console.log(apartment.tags);






/* Завдання 7 автоперевірка
 */
// ДОДАВАННЯ ВЛАСТИВОСТЕЙ
// Додай об'єкту apartment кілька нових властивостей:
// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {country: "Jamaica", city : "Kingston"};






/* Завдання 8 автоперевірка
 */
// КОРОТКІ ВЛАСТИВОСТІ
// Доповни код оголошення об'єкта таким чином, 
// щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. 
// Обов'язково використовуй синтаксис коротких властивостей.
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };






/* Завдання 9 автоперевірка
 */
// ОБЧИСЛЮВАНІ ВЛАСТИВОСТІ
// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, 
// імена яких зберігаються у змінних emailInputName і passwordInputName.
// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".
// const emailInputName = "email";
// const passwordInputName = "password";
// const credentials = {
// [emailInputName]: "email",
// [passwordInputName]: "password",
// email: "henry.carter@aptmail.com",
// password: "jqueryismyjam",
// };
// console.log(credentials.password);






/* Завдання 10 автоперевірка
 */
// ЦИКЛ FOR...IN
// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = ["descr", "rating", "price"];
//   const values = ["Spacious apartment in the city center", 4, 2153];
 
//   for (const keys in apartment) {
//   console.log(keys);
//     console.log(apartment[keys]);
//   }





/* Завдання 11 автоперевірка
 */
// МЕТОД HASOWNPROPERTY()
// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
  
// if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(apartment[key]);
//   keys.push(key);
//   values.push(apartment[key]);
// }
// }






/* Завдання 12 автоперевірка
 */
// ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
// Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
// function countProps(object) {
//     let propCount = 0;
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//    propCount += 1
//     }
//     }
//     return propCount;
//   }





/* Завдання 13 автоперевірка
 */
// МЕТОД OBJECT.KEYS()
// Перебери об'єкт apartment, використовуючи метод Object.keys() 
// і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   const keys = Object.keys(apartment);
//   for (const key of keys) {
//   values.push(apartment[key])
//     console.log(apartment[key]);
//   }





/* Завдання 14 автоперевірка
 */
// ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0
// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of
// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     return keys.length;
//   }
  



/* Завдання 15 автоперевірка
 */
// МЕТОД OBJECT.VALUES()
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, 
// а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  





/* Завдання 16 автоперевірка
 */
// ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ
// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, 
// де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. 
// Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. 
// Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//   const value = Object.values(salaries);
//   for (let i = 0; i < value.length; i += 1) {
//     totalSalary += value[i];
//   }
//     return totalSalary;
//   }
  






/* Завдання 17 автоперевірка
 */
// МАСИВ ОБ'ЄКТІВ
// Перебери масив об'єктів colors, використовуючи цикл for...of. 
// Додай у масив hexColors значення властивостей hex, а в масив rgbColors - 
// значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
//   const hexColors = [];
//   const rgbColors = [];
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//     console.log(hexColors);
//   console.log(rgbColors);
//   }






/* Завдання 18 автоперевірка
 */
// ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. 
// Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). 
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//   return (product.price);
//     } 
//   }
//   return null;
//   }
 




/* Завдання 19 автоперевірка
 */
// ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. 
// Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.








/* Завдання 20 автоперевірка
 */





/* Завдання 21 автоперевірка
 */





/* Завдання 22 автоперевірка
 */

  




/* Завдання 23 автоперевірка
 */




/* Завдання 24 автоперевірка
 */

  



/* Завдання 25 автоперевірка
 */






/* Завдання 26 автоперевірка
 */

  



/* Завдання 27 автоперевірка
 */





/* Завдання 28 автоперевірка
 */






/* Завдання 29 автоперевірка
 */






/* Завдання 30 автоперевірка
 */






/* Завдання 31 автоперевірка
 */





/* Завдання 32 автоперевірка
 */





/* Завдання 33 автоперевірка
 */






/* Завдання 34 автоперевірка
 */





/* Завдання 35 автоперевірка
 */






/* Завдання 36 автоперевірка
 */






/* Завдання 37 автоперевірка
 */






/* Завдання 38 автоперевірка
 */






/* Завдання 39 автоперевірка
 */







/* Завдання 40 автоперевірка
 */






/* Завдання 41 автоперевірка
 */