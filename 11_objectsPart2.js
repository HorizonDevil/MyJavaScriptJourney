//objects singleton(using constructor)
const tinderUser = new Object()
console.log(tinderUser);

const newTinderUser = {} //non singleton object
newTinderUser.id = "abc123"
newTinderUser.name = "abhishek"
newTinderUser.isLoggedIn = false

console.log(newTinderUser);

const regularUser = {  // So here we are doinf objects indide an object.. to access those objects inside an object we have to use "."
    fullname: {
        userFullName : {
            firstname : "abhishek",
            lastName : "Jana"
        }
    },
    id: 12345,
    age: 24,
    isLoggedIn: true,
    email : "abhishekjana.22@gmail.com"
}
console.log(regularUser.fullname.userFullName.firstname)

//How to merge objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a" , 4 : "b"}

const obj3 = {obj1, obj2}
console.log(obj3); // Here we will be facimg the same problem like array {object inside an object}
//if we want to make it sequencially
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4); // we are adding those curly braces as if the target object is the first one ..#nononsense syntax
//there is another way to joining those objects using spread(...) like arrays

const obj5 = {...obj1,...obj2} // easier and faster way
console.log(obj5);


//Protip when we get data frm data base we in general get array of objects
const user1 = [
    {
        id :1,
        emmail: "AbhishekJana@gmail.com"
    },
    {
        id :2,
        emmail: "b@gmail.com"
    },
    {
        id :3,
        emmail: "c@gmail.com"
    },
    {
        id :4,
        emmail: "d@gmail.com"
    }
    
]// like this then what are we suppose to do to acces all those objects from the array

console.log(user1[1].emmail); // pretty simple

//few general functionalities of an object
console.log(Object.keys(newTinderUser)); //to get the object keys
//key in mind the return type will be in an array formate
console.log(Object.values(newTinderUser));// to get the vlues of the objects
//key in mind the return type will be in an array formate
//suppose we want to get the key and it values in different array formate for example name: value in different array, id:values in different formate we use .entries
console.log(Object.entries(newTinderUser));//key and it values in different array formate

//suppose we want ot ask whether a particular key is available in the object or not we use (hasOwnProperty)
console.log(newTinderUser.hasOwnProperty('isLoggedIn'));// it will check whether this key is present or not inside the object and returns true or false

