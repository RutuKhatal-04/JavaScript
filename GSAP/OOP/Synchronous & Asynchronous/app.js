//Synchronous Javascript refers to the traditional way to executing js code , where  each operation is performed in a sequential and blocking manner. In other words each line of code is executed one after the other and the program will wait for each operation to finish before moving on to the next one . If an operation takes a long time to complete ,it can potentially slow down the entire application,making it less responsive.

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
const return1 = add(10, 20);
console.log(return1); //30
const return2 = multiply(return1, 5);
console.log(return2); //150

//Asynchronous Javascript allows certain operation to be executed independently from the main program flow, so they dont block the execution of other task . This is typically acheived using techniques like callbacks, promises,ans async/await , which allows developers to handle asynchronous operation more efficiently

console.log("Start");
setTimeout(() => {
  console.log("Inside settimeout", 2000);
});
console.log("end");
// this code is asynchronous bcz we are using callback function in the settimeout which make it asynchronous

//Callback is not always asynchronous

console.log("start");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((n) => console.log(n));
console.log("first");

// Example
// 1. At the middle of start and end do this
// 2.Create a fun name(getUserDataFromDB) which will take name and callback as Parameter
// 3. use setTimeout() & print "Getting user name" & then pass your name as an argument to callbackparamete
// this process should take 2 sec
// 4.Create a fun name(getUserHobbies) which will take name and callback as parameter
// 5 use settimeout() & print "getting users hobbies" & then pass your hobbies as an argument to callback parameter
// this process should take 2 sec

// 6. Execute getUserDataFromDB fun & pass your name for the first parameter and callback fun for the second arguments and this callback function should also take a(data) parameter
// 7. In that callback function log(data) to the console
// 8. Execute getUserHobbies fun and pass your data param and also pass another callback fun which will take hobby as parameter adn just log that parameter to the console,run the code and see the result

console.log("Start");
function getUserDataFromDB(name, callback) {
  setTimeout(() => {
    console.log("Getting user name");
    callback(name);
  }, 2000);
}
function getUserHobbies(name, callback) {
  setTimeout(() => {
    console.log("Getting user hobbies");
    callback(["Football", "Reading", "Singing"]);
  }, 2000);
}

getUserDataFromDB("SAKSHI", (data) => {
  console.log(data);
  getUserHobbies(data, (hobby) => {
    console.log(hobby);
  });
});

console.log("End");

//OUTPUT
// Getting user name
// app.js:59 SAKSHI
// app.js:53 Getting user hobbies
// app.js:61 Array(3)0: "Football"1: "Reading"2: "Singing"length: 3[[Prototype]]: Array(0)
