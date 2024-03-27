//PROMISES   & Async function
// A Promise is an object representing the eventual completion or failure of an asynchronous operation

// creation of promises
//new Promises()

// A JavaSrcipt  object contains both the producing code and calls to the consuming code. It can be used to deal with Asynchronous operation in JavaSrcipt.

// Promise have 3 States
// 1) Pending
// 2) Fulfilled / Resolved
// 3)Rejected

// a)Initial state, Not yet fulfilled or rejected
// b)Promise completed
// c)Promise Failed

// PROMISES---------> Resolved------> 1) .then()
//                                    2).finally()

// PROMISES--------> REJECTED-------> 1) .then()
//                                     2).catch()
//                                     3).finally()

// here this are methods which are used of that particular state .finally() is used in both resolved and rejected state

// SYNTAX OF Promise------> new Promise ((receive,reject)=>{})
// new Promise((receive, reject) => {
//     //Asynchronous Operations
//     resolve(value)
//     reject(error)
// })

// ******************************  METHODS   *****************************************

// 1) .then()
// .then() is method used to handle the successful outcome of a Promise in JavaScript . It takes 2 arguments:(onFulfilled,onRejected)

// 2) .catch ()
// The catch() method returns a Promise and deals with rejected case only

// ********************************EXAMPLE******************************************

// function checkNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number > 10) {
//       resolve("Number is greater than 10");
//     } else {
//       reject("Number is less than 10");
//     }
//   });
// }

// const number = 11;
// checkNumber(number)
//   .then((message) => {
//     console.log(`Success : ${message}`);
//   })
//   .catch((error) => {
//     console.log(`Error:${error}`);
//   });

// const number1 = 20;

//EXAMPLE 2
// function callbackHell(callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = "Inside (callbackHell) function";
//       console.log(data);
//       resolve(data); //Insetad of callback we are using resolve
//       callbackHell(data);
//     }, 2000);
//   });
// }

// function firstFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processData = `${data} - Processed data`;
//       console.log("Inside (firstFunc) function");
//       resolve(processData);
//     }, 2000);
//   });
// }

// function secondFunc(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const processedData = `${data} - Processed Data`;
//       resolve(processedData);
//     }, 1500);
//   });
// }

// callbackHell()
//   .then((data) => firstFunc(data))
//   .then((processData) => secondFunc(processData))
//   .then((processedData) =>
//     console.log(
//       `Final result of all fucntions with promises : ${processedData}`
//     )
//   )
//   .catch((error) => console.log(`Error : ${error}`));

// / Example
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
// Giving above  code solution using promises not using callback function

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies");
//       resolve(["football", "singing"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("Sakshi")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((error) => console.log(error));

// ****************************ASYNC FUNCTION********************************************
//Async is a special function that is designed to operate asynchronously meaning that it can perform task in background while other code continues to execute . Asyn function are marked with async keyword

//Async is a keyword use to turn function declaration to async function
//await   The await operator is used to wait for a Promise. It can only be used in Async function within regular js code

// function fetchDatafromServer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User data retrieved from the server.");
//     }, 4000);
//   });
// }
// async function getUserData() {
//   try {
//     const data = await fetchDatafromServer();
//     console.log(data);
//     console.log("Remaining task can be executed util data is retrieving");
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUserData();

//Doing that callbackHell code using async and await function

function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `Inside (callbackHell) function`;
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function Firstfunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processData = `${data} - processdata`;
      console.log("Inside (firstfun) function");
      resolve(processData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data}- processedata`;
      console.log("Inside (secondfun) function");
      resolve(processedData);
    }, 1500);
  });
}

async function processedDatawithAsyncandAwaits() {
  try {
    const data = await callbackHell();
    const processData = await Firstfunc(data);
    const processedData = await secondFunc(processData);
    console.log(`$Final result of asyn and await code is :${processedData}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
processedDatawithAsyncandAwaits();
