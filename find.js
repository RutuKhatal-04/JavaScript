//The find() method is another built in array helper in js that allows you to find the first element in an array that matches a sspecific condition. It returns the value of the first elements that statisfies the given teasting function or undefined if no element is found

const peoples = [
  { name: "abc", age: 15 },
  { name: "bca", age: 45 },
  { name: "asd", age: 55 },
  { name: "dfg", age: 35 },
  { name: "hgd", age: 25 },
];
const res = peoples.find((person) => person.name === "abc");
console.log(res);
// output
// { name: 'abc', age: 15 }
