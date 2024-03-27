// Scope in Java Script refers to the current context of Code, which determines the accessibility of
//  variable to javascript

// There are 2 types of scopes in javascript
// Global scope variable are those declared outside of a block
// local scope variable are those declared inside of a block
//METHOD IN OBECT AND METHOD IN JS
function greet() {
  return `Hello, my name is ${person.name} $ I m ${person.age} old`;
}
const person = {
  name: "ABC",
  age: 25,
  greet, //method in object
};
console.log(person.greet());

const person1 = {
  name: "ABC",
  age: 25,
  greet1: function () {
    return `Hello, my name is ${person1.name} $ I m ${person1.age} old`;
  }, //method in object
};
console.log(person1.greet1());
