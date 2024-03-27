//Class Modifiers also known as access modifiers or visibility modifiers, are keywords in oop languages that define the visibility or accessibility of class member {fields,methods,adn nested classes} from other parts of the program . They control the level of encapsulation and help exforce encapsulation principles by restricting direct axxess to certain class meembers

//In js , class modifiers are used in the context of classes and objects although js does not have traditional access modifiers like some other object-oriented language (eg. Java) . However , you can achieve similar effects using different conventions and techniques.

function Myclass(publicField, privateField, protectedField) {
  //Public Field
  this.publicField = publicField;

  //private Field (clouser) to make private using clouser is just put '_' before the name .Just like below for privateField
  const _privateField = privateField;

  //Protected Field
  const _protectedField = protectedField;

  //Public method
  this.publicMethod = function () {
    return `Public field : ${this.publicField}`;
  };

  //private method
  function _privateMethod() {
    return `private field : ${this.privateField}`;
  }

  //protected method
  function _protectedMethod() {
    return `protected field : ${this.protectedField}`;
  }

  //Method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod();
  };
}

const myObject = new Myclass("public data", "private data", "protected data");
console.log(myObject.publicField); ///public data
console.log(myObject.privateField); //undefined
console.log(myObject.protectedField); //undefined
console.log(myObject.publicMethod()); //public field : public data
console.log(myObject._privateMethod()); //u can not use this function outside the classs
console.log(myObject._protectedMethod()); //u can not use this function outside the classs

console.log(myObject.accessProtectedMethod());
