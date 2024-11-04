// ? 1-dars

// todo: var // eng birinchi chiqqan o'zgaruvchidir bu o'zgaruvchi blok hisoblanmaydi u blokdan tashqarida ham ishlaydi va bunga bir xil nom bersa bo'ladi lekin oxiridagi nomni qaytaradi
// todo: let // bu o'zgaruchi blok hisoblanadi bu esa blokdan tashqarida ishlamaydi bunga faqat bir xil nom bersa bo'lmaydi chunki xotolik beradi buni ishatish qulayroq
// todo: const // bu o'zgaruvchi blok hisobanadi va bu o'zgaruchining qiymatini o'zgartirib bo'lmaydi.

// var a = 10;
// let b = 20;
// const c = a + b;

// console.log(`javobi ${c}`);

// Arithmetic operator

// + qo’shish
// - ayirish
// * ko’paytirish
// / bo’lish
// ^ daraja
// % qoldiqli bo’lish

// ? Unary operator

//    +M      musbat songa almashtiradi.
//    -M      manfiy songa almashtiradi.
//   ++M     o’zgaruvchini 1 ga oshiradi.
//   --M     o’zgaruvchini 1 ga kamaytiradi.
//   M++     o’zgaruvchini 1 ga oshiradi.
//   M--     o’zgaruvchini 1 ga kamaytiradi.

// ? 1-dars tugadi

// ? 2-dars

// ! Data types "data tayplar": asosan 2 turga bo'linadi "primetive" va "non-primetive" turlariga bo'linadi.

// ? primetive turiga {
// number
// string
// boolean
// null
// undefined
// symbol
// bigInt
// }

// ? non-primetive turiga {
// object
// }         // lar kiradi turlariga

// number
// console.log(typeof 10);

// string
// console.log(typeof "Muhammad");

// boolean     // bloolean turida true va false qiymatlarini qabul qiladi
// console.log(typeof true);

// null  // null sozining ma'nosi bo'sh degan ma'noni anglatadi
// let a = null
// console.log(a);

// undefined  // undefined bu dasturchi tomonidan o'zgaruvchi e'lon qilinganu lekin qiymat berilmasa chiqadi
// let a = undefined
// console.log(a);

// symbol  // Symbol noyob qiymat qaytaradi
// let a = Symbol()
// console.log(a);

// bigInt // bigint bu kop xonali sonlarni ham yozaoladi oxiriga "n" harfini qo'yish kerak
// let a = 1234567890123456789012345678901234567890n
// console.log(a);

// Object // bu qiymat va functionlarni bitta strukturada saqlovchi

// let person = {
//     name: "Muhammad",
//     lastname: "Nuraliyev",
//     age: 20,
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.lastname);

// arithmetic operator

// + qo'shish
// - ayirish
// * ko'paytirish
// / bo'lish
// ^ daraja
// % qoldiqli bo'lish

// Assignment operator
// =
// +=
// -=
// *=
// /=
// %=

// Comparison operator
// >
// >=
// <
// <=
// ==
// ===
// !=
// !==

// Logical operator
// && // false ni qidiradi
// || // true ni qidiradi
// ! // true ni falsega o'tkazadi va false ni truega o'tkazadi

// ?? // Nullish birlashtiruvchi operator
// ?: // Shartli (uchlik) operator
// ?. //Ixtiyoriy zanjirli operator

// Math object

// Math.abs() // absulut qiymatni qaytaradi
// Math.ceil() // qiymatni yuqori qismini qaytaradi
// Math.floor() // qiymatni pastga qismini qaytaradi
// Math.round() // qiymatni 4.5 bo'lsa yuqoriga qismini qaytaradi
// Math.max() // eng katta qiymatni qaytaradi
// Math.min() // eng kichik qiymatni qaytaradi
// Math.random() // masalan 1 dan 10 gacha qiymatni qaytaradi
// Math.pow() // qiymatni darajasini qaytaradi
// Math.sqrt() // qiymatning kvadratga oshiradi
// Math.cbrt() // qiymatning kubga oshiradi
// Math.sin() // sinus qiymatini qaytaradi
// Math.cos() // kosinus qiymatini qaytaradi
// Math.tan() // tg qiymatini qaytaradi
// Math.exp() // e darajasi qiymatini qaytaradi
// Math.log() // logarifm qiymatini qaytaradi

// random

// let a = parseInt(Math.random() * 10);
// console.log(a);

// ? 2-dars tugadi

// ? 3-dars

// if else

// let a = 10;
// if (a > 10) {
//     console.log("a 10 dan katta");
// } else {
//     console.log("a 10 dan kichik");
// }

