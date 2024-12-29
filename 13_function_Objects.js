// suppose we have a situation where number of parameters to the function is not known
// for example shopping chart where it is how many prodects is going to get added is not known
//We use rest or spread opreraytor (...)
function calculateCartprice(...num1){
return num1
}
console.log(calculateCartprice(12,122,122));

//Sometime developer use this kind of code
function calculateBagprice(val1,val2,...num2){
    return num2, val1
   }
    console.log(calculateBagprice(12,122,122,2222,3345));
    //what will be output in this case
    //12 will go to val1 , 122 will go to val2 and rest will go to ... which is num2
    //as we have returned only num2 so it will just prini 122,2222,3345

    const user ={
        userName: "abhishek",
        price: 123
    }
    function handleObject(anyobject){   //here i m writing any object because i want any object can access it not only just object user
        console.log(`his name is ${anyobject.userName} and the price is ${anyobject.price}`)
    }

handleObject(user) //but here we definately have to pass the object that we have to send
// instead i could have directly pass object
/*handleObject({
    userName : "abhishek",
    price : 123
})*/

//how to pass array into a fucntiom
const MynewArray = [100,200,300,400,500]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(MynewArray));

//instead of this we could have directly pass array
/* console.log(returnSecondValue([100,200,300,400,500]));

