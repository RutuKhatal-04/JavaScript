//Templates String , also known as template literals ,are a features in javascript that allows
// you to create string with embedded expression s.They are denoted by backticks `` instead of
// single or double quotes.Templates strings provide a more flexible and concise way to construct
// strings, especially when they involve variables or expressions.

console.log("hello world");
console.log(
  "this is string \
sequence it show th result insame line "
);
console.log(`This is some
random text `);
// Due to this template string ` ` the way in which it is written in console.log it displays in the same way
console.log(`This is some

                                                  random text`);

//output

// hello world
// this is string sequence it show th result insame line
// This is some
// random text
// This is some

//                                                   random text

console.log(`${2 + 2}`);
