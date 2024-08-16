// 'use strict'
// //NOTE use strict mode;
// age =5;
// console.log(age)

// function sum(a,a,b){
//     return a+b+a;
// }
// console.log(sum(1,2,3))

//NOTE type of console

console.error("this is an error");
console.warn('this is a warning');

//using console.time you can calculate thee time of any operation
console.time('timeStamp');
console.log('hello')
console.timeEnd('timeStamp');

//non primitive data types;
const fruits = ['mango', 'papaya', 'grapas', 'guvava', 'orange'];
console.log(fruits[0]);
console.log(fruits.length )

//NOTE PUSH METHOD
//REVIEW - ADD AN ELEMENT TO THE END OF THE ARRAY,
//REVIEW ALWAYS RETURNS THE LENGTH OF NEW ARRAY

const pushOutput = fruits.push('blueberry');

console.log(pushOutput);
console.log(fruits);


// NOTE POP METHODS:
//REVIEW - used to remove element from the last
//REVIEW ALWAYS return the popped or deleted element
//REVIEW - always mutates the original array
const output = fruits.pop();
console.log(output);
console.log(fruits);

//NOTE 3 USHIFTE METHOD
// REVIEW 
const unshiftoutput = fruits.unshift('pomengranate');
console.log(unshiftoutput);
console.log(fruits);

//NOTE SHIFT METHOD
// REVIEW - remove element from the start of the array
const shiftoutput = fruits.shift();
console.log(shiftoutput);
console.log(fruits);

//NOTE INCLUDES METHOD
//REVIEW - Check element is exists in an array of not always returns true or false;
const includesoutput = fruits.includes('mango');
console.log(includesoutput)