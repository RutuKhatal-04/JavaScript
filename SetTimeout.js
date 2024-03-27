//setTimeOut
// setTimeout(function () {
//   console.log("This is function will be executed after 3 seconds");
// }, 3000);
// //after 3 sec we will se output

// -----------------------------------------------------------------------------------------

//setInterval

//Stop interval after 10 sec
const intervalId = setInterval(function () {
  console.log("This is fucntion is begin executed at the interval");
}, 1000);

setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 10000);
