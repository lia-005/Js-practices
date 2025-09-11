const num = {
    b: Number(prompt("Enter a number: ")),
    c: Number(prompt("Enter a number: ")),//we need to convert this in to number other wise it taken as string

    sum: function() {
        let a = this.b + this.c;
        console.log("sum is =", a);
         alert("sum is = " + a);
    }
}

num.sum();
