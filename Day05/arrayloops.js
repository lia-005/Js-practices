let a=[25,8,"l",90,"u"];
//for loop
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element+1)//getting the all elments of array with adding +1 using for loop
}

//foreach loop
//here whit u wrote firts is ur index thn elemet then array 
a.forEach((element,i,k,s) => {
    s=element+2
    console.log("index=",i,"items=",element,"array=",k,"adding +2 with each elemet=",s)
});


//for in loop
const object={
    k:20,
    p:60,
    o:90,
    m:23
}
for (const i in object) {// here i is the key of object and elemet is the perticular key element
    if (Object.prototype.hasOwnProperty.call(object, i)) {
        const element = object[i];
     
            console.log("key=",i,":",element,"[object element]")
        
    }
}


//forof loop
for (const value of a) {
    console.log(value)
}//element printing in loop  