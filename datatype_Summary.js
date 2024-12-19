//primitive data types
// sting, number,boolean, null , undefined, symbol, bigInt

//non - primitive data types
// array, object, function

// JavaScript is a dynamically typed language. Because data type will automatically assigned 
// at the time of compilation or code execution.

//basic fanda if Symbols

const id = Symbol('124')
const anotherId = Symbol('124')

console.log(id == anotherId);

// doesn't really matter if we pass the same value but the output that we will be getting is going to
// be different, and unique and the data type type that we will be getting is a symbol data type


//++++++++++++++++++++++++++++++++++

// primitive (stack) -----  Non-primitive (heap)

//when ever we use stack memory , we get the copy of the variable
//when ever we use heap memory , we get the reference of the original value

//lets take an example 
let myName= "abhishek"
let anotherName = myName
anotherName = "Ankusha"

console.log(anotherName);
console.log(myName);
//this thing will go inside the stack
//lets try and understand what is going on
// first we created a variable myName and passed the value then i created another variable
//anotherName and passed the reference of the first variable but we change the content of the second 
//variable but it doesn't mean that the value of the first variable will change because
//as we are using primitive data type so as refferend , during referencing in stack we get the copy of the 
// variable not the entire variable so the previous variable will remain as it is


//the take another example of another Non-Primitive data type

let userOne = {
    email: "abhishekjana@gmail.com",
    upi: "jana@ybl"
}
let userTwo = userOne

userTwo.upi = "ankusha@ybl"

console.log(userOne.upi);

//so as we are using a non primitive data type so it uses heap where we get the actual referencing of
// the variable so once we sets the reference of the first variable with the second variable
// then if we change the any content of the object then the content of the first object will as change 
