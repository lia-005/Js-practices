let a=[]
for (let index = 1; index < 10; index++) {
    a.push(index)
    
}
console.log(a)
//adding a elemets square into b element through map() function
let b= a.map((value,index)=>{
    return value**2
   ////here whit u wrote firts is ur index thn elemet then array 
   //u can return one element

}
)
console.log(b)

//filter function done  filter from array
const func= (value)=>{
    if (value>50) {
        return true
    }
    return false
}


console.log(b.filter(func))

//reduce(it do the function with one after one element of array)

const func1= (a,b)=>{
 
        return a*b
}
console.log(a.reduce(func1))
// if u wanna from  a array through a String
let k="Dipannita05"
console.log(Array.from(k))