//for loop 
let length=30;
for (let i = 0; i<length; i++) {
    console.log(i);   
}
//for in loop
data={name:"lia", place:"India",age:20}// it id an object which holds keys and their corrosponding elements. key is name and element is lia
for (const key in data) {
    
        const elemet = data[key];
        console.log(key,elemet);
        console.log(elemet);
        console.log(key);
        console.log(`${key} : ${elemet}`);
        console.log(key + " : " + elemet);
    }
//for of loop
for (const c of Dipannita) {
    console.log(c);//c means cahrecter of that string 
    
}
for (const i of 1523689454) {
    console.log(i); //i means digit of that number
}
//for each loop
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});

// Output:
// 2
// 4
// 6
// 8
// 10
