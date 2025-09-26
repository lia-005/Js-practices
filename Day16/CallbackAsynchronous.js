console.log("hello");
console.log("heyyy");
/*here the console does not print as order as the code is written
* cause the settimeout() is a asynchronous function so it will be run after a interval of time which is given
* so the code will be run next of th settimeout() synchronously*/
setTimeout(() => {
    console.log("It's settimsout");

}, 2000);

setTimeout(() => {
    console.log("It's settimsout 2");

}, 1000);

console.log("end");

/*
src = "address of the script file you want to load"

onload = "what to do after the script is fully downloaded"

callback = "a function you want to run after the script loads"
*/
const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);//but here we directly call the callback func so it will run at the same time when script is loaded
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

//the setTimeout() function also use callback function


//***************************** Nested callback function or DOM is difficult to manage an very complicated *********************/
doSomething(function(result1) {
    doSomethingElse(result1, function(result2) {
        doAnotherThing(result2, function(result3) {
            doOneMoreThing(result3, function(finalResult) {
                console.log(finalResult);
            });
        });
    });
});
//to resolve this prblm we use promises