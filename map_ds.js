//Map is a built in data structure introduced in(ES6) that allows you to store key value pair where both  the keys and values can be of any data type . It is similar to an object , but with a few key differences.

//Keys can be of any data type : unlike objects , where keys are limited to strings and symbols , Map allows you to use any data type as keys , ncluding numbers, booleans m objects  and even other Map instances

//Maintains insertion order : Map perserves the order of keyvalue pairs as they were inserted while objects key may not be guarenteed to be in a specific order.

//Iterations :Map provides built in methods for easy iterations over its elements

const map = new Map();
const keyone = "abc";
const keytwo = {};
const keythree = function () {};

map.set(keyone, "Values of key 1");
map.set(keytwo, "Values of key 2");
map.set(keythree, "Values of key 3");

console.log(map.keys());
console.log(map.values());
console.log(map);
console.log(map.delete(keytwo));
console.log(map);
console.log(map.size);

//Iteration in map

for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}

for (let [value] of map.values()) {
  console.log(`${key} -- ${value}`);
}
for (let [key] of map.keys()) {
  console.log(`${key} -- ${value}`);
}
