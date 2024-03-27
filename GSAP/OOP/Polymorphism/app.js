//Polymorphism allows objectt to be treated as instance of their parent class, even if they are instance of a subclass. This facilitates writing code that works with different types of objects in generic way . Injs , polymorphism is achieved through method overloading , where a subclass provides its own implementation of a method that is already defined in the parent class . The code can then use the same method to work with both parent and subclass instances.

///In js polymorphism is typically achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class.

//Super or parent class
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    return "Unknown Sound";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  //Overriding the method
  makeSound() {
    return "Woof";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "Meow";
  }
}

function animalInfo(animal) {
  console.log(`Name : ${animal.name} `);
  console.log(`Sound : ${animal.makeSound()} `);
}
const dog = new Dog("Husky");
animalInfo(dog); //Name :"Husky"
//Sound:Woff
