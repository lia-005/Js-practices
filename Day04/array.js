let arr=[5,"lia",8,"dipa",36,7];

console.log("array=",arr);//fpr printing
console.log(arr.length, typeof arr);//for length, Typeof array is always object . 
//arrays are mutable 
console.log(arr[1]);//print index 1 element
arr[1]=30;//changing value of index 1.
console.log("array=",arr);//for printing after changing index 1
//console.log(arr.toString())//convert it into string



console.log(arr[1]);//print index 1 element after changing index 1
// Get the element of fruits using at():
let e = arr.at(2);

console.log(e)

console.log(delete arr[2])//delete index 2 element
console.log(arr.length)//but length  should be same
console.log(arr)//index 2 is emty now
console.log(arr[2])//wlwmwnt typ is undefined
let arra=[];//adding items in a empty array
arra[0]=50;
arra[1]=150;
arra[2]=560;
arra[3]=570;
arra[4]=750;

console.log(arra)
console.log(arr.join(" & "))//joint the array elements with & means replace the komas with &
console.log(arra.pop())//pop out last index element of array
console.log(arra.shift())//pop out first index element of array

console.log(arra.length)


arra.push("abcd",30)//adding element at last index of array 
console.log(arra.length)
console.log(arra)
arra.unshift("k",2)//adding element at first index of array 
console.log(arra)
let r=[2,4]
console.log(arr.concat(r,arra))//concat 2 arrays with arr
let b=[25,26,96,300,781,1]
console.log(b.sort())//[ 1, 25, 26, 300, 781, 96 ]
console.log(b.splice(1,3))//at 1 index we start add and after 1 indes 3 elements will be deleted
console.log(b)
console.log(b.splice(1,2,25,80,61,70))//at 1 index we start add and after 1 index 2 elements will be deleted also at 1 index the rest numbers will be added
console.log(b)
console.log(b.reverse()) 