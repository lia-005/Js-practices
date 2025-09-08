let a="25"//it is string
let b=1+a
console.log(b);//it doesnot add 1 with 25 it attact a 1 before 25 cause it is a string
let c=Number(a)//it converts string to number
let d=parseFloat(a)+1//it converts string to float and adds 1
console.log(c);
let e=Number(Math.PI)
console.log(d);//it adds 1 to 25.0
console.log(e);//it converts pi to number
let h=parseInt(a)+1//it converts string to integer and adds 1
console.log(typeof e);//it adds 1 to 25
/* there also exists a function called toString() which converts number to string
and many more function and conversion data types we have to check in internet .*/
let p="23kl9"
 let q=parseInt(p)//it converts string to integer and ignores the rest of the string
 console.log(q);
 let r=Number(p)
    console.log(r);//it converts string to number and gives NaN(not a number) because it cannot convert the string to number
    /*if a=null then it will return 0
    if a=undefined then it will return NaN
    if a=true then it will return 1
    if a=false then it will return 0
    if a=Infinity then it will return Infinity*/
    let aa=1;
    let ab=Boolean(aa);//it converts number to boolean
    console.log(ab);//it returns true because 1 is truthy value
    /*if a=0 then it will return false
    if a="" then it will return false
    if a=null then it will return false
    if a=undefined then it will return 
    if a="ababa" then it will return true
    if a="0" then it will return true
    if a=" " then it will return true
    if a="false" then it will return true
    if a=464684(any number it also return true)*/
