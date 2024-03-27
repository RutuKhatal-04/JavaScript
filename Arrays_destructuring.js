//Destructuring allows us to "unpack" values from data structure(arrays,objects) into separate distinct variables.

const foo = ["one", "tow", "three"];
console.log(foo[0]);

//Destructuring
// type [value]=datastructure
const [one] = foo;
const [two, three] = foo;
console.log(one);
console.log(two);
console.log(three);

///////////////////////// Example 2 //////////////////////////
const foo1 = ["one", "tow"];
const [green, red, blue, yellow] = foo1;
console.log(green); //one
console.log(red); //one
console.log(blue); //undefined
console.log(yellow); //undefined

//Adding default value to the array
let a, b;
[a = 5, b = 8] = [1];
console.log(a); //1
console.log(b); //8    value not given so it had taken default value
[a = 5, b = 8] = [];
console.log(a); //5

function f() {
  return [1, 2];
}
let c, d;
[c, d] = f();
console.log(c); //1
console.log(d); //2

function f1() {
  return [1, 2, 3];
}
const [h, , e] = f1();
console.log(h); //1
console.log(e); //3
//here wee are not destructuring the value of 2 here we had destructured the value of 1,3 andn assign the value to h,e

//Assigning the rest of an arrays to a variable

const [i, ...j] = ["one", "two", "three"];
console.log(j); //[ 'two', 'three' ]
