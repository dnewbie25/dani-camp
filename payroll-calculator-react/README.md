# Payroll Calculator App, now with React 😎

The Payroll Calculator App is a React-based application designed to manage employee payroll records. It allows users to add employees, calculate their working days, severance pay, and display all employee details in a tabular format.

## Live Preview

[Payroll Calculator](https://payroll-calculator-react.netlify.app/)

## Features

- Add new employees with details such as name, birthday, salary per hour, hours worked, contract dates, and active status.
- Automatically calculate:
  - Employee's age based on their birthday.
  - Total days worked based on hours worked.
  - Days active based on contract start and end dates.
  - Severance pay for inactive employees (assumes a 5% rate)
- Display all employee records in a responsive table.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling the application.
- **JavaScript**: For implementing logic and calculations.

## How It Works

1. **Adding Employees**:
   - Fill out the form with the employee's details.
   - Click the "Add Employee" button to add the employee to the list.

2. **Calculations**:
   - The app calculates the employee's age, days worked, days active, and severance pay automatically based on the provided data.

3. **Employee List**:
   - All employee records are displayed in a table with details such as name, age, salary, days worked, active status, and severance pay.

## Folder Structure

- `src/App.jsx`: Main component that handles the application logic and state.
- `src/EmployeesList.jsx`: Component for displaying the list of employees.
- `src/main.js`: Contains utility functions for calculations.
- `src/App.css`: Styles for the application.

## Missing Features

- Validator of age. Only 18+ people should be recorded, and the same for people with more than 122 years (supposedly this is the record of the oldest living human, Jeanne Louise Calment), it should be an invalid date otherwise
- Validator of contract dates. End date should always be in the future
- Show styles to inform the invalid or missing fields for a better user experience