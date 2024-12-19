console.log(2<3);
console.log(3>2);
console.log(2<=3);
console.log(3>=2);
console.log(2==2);
console.log(2!=0);

//basic comparison operations that we do in our day to day programming

console.log("2">0);
console.log(0<"2");

//javascript automatically converts the missleading data type and gives us the answer
//but some times it doesn't gives the predective answer so its better to convert our data type before we 
// do the operations

//and its not a good practice aswell

console.log(null < 0); //the output we are getting is true because null has no value 
console.log(null == 0); // the output is true because empty value cannot be equal to any value
console.log(null <= 0); // here we are getting false because by seeing the above to examples

//classic example of unpredicted answers
// we need to keep in mind that in javascript comparison and equality check are to different things it works 
// differently in javascript


console.log("3"=== 3); // it is a strict check it not only checks the value but also checks the data type

//from line number 19 we avoid this type of comparison in our production code
