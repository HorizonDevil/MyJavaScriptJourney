//scope is nothing but {} that we use every time
if(true){
let a = 20
var b = 30
const c = 30
}
console.log(a);
console.log(b);
console.log(c);

//what is it happening here so a and b will not show the output because it is declare using let and const and it is inside the block scope and we are trying to call it outside which is quite obvious but c will show the output which is declared using var and it might cause problem in prodction code
//that is the reason why it is avoided

//keep in mind that what ever is inside the block is block scope what ever outside is globle scope
