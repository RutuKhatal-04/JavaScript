const person = {
  name: "Abc",
  age: 20,
  email: "abc@gmail.com",
  isSubscribed: true,
  hobbies: ["Reading", "Writing", "Singing"],
  address: {
    city: "new york",
    idk: true,
  },
};

//JSON.stringify()

console.log(JSON.stringify(person)); //stringify converts to json format
console.log(JSON.parse(JSON.stringify(person))); //again reconvert from json to js object and return js objects
/////////////OR///////////////////////
const jsonString = JSON.stringify(person);
console.log(jsonString);
const parsedobj = JSON.parse(jsonString);
console.log(parsedobj);