// Falsy values

// false
// 0
// ""
// null
// undefined
// NaN

// Truthy values

// true
// 1
// "a"
// "0"
// [1, 2, 3]
// {}
// function(){}
// va qolgan barchasi

// let a = "olma";

// switch (a) {
//     case "olma":
//         console.log("olmaning narxi 10 000 so'm");
//         break;
//     case "banan":
//         console.log("bananning narxi 23 000 so'm");
//         break;
//     default:
//         console.log("bunday meva yo'q");
//         break;
// }

// ? 3-dars tugadi

// ? 4-dars

// for
// while
// do while

// for  // bu takrorlash uchun ishlatiladi

// let son = 0;
// for (let i = 0; i < 10; i++) {
//     son += i;
// }
// console.log(son);

// while // bu shartga to'g'ri kelsa bajaradi

// let son = 0;
// let i = 0;
// while (i < 10) {
//     son += i;
//     i++;
// }
// console.log(son);

// do while // bu shartni bajarishdan oldin bir aylanib oladi va keyin bajaradi

// let son = 0;
// let i = 0;
// do {
//     son += i;
//     i++;
// } while (i < 10);
// console.log(son);

// ? 4-dars tugadi

// ? 5-dars

// ! TAKRORLASH

// ? 5-dars tugadi

// ? 6-dars

// fuctionlar // funksiyalar 3 turga bo'linadi

// function declaration
// function expression
// arrow function

// function declaration

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 20));

// function expression

// let sum = function (a, b) {
//     return a + b;
// }
// console.log(sum(10, 20));

// arrow function

// let sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(10, 20));

// ? 6-dars tugadi

// ? 7-dars

//     array metodlari     //////////////////////////////////////////////////////////////////////

//TODO: push metodi arrayning ichidagi stringa oxiridan string qoshadi

// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);

// let fruits1 = ["apple", "banana"];
// let push2 = fruits1.push("orange")
// console.log(fruits1);

//TODO: pop metodi arrayni oxiridan element olib tashlaydi

// let fruits = ["apple", "banana", "orange"];
// let lastFruit = fruits.pop();
// console.log(lastFruit);
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(`olib tashlangan string "${fruits1.pop()}"`);
// console.log(fruits1);

//TODO: shift metodi arrayni boshidagi elementni olib tashlaydi

// let fruits = ["apple", "banana", "orange"];
// let firstFruit = fruits.shift();
// console.log(firstFruit);
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.shift());
// console.log(fruits1);

//TODO: unshift arrayni boshiga element qo'shadi

// let fruits = ["banana", "orange"];
// fruits.unshift("apple");
// console.log(fruits);

// let fruits1 = ["banana", "orange"];
// let unshift = fruits1.unshift("apple");
// console.log(fruits1);

//TODO: concat 2 yoki undan ortq arraylarn birlashtiradi

// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "broccoli"];
// let food = fruits.concat(vegetables);
// console.log(food);

// let fruits1 = ["apple", "banana"];
// console.log(fruits1.concat("carrot", "broccoli"));

//TODO: slice metodi arrayni kesib oladi masalan: "apple", "banana", "orange", "kiwi" slice 1 dan 3 gacha natija: "banana", "orange"

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits);
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange", "kiwi"];
// console.log(fruits1.slice(1, 3));

// TODO: splice metodi array elementini olib tashlab o'rniga yangi element qoshadi

// let fruits = ["apple", "banana", "orange"];
// fruits.splice(1, 1, "kiwi");
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(`olib tashlandi "${fruits1.splice(1, 1, "kiwi")}"`);
// console.log(fruits1);

// TODO: indexOf Arraydagi nechchanchi indexda turganini aniqlovchi

// let fruits = ["apple", "banana", "orange"];
// let index = fruits.indexOf("orange");
// console.log(index);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.indexOf("banana"));

// TODO: includes metodi arrayda element bor yoki yo'qligini bilish

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana"));
// console.log(fruits.includes("kiwi"));

// let fruits1 = ["apple", "banana", "orange"];
// let inc = fruits1.includes("banana")
// let inc1 = fruits1.includes("kiwi")
// console.log(inc);
// console.log(inc1);

// TODO: reverse bu so'zlarni teskari tartibda yozadi

// let fruits = ["apple", "banana", "orange"];
// fruits.reverse();
// console.log(fruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.reverse());

// TODO: join array elementini string sifatida birlashtiradi

// let fruits = ["apple", "banana", "orange"];
// let joinedFruits = fruits.join(", ");
// console.log(joinedFruits);

// let fruits1 = ["apple", "banana", "orange"];
// console.log(fruits1.join(", "));

