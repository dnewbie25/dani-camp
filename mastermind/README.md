# Mastermind

This is our version of the Mastermind app, the popular game where the goal is to crack and decipher a random code. 

## How to use

The app contains the following fields:

```js
First Name (required) - Accepts a string
Last Name (required) - Accepts a string
Birthday (required) - Accepts a string in format "mm/dd/yyyy"
Salary Per Hour (required) - Accepts an number
Hours Worked (required) - Accepts an number
Contract Start Date (required) - Accepts a string in format "mm/dd/yyyy" representing the first day of the employee
Is an Active Employee? - Two choices, 'Yes' or 'No'. Default is 'Yes'
Contract Last Date (required) - Accepts a string in format "mm/dd/yyyy" representing the last day of the employee
```

Once this data is passed, click on "Add Employee" and a row with the employee information along with some calculated fields will be displayed. The calculated fields are:

```js
Age - Represents the age based on the 'Birthday' in format 'X years old'
Days Worked - Represents the total days worked, counting each day as an 8-hour working day in format 'X day(s) Y hour(s)'
Days Active - Total number of calendar days the employee has been under the 'Active' status in format 'X day(s)'
```


## Future Features

<ul>
  <li>A severance pay column to track how much severance must be pay based on the first and last dates working</li>
  <li>A row at the end of the employees records adding the totals of hours and days worked along with the salaries and total severances paid for inactive employees</li>
  <li>The "Contract Last Date" field should be grayed out if "Is an Active Employee?" is set to "No"</li>
</ul>