//year,monthd,day,hours,minutes,seconds,miliseconds

// const currentDate = new Date(2024, 2, 25, 12, 30, 0, 0);
// console.log(currentDate);

const date = new Date();
const year = date.getFullYear();
const months = date.getMonth();
const day = date.getDay();
const hrs = date.getHours();
const min = date.getMinutes();
const mls = date.getMilliseconds();

console.log(`year : ${year}`);
console.log(`Months : ${months}`);
console.log(`Day : ${day}`);
console.log(`Hrs : ${hrs}`);
console.log(`Hrs : ${min}`);
console.log(`Hrs : ${mls}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
console.log(date);
date.setDate(date.getDate() - 1);
console.log(date);
