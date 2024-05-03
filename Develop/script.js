// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn')

const employeesArray = [];
=======



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
// to get an array of employee objects, we need to create an object - so what
//is the object? Employee (firstName, lastName, salary)


  let fName = prompt('Enter your first name: ');
  let lName = prompt('Enter your last name: ');
  let salary = prompt('Enter your salary: ');

  if (employeesArray.length === 0) {
    employeesArray[0] = {firstName: fName, lastName: lName, salary1: salary};
  } else {
    employeesArray[employeesArray.length] = {firstName: fName, lastName: lName, salary1: salary};
    }

  let repeat = prompt('Do you have more employees to add? Please enter y or yes')
  if (repeat === 'y' || repeat === 'yes' || repeat === 'Y') {
    collectEmployees();
  }

 return employeesArray;
 
}



// Display the average salary
const displayAverageSalary = function(employees) {
  // TODO: Calculate and display the average salary
  console.log("these are the employees " + employees);
  let salaryTotal = 0;
  for (let i = 0; i < employees.length; i++) {
    salaryTotal = salaryTotal + employees[i].salary;
  }
  let salaryAverage = salaryTotal / employeesArray.length;
  console.log("test " + salaryTotal + ' next ' + salaryAverage);
  
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = employeesArray[0].firstName;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/


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

  //displayAverageSalary(employees);

  console.log('==============================');

  //getRandomEmployee(employees);

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
