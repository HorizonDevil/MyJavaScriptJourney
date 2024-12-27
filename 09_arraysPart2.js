const marvel_heros = ["spiderman" , "ironMan" , "thor"]
const Dc_heros = ["superman" , "flash" , "Batman"]

marvel_heros.push(Dc_heros)
console.log(marvel_heros);
0
// As we can see in the output the arrays got merged but the 3th element is it self is an array
// so suppose if we want to access the flash which is inside the second array we have to do like this -->

console.log(marvel_heros[3][1]); // this syntax is correct but not  professional way to do it

//so if we want proper sequence wise indexng when we merge arrays we have to use concat
// but there is another difference we can push an array into an another array but when we use concat it returns an new array so we have to store the result into an new array

const allHeros = marvel_heros.concat(Dc_heros)
console.log(" B " , allHeros);

// there is much more easier way to do that but uing spread

const all_new_heros = [...Dc_heros,...marvel_heros]
console.log(all_new_heros);
//suppose i have a situation where there is an array inside an array inside an array
const anotherArray = [1,2,3,[4,5,6],7,[6,7,8,[10,11]]]
// it is pretty confusing but offcousre there is an way to solve it using Flat

real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);



//here instead of writting infinity in flat we can give till what extend we want to solve it... as we can see in the above array example there were in total 3 arrays.. so instead of writing infinity we could have write 3.. it would have done the same job


//suppose im selecting data but data is in different form may be object or node list but i specifically need array so here is the solution

console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));

//very interesting case 
console.log(Array.from({name: "abhishek"})); // here we are getting an empty array...because we have to say whether we want make array out of its keys or values


//suppose i have 3 variables
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));