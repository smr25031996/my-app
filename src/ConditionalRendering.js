import React from "react";

function ConditionalRendering() {
  var employees = [
    { empId: 1234, name: "John", designation: "SE", exp: 2.5 },
    { empId: 4567, name: "Tom", designation: "SSE", exp: 5.5 },
    { empId: 8910, name: "Kevin", designation: "TA", exp: 1.5 },
  ];

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>EMP ID</th>
            <th>EMP Name</th>
            <th>Designation </th>
            <th>Eligiblity</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>
                  {employee.exp >= 2.5 ? (
                    <h4>Eligible</h4>
                  ) : (
                    <h4>Not Eligible</h4>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default ConditionalRendering;
