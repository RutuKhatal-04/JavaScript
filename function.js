function greet() {
  console.log("hello dear");
}
//call,run,execute
greet();

function sayHello(name) {
  //diff ways of writing
  console.log("Hello" + " " + name);
  console.log(`hello ${name}`);
  console.log(`hello ${(name = "Rasika")}`);
}
sayHello("samyukta");

function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
let res = add(100, 2000);
console.log(res);

sayHi("Nikita"); //If i write this before declaring the fucntion then also it will work perfectly.
//FUNCTION DECLARATION
function sayHi(username) {
  console.log(`Hello ${username}`);
}
sayHi("Nikita");

// greetings("John"); //But if i write this before writing fucntion then it will give error (cannot access greeting )
// Function Expression
const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("John");

//CALLBACK FUCNTION IN JS
// When we provide function as an argument to other function that function is known as callback function

function showCallfunc(fn) {
  const value = 10;
  fn(value);
}
showCallfunc(function (value) {
  console.log(value);
});
// function (value) {
//   console.log(value);
// } ----->  this is the callback function

// EXAMPLE OF CALLBACK FUNCTION

function greet1(name1, cb) {
  console.log(`Hello ${name1}`);
  cb();
}
function cb() {
  console.log("I m callbackfucn");
}
greet1("Akanksha", cb);
