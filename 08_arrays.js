//arrays

const myArr = [0,1,2,3,4,5,6,7]
const myheros = ["saktiman","naagraaj","ninja_hatori"]
const myArr2 = new Array(1,2,3,4)

console.log(myheros[2]);
console.log(myArr);

//array is an object by nature. In javascript arrays are resizable and we can fit mixed data types 

//array methods
console.log("---------------------Array Methods---------------------");
myArr.push(6) // to add any further values in an array
console.log(myArr);
myArr.pop() // to delete the last element
myArr.unshift(9) // to add something in the very beginning of the array
myArr.shift() // to delete something from the beginning of the array
console.log(myArr.includes(9)); // to ask  whether the element is present or not
console.log(myArr.indexOf(9)); // to the index number of the element

const newArr = myArr.join() // it joins two arrays but converts them into string

// splice and slice
console.log(" A ", myArr);
const myN1 = myArr.slice(1,3)
console.log(" B ", myN1);
const myN2 = myArr.splice(1,3)
console.log(myN2);
console.log(" C ", myArr);

// the most important difference between Splice and slice is 
// slice returns the values which is present between the ranges that we pass but no change in the original array
// splice returns the values between the ranges but removes those values between the ranges from the main Array



