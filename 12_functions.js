//How to write a function
function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");
}
sayMyName()

//here function is a keyword
//After completely writing a functon we if we just take its name somewhere that it will be its reference
//But if we take its name with its paranthesis "()" then it will be executed

function addTwoNumber(number1, number2){  //here Number1 and number2 is parameters
    const number3 = number1 + number2
    return number3  //we need to keep in mind that suppose that once we write return ... no code after that will be executed 
}
let num1 = 5
let num2 = 4
console.log("my added number is: ",addTwoNumber(num1,num2)); // here num1 and num2 is arguments


//another way of doing function
function loginUserMessage(userName){
return `${userName} just logged in`
}

console.log(loginUserMessage("abhishek"));

//when we dont pass anything as arguments then it shows undefined


//now if we want to check whether the anything passed as an argument or not 

function newLoggedIn(user11){
if(user11 === undefined){
    console.log("please pass the name");
    return
}
else{
    return`${user11} just joined`
}
}
console.log(newLoggedIn("abhishek"));

//suppose we want it to be undefined .. like user is noy giving anything atleast a default value should be there

function newLoggedInn(user111 = "newUser"){   //as we passed new user as a default value of parameter but if we actually pass somethinf as an argument then the default value will be over write and the actual value will be shown 
    if(user111 === undefined){
        console.log("please pass the name");
        return
    }
    else{
        return`${user111} just joined`
    }
    }
    console.log(newLoggedInn());