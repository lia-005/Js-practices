console.log("Hello javascrpt!!")
let l = 10;
console.log("The value of x is:", l);
console.warn("This is a warning!");
console.error("This is an error!");
console.clear(); // clears the terminal
console.table({name: "John", age: 30, city: "New York"});
console.time("Timer");

// Example code you want to measure
for (let i = 0; i < 1000000; i++) {}

// Stop and log the time taken
console.timeEnd("Timer");/*It measures real execution time between the start and end — not the computer clock time.

Useful for performance testing in JavaScript.

If the code waits for a network request, the time will include that waiting time.*/
console.log("I am ",l ,"Yrs old")
console.log("sneha is ",l+5 ,"Yrs old")
