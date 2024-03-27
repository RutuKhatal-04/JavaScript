// 1) Constructor
// 2) Built -in Constructor
// 3)Object.create()
//Prototype   imp for interviews

//Constructor function in java script are regular function used with the new keyword to create and initialize objects with shared properties and methods . They act as blueprints for creating multiple instance of objects with the same structure and behaviour

// function CreatePerson(firstName, lastName, pl) {
//   this.firstName = firstName; //window
//   this.lastName = lastName;
//   this.pl = pl;
// }

// const john = new CreatePerson("abc", "adf", "java");
// console.log(john);

//NEW KEYWORD
//1.First create empty object {}
//2.Sets "this" to point to that object
//3.We can omit the return statement using "new" keyword

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.info = function () {
//     return `Hello ${this.title} ${this.author} ${this.year}`;
//   };
// }
// const lily = new Book("Maths1", "Justin", 1994);
// const lily2 = new Book("Science", "ABC", 2012);
// const bookRes1 = lily.info();
// console.log(lily);
// console.log(lily2);
// console.log(bookRes1);

//Built-in Constructor , also known as native constructor ,are standard constructor provided by js that allows you to create objects of various data types. These constructor are available globally and do not need to be explicitly defined . They provide a convenient way to create instance of primitive data types and built in objects.

//NUMBER
const num1 = new Number(10);
// here number is the built -in function and it takes 10 as the parameter
console.log(num1); //Number{10}
console.log(typeof num1); //object bcz it is the obj of the Number constructor
const num2 = 10;
console.log(num2); //10
console.log(typeof num2); //number bcz it is not an obj of anything it simply stores the number 10

//String
const str = new String("Aditi");
console.log(str); //String{Aditi}
console.log(typeof str); //object

//Boolean
const bool1 = new Boolean("true");
console.log(bool1); //true
console.log(typeof bool1); //object

//Array
const arr = new Array(1, 2, 3);
console.log(arr); // (3) [1,2,3]
console.log(typeof arr); //object

// *******************************  OBJECT CREATE   ******************************************
//The object.create() method creates a new object , using an existing object as the prototype of the newly created object

let person = {
  greet: function () {
    console.log(`hello ${this.firstName} ${this.lastName}`);
  },
};
const hello = Object.create(person);
hello.firstName = "ABC";
hello.lastName = "asd";
hello.greet(); //hello ABC asd
console.log(hello); //{firstName: 'ABC', lastName: 'asd'}

//Every js obj has a anonymous property called prototype
//Remember functions and arrays are also a object
//That prototype will be the parent of that object , prototype property is obj by itself , which have some special properties and methods

//Every obj is associated with another obj
// The obj is associated with [[Prototype]] Object
// -> which means  obj object will inherit all properties of Object.prototype || [[Prototype]]

//We can check the prototype of something in 3 ways :
// ---> obj._proto_
//---> obj.constructor.prototype
// ---> Object.getPrototypeOf(a)

const obj = {};
console.log(obj);
console.log(obj.__proto__.__proto__); //null
console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.info = function () {
    return `Hello ${this.title} ${this.author} ${this.year}`;
  };
}
const lily = new Book("Maths1", "Justin", 1994);
const lily2 = new Book("Science", "ABC", 2012);
const bookRes1 = lily.info();
console.log(lily.__proto__._proto_);
// console.log(lily);
// console.log(lily2);
// console.log(bookRes1);

// ******************Changing the built in method

Array.prototype.pop = function () {
  return "pop it up";
};
const arr1 = ["one", "two", "three"];
console.log(arr1.pop()); //here output for the pop function will be the statement that is return given in the changing function

// *******************************INHERITANCE OF BUILT IN METHOD ******************************

//Prototypal inheritance os a mechanism in js that allows object to inherit properties and methods from other objects . It is a funcdamental concept in the language and is based on the prototype model . In prototypal inheritance,objects can serve as prtotypes for other objects , forming a hierarchical chain of inheritance.

//In js every objects has an internal property called [[prototype]] (often referred to _proto_) , which points to its prototype objcets . when you access a property or method on as object , and that property or method is not found in the object itself , js looks for it in the objects prototype (and further up the prototype chain , if needed) unitl it finds the property or reaches the top of the prototype chain , which is usually the Object.prototype.

function Animal(name) {
  this.name = name;
}
Animal.prototype.sound = function () {
  return "Animal Sound";
};
const animal1 = new Animal("frog");
console.log(animal1); //here it also shows the sound

function dog(name, breed) {
  Animal.call(this, name);
  this.name = name;
  this.breed = breed;
}

//The Object.create() method creates a new object , using an existing object as the prototype of the newly created object

dog.prototype = Object.create(Animal.prototype);
const dog1 = new dog("Buddy", "Genus");
console.log(dog1); //here it doesnt shows the sound property
console.log(dog1.sound()); //Animal Sound
