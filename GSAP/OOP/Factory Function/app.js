//The factory function is a type of function that is used to create and return objects . It is a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword

// let name = {
//   firstName: "ABC",
//   lastName: "KJH",
//   fullname: function () {
//     console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
//   },
// };

function create(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    fullname: function () {
      console.log(`${this.firstName} ${this.lastName} ${this.pl}`);
    },
  };
}

const john = create("JOHN", "DOE", " Pyhton");
john.fullname();
