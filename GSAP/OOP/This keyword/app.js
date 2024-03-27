// ***************************EXPLAINATION *********************************************

// This keyword refers to object it belongs to.It has different values depending on where it is used
// In a method 'This' refers to the owner object.
// Alone it refers to the global object.
// Ina fucntion This refers to the global object

// This in method:
// fullName: function() {
//     return this.firstName + " " + this.lastName;

//     }

// Alone
// let x = this;

// This in function
//     inn function this refers to the global object (Window object)

// function myfunction() {

//     return this;
// }

// **********************************************************************************************

console.log(window); //window object
console.log(this); //window object
console.log(this === window); //true

// window.firstName = "ABC";
// this.lastName = "SDF";
// console.log(window); //here we will see firstName as the object windows
// so we can access  this anywhere in the program

// // for example
// function printThis() {
//   return this;
// }
// const res = printThis();
// console.log(res); //window obj

// const obj = {
//   firstName: "asd",
//   lastName: "jkl",
//   fullname: function () {
//     return this; //owner obj
//   },
// };
// const res = obj.fullname();
// console.log(res); //therefore this gives all parameters of obj

///or

// const obj = {
//   firstName: "asd",
//   lastName: "jkl",
//   fullname: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const res = obj.fullname();
// console.log(res); // asd jkl

//if we use arrow function and return  this keyword it gives windows obj as output
// const obj = {
//   firstName: "asd",
//   lastName: "jkl",
//   fullname: () => {
//     return this;//window obj
//   },
// };
// const res = obj.fullname();
// console.log(res);

// but if we return firstName and lastName then it give undefined for both
const obj = {
  firstName: "asd",
  lastName: "jkl",
  fullname: () => {
    return `${this.firstName}${this.lastName}`;
  },
};
const res = obj.fullname();
console.log(res); //undefined undefined

//Error function doesnt know about this keyword it serches for firstname and lastName directly in windows obj and it is not present there therfore it  gives output as undefined





