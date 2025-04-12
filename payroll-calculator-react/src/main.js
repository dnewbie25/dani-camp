// Define a severance rate of 5%
const SEVERANCE_RATE = 0.05;

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
 * @param {boolean} isActive - Boolean value indicating if the employee is active
 * @returns {number} Number of days active, or an alert if the dates are invalid
 */
function daysActive(startDate, lastDate, isActive) {
  const start = new Date(startDate);
  const end = isActive ? new Date() : lastDate ? new Date(lastDate) : new Date();

  if (isNaN(start) || isNaN(end)) {
    alert("Invalid dates: Please provide valid contract dates.");
    return 0;
  }

  if (start > end) {
    alert("Invalid dates: The contract start date must be before the contract end date.");
    return 0;
  }

  const milliseconds = Math.abs(end - start);
  return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
}

/**
 * Calculates a person's age from their birthday.
 * @param {string} birthday - Birthday in format 'YYYY-MM-DD'
 * @returns {string} Age in years, or an alert if the age is invalid
 */
function calculateAge(birthday) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  const ageDifMs = currentDate - birthdayDate; // the difference in milliseconds

  if (ageDifMs < 0) {
    alert("Invalid birthday: The date is in the future.");
    return "Invalid birthday";
  }

  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  if (age < 18) {
    alert("Invalid age: Employees must be at least 18 years old.");
    return "Invalid age";
  }

  if (age > 122) {
    alert("Invalid age: Employees cannot be older than 122 years.");
    return "Invalid age";
  }

  return `${age} years old`;
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
 * Validates that the contract start date is after the 18th birthday.
 * @param {string} birthday - Birthday in format 'YYYY-MM-DD'
 * @param {string} startDate - Contract start date in format 'YYYY-MM-DD'
 * @returns {boolean} True if valid, otherwise false with an alert
 */
function validateContractStartDate(birthday, startDate) {
  const birthdayDate = new Date(birthday);
  const eighteenthBirthday = new Date(birthdayDate.setFullYear(birthdayDate.getFullYear() + 18));
  const start = new Date(startDate);

  if (start < eighteenthBirthday) {
    alert("Invalid contract start date: It must be after the employee's 18th birthday.");
    return false;
  }

  return true;
}

export {
  daysWorked,
  daysActive,
  calculateAge,
  calculateSeverancePay,
  validateContractStartDate,
};
