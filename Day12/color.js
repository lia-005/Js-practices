// // let boxes= document.querySelector(".container").children;

// // let arr=Array.from(boxes);
// // function color(){
// //     let a=Math.ceil(Math.random()*255);
// //     let b=Math.ceil(Math.random()*255);
// // let c= Math.ceil(Math.random()*255);
// // return `rgb(${a},${b},${c})`
// // }
// // arr.forEach(element => {
// //     element.style.backgroundColor=color();
// //     element.style.color=color();
// // console.log(color())
// // });


//another method



let boxes= document.getElementsByClassName("box");

function color(){
     let a=Math.ceil(Math.random()*255);
     let b=Math.ceil(Math.random()*255);
 let c= Math.ceil(Math.random()*255);
 return `rgb(${a},${b},${c})`
 }
 for (let index = 0; index < boxes.length; index++) {
    const element = boxes[index];
     element.style.backgroundColor=color();
    element.style.color=color();
    console.log(color())
}