//Immediately Invoked Function Expression (IIFE)
//what is the use of an immediately invoked function expression 
//sometimes our function in the globle scope gets poluted but there is some important part of code where we dont realy want face any access difficulty
//there we use IIFE immediately invoked function expression

(function chai(){
    console.log("db connected");
})();
//while working with the immediately invoked functional expression sometime the function fails to recognise when to stop the function
//so for that case we always puts a semi collan (;) at the end of it
(() => {
    console.log(`DB connected`);
})();

//suppose we want to pass a variable inside that function what ami i suppose to do
((name) => {
    console.log(`DB connected ${name}`);
})("abhishek")