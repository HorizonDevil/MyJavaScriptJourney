function one(){
    const username = "abhishek"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    console.log(website);
    two()
}
one()
//we need to keep in mind about the scopping process and how javascript executes the code. 
//code is executed line by line in line no. 7 we are doing console log website , but website is declared under function 2 scoping. so it wont be able to find the error
//once we comment that line no. 7 then code will be execute line no. 8 and it will print the username because function is a globle scope for function two so what ever is declared inside function one will be accessiable to function two
// but function one wont be able to do anything because one is trying to access the variable which is declared inside function two(child can take ice cream from parents but parents cannot take access from child) so it will not show anything


//++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++

//here 
console.log(addone(5)); //here if we run the code then there will be no problem(keeping in mind we are calling the function before the declaration)
function addone(num){
    return num + 1
}

console.log(addTwo(5)); //here if we run the code then there problem will arise because we declared the function in a different way
const addTwo = function(num){
    return num + 2
}
