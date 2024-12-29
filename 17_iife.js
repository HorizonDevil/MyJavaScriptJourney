//Immediately Invoked Function Expression (IIFE)
//what is the use of an immediately invoked function expression 
//sometimes our function in the globle scope gets poluted but there is some important part of code where we dont realy want face any access difficulty
//there we use IIFE immediately invoked function expression

(function chai(){
    console.log("db connected");
})();