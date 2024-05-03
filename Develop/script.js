// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



/*test
let cat = [{firstName: "Kim", lastName: "Desveaux", salary: 100000}, {firstName: "Brian", lastName: "Desaux", salary: 1778000}];

console.log(cat);
console.log(cat[0].lastName);
console.log(cat[1].salary);
*/


const employeeArr = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
// to get an array of employee objects, we need to create an object - so what
//is the object? Employee (firstName, lastName, salary)

let fName = prompt('Enter your first name: ');
let lName = prompt('Enter your last name: ');
let salary = prompt('Enter your salary: ');

if (employeeArr.length === 0) {
  employeeArr[0] = {firstName: fName, lastName: lName, salary1: salary};
} else {
  employeeArr[employeeArr.length] = {firstName: fName, lastName: lName, salary1: salary};
  }


let repeat = prompt('Do you have more employees to add?')
if (repeat === 'y' || repeat === 'yes') {
  collectEmployees();
}


console.log(employeeArr);
console.log(employeeArr.length);
}

collectEmployees();
/*
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
/

/*

const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

let employee = {{firstName: "Kim", lastName: "Desveaux", salary: 100,000}, {firstName: "Kim", lastName: "Desveaux", salary: 100,000}};
console.log(employee[0].firstName);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

/*
// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
*/