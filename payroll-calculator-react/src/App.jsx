import { useState } from "react";
import "./App.css";
import EmployeesList from "./EmployeesList";
import {
  daysWorked,
  daysActive,
  calculateAge,
  calculateSeverancePay,
  validateContractStartDate,
} from "./main";

function App() {
  const employeesMock = [
    {
      firstName: "John",
      lastName: "Doe",
      birthday: "1985-06-15",
      age: "38 years old",
      salaryHour: "20.00",
      hoursWorked: "160",
      daysWorked: "20 days",
      startDate: "2022-01-05",
      active: true,
      lastDate: "2023-10-01",
      daysActive: 600,
      severancePay: "-",
      id: crypto.randomUUID(),
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      birthday: "1990-03-22",
      age: "33 years old",
      salaryHour: "25.00",
      hoursWorked: "150",
      daysWorked: "18 days",
      startDate: "2021-05-10",
      active: false,
      lastDate: "2023-04-15",
      daysActive: 700,
      severancePay: "2000.00",
      id: crypto.randomUUID(),
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      birthday: "1995-12-01",
      age: "27 years old",
      salaryHour: "22.50",
      hoursWorked: "140",
      daysWorked: "17 days",
      startDate: "2023-02-01",
      active: true,
      lastDate: "2023-10-01",
      daysActive: 240,
      severancePay: "-",
      id: crypto.randomUUID(),
    },
    {
      firstName: "Bob",
      lastName: "Brown",
      birthday: "1988-07-30",
      age: "35 years old",
      salaryHour: "30.00",
      hoursWorked: "170",
      daysWorked: "21 days",
      startDate: "2020-11-20",
      active: false,
      lastDate: "2022-09-15",
      daysActive: 500,
      severancePay: "1500.00",
      id: crypto.randomUUID(),
    },
  ];

  const [employees, setEmployees] = useState(employeesMock);

  /**
   * Adds a new employee to the list, given the form data.
   * @param {FormData} formData - The form data containing the employee information.
   * @returns {undefined}
   */
  function addEmployee(formData) {
    const birthday = formData.get("birthday");
    const startDate = formData.get("contractStartDate");
    const lastDate = formData.get("contractLastDate") || null;
    const isActive = formData.get("isActive") === "on";

    // Validate age
    const age = calculateAge(birthday);
    if (age === "Invalid age" || age === "Invalid birthday") {
      return;
    }

    // Validate contract start date
    if (!validateContractStartDate(birthday, startDate)) {
      return;
    }

    // Validate contract dates
    if (lastDate && new Date(startDate) > new Date(lastDate)) {
      alert("Invalid contract dates: Start date must be before the end date.");
      return;
    }

    const hoursWorked = parseFloat(formData.get("hoursWorked")) || 0;
    const salaryPerHour = parseFloat(formData.get("salaryPerHour")) || 0;

    const activeDays = daysActive(startDate, lastDate, isActive);
    const severance = isActive ? "-" : calculateSeverancePay(salaryPerHour, activeDays);

    setEmployees((prev) => [
      ...prev,
      {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        birthday,
        age,
        salaryHour: salaryPerHour.toFixed(2),
        hoursWorked: hoursWorked.toFixed(2),
        daysWorked: daysWorked(hoursWorked),
        startDate,
        active: isActive,
        lastDate: isActive ? "-" : lastDate,
        daysActive: activeDays,
        severancePay: severance,
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <main>
      <h1>Payroll Records</h1>
      <section className="add-employee">
        <h2>Add Employee</h2>
        <form action={addEmployee}>
          <div>
            <label htmlFor="firstName" className="required-input">
              First Name:
              <input type="text" name="firstName" id="firstName" required />
            </label>
          </div>
          <div>
            <label htmlFor="lastName" className="required-input">
              Last Name:
              <input type="text" name="lastName" id="lastName" required />
            </label>
          </div>
          <div>
            <label htmlFor="birthday" className="required-input">
              Birthday:
              <input type="date" name="birthday" id="birthday" min={new Date("1920-01-01")} required />
            </label>
          </div>
          <div>
            <label htmlFor="salaryPerHour" className="required-input">
              Salary per Hour:
              <input
                type="number"
                name="salaryPerHour"
                id="salaryPerHour"
                step="0.01"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="hoursWorked" className="required-input">
              Hours Worked:
              <input
                type="number"
                name="hoursWorked"
                id="hoursWorked"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="contractStartDate" className="required-input">
              Contract Start Date:
              <input
                type="date"
                name="contractStartDate"
                id="contractStartDate"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="contractLastDate">
              Contract Last Date:
              <input
                type="date"
                name="contractLastDate"
                id="contractLastDate"
              />
            </label>
          </div>
          <div>
            <label htmlFor="isActive">
              Active Employee:
              <input type="checkbox" name="isActive" id="isActive" onChange={e => (!e.target.checked)}/>
            </label>
          </div>
          <div>
            <button type="submit">Add Employee</button>
          </div>
        </form>
        <p id="note">
          Fields marked with <span id="required-field">*</span> are required
        </p>
      </section>
      <EmployeesList employees={employees} />
    </main>
  );
}

export default App;
