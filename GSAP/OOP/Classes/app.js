//Classess are one of the features introduced in the ES6 version of js .
//A class is a blueprint for the object. You can create an object from the class.
//You can think of the class as a sketch (prototype) of a house. It contains all the ddetails about the floors, dooors,windows etc . based on these description ,you build the house

//Since many houses can be made from the same description , we can create many objects from a class

//Class Declaration

class Person {
  constructor(firstName, lastName, age) {
    //Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUser = function () {
      return `Name : ${this.firstName} ${this.lastName} Age: ${this.age}`;
    };
  }

  //Prototype Members
  greet() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

//Create a instance of the class

const Jhon = new Person("ABC", "DFG", 12);
console.log(Jhon.printUser()); //Name : ABC DFG Age: 12
console.log(Jhon); //Person {firstName: 'ABC', lastName: 'DFG', age: 12, printUser: ƒ}
console.log(Jhon.greet()); //Hello there ABC DFG

class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age); //this just call the parent class constructor
    this.pl = pl;
    this.experience = experience;
    this.getInfo = function () {
      return `Hey ${this.firstName} ${this.pl} ${this.experience}`;
    };
  }
}

const prg = new Programmer("wer", "rty", 25, "ghj", "2yrs");
console.log(prg);
console.log(prg.getInfo());
console.log(prg.greet());
