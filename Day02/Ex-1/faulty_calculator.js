let random = Math.random();
console.log(random)
let a=prompt("enter frist number: ")
let c=prompt("enter operator: ")
let b=prompt("enter second number: ")
const operators={
"+":"/",
"-":"+",
"*":"-",
"/":"**"
}
if (random>0.1) {
    console.log(`the result is ${a}${c}${b}`);
        alert(`result ${eval(`${a}${c}${b}`)}`)
} else {
    
    c=operators[c]
   alert(`result ${eval(`${a}${c}${b}`)}`)
 
}
