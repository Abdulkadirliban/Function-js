// function
function sum(a,b){
    return a+b;

}
console.log("sum is:"+sum(3,4));
//----another way
let add=function(a,b){
    return a+b;

}
console.log(`Add is: ${add(3,4)}`);

//----arrow function---
let multply=(a,b)=>a*b;
console.log("Arrow function:"+multply(5,5));
let subs=(a,b)=>a-b;
console.log(`subst is: ${10,4}`);

//------default parameter---
let mult=(a,b=2)=>a*b;
console.log(`def parameter of mult: ${mult(3,4)}`);
console.log(`def parameter of mult: ${mult(3)}`);
//------------Rest function---
console.log("------Rest function----");
function addition(... sum){
    let total=0;
    for(value of sum)
    total+=value;
    return total;

}
console.log(`sum one: ${addition(1,2)}`);
console.log(`sum two: ${addition(1,2,3)}`);
console.log(`sum three: ${addition(1,2,3,4)}`);