const user = {
    username: "abhishek",
    price: 999,
    welcomeMessage: function(){
       console.log(`${this.username} , wellcome to website`); //"this" basically reffers the current context
        
    }
}
user.welcomeMessage()
user.username = "abhishek jana"
user.welcomeMessage()

//so what is happenning here so after executing line number 9 it is showing abhisek then in line no. 10 im changing the value of the current context so in line no. 12 im getting abhishek jana
//if we just do console.log(this) out side the scope we will only get an empty object
//but if we just run it one the browzer then we will get window object becauce that is the most common object on the internet
function chai(){
    let username1 = "abhishek"
    console.log(this);
}
chai()

//but if we the the come thing inside the function we will get so many thing ...so from there we can get to know that this has got many properties that will explore slowly


/* function chai(){
    let username1 = "abhishek"
    console.log(this.username1);
}
chai() 
we wont be able to do this in function but it was possiable during the time of objects
*/

//+++++++++++++++++++++++Arrow function+++++++++++++++++++++++++++++=

//syntax of creating an arrow function
//basic arrow function looks like this () => {}
const addTwo = (num1,num2) => {                     // here we are keeping it inside variable
return num1 + num2
} 
console.log(addTwo(3,5));

//now we will be doing it using implecit return

const addTw0 = (num11,num22) => num11 + num22    
                         //or we can use paranthesis but by if we wanna use than it is mandatory to use return key word                            
//const addTw0 = (num11,num22) => (num11 + num22)
console.log(addTw0(3,5));

//now the question arises why the hell i m using paranthesis because if we wanna return an object than it is mandatory to wrap the object 

//const addTw0 = () => ({useName : "abhishek"})
//console.log(addTw0());
