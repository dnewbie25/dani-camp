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

let employees = [];

// every time the pages reloads it clears the form
document.addEventListener('DOMContentLoaded', function(e) {
  e.preventDefault();
  firstName.value = ""
  lastName.value = ""
  birthday.value = ""
  salaryHour.value = ""
  hoursWorked.value = ""
  startDate.value = ""
  active.value = true
  lastDate.value = ""
});

submit.addEventListener('click', function(e) {
  // adds the values to the employees array
  e.preventDefault();
  employees.push({
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
    age: calculateAge(birthday.value),
    salaryHour: salaryHour.value,
    hoursWorked: hoursWorked.value,
    daysWorked: daysWorked(active.value,startDate.value,lastDate.value),
    startDate: startDate.value,
    active: active.value,
    lastDate: lastDate.value,
    daysActive: daysActive(active.value,startDate.value,lastDate.value)
  });

  updateTable(employees[employees.length-1])
});


// calculates the days worked using the hours and the days active using the start and end date. If still active, calculates using the current date.

function daysWorked(hours) {
  // this function return the total days worked by counting working days as 8 hours per day
  const days = Math.floor(hours / 8);
  const remainingHours = (hours % 8).toFixed(1);
  let timeString = '';
  if(days > 0){
    timeString += `${days} day${days>1?'s':''} `;
  }
  if(remainingHours > 0){
    timeString += `${remainingHours} hour${remainingHours>1?'s':''}`
  }
  return timeString
}

function daysActive(active, startDate, lastDate=0) {
  if(active==='true'){
    const milliseconds = Math.abs(new Date() - new Date(startDate))
    const minutes = Math.floor(milliseconds/60000)
    const hours = Math.floor(minutes/60)
    const days = Math.floor(hours/24)
    let timeString = '';
    timeString += `${days} day${days > 1 ? 's' : ''}`;
    return timeString;
  }else{
    const milliseconds = Math.abs(new Date(startDate) - new Date(lastDate))
    const minutes = Math.floor(milliseconds/60000)
    const hours = Math.floor(minutes/60)
    const days = Math.floor(hours/24)
    let timeString = '';
    timeString += `${days} day${days > 1 ? 's' : ''}`;
    return timeString;
  }
}

function calculateAge(birthday){
  const currentDate = new Date()
  const birthdayDate = new Date(birthday)
  const difference = currentDate - birthdayDate
  const daysPassed = difference/(1000*60*60*24)
  const years = Math.abs(Math.round(daysPassed/365.25))
  return `${years} years old`
}

function updateTable(employeesArray){
  // adds a row at the end of the table
  // the variable declarations indicate the position of each element across the columns
  const tableRow = table.insertRow(-1)
  const firstNameCell = tableRow.insertCell(0)
  const lastNameCell = tableRow.insertCell(1)
  const birthdayCell = tableRow.insertCell(2)
  const ageCell = tableRow.insertCell(3)
  const salaryHourCell = tableRow.insertCell(4)
  const hoursWorkedCell = tableRow.insertCell(5)
  const daysWorkedCell = tableRow.insertCell(6)
  const startDateCell = tableRow.insertCell(7)
  const activeCell = tableRow.insertCell(8)
  const lastDateCell = tableRow.insertCell(9)
  const daysActiveCell = tableRow.insertCell(10)
  // cell content is rendered
  firstNameCell.innerHTML = employeesArray.firstName
  lastNameCell.innerHTML = employeesArray.lastName
  birthdayCell.innerHTML = employeesArray.birthday
  ageCell.innerHTML = employeesArray.age
  salaryHourCell.innerHTML = employeesArray.salaryHour
  hoursWorkedCell.innerHTML = employeesArray.hoursWorked
  daysWorkedCell.innerHTML = employeesArray.daysWorked
  startDateCell.innerHTML = employeesArray.startDate
  activeCell.innerHTML = `${employeesArray.active?'Yes':'No'}`
  lastDateCell.innerHTML = employeesArray.lastDate
  daysActiveCell.innerHTML = employeesArray.daysActive
}