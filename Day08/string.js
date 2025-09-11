let s="Dipannita"
console.log(s.endsWith("a"));
 // it checks if the string ends with a perticualr charecter if its true then it gives true otherwise false
console.log(s.startsWith("D"));
// it checks if the string starts with a perticualr charecter if its true then it gives true otherwise false
console.log( s.includes("i"));
// it checks if the string includes a perticular charecter
console.log( s.indexOf("n"));
//it gives a the index of a perticular element of an string
console.log(s.lastIndexOf("i"));
//gives lastindex of perticular element
console.log(s.slice(2));
//it gives the string from the perticular index to the end of the string
console.log(s.slice(3,5))
//it gives the string from the perticular index to the perticular index of the string
console.log(s.substring(2,5));
//it gives the string from the perticular index to the perticular index of the string but it does not allow negative indexing
console.log(s.replace("nnita","yan"));
//it replaces the perticular string with the new string
console.log(s.toUpperCase(s));
//it converts the string to upper case
console.log(s.toLowerCase(s));
//it converts the string to lower case
console.log(s.charAt(4))
//it gives the character at the perticular index
console.log(s.length);
//it gives the length of the string
console.log(s.split("i"));
//it splits the string into an array of strings using the specified separator
console.log(s[6]);
//it gives the character at the perticular index
//there will be also other methods like trim, concat, match, search, etc. I can use internet