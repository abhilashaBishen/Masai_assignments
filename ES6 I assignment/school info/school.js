const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

  
//   function countCalculation(school){
//  let obj={};


//   }

// mathTeachersCount,historyTeachersCount, mathStudentsCount, and historyStudentsCount

function countCalculation(school){
const {departments:{math,science,history,english}} = school;

const{teachers:mathteacher,students:mathstudent} = math;

const{teachers:historyteacher,students:historystudent} = history;

console.log(mathteacher,"math",historystudent,"hisotry");

let obj ={}


obj.mathsteachercount =mathteacher;
obj.historyteachercount =historyteacher;
obj.mathstudentcount = mathstudent;
obj.historystudentcount = historystudent;


return obj;


}


console.log(countCalculation(school))



// Problem 11: findTopStudent [1]


console.log( findTopStudent(school, 'history'))



function findTopStudent(school, courseName) {
    // Find the course index
    const courseIndex = school.courses.
    indexOf(courseName);

    console.log('hiee',courseIndex);
    if (courseIndex === -1) {
        return "Course not found";
    }

    // Initialize variables to keep track of the top student and their score
    let topStudent = null;
    let highestScore = -1;

    // Iterate over the students array
    for (const student of school.students) {
        // Destructure the scores object to get the score of the specified course
        const { scores: { [courseName]: score } } = student;

        // Check if the current student has a score for the specified course
        if (score !== undefined && score > highestScore) {
            // Update the top student and highest score if this student's score is higher
            topStudent = student;
            highestScore = score;
        }
    }

    // Return a string with the top student's name and their scores
    return `{topStudent ${JSON.stringify(topStudent)}}`;
}

// Example usage:
const topStudent = findTopStudent(school, "math");
console.log(topStudent); // Output: {topStudent {"name":"Alice","className":"Grade 5","scores":{"math":95,"science":88,"history":85,"english":92}}}

// Problem 12: addNewDept [1]



// Output = {
//   name: 'XYZ School',
//   establishYear: 1990,
//   departments: {
//     math: { teachers: 5, students: 150 },
//     science: { teachers: 4, students: 120 },
//     history: { teachers: 3, students: 100 },
//     english: { teachers: 4, students: 130 },
//     art: { teachers: 2, students: 50 }
//   },
//   courses: [ 'math', 'science', 'history', 'english' ],
//   students: [
//     { name: 'Alice', className: 'Grade 5', scores: [Object] },
//     { name: 'Bob', className: 'Grade 4', scores: [Object] },
//     { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//     { name: 'Diana', className: 'Grade 4', scores: [Object] }
//   ]
// }

function addNewDept(school,newDepartment){
  return { ...school,departments:{...school.departments,...newDepartment}}
}
let newDepartment ={ 
  art:{ teahers:1222,students:22}
}

console.log(addNewDept(school,newDepartment))
   
//Problem 13: highestStudentCountDepartment[1]
 
function highestStudentCountDepartment(school){
  let maxstudent = 0;
  let highestStudentDep = '';
  for(let departments in school.departments){

    const num = school.departments[departments].students;
   
    console.log(num);
  
    if(num>maxstudent){
     
     maxstudent = num;
     highestStudentDep = departments;

    }
   
   }
   return highestStudentDep;
}

console.log(highestStudentCountDepartment(school));//math


// Problem 14: Greeting Message [1]



function generateGreeting(name,language){
  let greetings = {
    English:"Hello,",
    Spanish: "Hola,",
    French:"Bonjour,",
  };
return (greetings[language]+" "+name+"!")

}

console.log(generateGreeting('Alice',"English"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"))








