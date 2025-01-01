const temp = 20

if(temp == 20){
    console.log("good");

}
else {
    console.log("not good");
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power is ${power}`);
}
const balance = 1000
if(balance > 500) console.log("less"),console.log(`more`); //shorthand notation

//else if satatement
const balance1 = 500
if(balance1 < 500){
    console.log(`less`);
}
else if(balance1 == 500){
    console.log(`equal`);
}
else{
    console.log("more");
}

//multiple condition in if else
const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = true

if(userLoggedIn && debitCard && loggedInFromGoogle){  //we need to keep in mind that we can use this "&&" only twice and the condition is both of the the conition must be true
    console.log("allowed for shopping");
}
else{
    console.log("not allowed for shopping");
};

{
    const loggedInFromGoogle = true
    const loggedInFromEmail = false
    if(loggedInFromGoogle || loggedInFromEmail){   //OR statement where if any of the condition is true then the code will run

        console.log(`login allowed`);
    }
    else{
        console.log(`not allowed`);
    }
}

//*********************Switch Case************************//

/*switch(){
    case value:
        break;
    default:
        break;
}*/

//syntex of switch case
//code to check which month is it
const month = 3
switch (month) {
    case 1:
        console.log(`january`);
        break;
    case 2:
        console.log(`february`);
        break;
    case 3:
        console.log(`march`);
        break;

    default:
        console.log(`please select right month`)
        break;
}
 
 


