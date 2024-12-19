let score = "22"
console.log(typeof score)

let changeNumber = Number(score)

console.log (typeof changeNumber);

//very basic operations , we are taking a string then changing the data type 
// but what we do the same operation with in valid input

let score1 = "22aa"
let changeNumber1 = Number(score1)
console.log(typeof changeNumber1);

//it will return the type number but here is the catch the input is not 22 it is 22aa we can clearly
// see it is a flow of javascript

//let us print the changeNumber1 and lets see what we get

console.log(changeNumber1);

//we are getting the output NaN (which is (not a number))
//NaN is a special type with the help of which we can check whether we are getting the real value or not
//we not to keep this thing in mind that if the value is Null then it is going to return 0
// and if the value is undefined then we will get NaN
// if the number is string then obviously we will get the value NaN
//if we use boolean value which may e true or false then in return we will get 0 or 1

let check = 33
let changeString = String(check)
console.log(changeString);
console.log(typeof changeString);

//we can clearly see number to string conversion

//***************************** Operatioms *********************************

let value = 3
let negValue = -value
console.log(negValue)

//so very basic operation we assigned a value and added - to it and extracted the new output which is -3

console.log(2+2); //addition
console.log(2-2); //substraction
console.log(2*2); //multiplication
console.log(2**2); // 2 res to the power 2
console.log(2/2); //divide
console.log(3%2); //Remainder

//***********Type Casting***************

console.log("2" + 2); // the output will be 22
console.log(2 + "1"); //the the output will be 21
console.log(1 + 2 + "2");// the output will be 32
console.log("1" + 2 + 2); // the output will 122 

// the reason behind this kind of output is if we follow MDN documantation we will see that
// when string will come first then operation is going to happen keepping string in mind but if 
// but if string is not in the beginning then numeric operation will happen first 
// first and second operation there is no scope of choosing the priority
// but in the third case we the th integer comes first so the first did the integer operation and then comcetination
// but for the forth case string comes first so it did the entire operation keeping string in mind

//*********************************************** */
//                  prefix & postfix

let a = 2
let b = a++
console.log(a,b);

// in this we used postfix so the output came a=3 , b= 2

let c = 2
let d = ++c
console.log(c,d);

// in this case we use prefix and the output is c= 3, 4=3
