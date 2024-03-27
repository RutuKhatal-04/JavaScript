//Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass) . This enables code reuse and the creation of hierarchical relationships between classes. Tn js , inheritance can be achieved through prototype-bassed inheritacne (before ES6) or using ES6 classes(with the extends keyword)

//ES5 code
// function Animal(name) {
//   this.name = name;
// }
// //Method shared among all Animal instances

// Animal.prototype.makeSound = function () {
//   return "Uknown sound";
// };

// //Subclass form animal

// function Dog(name) {
//   Animal.call(this, name); //call the super class constructor
// }

// //Set prototype chain for Dog t inherit from Animal
// Dog.protoype = Object.create(Animal.prototype);

// //Method specific to dog

// Dog.prototype.makeSound = function () {
//   return "Woff!";
// };

// //Creating Instances of the class

// const genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal.name); //Generic Animal
// console.log(genericAnimal.makeSound()); //Uknown sound

// const dog = new Dog("Buddy");
// console.log(dog); //Dog {name: 'Buddy'}
// console.log(dog.makeSound()); //woff!

// // but if we comment the method specific to class then
// console.log(dog.makeSound()); //this give unknown sound as ans

// -------------------- same code in ES6---------------------------------

//Superclass

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return "Unknown Sound";
  }
}

//Subclas inheriting from animal

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Woof!";
  }
}

const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.makeSound()); //Unknown Sound

const dog = new Dog("Budddy");
console.log(dog.makeSound()); //Woff!
