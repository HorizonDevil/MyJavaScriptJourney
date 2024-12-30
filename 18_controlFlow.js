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