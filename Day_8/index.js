window.myDetails('abc','xyz');
console.log(window)

function myDetails(firtsname , lastname){
    console.log(`my name is ${firtsname} ${lastname}`) 
}


//Arrow fuction
const subs = (a,b) => b-a;

//NOTE -- MULTI LINE arrow function
const multiply = (a,b) => {
    return a*b;
}