//Symbols is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object propertied to avoid potential naming confilicts.

//Unlike string or numbers , symbols are guarenteed to be unique . When you create a symbol , it is unique and cannot be recreated or changed. This uniqueness ensured that symbols will not collide with other property names, even if they have the same string representation.

const symbol = Symbol();

console.log(symbol); //Symbol()
console.log(typeof symbol); //symbol

const mysyb = Symbol("My custom symbol");
console.log(mysyb); //Symbol(My custom symbol)

//Comparing the symbol
console.log(symbol === mysyb); //false  value will always be different as symbols are unique
const mysymbol = Symbol("My custom symbol");
console.log(mysymbol === mysyb); //false

const obj = {};
obj[symbol] = "Value 1";
obj[mysymbol] = "Value 2";
console.log(obj); //{ [Symbol()]: 'Value 1', [Symbol(My custom symbol)]: 'Value 2' }

// Example
const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

const abc = {};
abc.age = 19;
abc["gender"] = "male";
abc["gender"] = "female";
abc[symbol1] = "asd";
abc[symbol2] = "khj";
console.log(abc);
//output
// {
//   age: 19,
//   gender: 'female',
//   [Symbol(name)]: 'asd',
//   [Symbol(name)]: 'khj'
// }
