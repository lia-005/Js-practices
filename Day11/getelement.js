let a=document.getElementsByClassName("box")//getting the acess of the element throught it's class name 
console.log(a)
console.log(document.getElementById("con3"))//getting the acess of the element throught it's id name
document.getElementById("con3").style.fontSize="40px"//changing font size means can change style through classes pf boxes
document.getElementById("con3").style.backgroundColor="purple"
document.querySelector(".innerbox").style.backgroundColor="green"//queryselector is a css selector element(. Through .querySelector() selects 1sr element or thst one element of class

let innerBoxes = document.getElementsByClassName("innerbox");//giving style to same classes by using for loop
for (let i = 1; i < innerBoxes.length; i++) {
    innerBoxes[i].style.backgroundColor = "red";
}

//by index number if u wanna give a perticular class css style
document.getElementsByClassName("box")[2].style.backgroundColor = "orange";


//through querySelectorAll("")***********************

document.querySelectorAll(".box").forEach(box => {
    box.style.color="rgb(51, 153, 151) "
});
console.log(document.getElementsByTagName("h2"))//here u can acess the elements throush html tag name


// ===== Example: element.matches() =====
// Checks if an element matches a given CSS selector
let inner2 = document.getElementById("in2");
console.log("Does #in2 match .innerbox? ", inner2.matches(".innerbox"));  // true
console.log("Does #in2 match .box? ", inner2.matches(".box"));            // false


// ===== Example: element.closest() =====
// Finds the nearest ancestor (or self) that matches a selector
let para = document.querySelector("#in2 p");
console.log("Closest .innerbox for <p> inside #in2: ", para.closest(".innerbox")); 
console.log("Closest .box for <p> inside #in2: ", para.closest(".box")); 


// ===== Example: element.contains() =====
// Checks if an element contains another node
let con4 = document.getElementById("con4");
let in3 = document.getElementById("in3");

console.log("Does #con4 contain #in3? ", con4.contains(in3));  // true
console.log("Does #in3 contain #con4? ", in3.contains(con4));  // false

//to see the html,text elements in the selected tag
console.log(document.querySelector(".box").innerHTML)//for one class
//text
console.log(document.querySelector(".box").innerText)






//for all box classes innerhtml
document.querySelectorAll(".box").forEach(box =>
{
    console.log(box.innerHTML)
}

)
//text
document.querySelectorAll(".box").forEach(box =>
{
    console.log(box.innerText)
}

)