// TODO: map array ustidan funksiya yozib uni yangi arrayga qaytaradi

// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

// let numbers1 = [1, 2, 3];
// let doublet = numbers1.map(num => num > 0);
// console.log(doublet);

// TODO: filter array element shartga mos bo'lsa qiymat qaytaradi

// let numbers = [1, 2, 3, 4];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// let numbers1 = [2, 3, 6, 1];
// let evenNumbers1 = numbers1.filter((num) => {
//   if (num % 2 === 0) {
//     console.log(`"${num}" juft son`);
//     return true;
//   } else {
//     console.log(`"${num}" toq son`);
//     return false;
//   }
// });

// TODO: reduce array elementlarini yagona qiymatga qisqartiradi

// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// let numbers1 = [2];
// let sum1 = numbers1.reduce((total, num) => {
//     if (num % 2 === 0) {
//         console.log(`${num} juft son`);
//     } else {
//         console.log(`${num} toq son`);
//     }
//     return total + num;
// }, 0);

// TODO:  forEach Arrayning har bir elementi uchun funksiya bajaradi hech qanday qiymat qaytarmaydi

// let fruits = ["apple", "banana", "orange"];
// fruits.forEach(fruit => console.log(fruit));

// let fruits1 = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits1.length; i++) {
//     console.log(fruits1[i]);
// }

// TODO: find  Shartga mos keluvchi birinchi elementni qaytaradi

// let numbers = [1, 2, 3, 4];
// let firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven);

// let ages = [12, 17, 19, 21, 15];
// let firstAdult = ages.find(age => age >= 18);
// console.log(firstAdult);

// TODO: sort Array elementlarini tartiblaydi

// let fruits = ["banana", "apple", "orange"];
// fruits.sort();
// console.log(fruits);

// let numbers = [5, 3, 8, 1, 4];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// TODO: every Arrayning har bir elementi shartga mos keladimi-yo'qligini tekshiradi

// let numbers = [2, 4, 6];
// let allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);

// let numbers1 = [1, 5, 3, 8];
// let allPositive = numbers.every(num => num > 0);
// console.log(allPositive);

// TODO: some Arraydagi hech bo'lmaganda bir element shartga mos keladimi-yo'qligini tekshiradi

// let numbers = [1, 2, 3, 4];
// let someEven = numbers.some(num => num % 2 === 0);
// console.log(someEven);

// let numbers1 = [-5, -3, 0, 4];
// let hasPositive = numbers.some(num => num > 0);
// console.log(hasPositive);

// TODO: findIndex Shartga mos keluvchi birinchi elementning indeksini qaytaradi

// let numbers = [1, 2, 3, 4];
// let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
// console.log(firstEvenIndex);

// let numbers1 = [-5, -3, 0, 4, 2];
// let firstPositiveIndex = numbers.findIndex(num => num > 0);
// console.log(firstPositiveIndex);

// TODO: length

// let a=[1, "salom", true]
// console.log(a.length);

// ? 7-dars tugadi

// ? 8-dars

//    string metodlari      ////////////////////////////////////////////

let str = "Salom";

// console.log(str.length);    // so'z necha qator ekanini aniqlaydi
// console.log(str.length);

// console.log(str.charAt(0));    // index raqamdagi harfni aniqlovchi charAt
// console.log(str.charAt(2));

// console.log(str.charCodeAt(0));    // unicod raqamini aniqlovchi
// console.log(str.charCodeAt(3));

// console.log(str.concat(` Muhammad, yaxshimisiz`));  // 2 ta yoki xohlagancha so'zlarni bir biriga qo'shadi
// console.log(str.concat(` Ustoz`));

// console.log(str.startsWith("Sa"), str.endsWith("lom"));   //so'zlarnin boshlanishi va tugashida qatnashgan sonlarni true yoki false borligini aniqlaydi
// console.log(str.startsWith("Sa"), str.endsWith("lom"));

// console.log(str.includes("m"));    // so'zda qatnashgan harf borligini aniqlovchi misol: salom qidirlyapti: m javob: true
// console.log(str.includes("S"));

// console.log(str.indexOf("m"));    //   harflarning indexni ya'ni uning tartib raqamini aniqlovchi harflarni chapdan qidiradi
// console.log(str.indexOf("S"));

// console.log(str.lastIndexOf("m")); //  bu ham indexOfga o'xshaydi lekin harflarni o'ngdan qidiradi
// console.log(str.lastIndexOf("S"));

// console.log(str.padEnd(11, "*"));  //   bu metod necha qatorni belgilasa o'sha qatorga yetmay qolgan soz yoki sonning o'rniga biror narsa qo'yadi
// console.log(str.padEnd(11, " -"));

