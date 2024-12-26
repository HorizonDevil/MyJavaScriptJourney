const score = 400
console.log(score)
//here javascript automatically identified that the type is string

// now if we want to explicitly define that i specifically want the datatype to be number
const balance = new Number(100)
console.log(balance);

//if we want to the data type of a number to a string data type then we use tostring functiom
console.log(balance.toString());
// suppose we are using decimal value where the number after decimal is way to long
// so in that case we can use the function toFixed to return the number of spots after decimal
console.log(balance.toFixed(2));

// now if we want a preciese value we have to use topercision function

const anotherNumber = 123.8875
console.log(anotherNumber.toPrecision(2));
// we need to keep in mind that the priority will allways stay o the number which is before the decimal point
// suppose we are dealing with too many 0's in a number so add ,'s in between 0's we use the function toLocalString function

const hundreds = 100000000
console.log(hundreds.toLocaleString());

//but the output that we will get will be on the USA standards but to convert it in 
//in Indian standards we put 'en-IN' inside the brackets to the function toStringLocale

//++++++++++++++++++ maths ++++++++++++++++++++++=
console.log('---------------------maths------------------------')

//suppose we want to convert all the negative values to positive values then .abs function

console.log(Math.abs(-4));

//to round of the values we use round function which is there inside maths library


console.log(Math.round(4.5));
// suppose we have to use specifically the ubberBound or lower bound we have to use ceil() or floor()

console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

// for min or max values

console.log(Math.min(4,34,553,54,56));
console.log(Math.max(4,34,553,54));

//if we want ot get any random values we use the function math.random
console.log(Math.random());


