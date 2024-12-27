// there are differemt ways to create an object

// if we are creating objects as a constractor then it becomes a singleton otherwise literal

//singleton
// Object.create
//literals
//lets declare a symbol

const mySym = Symbol("key1")

const jsUser = {
    name: "abhishek" ,  //her name is the key and abhishek is the value
    age: 18 ,
    [mySym]: "myKey1" , //an intersting catch if i have to use symbol as a key we have to declare it inside Square brackets
    location : "Kolkata" ,
    email : "abhishekjana@gmail.com" ,
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

//there are 2 ways to access an object
console.log(jsUser.email);
console.log(jsUser["email"]);// make sure to use double inverted "" because in backend the keys in the object are automatically considered as string
console.log(jsUser[mySym]);

//We can change the values by usin = ... for example

jsUser.email = "abhishekjana.22@gmail.com"
console.log(jsUser.email);
// if we dont want our content to get changed we can freeze it
//Object.freeze(jsUser)
// this time if i wanna change anything but using = as shown before ... it wont show any error but it wll not change as well
jsUser.greeting = function(){  //here we are defining function inside an object
    console.log("hello abhishek");
}
jsUser.greeting2 = function(){
    console.log(`hello js users my name is ${this.name}`); // here we need to use "this" to acces any value of an object
}
console.log(jsUser.greeting2());


