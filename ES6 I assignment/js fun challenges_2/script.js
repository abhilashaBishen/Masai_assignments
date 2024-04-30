console.log('heel');

//Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }


function employeeInformation(employees) {
    let secondEmployeeName = employees[1].name;
    let secondEmployeeDepartment = employees[1].department;
    let obj = {
        secondEmployeeName,
        secondEmployeeDepartment
    };
    return obj;

}


//Average Salary


function averageSalary(employees) {

    let totalsalary = 0;

    for ({ salary } of employees) {

        totalsalary += salary;

    }
    return totalsalary / employees.length;


}


console.log(averageSalary(employees)); // Output: 60000


//Third Employee Info:

function thirdEmployeeInfo(employees) {

    const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = employees[2];
    let bonus = thirdEmployeeSalary / 10;

    let string = `"Employee:${thirdEmployeeName}Age:${thirdEmployeeAge},Salary:${thirdEmployeeSalary},
Bonus: ${bonus}" `


    return string;

}

thirdEmployeeInfo(employees);

console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"


