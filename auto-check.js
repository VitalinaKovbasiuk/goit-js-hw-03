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
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
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
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».
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




/* Завдання 13 автоперевірка
 */





/* Завдання 14 автоперевірка
 */

 



/* Завдання 15 автоперевірка
 */





/* Завдання 16 автоперевірка
 */





/* Завдання 17 автоперевірка
 */





/* Завдання 18 автоперевірка
 */




/* Завдання 19 автоперевірка
 */





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