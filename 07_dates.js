let mydate = new Date()
console.log(mydate);

console.log(mydate.toString());

console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());

// originally if we check the typeof date than it is an object

let myCreatedDate = new Date(2023, 0, 23) // we need to keep in mind months starts with 0 not 1 for example 0 means jan 1 means feb but if we use double digits we the 01 means jan 02 means feb
console.log(myCreatedDate.toDateString());

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday: "long",
    
})
console.log(newDate);
