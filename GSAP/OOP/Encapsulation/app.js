//Encapsulation is the concept of binding data (properties) and methods (function) together within an object,allowing the object to control access to its internal data and behaviour . This helps to hide implementation details and expose only necessary interfaces to interact with the object.In js , you can achieve encapsulation by using clousers,symbols or naming conventions to stimulate private member and expose public interfaces.

function Counter() {
  let _count = 0; //private variable

  //Public methods that can access and modify the private variables

  this.increment = function () {
    _count++;
  };

  this.decrement = function () {
    _count--;
  };
  this.count = function () {
    return _count;
  };
}

const ans = new Counter();
console.log(ans.count()); //0
ans.increment();
ans.increment();
ans.increment();
console.log(ans.count()); //3
ans.decrement();
console.log(ans.count()); //2
console.log(Counter._count); //we will not be able to access (undefined)
