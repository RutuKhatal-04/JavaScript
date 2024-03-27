//for_of loop

//for(variable of iterable)
{
}

let peoples = ["huxn", "aditi", "rutu", "abc"];
for (let pp of peoples) {
  console.log(pp);
}
//output
// huxn
// aditi
// rutu
// abc

const text = "Hello Everyone";
for (let i of text) {
  console.log(i);
}
//H
// e
// l
// l
// o

// E
// v
// e
// r
// y
// o
// n
// e

//When we call the forEach helper we pass in anonymous callback function
//This fucntion gets called one time for every elements in the array
//Whatever is inside the fucntion that logic happens

const colors = ["teal", "blue", "red", "green"];
colors.forEach((color) => console.log(color));
// output
// teal;
// blue;
// red;
// green;
// for (var i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});
console.log(words);

// output[("Hello", "Bird", "Table", "Football", "Pipe", "Code")];
