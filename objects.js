const person1 = {};
console.log(person1); //{}
const person = {
  name: "aditi",
  age: 18,
  location: ["nashik", "maharashtra", "India", 422101], //this is storing in the arrays for
  isGirl: true,
  10: "ten",
};
console.log(person);
//output
// {
//   name: 'aditi',
//   age: 18,
//   location: [ 'nashik', 'maharashtra', 'India', 422101 ],
//   isGirl: true
// }
const arr = [];
console.log(typeof person); //output : object
console.log(typeof person1); //output : object
console.log(typeof arr); //here for array also it shows the type as object
//THEREFORE the type of array is object

//Accessing the Items of the objects
console.log(person.name); //output : aditi
console.log(person.age); //output : 18
console.log(person1.name); //output : undefined

//Diff way of accessing the values
//Now if we remove . and use square brackets to access

// console.log(person[name]); //It give error bcz here compiler tries to find the value of variable firstname
//like let firstname="abc"; like this so to access for the objects labels

console.log(person["name"]); //this gives output of : aditi
console.log(person["10"]);
// if label is numeric then use square brackets only

person.lastname = "Khatal"; //we can add new element to the object outside thee object and also can update the values outside curly braces
console.log(person);

//TO DELETE THE ELEMENT IN THE OBJECT
delete person.lastname;
console.log(person); //everything is displayed except the lastname
