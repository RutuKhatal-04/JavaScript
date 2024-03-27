//Abstraction is the process of simplifying complex system by breaking them down into smaller, manageable parts it allows you to focus on the essential features of an object and hide unnecessary details . In js , you can use abstract classes to define abstarct structures and then implement them in concrete objects

//Abstract class (providing a blueprint for subclassses)

class Animal {
  constructor(name) {
    this.name = name;
  }
  //Abstract method (to be implemented by subclass)
  makeSound() {
    throw new Error("Method (makeSound) must be implemented");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  //Implementing the abstract method

  makeSound() {
    return "Woff!";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Meow!";
  }
}

const dog = new Dog("buddy");
console.log(dog.name); //buddy
console.log(dog.makeSound()); //woff!

const cat = new Cat("Kio");
console.log(cat.name); //Kio
console.log(cat.makeSound()); //meow!

// In this example we have an abstract classs Animal and it conatins the abstract method makeSound(). The makeSound() method in the Animal class but doesn't provide an implementation . It's meant to be implemented bu subclasses like Dog and Cat.

// The dog and cat classes are concrete subclass that inherit from the Animal class. They implement that abstract method makeSound() with their own spcific implementation for making sounds.

//By using abstracttion , we define a common interface (makeSound()) that each subclass must implement , while hiding the internal details of how each animal makes its sound . This simplifies the code and allows us to work with animals at a higher level of abstraction , without worrying about the specifies of each animals sound implementation.
