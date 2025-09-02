// Create an Object
const p1 = {firstName:"ram", lastName:"das", age:50, eyeColor:"blue"};
console.log(p1.firstName , " is " , p1.age , " years old.")

// Create an Object .Spaces and line breaks are not important. An object literal can span multiple lines:
const p2 = {
  firstName: "sham",
  lastName: "lal",
  age: 60,
  eyeColor: "blue"
};
console.log(p2.firstName , " is " , p2.age , " years old.")


// Create an Object Create an empty JavaScript object and add 4 properties:

const p3 = {};

// Add Properties
p3.firstName = "mohan";
p3.lastName = "deep";
p3.age = 40;
p3.eyeColor = "blue";
console.log(p3.firstName , " is " , p3.age , " years old.")



const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function() {//greet is also a function name 
    console.log("Hello, my name is " + this.firstName);//In the example above, "this" refers to the person object:
  }
};

console.log(person.firstName); // Accessing a property using dot notation
person.greet(); // Calling a method
console.log(person["lastName"])//another way to acess a property of object
console.log(person["age"] + 5) // Accessing a property using bracket notation and performing operatinon