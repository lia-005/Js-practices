//DOM [DOcument Object Model] mapping the whole documnet inner object. 
//BOM [Browser Object Model]represents aditionsl object privided by browser . function alert,prompt,confirm, is the BOM example


console.log(document.body);// gives the full body part of html 
console.log(document.body.childNodes);// gives the child nodes  means the element under the tag .
// #text means the gap between two divs 
console.log(document.body.firstChild);// gives the fristchild under the tag
console.log(document.body.lastChild);// gives the lastchild under the tag
// #text part also include in index
console.log(document.body.childElementCount);// gives the no of child nodes  means the element under the tag .
console.log(document.body.childNodes[0]);// gives the 1st index child node  means the element under the tag .
console.log(document.body.childNodes[1]);// gives the 2nd index child node  means the element under the tag .
console.log(document.body.childNodes[3]);// gives the 3rd index child node  means the element under the tag . box 2

console.log(document.body.childNodes[3].childNodes);// it gives divs or elements under the box no 2
//same as all nodes and divisions
console.log(document.body.childNodes[3].childNodes[3]);//inner2
console.log(document.body.childNodes[3].childNodes[3].childNodes);//elements inner2(deep)
console.log(document.body.childNodes[1].nodeValue);
console.log(document.body.childNodes[1].nodeName);
console.log(document.body.childNodes[1].nodeType);
console.log(document.body.childNodes[7].style.color="red");
//elemet means any div or p etc 
console.log(document.body.childNodes[3].previousElementSibling);//provides the previous element sibiling of the box2
console.log(document.body.childNodes[3].nextElementSibling);//provides the next element sibiling of the box2
console.log(document.body.childNodes[3].nextSibling);//provides the next sibiling of the box2(it can be a element or text node)
console.log(document.body.childNodes[3].previousSibling);//provides the previous sibiling of the box2(it can be a element or text node)
console.log(document.body.childNodes[3].childNodes[3].parentElement);// provides the parent element means under which the inner 2 is allocated
console.log(document.body.childNodes[3].childNodes[3].firstElementChild);// provides the frist element under inner 2 
console.log(document.body.childNodes[3].childNodes[3].lastElementChild);// provides the last element under inner 2 

//------------table------------------
console.log(document.body.childNodes[13].tHead.innerText); 
console.log(document.body.childNodes[13].tHead.rows.length);  
console.log(document.body.childNodes[13].tBodies[0].rows[1].cells[0].innerText); 
console.log(document.body.childNodes[13].rows.length); 


//---------------------append------
//appendChild()

/*It is used to add a node (like an element) as the last child of another element.

You can only append one node at a time.

It does not accept text directly (only a node).*/
  let div = document.getElementById("container");
    let p = document.createElement("p");  // create a new <p> element
    p.textContent = "Hello, I am added using appendChild!";
    div.appendChild(p);  // add <p> inside div
    //it creat a element (para) and add it into container div

    //append()
    /*
    You can append multiple nodes or text at the same time.

Accepts both nodes (like <p>) and text.
    */
    let p1=document.createElement("h1")
    p1.textContent="heading"
    let s1=document.createElement("span")
    s1.textContent=" I am a span"
    div.append(p1,s1 ," I can also add extra text!!");