'use strict';

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthday = document.getElementById('birthday');
const salaryHour = document.getElementById('salaryHour');
const hoursWorked = document.getElementById('hoursWorked');
const startDate = document.getElementById('startDate');
const active = document.getElementById('active');
const lastDate = document.getElementById('lastDate');
const submit = document.getElementById('submit');
const table = document.getElementById('table');
const form = document.getElementsByTagName('form');
const inputs = document.querySelectorAll('.requiredInputs')

// Define a severance rate of 5%
const SEVERANCE_RATE = 0.05;

// Load employees from localStorage
let employees = [];
const employeesLoad = localStorage.getItem('employees');
if (employeesLoad) {
  employees = JSON.parse(employeesLoad);
  employees.forEach(employee => {
    updateTable(employee);
  });
}

// Clear the form on page load
document.addEventListener('DOMContentLoaded', function(e) {
  e.preventDefault();
  firstName.value = "";
  lastName.value = "";
  birthday.value = "";
  salaryHour.value = "";
  hoursWorked.value = "";
  startDate.value = "";
  active.value = 'yes';
  lastDate.value = new Date().toISOString().split('T')[0];
});

// Attach event listener to the form's submit event
const formElement = document.querySelector('form');

formElement.addEventListener('submit', function(e) {
  e.preventDefault();

  // Calculate days active
  const daysActiveValue = daysActive(startDate.value.trim(), lastDate.value.trim(), active.value);

  // Calculate severance pay if not active
  const severancePayValue = active.value === 'no' ? calculateSeverancePay(salaryHour.value.trim(), daysActiveValue) : '-';

  // create employee object with the data
  const employeeInfo = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    birthday: birthday.value.trim(),
    age: calculateAge(birthday.value.trim()),
    salaryHour: salaryHour.value.trim(),
    hoursWorked: hoursWorked.value.trim(),
    daysWorked: daysWorked(hoursWorked.value.trim()),
    startDate: startDate.value.trim(),
    active: active.value,
    lastDate: lastDate.value || new Date().toISOString().split('T')[0],
    daysActive: daysActiveValue,
    severancePay: severancePayValue
  };

  // Add employee and update table
  employees.push(employeeInfo);
  updateTable(employeeInfo);
  localStorage.setItem('employees', JSON.stringify(employees));

  // Reset form fields
  formElement.reset();
  active.value = 'yes'; // Reset to default value
  lastDate.value = new Date().toISOString().split('T')[0];
});

/**
 * Converts given hours into days and hours.
 * @param {number} hours - Total hours to convert
 * @returns {string} Formatted string of days and hours, e.g. "2 days 1.5 hours"
 */
function daysWorked(hours) {
  const days = Math.floor(hours / 8);
  const remainingHours = (hours % 8).toFixed(1);
  let timeString = '';
  if (days > 0) {
    timeString += `${days} day${days > 1 ? 's' : ''} `;
  }
  if (remainingHours > 0) {
    timeString += `${remainingHours} hour${remainingHours > 1 ? 's' : ''}`;
  }
  return timeString.trim();
}

/**
 * Calculates the number of days active for an employee.
 * @param {string} startDate - Contract start date in format 'YYYY-MM-DD'
 * @param {string} lastDate - Contract last date in format 'YYYY-MM-DD' (optional)
 * @param {string} isActive - Boolean value indicating if the employee is active ('yes' or 'no')
 * @returns {number} Number of days active
 */
function daysActive(startDate, lastDate, isActive) {
  const endDate = isActive === 'yes' ? new Date() : new Date(lastDate);
  const milliseconds = Math.abs(endDate - new Date(startDate));
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  return days;
}

/**
 * Calculates a person's age from their birthday.
 * @param {string} birthday - Birthday in format 'YYYY-MM-DD'
 * @returns {string} Age in years, or 'Invalid birthday' if the birthday is in the future
 */
function calculateAge(birthday) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  const ageDifMs = currentDate - birthdayDate;
  if (ageDifMs < 0) {
    return 'Invalid birthday';
  }
  const ageDate = new Date(ageDifMs);
  return `${Math.abs(ageDate.getUTCFullYear() - 1970)} years old`;
}

/**
 * Calculates the severance pay for an employee.
 * 
 * @param {number} salaryPerHour - The hourly salary of the employee.
 * @param {number} daysActive - The total number of days the employee was active.
 * @returns {string} - The calculated severance pay formatted as a currency string.
 */
function calculateSeverancePay(salaryPerHour, daysActive) {
  const dailySalary = salaryPerHour * 8;
  const severancePay = dailySalary * daysActive * SEVERANCE_RATE;
  return `$${severancePay.toFixed(2)}`;
}

/**
 * Updates the table with a new employee's data.
 * @param {Object} employee - The employee's data with the following properties:
 *   - firstName: string
 *   - lastName: string
 *   - birthday: string
 *   - age: string
 *   - salaryHour: string
 *   - hoursWorked: string
 *   - daysWorked: string
 *   - startDate: string
 *   - active: string ('yes' or 'no')
 *   - lastDate: string
 *   - daysActive: number
 *   - severancePay: string
 */
function updateTable(employee) {
  const tableBody = table.getElementsByTagName('tbody')[0];
  const tableRow = tableBody.insertRow(-1);

  const firstNameCell = tableRow.insertCell(0);
  const lastNameCell = tableRow.insertCell(1);
  const birthdayCell = tableRow.insertCell(2);
  const ageCell = tableRow.insertCell(3);
  const salaryHourCell = tableRow.insertCell(4);
  const hoursWorkedCell = tableRow.insertCell(5);
  const daysWorkedCell = tableRow.insertCell(6);
  const startDateCell = tableRow.insertCell(7);
  const activeCell = tableRow.insertCell(8);
  const lastDateCell = tableRow.insertCell(9);
  const daysActiveCell = tableRow.insertCell(10);
  const severancePayCell = tableRow.insertCell(11);

  firstNameCell.innerHTML = employee.firstName;
  lastNameCell.innerHTML = employee.lastName;
  birthdayCell.innerHTML = employee.birthday;
  ageCell.innerHTML = employee.age;
  salaryHourCell.innerHTML = employee.salaryHour;
  hoursWorkedCell.innerHTML = employee.hoursWorked;
  daysWorkedCell.innerHTML = employee.daysWorked;
  startDateCell.innerHTML = employee.startDate;
  activeCell.innerHTML = `${employee.active === 'yes' ? 'Yes' : 'No'}`;
  lastDateCell.innerHTML = employee.lastDate;
  daysActiveCell.innerHTML = `${employee.daysActive} day${employee.daysActive !== 1 ? 's' : ''}`;
  severancePayCell.innerHTML = employee.severancePay;
}

// function exports for the test
module.exports = {
  daysWorked,
  daysActive,
  calculateAge,
  calculateSeverancePay,
};