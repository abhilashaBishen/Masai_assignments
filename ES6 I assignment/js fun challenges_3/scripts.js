


//Example Invocation:



const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }





function highestPaid(employees) {
    let maxsalary = -Infinity;
    let highest;
    for (employee of employees) {

        let { salary } = employee;

        if (salary > maxsalary) {
            maxsalary = salary;
            highest = employee;
        }
    }
    return highest;
}

//Destructuring to Swap:

//Example Invocation:

// const employees = [
//   { name: "John Doe", age: 30, department: "HR", salary: 50000 },
//   { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
//   { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
// ];

console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
// console.log(employees);

function destructuringToSwap(employees){
  
    [employees[0],employees[length-1]] = [[employees[length-1]],employees[0]];
    return employees;
}

