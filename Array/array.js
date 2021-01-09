const number = [1,2,3,4,5,6];
const number1 = new Array(1,2,3,4,5,"abhi");
const number2 = [1,2,3,4,"abhishek",5,6];
const mixed = [1,2,"abhi",null,undefined,{a:2, b:1}, new Date()];

console.log(number);
console.log(number1);
console.log(number2);

// Get single value
console.log(number[4]);
console.log(number1[4]);
console.log(number2[4]);

//Check type of 
console.log(typeof number);

//Array length
let val = number.length;
console.log(val);

let val1 = Array.isArray(number); //returns true if it is array;

//append element to array
number.push(5);
console.log(number);

//Find index of value
let val2 = number.indexOf(34);
console.log(val2);

//Add element in front
number.unshift(120); 

//Pop element from last
number.pop();

//Pop element from first
number.shift();

//Splice values
number.splice(1,1); 

//reverse the array
number.reverse();

//concat the array
let val3 = number.concat(number1);

//sort the array
val3.sort();
console.log(val3);

//reverse sort

val3 = number.sort(function(x,y){
    return y-x;
});

console.log(val3);

