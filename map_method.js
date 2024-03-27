//The map() method creates a new array populated with the result of calling a provided fucntion on every element in the calling array

let numbers = [1, 2, 4, 5, 3];
let double = numbers.map((num) => num * 2);
console.log(double);
// output
// [2, 4, 8, 10, 6]; new array is created

console.log(numbers); //[1, 2, 4, 5, 3];  means it is not getting modified

// basic diff between forEach method and map method is that map method create the new array and add the new modified elements of previous array in it but the forEach method modifies the existing array .
