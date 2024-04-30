console.log('heel')

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

//combine arrays using the spread operator
function combiningArrays(vegetables,fruits){
let groceries = [...vegetables,...fruits]
return groceries;//return the combined array
}



//Example Invocation:
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person)); // Output: { name: "John", age: 30, address: "123 Main St" }

//Cloning Objects

function cloningObjects(person)
{
   return {...person};
}



//Example Invocation:

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course)); // Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }

//Merging Objects

function mergingObjects(student,course){
  return {...student,...course}
}


//Combining Nested Arrays:


//Example Invocation:

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  console.log(combiningNestedArrays(array1, array2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]
  

function combiningNestedArrays(array1,array2){
  return [...array1,...array2]
}