// console.log(str.padStart(10, "*"));   // bu esa qatorning boshidan narsa qo'yadi
// console.log(str.padStart(10, " -"));

// let joy = str + " ";
// console.log(joy.repeat(3));    // bu metod bitta so'zni men kiritgan son bo'yicha takrorlaydi
// console.log(joy.repeat(2));

// console.log(str.replace(" ", ",")); //  bu metod orqali 2 ta sozning orasidagi bosh joy orniga xohlagan belgi qoysa boladi birinchi bosh string bu bosh joy 2-nima qo'yilishi
// console.log(str.replace(" ", ","));

// let str2 = "muhammad qanday qilib vazifani qilding"
// console.log(str2.replaceAll("qanday", "nima"));           // bu metod orqali biror so'zning o'rniga boshqa soz qo'yadi
// console.log(str2.replaceAll("qilding", "bajarding"));

// console.log(str.slice(0, str.length-2));     // bu metod matnni kopy qiladi indexi bo'ylab misol: salom matn  slice 0 dan 2 gacha natija: sal | bu yerda length oxiridan qirqadi
// console.log(str.slice(0, str.length-1));

// console.log(str.split(" "));    // bu metod sozlarni alohida arraylarga bolib beradi
// console.log(str.split(" "));

// let letter = str.at(2);  //bu ham index harfini olib beradi
// console.log(letter);

// let text1 = "      Hello World!      ";  // bu sozning 2 yonidagi bosh joylarni yoqoadi
// let text2 = text1.trim();    // va trimstart va trimend boshidagi va oxiridagi bo'shliqlarni olib beradi
// console.log(text2);

// ? 8-dars tugadi

// ? 9-dars

// Object

// Creating

// let person = {
//     name: "Muhammad",
//     lastname: "Nuraliyev",
//     age: 18,
//     isMarried: false,
//     address: {
//         country: "Uzbekistan",
//         city: "Tashkent",
//     },
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.address);
// console.log(person.address.country);
// console.log(person.address.city);

// deleting

// let person = {
//     name: "Muhammad",
//     lastname: "Nuraliyev",
//     age: 18,
//     isMarried: false,
//     address: {
//         country: "Uzbekistan",
//         city: "Tashkent",
//     },
// };
// delete person.age;
// console.log(person);

// ? 9-dars tugadi

// ? 10-dars

// factory function  yangi object yaratuvchi

// function createUser(name, age) {
//     return {
//         name: name,
//         age: age,
//         sayHello: function() {
//             console.log(`Salom, mening ismim ${this.name} va men ${this.age} yoshdaman.`);
//         }
//     };
// }

// const user1 = createUser("muhammad", 16);
// const user2 = createUser("Lazizbek", 16);

// user1.sayHello(); 
// user2.sayHello();

// A callback function bu function ichida parametr sifatida chaqiriladi

// function greetUser(name, callback) {
//     console.log(`Salom, ${name}!`);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Xayr, siz bilan ko'rishganimizdan xursand bo'ldik!");
// }
// greetUser("Muhammad", sayGoodbye);

// high order function

// function greet(name) {
//     return `Salom, ${name}!`;
// }

// function welcome(greetingFunction, userName) {
//     console.log(greetingFunction(userName));
// }

// welcome(greet, "Ali"); 

// ? 10-dars tugadi

// ? 11-dars

// Pure functions

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));
// console.log(add(2, 3));

// Impure functions

// let total = 0;

// function addToTotal(amount) {
//     total += amount;
//     return total;
// }

// console.log(addToTotal(5));
// console.log(addToTotal(10));
// console.log(addToTotal(3));

// ? 11-dars tugadi

// ? 12-dars

// ! TAKRORLASH 

// ? 12-dars tugadi

// ? 13-dars

// shallow copy

// let person = {
//     name: "Muhammad",
//     lastname: "Nuraliyev",
//     age: 18,
//     isMarried: false,
//     address: {
//         country: "Uzbekistan",
//         city: "Tashkent",
//     },
// };

// let person2 = person;
// person2.name = "Lazizbek";
// console.log(person);
// console.log(person2);

// deep copy

// let person = {
//     name: "Muhammad",
//     lastname: "Nuraliyev",
//     age: 18,
//     isMarried: false,
//     address: {
//         country: "Uzbekistan",
//         city: "Tashkent",
//     },
// };

// let person2 = JSON.parse(JSON.stringify(person));
// person2.name = "Lazizbek";
// console.log(person);
// console.log(person2);

// ? 13-dars tugadi