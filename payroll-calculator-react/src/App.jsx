import { useState } from "react";
import "./App.css";
import EmployeesList from "./EmployeesList";
import {
  daysWorked,
  daysActive,
  calculateAge,
  calculateSeverancePay,
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
      active: "yes",
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
      active: "no",
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
      active: "yes",
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
      active: "no",
      lastDate: "2022-09-15",
      daysActive: 500,
      severancePay: "1500.00",
      id: crypto.randomUUID(),
    },
  ];

  const [employees, setEmployees] = useState(employeesMock);

  function addEmployee(formData) {
    setEmployees((prev) => [
      ...prev,
      {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        birthday: calculateAge(formData.get("birthday")),
        age: formData.get("age"),
        salaryHour: formData.get("salaryPerHour"),
        hoursWorked: formData.get("hoursWorked"),
        daysWorked: daysWorked(formData.get("hoursWorked")),
        startDate: formData.get("contractStartDate"),
        active: formData.get("isActive"),
        lastDate: formData.get("contractLastDate"),
        daysActive: daysActive(
          formData.get("contractStartDate"),
          formData.get("contractLastDate"),
          formData.get("isActive")
        ),
        severancePay: calculateSeverancePay(
          formData.get("salaryPerHour"),
          daysActive(
            formData.get("contractStartDate"),
            formData.get("contractLastDate"),
            formData.get("isActive")
          )
        ),
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
              <input type="date" name="birthday" id="birthday" required />
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
              <input type="checkbox" name="isActive" id="isActive" />
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
