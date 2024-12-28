const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

//if we want to get the values of an key what we generally do is using "." but there is another cool way to it

const {courseInstructor} = course
console.log(courseInstructor);

// suppose we want to reduce the name this is what we do
const {courseInstructor : instructor} = course
console.log(instructor);

