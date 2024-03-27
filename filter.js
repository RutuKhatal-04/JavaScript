//The filter()method is a built-in array method in js that allows you to create a new array conatining elements that pass a certain condition . It provides a clean and concise way to filter out elements from an array based on a specified criteria.

const songs = [
  {
    name: "Lucky you",
    duration: 4.43,
  },
  {
    name: "Just like you",
    duration: 3.23,
  },
  {
    name: "The Search",
    duration: 5.6,
  },
  {
    name: "Old Town Road",
    duration: 1.43,
  },
  {
    name: "The Box",
    duration: 5.23,
  },
];

console.log(songs.filter((song) => song.duration > 3));
// output[
//   ({ name: "Lucky you", duration: 4.43 },
//   { name: "Just like you", duration: 3.23 },
//   { name: "The Search", duration: 5.6 },
//   { name: "The Box", duration: 5.23 })
// ];

// ----------------Example 2-----------------------------

const ages = [32, 65, 21, 54, 23];
function checkage(age) {
  return age > 35;
}
const res = ages.filter(checkage);
console.log(res);

// output[(65, 54)];
