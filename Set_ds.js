//Set is a built in data structure introduced in (ES6) that represents a collection of unique values. Using arrays, set allows you to store only unique values , which means duplicates values are automatically removed. Each value can occur only once within a Set.

//Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific values

const initialvalues = [1, 2, 2, 2, 2, 2, 2, 2, 3];

const set = new Set(initialvalues);
console.log(set); //{1,2,2} duplaicates are not stored
set.add("apple");
set.add("apple");
set.add("@");
set.add("%");
console.log(set); //output Set(6) { 1, 2, 3, 'apple', '@', '%' }
console.log(set.has("@")); //true
console.log(set.has("&")); //false
set.delete("apple");
console.log(set); //outptuSet(5) { 1, 2, 3, '@', '%' }
set.clear(); //it gets empty

//Iteration

for (let item of set) {
  console.log(set);
}
