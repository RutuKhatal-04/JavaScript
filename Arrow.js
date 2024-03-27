//Arrow fucntions also known as fat arrow function , are a concise and shorter way to define
//functions in Js.They are introduced in ECMAScript 6(ES6) and provide a more compact syntax
//compared to traditional fucntions expressions.

function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("abc"));

// Function using arrow function

greet = (name) => {
  return `HELLO ${name}`;
};
console.log(greet("abc"));
// If i have only one parameter then we can remove the paranthesis of parameter of(name)
// But if ur fucn is not taking any parameter then also keep empty paranthesis () after = symbol

const double = (number) => number * 2;
console.log(double(10));
