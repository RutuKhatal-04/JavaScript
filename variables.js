//Declared variables
let name;
//Assign value
let banana;
// banana = "banana";
// console.log(banana);
//if we dont specify the value of variable then in comsole it will be undefined
// keyword (let,const,var)

// let num = -4;
// console.log(typeof num);
// console.log(-1 + -3);
// console.log(3 % 3);
// console.log(3 ** 3);
// let counter = 0;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// counter++;
// let counter_neg = 10;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;
// counter_neg--;

// console.log(counter);
// console.log(counter_neg);

// let number = 10;
// console.log(number + undefined); //NAN (not a number) will be the output
// console(10 > 10); //false
// console(10 >= 10); //true

//Equality operators
// === strict equality (type+value)
//!== strict non-equality operators (type+value)
//= lose equality operator(value)
//!= not equality operator(value)

// console.log(10 === 10); //true
// console.log(10 === "10"); //false
// console.log(10 == "10"); //true

//String s

let fname = "Nunu";
let secondname = "                         Khatal                            ";
let fullname = fname + " " + secondname;
let ffname = fname.concat(" " + secondname);
console.log(fullname);
console.log(ffname);

//LENGTH

console.log(fname.length);
console.log(fname.toUpperCase());
console.log(fullname.toLowerCase());

//Slice

console.log(ffname.slice(1, 7));

//Split & JOIN
console.log(fname.split("")); //[ 'N', 'u', 'n', 'u' ]
console.log(fname.split().join("-")); //[ Nunu ]
// console.log(fname.join("")); //[ 'N', 'u', 'n', 'u' ]

//Includes
console.log(fname.includes("W")); //false

//TRIM
console.log(secondname.trim());

let fulname = `${fname} ${secondname}`;
console.log(fulname);

//conversion type

let money = "50";
console.log(typeof money);
money = parseInt(money);
money = parseFloat(money);

// money = money.toString();

console.log(money);
console.log(typeof money);
