// first of all we need to keep in mind that it doesnt really matter what we use
// like "" or '' javascript will take it as string 

const name = "abishek"
const repoCount = 2
console.log(name + " " + repoCount);

//but we should not use this because mordern day production doesnt preffer this 

// instead we will will use this

console.log(`hello my name is ${name} any my repo count is ${repoCount}`)

// use of `` is better because we can use it dynamically and readable as well

//another way of declaring string

const gameName = new String ('abhishek-jana')

console.log(typeof(gameName)); // shows the type
console.log(gameName);
console.log(gameName.toUpperCase()); // converts all the charaters to upper case
console.log(gameName.length);// returns the length means number of characters 
console.log(gameName.charAt(2)); // returns the character present in the particuler 
// index that we are passing inside the charAt function
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)

console.log(newString);
//keep in mind that the last value that we pass which is 4 doenn't include the means
// that means from 0th to 3th idexed character will be shown

const anotherString = gameName.slice(-7, 4);
// the interesting thing about this is it can accept negative values
console.log(anotherString);




