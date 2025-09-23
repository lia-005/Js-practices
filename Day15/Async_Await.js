/*function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(354);
            console.log("printted");
            
        }, 3000);
    })
}
console.log("task 1");
console.log("fetch data");
let data= getdata();
console.log(data);//in this case thecode after getdata() is complies first, and the promise status is pending cause its 3s delayed...
console.log("load data");
console.log("final op");*/

/* so due to this reason we used async and await  */
//the after code will be wait for the data to be loaded.
/* asyanc runs the function as it is it is running in background 
but the await funtion wait for load the async */
console.log("async_await");

async function getdata2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(354);
            console.log("loading done");
            
        }, 5000);
    })
}
 async function main() {
    console.log("task 1");
console.log("fetch data");
console.log("wait");

let data2=await  getdata2();
console.log(data2);
console.log("loaded data");
console.log("final op");


 }

main()