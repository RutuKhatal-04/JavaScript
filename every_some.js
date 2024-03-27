//The every() and some() are two built in array methods in js that allow you to check the elements of an array based on a given condition. Both methods take a callback function as an argument , which is applied to each element of the array.

//The every() method tests whether all elements in the array passs the condition specified by the provided callback fucntion. It returns true if the callback fucntion returns true for every elements, and flase if any elements fails the condition.

//The some() methods tests whether at leats one elements in the array passes the condition specified by the provided callback fucntion.It returns true if the callback function returns true for at least one element, and false if no element passess the condition.

//The reduce() method applies the reducer function to each element of an array , accumulating the results into a single values. It is often used to perform calculations or aggregations on array elements and simplify the array into a single version.

// reduce method doesnot execute the function for empty array

const peoples = ["abc", "asd", "fgh"];
const res = peoples.every((people) => people.length === 4);
const res1 = peoples.some((people) => people.length < 2);
console.log(res);
console.log(res1); //false
//false for 4 and true for 3

//example 2
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((p, c) => {
  console.log(`previous ${p}`);
  console.log(`current ${c}`);
  return p + c;
}, 0);
console.log(sum);

//example 3
const people = [
  {
    name: "abc",
    age: 19,
  },
  {
    name: "asd",
    age: 52,
  },
  {
    name: "fgh",
    age: 65,
  },
  {
    name: "rty",
    age: 32,
  },
];
const oldestAge = people.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge); //65 highest of all ages
