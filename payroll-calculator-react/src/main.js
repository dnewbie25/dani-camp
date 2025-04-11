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
 * @param {string} isActive - Boolean value indicating if the employee is active ('yes' or 'no')
 * @returns {number} Number of days active
 */
function daysActive(startDate, lastDate, isActive) {
  const start = new Date(startDate);
  const end = isActive ? new Date() : lastDate ? new Date(lastDate) : new Date();
  if (isNaN(start) || isNaN(end)) return 0; // Handle invalid dates
  const milliseconds = Math.abs(end - start);
  return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
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

export {
  daysWorked,
  daysActive,
  calculateAge,
  calculateSeverancePay,
}
