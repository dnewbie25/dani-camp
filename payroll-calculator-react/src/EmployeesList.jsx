
export default function EmployeesList(props) {
  const employees = props.employees.map((employee) => (
    <tr key={employee.id}>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.birthday}</td>
      <td>{employee.age}</td>
      <td>{employee.salaryHour}</td>
      <td>{employee.hoursWorked}</td>
      <td>{employee.daysWorked}</td>
      <td>{employee.startDate}</td>
      <td>{employee.active}</td>
      <td>{employee.lastDate}</td>
      <td>{employee.daysActive}</td>
      <td>{employee.severancePay}</td>
    </tr>
  ));

  return (
    <section className="employees-list">
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Age</th>
            <th>Salary Per Hour</th>
            <th>Hours Worked</th>
            <th>Days Worked</th>
            <th>Contract Start Date</th>
            <th>Active Employee</th>
            <th>Last Day</th>
            <th>Days Active</th>
            <th>Severance Pay Estimate</th>
          </tr>
        </thead>
        <tbody>{employees}</tbody>
      </table>
    </section>
  );
}
